using VideoBackendService.Dtos;
using VideoBackendService.Services;
using System.Collections.Generic;
using System.Web.Http;
using System.Web.Http.Description;

namespace VideoBackendService.Controllers
{
    [Authorize]
    [RoutePrefix("api/video")]
    public class VideoController : ApiController
    {
        public VideoController(IVideoService videoService)
        {
            _videoService = videoService;
        }

        [Route("add")]
        [HttpPost]
        [ResponseType(typeof(VideoAddOrUpdateResponseDto))]
        public IHttpActionResult Add(VideoAddOrUpdateRequestDto dto) { return Ok(_videoService.AddOrUpdate(dto)); }

        [Route("update")]
        [HttpPut]
        [ResponseType(typeof(VideoAddOrUpdateResponseDto))]
        public IHttpActionResult Update(VideoAddOrUpdateRequestDto dto) { return Ok(_videoService.AddOrUpdate(dto)); }

        [Route("get")]
        [AllowAnonymous]
        [HttpGet]
        [ResponseType(typeof(ICollection<VideoDto>))]
        public IHttpActionResult Get() { return Ok(_videoService.Get()); }

        [Route("getById")]
        [HttpGet]
        [ResponseType(typeof(VideoDto))]
        public IHttpActionResult GetById(int id) { return Ok(_videoService.GetById(id)); }

        [Route("remove")]
        [HttpDelete]
        [ResponseType(typeof(int))]
        public IHttpActionResult Remove(int id) { return Ok(_videoService.Remove(id)); }

        protected readonly IVideoService _videoService;        
    }
}
