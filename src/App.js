import React, { Component } from 'react';
import About from './components/About';
import Experience from './components/Experience';
import PersonalExperience from './components/PersonalExperience';
import Education from './components/Education';
import Certificate from './components/Certificate';
import Skills from './components/Skills';


class App extends Component {
  render() {

    const person = {
      avatar: 'https://unavatar.io/brian.vianac@outlook.com',
      name: 'Brian Alejandro Viana Clavijo',
      profession: 'Computer Systems Engineering student',
      bio: "🫶 Computer Systems Engineering with a focus on Native Android Development and Full Stack Development. Skilled in strategy consulting and software engineering. Always learning new things 🫶",
      address: 'Mexico City, Mexico.',
      social: [
        {name: 'linkedin', url: 'https://www.linkedin.com/in/brian-viana7/'},
        {name: 'github', url: 'https://github.com/BrianVianaC7'},
      ],

      experience: [
        {title: 'Android Developer', 
        company: 'QuarkSoft || ESAN App - Zeus App', 
        startDate: 'Jul 2023', endDate: 'Current', 
        description: '- Creation of modules and integration of new functionalities, using MVVM architecture pattern and Clean Architecture, focused on the analysis of requirements and resolution of business logic errors.'
        +'\n- Experience in implementing code obfuscation using DexGuard and ProGuard to ensure application security.'
        +'\n- Creation and management of AAR SDKs modules to facilitate the integration of functionalities in different projects.'
        +'\n- Generation of Bundles optimized for the implementation and updating of versions in the Play Store.',
        tech:'Kotlin, Clean Architecture, MVVM, Retrofit 2, Dagger, Room, SDKs, DexGuard, ProGuard, Android Studio, App Store Optimization (ASO), Aws (CodeCommit), Git, GitFlow, Postman, Trello.'},
        
        {title: 'Java Developer', 
        company: 'Bolsa Mexicana de Valores || Track Audit', 
        startDate: 'Apr 2023', endDate: 'Jul 2023', 
        description: '- Developed SQL scripts to update state flows in databases.'
        +'\n- Created detailed code documentation, use case flows, and user guides'
        +'\n- Provided ongoing support and maintenance for the "Track Audit" web tool.'
        +'\n- Developed and implemented code for the automated generation of emails associated with each use case flow.',
        tech:'Java, HTML, CSS, Spring, SQL-Server, Cayenne, PrimeFaces, Git, Ms Office, Power Query.'},

        {title: 'Data Analyst', 
        company: 'Philip Morris International || Open Web App', 
        startDate: 'Apr 2023', endDate: 'Sep 2023', 
        description: '- Mass activation and deactivation of users in the OPEN web App. During this process. Improve efficiency in managing user-related data.'
        +'\n- Creation and updating of a data set in Power BI by pulling data from Salesforce. Implemented analytics automated data processing using Power BI.'
        +'\n- Generation and updating of prizes for all users of the web App, supervising the control of prizes to assess their validity, delivery status and need for elimination. The results of these activities were reflected in PowerB1, allowing effective control and visualization of data.',
        tech:'Python, SQL, Salesforce (Inspector), Power BI, Ms. Office (Excel), Power Query, Visual Basic, PowerStreet, Scripts.'},

      ],

      personalExperience:[
        {title: 'Brian VianaC CV', 
        company: 'Personal', 
        description: 'Developed a customized resume using Visual Studio, React.js, Node.js, and Docker to ensure efficient development, seamless integration, and enhanced portability. ',
        url: 'https://github.com/BrianVianaC7/Brian_VianaC_CV',
        tech:'VSCode, HTML5, CSS, Bootstrap, JavaScript, React, Node.js, Docker, Surge.sh.'},

        {title: 'Soccer Players', 
        company: 'Personal', 
        description: 'Built a backend for Player Management with Spring Boot and Java 21. Features CRUD operations, data validation, and uses Spring Data JPA with MySQL. Includes automatic API documentation, object mapping, unit testing and GitHub Actions for CI/CD',
        url: 'https://github.com/BrianVianaC7/Project_Backend',
        tech:'Java, Spring, Spring Boot, JPA, REST, Unit Test (Mockito), OpenAPI, MySQL, GitHub, Git, GitFlow, CI/CD, Postman.'},


        {title: 'Naruto App', 
        company: 'Personal',  
        description: 'Developed a "Naruto App" Mobile App using Clean Architecture, MVVM, ROOM, Retrofit, Dagger HILT, Picasso, Lottie, Navigation Component, and other Third-Party Libraries. Firebase was utilized for cloud services, incorporating features for Bjuus, Random Cards, and Characters from the "Naruto" anime.  In addition, unit and UI tests have been included to ensure the quality and stability of the code.',
        url: 'https://github.com/BrianVianaC7/BjuusApp', 
        tech:'Kotlin, Room, Clean Architecture, MVVM, Unit Test (Mockito), UI Test (espresso), Retrofit 2, Dagger Hilt, Lottie, Navigation Component, Picasso, Android Studio, Firebase, Git, GitFlow, Postman.'}
      ],

      education: [
        {degree: 'Computer Systems Engineering', 
        institution: 'UVM', 
        startDate: 'Aug 2020', endDate: 'Currently', 
        description: 'University of the Valley of Mexico (Coyoacan Campus, Mexico City)', 
        subdescription: 'Sixth semester - Grade: 9.7' },

        {degree: 'Full Stack Java', 
        institution: 'BEDU - Santander', 
        startDate: 'Jul 2023', endDate: 'Dec 2023', 
        description: 'Bootcamp scholarship (Mexico City)', 
        subdescription: 'Winner of one of the 500 scholarships nationwide' },

        {degree: 'English Immersion Program', 
        institution: 'BLI', 
        startDate: 'Dec 2021', endDate: 'Jan 2022', 
        description: 'Bouchereau Lingua International (Montreal)', 
        subdescription: 'Student exchange'},
      ],

      certificate: [
        {name: 'Scrum Master', 
        institution: 'Project Management institute', 
        date: 'Oct 2023', 
        description: 'Completed Scrum Master certification preparation, mastering essential Scrum knowledge for agile team contributions."'},

        {name: 'Mobile app development', 
        institution: 'Google', 
        date: 'Jun 2023', 
        description: 'Completed a comprehensive introductory course with a solid foundation in mobile app development, as well as learning ASO (App Store Optimization) best practices.'},

        {name: 'Kotlin', 
        institution: 'SoloLearn', 
        date: 'May 2023', 
        description: 'Completed a comprehensive programming course with a solid foundation in applied computer science principles and object-oriented programming, including data structures, algorithms, using Kotlin as programming language.'},

        {name: 'Object-oriented programming', 
        institution: 'Code', 
        date: 'May 2021', 
        description: 'Completed a comprehensive object-oriented programming course with a solid foundation in applied computer science principles, including data structures, algorithms, and software design patterns, using Java as programming language.'},
      ],

      skills: [
        {name: 'Kotlin'},
        {name: 'Jetpack Compose'},
        {name: 'Java'},
        {name: 'Spring (Spring Boot)'},
        {name: 'SQL'},
        {name: 'NoSQL'},
        {name: 'Linux'},
        {name: 'Firebase'},
        {name: 'AWS'},
        {name: 'Docker'},
        {name: 'Git'},
      ],
    
    additionalSkills: [
        {name: 'MS Office'},
        {name: 'Android Studio'},
        {name: 'GitHub (CodeCommit)'},
        {name: 'VSCode'},
        {name: 'IntelliJ'},
        {name: 'Object DB'},
        {name: 'MySQL'},
      ]    
    };

    return (
      <header>
        <div className='wrapper'>
          <div className='sidebar'>
            <About
              avatar={person.avatar}
              name={person.name}
              profession={person.profession}
              bio={person.bio}
              address={person.address}
              social={person.social} />
          </div>

          <div className='content-wrapper'>
              <div className='content'>
                <Experience experience={person.experience} />
                <PersonalExperience personalExperience = {person.personalExperience}/>
                <Education education={person.education} />
                <Certificate certificate={person.certificate} />
                <Skills skills={person.skills} additionalSkills={person.additionalSkills}/>
              </div>
          </div>

        </div>
      </header>
    );
  }
}

export default App;
