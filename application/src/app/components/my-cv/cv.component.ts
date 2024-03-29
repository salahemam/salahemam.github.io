import { Component } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CVComponent {
  careerSummary: string[] = [
    'Demonstrated software engineer with +12 years experience and +4 years as a team leader.',
    'Worked with different desktop and web technologies using .net, .net core, asp.net, asp.net core, c#, sql server, mongodb, angular, javascript, jquery, html, and css.',
    'Have a strong awareness of projects software life cycle including analysis, requirements gathering, planning, design, development, testing, deployment, leadership, mentoring, interviewing, refactoring, and code reviews.',
    'Worked with multiple processes like Agile, Scrum, and Waterfall.'
  ];

  educations: any[] = [
    {
      Place: "Faculty of Computer & Information Sciences @ Ainshams University",
      FromYear: 2005,
      ToYear: 2009,
      Speciality: "Information Systems Department"
    },
    {
      Place: "Mubarak Secondary",
      FromYear: 2002,
      ToYear: 2005,
      Speciality: "Thanawia Amma"
    }
  ];

  experiences: any[] = [

    {
      Position: "Software Team Lead (.Net)",
      Company: "Qorrect Assessment",
      FromDate: "MAR-2021",
      ToDate: "Present",
      Url: "https://qorrectassess.com/",
      Description: "Lead the development team (backend & frontend) in an agile environment to work on the company product features (Qorrect Assessment Platform)." +
        "My activities includes leadership, development, interview, refactoring, code reviews, research for best solutions, architecture & design, also act as Scrum Master."
    },

    {
      Position: "Technical Lead (.Net)",
      Company: "Key2Soft",
      FromDate: "Jan-2020",
      ToDate: "MAR-2021",
      Url: "http://www.key2soft.com/",
      Description: "Delivered educational projects to Saudi client like TETCO software company and Ministry of Education"
    },

    {
      Position: "Senior Software Engineer (.Net)",
      Company: "Path Solutions",
      FromDate: "Nov-2018",
      ToDate: "Dec-2019",
      Url: "https://www.path-solutions.com/",
      Description: "Work on large banking system 'iSHRAQ' with banking clients like 'Gulf Bank' and also build web services for integration."
    },

    {
      Position: "Technical Team Lead (.Net)",
      Company: "Integrated Technology Group",
      FromDate: "Aug-2018",
      ToDate: "Nov-2018",
      Url: "https://www.itgsolutions.com/",
      Description: "Lead the development team to achieve tasks for large e-learning solution 'EduWave' and also build solutions from scratch using WebApis, Authentication, SignalR & WebSockets."
    },

    {
      Position: ".Net Team Leader",
      Company: "CodeLab",
      FromDate: "May-2015",
      ToDate: "July-2018",
      Url: "http://www.codelabsys.com/",
      Description: "Lead the development team to work on Dynamic Inspection System using angular & WebApis, and also was responsible for code review &deployments delivered to multiple different clients in Saudi Arabia"
    },

    {
      Position: "Senior .Net Web Developer",
      Company: "Vodafone International Services",
      FromDate: "Jul-2014",
      ToDate: "Apr-2015",
      Url: "http://vis.vodafone.com.eg/",
      Description: "Worked on the official website for Ceramica Royal using Orchard CMS application built on ASP.Net MVC"
    },

    {
      Position: "Senior .Net Web Developer",
      Company: "Advanced Computer Systems",
      FromDate: "Jan-2013",
      ToDate: "July-2014",
      Url: "http://www.acs-egypt.com/",
      Description: "Developed different web & desktop projects using C#.Net, VB.Net, ASP.Net, SqlServer, Crystal Reports."
    },

    {
      Position: "Junior .Net Web Developer",
      Company: "Advanced Computer Systems",
      FromDate: "Mar-2010",
      ToDate: " Jan-2013",
      Url: "http://www.acs-egypt.com/",
      Description: "Developed different web & desktop projects using C#.Net, VB.Net, ASP.Net, SqlServer, Crystal Reports."
    },
  ]

  projects: any[] = [

    {
      Title: "Qorrect Assessment",
      Tools: "C#.Net, ASP.Net MVC Core, SqlServer, Redis, IdentityServer4, Hangfire",
      Description: "Online exams assessment product which manages exams, teachers, students. It allows teachers to create and assign exams with different questions & layouts for their students."
    },

    {
      Title: "Key2Learn",
      Tools: "C#.Net, ASP.Net MVC Core, MongoDB",
      Description: "Learning management system (LMS) which manages schools, teachers, students, and parents. It allows teachers to create and assign couses, meeting, and materials for their students."
    },

    {
      Title: "Future Leaders",
      Tools: "C#.Net, ASP.Net MVC, WCF Services, Sql Server",
      Description: "Educational web application which allows the ministry to choose the most talented graduates or teachers to fullll the available leadership positions"
    },

    {
      Title: "Waed",
      Tools: "C#.Net, ASP.Net MVC Core, WCF Services, Sql Server",
      Description: "Educational web application which allows filtering the ministry employees by passing some exams and surveys and also making interviews and trainings based on their skills"
    },

    {
      Title: "Safeer Graduates",
      Tools: "C#.Net, ASP.Net MVC, WCF Services, Sql Server",
      Description: "Educational web application that integrates with many WCF services which allows the graduates to publish their CVs and apply for jobs or trainings offered by other registered agencies."
    },

    {
      Title: "Online Banking Webservices",
      Tools: "C#.Net, ASP.Net WebApis, Oracle",
      Description: "Build webservices for integration with internal bank system & exposed to external customers portal"
    },

    {
      Title: "iSHRAQ",
      Tools: "C#.Net, ASP.Net WebForms, Oracle",
      Description: "Banking software product for internal & external bank activities management & core banking."
    },

    {
      Title: "EduWave",
      Tools: "C#.Net, Asp.Net WebApis Asp.Net WebForms, Sql Server",
      Description: "Large e-learning system for all study levels which helps students and teachers communication & cover many schools in the Gulf"
    },

    {
      Title: "GAZT",
      Tools: "C#.Net, Asp.Net WebApis, Sql Server, Angular 1.x, Active Directory, SAP, CRM.",
      Description: "Inspection for agencies that have not paid their VAT or Excise Taxes to detect violations and set penalities on their owners & integrate with active directory and other external services (SAP, CRM)."
    },

    {
      Title: "MOT",
      Tools: "C#.Net, Asp.Net WebApis, Sql Server, Angular 1.x",
      Description: "Tracking and reporting accidents or violations in roads."
    },

    {
      Title: "Onaizah Municipality",
      Tools: "C#.Net, Asp.Net WebApis, Sql Server, Oracle, Angular 1.x Active Directory.",
      Description: "Inspection for all shops in Onaizah to check violations and set penalities on their owners & sync with oracle db & integrate with active directory."
    },

    {
      Title: "MLSD",
      Tools: "C#.Net, Asp.Net WebApis, Sql Server, Oracle, SSIS, Angular 1.x.",
      Description: "Inspection for poor people who need help or money & sync with ministry oracle db."
    },

    {
      Title: "GAMEP",
      Tools: "C#.Net, Asp.Net WebApis, Sql Server, Angular 1.x..",
      Description: "Inspection for buildings, factories, or agencies which have environmental violations & go through approval & revision workow"
    },

    {
      Title: "MOF",
      Tools: "C#.Net, Asp.Net WebApis, Sql Server, Angular 1.x",
      Description: "Provides news related to the ministry & integrate with mobile app."
    },

    {
      Title: "BRAVO Product",
      Tools: "C#.Net, Asp.Net WebApis, Sql Server, Angular 1.x",
      Description: "Generic field inspection product with dynamic form builder, form viewer (web & mobile), workow, and task distribution."
    },

    {
      Title: "http://www.royalceramica.com",
      Tools: "C#.Net, Asp.Net MVC, Sql Server, Orchard CMS",
      Description: "Ceramica Royal company ofcial website."
    },

    {
      Title: "http://www.egysurvey.com",
      Tools: "C#.Net, Asp.Net Webforms, Sql Server",
      Description: "Design simple & professional surveys with different templates."
    },

    {
      Title: "http://www.rakeeb.net",
      Tools: "C#.Net, Asp.Net Webforms, Sql Server, Charts, Windows Services",
      Description: "Egypt Elections Supervision, News, Results, Statistics and Maps."
    },

    {
      Title: "http://www.emta7anat.com",
      Tools: "C#.Net, Asp.Net Webforms, Sql Server",
      Description: "Exams online for students, teachers, and schools."
    },

    {
      Title: "http://www.reservegypt.com",
      Tools: "C#.Net, Asp.Net Webforms, Sql Server",
      Description: "Hotels Reservation system for Egypt and other services."
    },

    {
      Title: "http://www.eiod.org",
      Tools: "C#.Net, Asp.Net Webforms, Sql Server",
      Description: "Egyptian Institute of Directors."
    },

    {
      Title: "http://www.ecrc.org.eg",
      Tools: "C#.Net, Asp.Net Webforms, Sql Server",
      Description: "Egyptian Corporate Responsibility Center."
    },

    {
      Title: "http://www.followmycars.com",
      Tools: "C#.Net, Asp.Net Webforms",
      Description: "Marketing website for tracking cars through GPS tools."
    },

    {
      Title: "http://www.acs-egypt.com",
      Tools: "C#.Net, Asp.Net Webforms, Sql Server",
      Description: "Management system for ACS Company."
    },

    {
      Title: "Gait Analysis for Human Identication",
      Tools: "C#.Net, OpenCV, Sql Server",
      Description: "Graduation Project which aims to identify the individuals by their gait (i.e. the manner they walk) from a video sequence. Won ITIDA prize"
    },
  ];

  technicalSkills: string[] = [
    "C#.Net", "VB.Net",
    "ASP.Net (WebForms, MVC, WebApis)",
    "ASP.Net MVC Core", ".Net Core",
    "Entity Framework", "EF Core",
    "Design Patterns",
    "OOP", "SOLID Principles",
    "IdentityServer", "Hangfire", "Redis",
    "AngularJS", "Angular 2+", "KnockoutJs",
    "HTML", "CSS", "Bootstrap",
    "JavaScript", "jQuery", "AJAX",
    "JSON", "XML", "WCF",
    "MongoDB (Query, Aggregation, Performance)",
    "SQL Server", "SSIS",
    "Oracle", "MS Access",
    "Crystal Reports", "iReport", "SSRS",
    "Cloud (Amazon, Azure)",
    "Git", "TFVS", "JIRA",
    "Agile", "Scrum",
    "SignalR", "WebSockets",
    "Basics in (SharePoint, Orchard CMS, Ionic Framework, Android, WordPress, Joomla, C++, JAVA, Win 8 Apps)."
  ];

  personalSkills: string[] = [
    "Good Leadership skills",
    "Committed",
    "Analytical",
    "Love Thinking",
    "Cooperative",
    "Hard Worker",
    "Team Player",
    "Organized"
  ];

  courses: any[] = [

    {
      Title: "Get Started With .Net Core Identity Server 4",
      IsOnline: true,
      Place: "Udemy",
      Date: "June 2021"
    },

    {
      Title: "Learn Amazon web services (AWS): The complete introduction",
      IsOnline: true,
      Place: "Udemy",
      Date: "Feb 2021"
    },

    {
      Title: "MongoDB Basics",
      IsOnline: true,
      Place: "MongoDB University",
      Date: "October 2020"
    },

    {
      Title: "MongoDB Aggregation Framework",
      IsOnline: true,
      Place: "MongoDB University",
      Date: "October 2020"
    },

    {
      Title: "MongoDB Performance",
      IsOnline: true,
      Place: "MongoDB University",
      Date: "October 2020"
    },

    {
      Title: "MongoDB for Python Developers",
      IsOnline: true,
      Place: "MongoDB University",
      Date: "October 2020"
    },

    {
      Title: "Angular 9 - The Complete Guide 2020 Edition",
      IsOnline: true,
      Place: "Udemy",
      Date: "June 2020"
    },

    {
      Title: "Leadership Skills",
      IsOnline: true,
      Place: "E3melBusiness Academy",
      Date: "July 2019"
    },

    {
      Title: "Professional CEO",
      IsOnline: true,
      Place: "E3melBusiness Academy",
      Date: "July 2019"
    },

    {
      Title: "Modern Software Architecture",
      Place: "SECC-ITIDA",
      Date: "June 2019"
    },

    {
      Title: "SECC Agile Foundation",
      Place: "SECC-ITIDA",
      Date: "April 2018"
    },

    {
      Title: "Mastering the Basics of SQL Server Query Optimization",
      IsOnline: true,
      Place: "Udemy",
      Date: "Jan 2018"
    },

    {
      Title: "Mini MBA",
      Place: "Smart Vision",
      Date: "Jan 2018"
    },

    {
      Title: "Developing Microsoft SharePoint Server 2013 Core Solutions",
      Place: "New Horizons",
      Date: "June 2015"
    },

    {
      Title: "Cloud Business Essentials",
      Place: "ITSynergy",
      Date: "January 2014"
    },

    {
      Title: "Android Application Development",
      Place: "Asgatech",
      Date: "March 2014"
    },

    {
      Title: "Code Refactoring Techniques",
      Place: "SECC-ITIDA",
      Date: "June 2013"
    },

    {
      Title: "Test Driven Development",
      Place: "SECC-ITIDA",
      Date: "June 2013"
    },

    {
      Title: "Berlitz Prociency Level 1 (English Course)",
      Place: "Berlitz",
      Date: "April 2012"
    },
    //

    {
      Title: "[Arabic - بالعربي] Entity Framework Core",
      Place: "Youtube",
      Date: "June 2022",
      IsOnline: true
    },

    {
      Title: "Microservices: The Big Picture",
      Place: "Pluralsight",
      Date: "June 2022",
      IsOnline: true
    },

    {
      Title: "ASP.NET Core Microservices: Getting Started",
      Place: "Pluralsight",
      Date: "June 2022",
      IsOnline: true
    },

    {
      Title: "Simplified .Net Background Tasks with Hangfire 1",
      Place: "Pluralsight",
      Date: "June 2022",
      IsOnline: true
    },

    {
      Title: "Clean Architecture: Patterns, Practices, and Principles",
      Place: "Pluralsight",
      Date: "June 2022",
      IsOnline: true
    },

    {
      Title: "سلسلة سكروم باللغة العربية",
      Place: "Youtube",
      Date: "August 2022",
      IsOnline: true
    },
  ]

  languages: string[] = [
    "Arabic (Native)",
    "English (Very Good)"
  ];

  personalInfos: any[] = [

    {
      Key: "Birthdate",
      Value: "01 May 1988"
    },

    {
      Key: "Marital Status",
      Value: "Married"
    },

    {
      Key: "Military Status",
      Value: "Excempted"
    }
  ];

  contactInfos: any[] = [

    {
      Key: "Address",
      Value: "Qalyubia, Egypt"
    },

    // {
    //   Key: "Mobile",
    //   Value: "01001018750"
    // },

    {
      Key: "Email",
      Value: "goldencap2009@gmail.com"
    },

    {
      Key: "Linkedin",
      Value: "/salah-emam",
      Url: "https://www.linkedin.com/in/salah-emam"
    }
  ];

  certificates: any[] = [
    {
      Title: "SECC Agile Foundation",
      Place: "SECC",
      Date: "May 2018",
      Url: "http://www.secc.org.eg/"
    },
    {
      Title: "CCC Cloud Business Associate",
      Place: "TIEC",
      Date: "February 2014",
      Url: "http://www.cloudcredential.org/"
    }
  ];
}
