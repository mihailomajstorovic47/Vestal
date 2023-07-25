using Vestal.Core.API.DTO;
using Vestal.Core.API.Model;

namespace Vestal.Core.API.Services
{
    public static class PropertyService
    {
        private static Random random = new Random();

        public static List<PropertyDTO> convertProperties(List<Property> props) 
        {
            List <PropertyDTO> properties = new List<PropertyDTO> ();
            props.ForEach(p =>
            {
                properties.Add(new PropertyDTO(
                    p.Id,
                    p.Name,
                    p.Location.City,
                    p.Location.Country,
                    p.Price,
                    random.Next(2) == 1,
                    p.Information,
                    p.Image));
            });
            return properties;
        }
    }
}
