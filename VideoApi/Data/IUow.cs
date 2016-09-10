namespace VideoApi.Data
{
    public interface IUow
    {
        IRepository<Models.Video> Videos { get; }
        void SaveChanges();
    }
}
