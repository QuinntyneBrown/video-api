using VideoApi.Dtos;
using System.Collections.Generic;

namespace VideoApi.Services
{
    public interface IVideoService
    {
        VideoAddOrUpdateResponseDto AddOrUpdate(VideoAddOrUpdateRequestDto request);
        ICollection<VideoDto> Get();
        VideoDto GetById(int id);
        dynamic Remove(int id);
    }
}
