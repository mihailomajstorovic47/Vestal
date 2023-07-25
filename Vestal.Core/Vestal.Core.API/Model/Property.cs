namespace Vestal.Core.API.Model
{
    public class Property
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public Location Location { get; set; }
        public int Price { get; set; }
        public string Information { get; set; }
        public string Image { get; set; }

        public Property(int id, string name, Location location, int price, string information, string image)
        {
            Id = id;
            Name = name;
            Location = location;
            Price = price;
            Information = information;
            Image = image;
        }

    }
}
