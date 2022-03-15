﻿using AutoMapper;

using CodeMaze.Data.Entities;
using CodeMaze.Data.RequestResponse;
using CodeMaze.Extension;
using CodeMaze.IServices;
using CodeMaze.Results;
using CodeMaze.ViewModels;

using Microsoft.Extensions.Logging;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CodeMaze.Service
{
    public class CategoryService : BaseService, ICategoryService
    {
        private readonly IRepository<CategoryEntity> _categoryRepository;
        private readonly IRepository<PostCategoryEntity> _postCategoryRepository;

        public CategoryService(ILogger<CategoryService> logger,
            IMapper mapper,
            IRepository<CategoryEntity> categoryRepository,
            IRepository<PostCategoryEntity> postCategoryRepository) : base(logger, mapper)
        {
            _categoryRepository = categoryRepository;
            _postCategoryRepository = postCategoryRepository;
        }

        //public Task<CategoryItem> GetCategoryAsync(string url, string code)
        //{
        //    return GetAsync(url, code);
        //}

        public async Task<string> GetNameAsync(string url = "", string code = "")
        {
            var category = await GetAsync(url, code);

            return category?.Title;
        }

        public Task<IReadOnlyList<CategoryItem>> GetCategoriesPublishAsync()
        {
            var spec = new CategorySpecial(false);
            return _categoryRepository.SelectAsync(
                                    spec,
                                    c => _mapper.Map<CategoryItem>(c),
                                    true);
        }

        public Task<IReadOnlyList<CategoryViewModel>> GetCategoriesByStatusAsync(string status)
        {
            var spec = new CategorySpecial(status);

            return _categoryRepository.SelectAsync(
                                    spec,
                                    c => _mapper.Map<CategoryViewModel>(c),
                                    true);
        }

        public Task<IResult<bool>> ExecuteUpdateAsync(Guid id, CategoryRequest request)
        {
            return TryExecuteAsync<IResult<bool>>(async () =>
            {
                var category = _categoryRepository.Get(id);
                if (null == category) return await Result<bool>.FailAsync();

                if (!category.Title.Equals(request.Title))
                {
                    if (category.Url.Equals(request.Url))
                        category.Url = request.Title.ConvertToUrl();
                    else
                        category.Url = request.Url;
                    category.Title = request.Title;
                }
                else if (!category.Url.Equals(request.Url))
                {
                    category.Url = request.Url;
                }

                category.Note = request.Note;
                category.Position = request.Position;
                category.Publish = request.Publish;
                category.ShowOnTab = request.ShowOnTab;

                var result = await _categoryRepository.UpdateAsync(category);

                return await Result<bool>.SuccessAsync(result > 0);
            }, "ExecuteUpdateAsync", new { request });
        }

        public Task<IResult<bool>> ExecuteTrashAsync(Guid categoryId)
        {
            return TryExecuteAsync<IResult<bool>>(async () =>
            {
                var category = _categoryRepository.Get(categoryId);
                if (null == category) return await Result<bool>.FailAsync();

                category.Deleted = true;

                var result = await _categoryRepository.UpdateAsync(category);

                return await Result<bool>.SuccessAsync(result > 0);
            }, "ExecuteTrashAsync", new { categoryId });
        }

        public Task<IResult<bool>> ExecuteDeleteAsync(Guid categoryId)
        {
            return TryExecuteAsync<IResult<bool>>(async () =>
            {
                var category = _categoryRepository.Get(categoryId);
                if (null == category) return await Result<bool>.FailAsync();

                var result = await _categoryRepository.DeleteAsync(category);

                return await Result<bool>.SuccessAsync(result > 0);
            }, "ExecuteUpdateAsync", new { categoryId });
        }

        public Task<IResult<CategoryViewModel>> ExecuteAddAsync(CategoryRequest request)
        {
            return TryExecuteAsync<IResult<CategoryViewModel>>(async () =>
            {
                var entry = _mapper.Map<CategoryEntity>(request);

                var exists = _categoryRepository.Any(c => c.Url == entry.Url && c.Code == entry.Code);
                if (exists)
                    return await Result<CategoryViewModel>.FailAsync($"Category titled: [{request.Title}] already exists.");

                Logger.LogInformation("Adding new categoryEntity to database.");

                entry.Deleted = false;
                var result = await _categoryRepository.AddAsync(entry);

                if (result != null)
                    return await Result<CategoryViewModel>.SuccessAsync(_mapper.Map<CategoryViewModel>(result));

                return await Result<CategoryViewModel>.FailAsync();
            });
        }




        public async Task<IReadOnlyList<CategoryViewModel>> GetAllAsync()
        {
            return await _categoryRepository.SelectAsync(
                 category => _mapper.Map<CategoryViewModel>(category));
        }

        public async Task<IReadOnlyList<CategoryItemViewModel>> GetAllActiveAsync()
        {
            var special = new CategorySpecial(false);
            var categories = await _categoryRepository.SelectAsync(
                                    special,
                                    cat => _mapper.Map<CategoryItemViewModel>(cat),
                                    true);

            return categories;
        }

        public async Task<CategoryViewModel> GetAsync(string url, string code)
        {
            var special = new CategorySpecial(url, code);

            return await GetAsync(special);
        }

        public async Task<bool> TrashAsync(string categoryUrl, string categoryCode, bool isDelete = true)
        {
            var special = new CategorySpecial(categoryUrl, categoryCode);
            var category = await _categoryRepository.GetFirstOrDefaultAsync(special);

            if (null == category) return false;

            category.Publish = isDelete;
            var rows = _categoryRepository.Update(category);

            return rows > 0;
        }

        public async Task<CategoryViewModel> GetByIdAsync(Guid id)
        {
            var special = new CategorySpecial(id);

            var category = await GetAsync(special);

            return category;
        }

        public Response CreateCategory(CategoryEditViewModel createRequest)
        {
            return TryExecute(() =>
            {
                createRequest.Url = createRequest.DisplayName.ConvertToUrl();
                createRequest.Code = createRequest.DisplayName.ConvertToCode();

                var exists = _categoryRepository.Any(c => c.Url == createRequest.Url && c.Code == createRequest.Code);
                if (exists)
                {
                    return new Response { Message = $"CategoryEntity titled {createRequest.DisplayName} already exists." };
                }

                var category = new CategoryEntity
                {
                    Id = Guid.NewGuid(),
                    Url = createRequest.Url,
                    Code = createRequest.Code,
                    Note = createRequest.Note,
                    Position = createRequest.Position,
                    Title = createRequest.DisplayName
                };

                Logger.LogInformation("Adding new categoryEntity to database.");
                _categoryRepository.Add(category);

                return new SuccessResponse();
            });
        }

        public Response Delete(Guid id)
        {
            return TryExecute(() =>
            {
                var exists = _categoryRepository.Any(c => c.Id == id);
                if (!exists) return new Response { Message = $"CategoryEntity ID {id} not exists." };

                Logger.LogInformation($"Removing Post-Category associations for category id: {id}");
                var pcs = _postCategoryRepository.Get(pc => pc.CategoryId == id);
                _postCategoryRepository.Delete(pcs);

                Logger.LogInformation($"Removing categoryEntity {id}");
                _categoryRepository.Delete(id);
                return new SuccessResponse();
            });
        }

        public Response UpdateCategory(CategoryEditViewModel editRequest)
        {
            return TryExecute(() =>
            {
                var category = _categoryRepository.Get(editRequest.Id);
                if (null == category) return new FailedResponse($"CategoryEntity id {editRequest.Id} not found.");

                if (!category.Title.Equals(editRequest.DisplayName))
                {
                    category.Url = editRequest.DisplayName.ConvertToUrl();
                    category.Title = editRequest.DisplayName;
                }

                category.Note = editRequest.Note;
                category.Position = editRequest.Position;
                var rows = _categoryRepository.Update(category);
                return new Response(rows > 0);
            });
        }

        public async Task<List<Guid>> CheckExistsAsync(List<Guid> ids)
        {
            var special = new CategorySpecial(ids);

            var idExists = await _categoryRepository.SelectAsync(special, x => x.Id);

            return idExists?.ToList();
        }

        public async Task<List<CheckBoxViewModel>> GetCheckboxListAsync(IList<Guid> categoryIds = null)
        {
            var categories = await GetAllAsync();

            if (categoryIds?.Count > 0)
                return categories?.Select(p =>
                                new CheckBoxViewModel(
                                    p.Title,
                                    p.Id.ToString(),
                                    categoryIds.Any(categoryId => categoryId == p.Id)))
                                               .ToList();

            return categories?.Select(p =>
                    new CheckBoxViewModel(
                        p.Title,
                        p.Id.ToString(),
                        false)).ToList();
        }

        private async Task<CategoryViewModel> GetAsync(CategorySpecial special)
        {
            return await _categoryRepository.SelectFirstOrDefaultAsync(
                special,
                category => _mapper.Map<CategoryEntity, CategoryViewModel>(category));
        }
    }
}