using Vestal.Core.API.DTO;
using Vestal.Core.API.Model;
using Vestal.Core.API.Services;

namespace Vestal.Core.Tests
{
    public class PropertyTests
    {
        [Fact]
        public void convrtProperties_Check() 
        {
            List<Property> properties = new List<Property>();
            List<PropertyDTO> propertyDTOs = new List<PropertyDTO>();

            properties.Add(new Property(1, "Zeus Villa",  new Location(1, "Athens", "Greece"), 150, "The best place ever", "image_link"));
            propertyDTOs.Add(new PropertyDTO(1, "Zeus Villa", "Athens", "Greece", 150, true, "The best place ever", "image_link"));

            var result = PropertyService.convertProperties(properties);

            Assert.True(comparePropertyDTOLists(result, propertyDTOs));
        }

        private Boolean comparePropertyDTOLists(List<PropertyDTO> resultList, List<PropertyDTO> mockList)
        {
            if (resultList.Count() != mockList.Count())
                return false;
            for (int i = 0; i < resultList.Count(); i++)
            {
                PropertyDTO resultElement = resultList.ElementAt(i);
                PropertyDTO mockElement = mockList.ElementAt(i);
                if (resultElement.Id == mockElement.Id &&
                    resultElement.Name == mockElement.Name &&
                    resultElement.City == mockElement.City &&
                    resultElement.Country == mockElement.Country &&
                    resultElement.Information == mockElement.Information &&
                    (resultElement.Availability == true || resultElement.Availability == false) &&
                    resultElement.Price == mockElement.Price &&
                    resultElement.Image == mockElement.Image)
                    continue;
                else
                    return false;
            }

            return true;
        }
    }
}
