using System.Reflection.Metadata.Ecma335;
using Vestal.Core.API.Model;

namespace Vestal.Core.API.Services
{
    public class LocationService
    {
        public LocationService() { }

        public List<string> convertCities(List<Location> locations) 
        {
            List<string> cities = new List<string>();
            locations.ForEach(location =>
            {
                cities.Add(location.City);
            });
            return cities.Distinct().ToList();
        }

        public List<string> convertCountries(List<Location> locations)
        {
            List<string> countries = new List<string>();
            locations.ForEach(location =>
            {
                countries.Add(location.Country);
            });
            return countries.Distinct().ToList();
        }
    }
}
