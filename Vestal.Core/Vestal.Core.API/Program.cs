using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Vestal.Core.API.Model;
using Vestal.Core.API.Services;

var builder = WebApplication.CreateBuilder(args);

var connectionString = builder.Configuration.GetConnectionString("AppDB");
builder.Services.AddDbContext<PropertyDbContext>(x => x.UseNpgsql(connectionString));

// Add services to the container.
builder.Services.AddRazorPages();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error");
}
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapRazorPages();

app.MapGet("/", (Func<string>)(() => "Hello World!"));

app.MapGet("/suggestions", (string locationType, string location, [FromServices] PropertyDbContext db) =>
{
    PropertyService service = new PropertyService();

    
        if (locationType == "city")
        {
            return Results.Ok(service.convertProperties(db.Property.Where(p => p.Location.City == location).ToList()));
        }
        else if (locationType == "country")
        {
            return Results.Ok(service.convertProperties(db.Property.Where(p => p.Location.Country == location).ToList()));
        }
    return Results.BadRequest();
});

app.MapGet("/search", (string locationType,
                       string location,
                       string dateStart,
                       string dateEnd,
                       [FromServices] PropertyDbContext db) =>
{
    PropertyService service = new PropertyService();

    Boolean IsDateOk = false;
    try
    {
        IsDateOk = DateOnly.Parse(dateStart) < DateOnly.Parse(dateEnd);
    }
    catch (Exception e)
    {
        return Results.BadRequest();
    }

    if (IsDateOk)
    {
        if (locationType == "city")
        {
            return Results.Ok(service.convertProperties(db.Property.Where(p => p.Location.City == location).ToList()));
        }
        else if (locationType == "country")
        {
            return Results.Ok(service.convertProperties(db.Property.Where(p => p.Location.Country == location).ToList()));
        }
    }
    return Results.BadRequest();
});

app.Run();
