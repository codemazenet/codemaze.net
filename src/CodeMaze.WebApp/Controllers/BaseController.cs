using Microsoft.AspNetCore.Mvc;
using CodeMaze.Service.Factory;

namespace CodeMaze.WebApp.Controllers
{
    public abstract class BaseController : Controller
    {
        protected readonly RepositoryFactory repositoryFactory;
        protected readonly CommonFactory commonFactory;

        public BaseController(RepositoryFactory repositoryFactory, CommonFactory commonFactory)
        {
            if (repositoryFactory != null) this.repositoryFactory = repositoryFactory;
            if (commonFactory != null) this.commonFactory = commonFactory;
        }
    }
}