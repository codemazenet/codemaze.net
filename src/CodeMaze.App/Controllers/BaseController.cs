using CodeMaze.Service.Factory;

using Microsoft.AspNetCore.Mvc;

namespace CodeMaze.App.Controllers
{
    public abstract class BaseController : Controller
    {
        protected readonly RepositoryFactory repository;
        protected readonly CommonFactory common;

        public BaseController(RepositoryFactory repositoryFactory, CommonFactory commonFactory)
        {
            if (repositoryFactory != null) this.repository = repositoryFactory;
            if (commonFactory != null) this.common = commonFactory;
        }
    }
}
