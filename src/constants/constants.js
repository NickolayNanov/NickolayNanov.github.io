export const projects = [
  {
    title: '.Net Pub Sub framework',
    description: "A .Net framework for easy work with pub sub allowing you to easily register subscribers and publisher in the DI as well as having an event context and pre and post middlewares.",
      image: '/images/5.png',
      tags: ['Blazor Server', 'C#'],
    visit: 'https://github.com/NickolayNanov/PubSub_DotNet',
    id: 0,
  },
  {
    title: 'Business Rules Builder C#',
    description: "A C# backEnd + Blazor server for the UI. An application used to dynamically build and execute lambda expressions using reflection and being fully automatic since we have c# code reusing reflection code. Usefull for custom business rules per user.",
      image: '/images/4.png',
      tags: ['Blazor Server', 'C#'],
    visit: 'https://github.com/NickolayNanov/DemoDecisionEngine',
    id: 1,
  },
  {
    title: 'VTU Manager',
    description: "The VTU administration needed more modern software for managing their work so me and a friend of mine did this system for them. I did the back-end architecture by using DDD and making sure that all SOLID principles are being followed. As a database we use MSSQL Server and EF Core 5 as an ORM.",
      image: '/images/1.png',
      tags: ['ASP .NET CORE 5 WebAPI', 'React', 'EF Core 5', 'MSSQL'],
    visit: 'https://github.com/NickolayNanov/VTU-Manager',
    id: 2,
  },
  {
    title: 'Planner',
    description:"An app which currently is not deployed anywhere. It is using a basic ASP .NET Core API and React with bootstrap as a UI framework. The purpose of this project was to learn React and this project has been assigned with 6.00 from the tutors at the university",
    image: '/images/2.png',
    tags: ['React', 'JavaScript', 'Typescript', 'ASP .NET Core'],
    visit: 'https://github.com/NickolayNanov/PlannerApi',
    id: 3,
  },
  {
    title: 'Maturnik',
    description: "This is a project where I made online preparation for the exams for the 12th graders. I used Blazor-Server-Side for making the project and it had 200+ users registerd. As a utility project I also did a pdf reader which scraped the questions and answers from a pdf and produces an excel file with all the data which is later being imported directly into the system.",
      image: '/images/3.png',
      tags: ['Blazor', 'ASP NET 5', 'C#'],
    visit: 'https://github.com/NickolayNanov/Examer',
    id: 4,
  }
];

export const TimeLineData = [
  { year: 2018, text: 'Signed up in Softuni', },
  { year: 2019, text: 'Graduated at Softuni with overall mark: 5.91', },
  { year: 2020, text: 'Started work as junior .NET developer at VSG Bulgaria', },
  { year: 2024, text: 'Promited to senior .NET Developer'},
];