namespace VideoBackendService.Data
{
    public interface IUow
    {
        IRepository<Models.Video> Videos { get; }
        void SaveChanges();
    }
}
