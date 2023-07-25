using Vestal.Core.API.Services;

namespace Vestal.Core.Tests
{
    public class DateServiceTests
    {
        [Fact]
        public void isDateRangeValid_OK() 
        {
            string dateStart = "2023-07-25";
            string dateEnd = "2023-07-28";
            Boolean isValid = DateService.isDateRangeValid(dateStart, dateEnd);
            Assert.Equal(isValid, true);
        }

        [Fact]
        public void isDateRangeValid_EndBeforeStart()
        {
            string dateStart = "2023-07-25";
            string dateEnd = "2023-07-23";
            Boolean isValid = DateService.isDateRangeValid(dateStart, dateEnd);
            Assert.Equal(isValid, false);
        }

        [Fact]
        public void isDateRangeValid_SameDate()
        {
            string dateStart = "2023-07-25";
            string dateEnd = "2023-07-25";
            Boolean isValid = DateService.isDateRangeValid(dateStart, dateEnd);
            Assert.Equal(isValid, false);
        }

        [Fact]
        public void isDateRangeValid_NonExistingMonthOrDay()
        {
            string dateStart = "2023-07-25";
            string dateEnd = "2023-17-43";
            Boolean isValid = DateService.isDateRangeValid(dateStart, dateEnd);
            Assert.Equal(isValid, false);
        }

        [Fact]
        public void isDateRangeValid_EmptyString()
        {
            string dateStart = "2023-07-25";
            string dateEnd = "";
            Boolean isValid = DateService.isDateRangeValid(dateStart, dateEnd);
            Assert.Equal(isValid, false);
        }
    }
}
