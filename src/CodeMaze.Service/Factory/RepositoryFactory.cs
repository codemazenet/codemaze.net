﻿using CodeMaze.IServices;

namespace CodeMaze.Service.Factory
{
    public class RepositoryFactory
    {
        public ICategoryService Category { get; private set; }
        public IPostService Post { get; private set; }
        //public TagService Tag { get; private set; }
        //public UserService User { get; private set; }
        //public SearchEngineService SearchEngine { get; private set; }
        //public CommentService Comment { get; private set; }
        //public ConfigurationService Configuration { get; private set; }

        public RepositoryFactory(
            ICategoryService category,
            IPostService post)//,
                              //TagService tag,
                              //UserService user,
                              //CommentService comment,
                              //SearchEngineService searchEngine,
                              //ConfigurationService configuration)
        {
            if (category != null) this.Category = category;
            if (post != null) this.Post = post;
            //if (tag != null) this.Tag = tag;
            //if (user != null) this.User = user;
            //if (comment != null) this.Comment = comment;
            //if (searchEngine != null) this.SearchEngine = searchEngine;
            //if (configuration != null) this.Configuration = configuration;
        }
    }
}
