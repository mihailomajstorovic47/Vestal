namespace Vestal.Core.API.Services
{
    public static class DateService
    {
        public static Boolean isDateRangeValid(string dateStart, string dateEnd) 
        {
            try
            {
                return DateOnly.Parse(dateStart) < DateOnly.Parse(dateEnd);
            }
            catch (Exception e)
            {
                return false;
            }
        }
    }
}
