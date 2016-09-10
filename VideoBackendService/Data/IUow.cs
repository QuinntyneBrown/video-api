namespace VideoBackendService.Data
{
    public interface IUow
    {
        IRepository<Models.Video> Videos { get; }
        IRepository<Models.User> Users { get; }
        void SaveChanges();
    }
}
