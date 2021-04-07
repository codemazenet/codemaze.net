using System;
using System.Runtime.CompilerServices;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using CodeMaze.Data.RequestResponse;
using CodeMaze.Data.Systems;

namespace CodeMaze.Service
{
    public abstract class BaseService
    {
        protected IMapper _mapper;

        protected ILogger<BaseService> Logger;

        protected AppSettings AppSettings;

        public BaseService(ILogger<BaseService> logger = null,
            IMapper mapper = null,
            IOptions<AppSettings> settings = null)
        {
            if (null != settings) AppSettings = settings.Value;
            if (null != logger) Logger = logger;
            if (null != mapper) _mapper = mapper;
        }

        protected virtual T TryExecute<T>(Func<T> func, 
            [CallerMemberName] string callerMemberName = "", 
            object keyParameter = null)
        {
            try
            {
                return func();
            }
            catch (Exception e)
            {
                Logger.LogError(e, $"Error executing {callerMemberName}({keyParameter})");
                return default(T);
            }
        }

        protected virtual Response<T> TryExecute<T>(Func<Response<T>> func, 
            [CallerMemberName] string callerMemberName = "", 
            object keyParameter = null)
        {
            try
            {
                return func();
            }
            catch (Exception e)
            {
                Logger.LogError(e, $"Error executing {callerMemberName}({keyParameter})");
                return new FailedResponse<T>((int)ResponseFailureCode.GeneralException, e.Message);
            }
        }

        protected virtual async Task<T> TryExecuteAsync<T>(Func<Task<T>> func, 
            [CallerMemberName] string callerMemberName = "", 
            object keyParameter = null)
        {
            try
            {
                return await func();
            }
            catch (Exception e)
            {
                Logger.LogError(e, $"Error executing {callerMemberName}({keyParameter})");
                return default(T);
            }
        }

        protected virtual async Task<Response<T>> TryExecuteAsync<T>(Func<Task<Response<T>>> func,
            [CallerMemberName] string callerMemberName = "", 
            object keyParameter = null)
        {
            try
            {
                return await func();
            }
            catch (Exception e)
            {
                Logger.LogError(e, $"Error executing {callerMemberName}({keyParameter})");
                return new FailedResponse<T>((int)ResponseFailureCode.GeneralException, e.Message);
            }
        }
    }
}