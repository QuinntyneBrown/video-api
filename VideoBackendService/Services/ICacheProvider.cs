using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace VideoBackendService.Services
{
    public interface ICacheProvider
    {
        ICache GetCache();
    }
}
