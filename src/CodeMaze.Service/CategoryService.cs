using AutoMapper;
using Microsoft.Extensions.Logging;
using CodeMaze.Data.Entities;
using CodeMaze.Data.RequestResponse;
using CodeMaze.Data.ViewModels;
using CodeMaze.Extension;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CodeMaze.Service
{
    public class CategoryService : KyzinService
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

        public async Task<string> GetNameAsync(string url = "", string code = "")
        {
            var category = await GetAsync(url, code);

            return category?.DisplayName;
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

            category.Deleted = isDelete;
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
                    DisplayName = createRequest.DisplayName
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

                if (!category.DisplayName.Equals(editRequest.DisplayName))
                {
                    category.Url = editRequest.DisplayName.ConvertToUrl();
                    category.DisplayName = editRequest.DisplayName;
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
                                    p.DisplayName,
                                    p.Id.ToString(),
                                    categoryIds.Any(categoryId => categoryId == p.Id)))
                                               .ToList();

            return categories?.Select(p =>
                    new CheckBoxViewModel(
                        p.DisplayName,
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