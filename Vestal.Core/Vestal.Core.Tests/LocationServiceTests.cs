using Vestal.Core.API.Model;
using Vestal.Core.API.Services;

namespace Vestal.Core.Tests
{
    public class LocationServiceTests
    {
        [Fact]
        public void convertCities_Distinct() 
        {
            //arrange
            List<Location> locations = new List<Location>();
            List<string> checkCities = new List<string>();

            locations.Add(new Location(1, "Tokyo", "Japan"));
            locations.Add(new Location(2, "London", "England"));
            locations.Add(new Location(3, "Liverpool", "England"));

            checkCities.Add("Tokyo");
            checkCities.Add("London");
            checkCities.Add("Liverpool");
            //act
            List<string> cities = LocationService.convertCities(locations);
            //assert
            Assert.Equal(cities, checkCities);
        }

        [Fact]
        public void convertCities_Duplicates()
        {
            //arrange
            List<Location> locations = new List<Location>();
            List<string> checkCities = new List<string>();

            locations.Add(new Location(1, "Tokyo", "Japan"));
            locations.Add(new Location(2, "London", "England"));
            locations.Add(new Location(3, "Tokyo", "Singapore"));

            checkCities.Add("Tokyo");
            checkCities.Add("London");
            //act
            List<string> cities = LocationService.convertCities(locations);
            //assert
            Assert.Equal(cities, checkCities);
        }

        [Fact]
        public void convertCountries_Distinct()
        {
            //arrange
            List<Location> locations = new List<Location>();
            List<string> checkCountries = new List<string>();

            locations.Add(new Location(1, "Tokyo", "Japan"));
            locations.Add(new Location(2, "London", "England"));
            locations.Add(new Location(3, "Rome", "Italy"));

            checkCountries.Add("Japan");
            checkCountries.Add("England");
            checkCountries.Add("Italy");
            //act
            List<string> cities = LocationService.convertCountries(locations);
            //assert
            Assert.Equal(cities, checkCountries);
        }

        [Fact]
        public void convertCountries_Duplicates()
        {
            //arrange
            List<Location> locations = new List<Location>();
            List<string> checkCountries = new List<string>();

            locations.Add(new Location(1, "Tokyo", "Japan"));
            locations.Add(new Location(2, "London", "England"));
            locations.Add(new Location(3, "Liverpool", "England"));

            checkCountries.Add("Japan");
            checkCountries.Add("England");
            //act
            List<string> cities = LocationService.convertCountries(locations);
            //assert
            Assert.Equal(cities, checkCountries);
        }
    }
}
