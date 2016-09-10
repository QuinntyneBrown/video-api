using VideoBackendService.Dtos;
using System.Collections.Generic;

namespace VideoBackendService.Services
{
    public interface IVideoService
    {
        VideoAddOrUpdateResponseDto AddOrUpdate(VideoAddOrUpdateRequestDto request);
        ICollection<VideoDto> Get();
        VideoDto GetById(int id);
        dynamic Remove(int id);
    }
}
