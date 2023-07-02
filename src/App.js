import React, { Component } from 'react';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Certificate from './components/Certificate';
import Skills from './components/Skills';


class App extends Component {
  render() {

    const person = {
      avatar: 'https://unavatar.io/brian.vianac@outlook.com',
      name: 'Brian Alejandro Viana Clavijo',
      profession: 'Computer Systems Engineering student',
      bio: "🫶 I'm currently a student interested in the whole subject of programming, specifically as Mobile App Developer. Always learning new things 🫶",
      address: 'Mexico City, Mexico.',
      social: [
        {name: 'linkedin', url: 'https://www.linkedin.com/in/brian-viana7/'},
        {name: 'github', url: 'https://github.com/BrianVianaC7'},
      ],

      experience: [
        {title: 'Brian VianaC CV', 
        company: 'Personal', 
        startDate: 'Sep 2020', endDate: 'Jul 2023', 
        description: 'Developed a customized resume using Visual Studio, React.js, Node.js, and Docker to ensure efficient development, seamless integration, and enhanced portability. ',
        tech:'HTML5, CSS, JavaScript, React.js, Visual Studio Code, Surge.sh'},

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

        {title: 'Balanced-Tree-Maximum-Heap', 
        company: 'Personal', 
        startDate: 'Sep 2022', endDate: 'Dec 2022', 
        description: 'Built a maximum heap program of a balanced tree, using recursion for the heap, both to added new elements to the tree and eliminate elements of the tree.',
        tech:'C++, Code Blocks'}
      ],

      education: [
        {degree: 'Computer Systems Engineering', 
        institution: 'UVM', 
        startDate: 'Aug 2020', endDate: 'Currently', 
        description: 'University of the Valley of Mexico (UVM, Coyoacan Campus, Mexico City)', 
        subdescription: 'Sixth semester - Grade: 9.7' },

        {degree: 'English Immersion Program', 
        institution: 'BLI', 
        startDate: 'Dec 2021', endDate: 'Jan 2022', 
        description: 'Bouchereau Lingua International', 
        subdescription: 'Student exchange'},

        {degree: 'English as a Second Languaje', 
        institution: 'Tulare School', 
        startDate: 'Sep 2019', endDate: 'Jan 2020', 
        description: 'Tulare Adult School', 
        subdescription: 'Student exchange'},
      ],

      certificate: [
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

        {name: 'Object-oriented programming', 
        institution: 'Code', 
        date: 'Jan 2021', 
        description: 'Completed a comprehensive object-oriented programming course with a solid foundation in applied computer science principles, including data structures, algorithms, and software design patterns, using C++ as programming language.' },
      ],

      skills: [
        {name: 'HTML'},
        {name: 'CSS'},
        {name: 'XML'},
        {name: 'JavaScript'},
        {name: 'React.js'},
        {name: 'Node.js'},
        {name: 'Java'},
        {name: 'C++'},
        {name: 'Kotlin'},
        {name: 'JetPack-Compose'},
        {name: 'SQL'},
        {name: 'NoSQL'},
        {name: 'Linux'},
        {name: 'Firebase'},
        {name: 'Git'},
        {name: 'Docker'},
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