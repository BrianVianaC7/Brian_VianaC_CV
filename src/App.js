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
      bio: "🫶 I'm currently a student interested in the whole subject of programming, specifically as Native Mobile App Developer. Always learning new things 🫶",
      address: 'Mexico City, Mexico.',
      social: [
        {name: 'linkedin', url: 'https://www.linkedin.com/in/brian-viana7/'},
        {name: 'github', url: 'https://github.com/BrianVianaC7'},
      ],

      experience: [
        {title: 'Data Analyst', 
        company: 'Philip Morris International || Open Web App', 
        startDate: 'Apr 2023', endDate: 'Sep 2023', 
        description: '- Mass activation and deactivation of users in the OPEN web application. During this process. Improve efficiency in managing userrelated data.'
        +'\n- Creation and updating of a data set in Power BI by pulling data from Salesforce. I implemented analytics automated data processing using Power BI.'
        +'\n- Generation and daily updating of prizes for all users of the web application, supervising the control of prizes to assess their validity, delivery status and need for elimination. The results of these activities were reflected in PowerB1, allowing effective control and visualization of data.',
        tech:'SQL, Salesforce, Salesforce (Inspector), Power BI, Ms. Office (Excel), Power Query, Visual Basic, PowerStreet, Scripts'}
      ],

      personalExperience:[
        {title: 'Brian VianaC CV', 
        company: 'Personal', 
        startDate: 'Sep 2020', endDate: 'Ago 2023', 
        description: 'Developed a customized resume using Visual Studio, React.js, Node.js, and Docker to ensure efficient development, seamless integration, and enhanced portability. ',
        tech:'HTML5, CSS, JavaScript, React.js, Node.js, Docker, Visual Studio Code, Surge.sh'},

        {title: 'Animaland', 
        company: 'Personal', 
        startDate: 'Sep 2021', endDate: 'Dec 2021', 
        description: 'Built an Educational software for kindergartens that provides information and reproduces animal sounds, It has a login made in a relational database. Along with an interactive game (Memory game), where completion time gets saved through reading and saving files.',
        tech:'Java, Apache NetBeans, MySQL, MySQL Workbench'},

        {title: 'Soundland', 
        company: 'Personal', 
        startDate: 'Jan 2022', endDate: 'May 2022', 
        description: 'Built a program to reinforce the English language, with the implementation of threads a list of preset songs for the user is created, a test is created where the user completes the songs of the music player, has a test score in addition to a login Through a relational database in MySQL.',
        tech:'Java, Apache NetBeans, MySQL, MySQL Workbench'},

        {title: 'Naruto Quotes', 
        company: 'Personal', 
        startDate: 'Sep 2022', endDate: 'Dec 2022', 
        description: 'Developed a "Naruto Quotes" Mobile App using Clean Architecture, MVVM, ROOM, Retrofit, Dagger HILT, Picasso and Firebase for the cloud services which contains Quotes, Author and Image (URL) to offer a collection of inspirational random quotes from the anime " Naruto." In addition, unit tests have been included to ensure the quality and stability of the code.',
        tech:'Kotlin, Firebase, Room, Clean Architecture, MVVM, Unit Test (Mockito), Android Studio'}
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

        {degree: 'English as a Second Languaje', 
        institution: 'Tulare School', 
        startDate: 'Sep 2019', endDate: 'Jan 2020', 
        description: 'Tulare Adult School (California)', 
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

        {name: 'Introduction to kotlin', 
        institution: 'SoloLearn', 
        date: 'May 2023', 
        description: 'Completed a comprehensive programming course with a solid foundation in applied computer science principles and object-oriented programming, including data structures, algorithms, using Kotlin as programming language.'},

        {name: 'Object-oriented programming', 
        institution: 'Code', 
        date: 'May 2021', 
        description: 'Completed a comprehensive object-oriented programming course with a solid foundation in applied computer science principles, including data structures, algorithms, and software design patterns, using Java as programming language.'},
      ],

      skills: [
        {name: 'HTML'},
        {name: 'CSS'},
        {name: 'XML'},
        {name: 'JavaScript'},
        {name: 'React.js'},
        {name: 'Node.js'},
        {name: 'Java'},
        {name: 'Kotlin'},
        {name: 'JetPack-Compose'},
        {name: 'SQL'},
        {name: 'NoSQL'},
        {name: 'Linux'},
        {name: 'Firebase'},
        {name: 'Git'},
        {name: 'Docker'},
        {name: 'Salesforce'},
      ],

      additionalSkills: [
        {name: 'MS Office'},
        {name: 'MATLAB'},
        {name: 'Visual Studio Code'},
        {name: 'Apache NetBeans'},
        {name: 'Object DB'},
        {name: 'MySQL'},
        {name: 'Android Studio'},
        {name: 'GitHub Desktop'},
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
