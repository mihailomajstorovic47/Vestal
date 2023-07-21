# Vestal
Vestal

To start React frontend, run terminal commands:
1 - npm i - will install all necessary packages;
2 - npm run dev - will run the application on port 5172;

Before building and starting .NET Core backend application, download Postgres Database
After installing, build .NET Core backend project
After that, run necessary commands from your PowerShell, placing yourself in Vestal.Core.API project folder
1 - dotnet tool install --global dotnet-ef - to install necessary tool, if not previously installed;
2 - dotnet ef migrations add initialDb --context PropertyDbContext
3 - dotnet ef database update --context PropertyDbContext
