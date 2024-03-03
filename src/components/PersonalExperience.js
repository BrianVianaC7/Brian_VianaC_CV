import React from 'react';

const PersonalExperience = (props) => {
    const myPersonalExperience = (
      <div>
        {props.personalExperience.map((exp) =>
          <div className='item' key={exp.Title}>
            <h3>
              {exp.title} | {exp.company}
              <a href={exp.url} target='_blank' rel="noopener noreferrer">
                <i className={'fa fa-external-link'}></i>
              </a>
            </h3>
            <p>{exp.description}</p>
            <h3>Tech Stack: <span>{exp.tech}</span></h3>
          </div>
        )}
      </div>
    );
    return (
      <div className='title'>
        <i className='fa fa-folder'></i>
        <h2>PERSONAL EXPERIENCE</h2>
        {myPersonalExperience}
      </div>
    )
  };
  
  export default PersonalExperience;