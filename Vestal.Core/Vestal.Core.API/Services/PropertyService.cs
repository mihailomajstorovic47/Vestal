using Microsoft.EntityFrameworkCore;
using Vestal.Core.API.DTO;
using Vestal.Core.API.Model;

namespace Vestal.Core.API.Services
{
    public class PropertyService
    {
        Random random;
        public PropertyService() {
            random = new Random();
        }

        public List<PropertyDTO> convertProperties(List<Property> props) 
        {
            List <PropertyDTO> properties = new List<PropertyDTO> ();
            props.ForEach(p =>
            {
                properties.Add(new PropertyDTO
                {
                    Id = p.Id,
                    Name = p.Name,
                    Price = p.Price,
                    City = p.Location.City,
                    Country = p.Location.Country,
                    Information = p.Information,
                    Image = p.Image,
                    Availability = random.Next(2) == 1
                });
            });
            return properties;
        }
    }
}
