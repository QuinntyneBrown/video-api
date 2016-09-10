namespace VideoApi.Dtos
{
    public class VideoAddOrUpdateResponseDto: VideoDto
    {
        public VideoAddOrUpdateResponseDto(Models.Video entity)
        :base(entity)
        {

        }
    }
}
