namespace VideoApi.Dtos
{
    public class VideoDto
    {
        public VideoDto()
        {

        }

        public VideoDto(Models.Video entity)
        {
            Id = entity.Id;
            Name = entity.Name;
        }

        public int? Id { get; set; }
        public string Name { get; set; }
    }
}
