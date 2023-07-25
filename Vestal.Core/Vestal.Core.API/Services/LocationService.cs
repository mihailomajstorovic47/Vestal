using Vestal.Core.API.Model;

namespace Vestal.Core.API.Services
{
    public static class LocationService
    {
        public static List<string> convertCities(List<Location> locations) 
        {
            List<string> cities = new List<string>();
            locations.ForEach(location =>
            {
                cities.Add(location.City);
            });
            return cities.Distinct().ToList();
        }

        public static List<string> convertCountries(List<Location> locations)
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
