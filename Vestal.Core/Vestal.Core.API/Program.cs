using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Vestal.Core.API.Model;
using Vestal.Core.API.Services;

var builder = WebApplication.CreateBuilder(args);

var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins,
                      policy =>
                      {
                          policy.WithOrigins("http://127.0.0.1:5173")
                          .AllowAnyHeader()
                          .AllowAnyMethod();
                      });
});

var connectionString = builder.Configuration.GetConnectionString("AppDB");
builder.Services.AddDbContext<MyDbContext>(x => x.UseNpgsql(connectionString));

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

app.UseCors(MyAllowSpecificOrigins);    //BETWEEN ROUTING AND AUTHORIZATION

app.UseAuthorization();

app.MapRazorPages();

app.MapGet("/", (Func<string>)(() => "Hello World!"));

app.MapGet("/test", ([FromServices] MyDbContext db) =>
{
        return Results.Ok(db.Property.Include(p => p.Location).ToList());
});

app.MapGet("/cities", ([FromServices] MyDbContext db) =>
{
    LocationService service = new LocationService();

    return Results.Ok(service.convertCities(db.Location.ToList()));
});

app.MapGet("/countries", ([FromServices] MyDbContext db) =>
{
    LocationService service = new LocationService();

    return Results.Ok(service.convertCountries(db.Location.ToList()));
});

app.MapGet("/suggestions", (string locationType, string location, [FromServices] MyDbContext db) =>
{
    PropertyService service = new PropertyService();
    string queryLocation = location.Trim().ToLower();

    if (locationType == "city")
        {
            return Results.Ok(service.convertProperties(db.Property.Include(p => p.Location).Where(p => p.Location.City.ToLower() == queryLocation).ToList()));
        }
        else if (locationType == "country")
        {
            return Results.Ok(service.convertProperties(db.Property.Include(p => p.Location).Where(p => p.Location.Country.ToLower() == queryLocation).ToList()));
        }
    return Results.BadRequest();
});

app.MapGet("/search", (string locationType,
                       string location,
                       string dateStart,
                       string dateEnd,
                       [FromServices] MyDbContext db) =>
{
    PropertyService service = new PropertyService();
    string queryLocation = location.Trim().ToLower();
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
            return Results.Ok(service.convertProperties(db.Property.Include(p => p.Location).Where(p => p.Location.City.ToLower() == queryLocation).ToList()));
        }
        else if (locationType == "country")
        {
            return Results.Ok(service.convertProperties(db.Property.Include(p => p.Location).Where(p => p.Location.Country.ToLower() == queryLocation).ToList()));
        }
    }
    return Results.BadRequest();
});

app.Run();
