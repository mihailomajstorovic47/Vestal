namespace Vestal.Core.API.DTO


{
    public class PropertyDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public int Price { get; set; }
        public Boolean Availability { get; set; }
        public string Information { get; set; }
        public string Image { get; set; }

        public PropertyDTO(int id, string name, string city, string country, int price, bool availability, string information, string image)
        {
            Id = id;
            Name = name;
            City = city;
            Country = country;
            Price = price;
            Availability = availability;
            Information = information;
            Image = image;
        }
    }
}
