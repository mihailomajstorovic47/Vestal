# Vestal

Before building and starting .NET Core backend application, download Postgres Database
After installing, build .NET Core backend project
Make sure to change connection string and update the password to your password
in .json file from the .NET Core API project

After that, run necessary commands from your PowerShell, placing yourself in Vestal.Core.API project folder
1 - dotnet tool install --global dotnet-ef - to install necessary tool, if not previously installed;
2 - dotnet ef migrations add initialDb
3 - dotnet ef database update

Now, the database with it's tables is created. Open PostgreSQL and run Location.sql script first, 
without create table command. After that, run the Property.sql script  the same way, without create table command,
because the tables have already been created using previous commands. 

To start React frontend, run terminal commands:
1 - npm i - will install all necessary packages;
2 - npm run dev - will run the application on port 5172;

The complete app should be up and running.