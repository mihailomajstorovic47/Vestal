namespace Vestal.Core.API.Model
{
    public class Location
    {
        public int Id { get; set; }
        public string City { get; set; }
        public string Country { get; set; }

        public Location() {}

        public Location(int id, string city, string country)
        {
            this.Id = id;
            this.City = city;
            this.Country = country;
        }
    }
}
