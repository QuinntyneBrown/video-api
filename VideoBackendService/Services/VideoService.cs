using System;
using System.Collections.Generic;
using VideoBackendService.Dtos;
using VideoBackendService.Data;
using System.Linq;

namespace VideoBackendService.Services
{
    public class VideoService : IVideoService
    {
        public VideoService(IUow uow, ICacheProvider cacheProvider)
        {
            _uow = uow;
            _repository = uow.Videos;
            _cache = cacheProvider.GetCache();
        }

        public VideoAddOrUpdateResponseDto AddOrUpdate(VideoAddOrUpdateRequestDto request)
        {
            var entity = _repository.GetAll()
                .FirstOrDefault(x => x.Id == request.Id && x.IsDeleted == false);
            if (entity == null) _repository.Add(entity = new Models.Video());
            entity.Name = request.Name;
            _uow.SaveChanges();
            return new VideoAddOrUpdateResponseDto(entity);
        }

        public ICollection<VideoDto> Get()
        {
            ICollection<VideoDto> response = new HashSet<VideoDto>();
            var entities = _repository.GetAll().Where(x => x.IsDeleted == false).ToList();
            foreach (var entity in entities) { response.Add(new VideoDto(entity)); }
            return response;
        }

        public VideoDto GetById(int id)
        {
            return new VideoDto(_repository.GetAll().Where(x => x.Id == id && x.IsDeleted == false).FirstOrDefault());
        }

        public dynamic Remove(int id)
        {
            var entity = _repository.GetById(id);
            entity.IsDeleted = true;
            _uow.SaveChanges();
            return id;
        }

        protected readonly IUow _uow;
        protected readonly IRepository<Models.Video> _repository;
        protected readonly ICache _cache;
    }
}
