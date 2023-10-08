import React from 'react';

const Experience = (props) => {
  const myExperience = (
    <div>
      {props.experience.map((exp) =>
        <div className='item' key={exp.title}>
          <h3>{exp.title} | {exp.company} <span>{exp.startDate} - {exp.endDate}</span></h3>
          <p dangerouslySetInnerHTML={{ __html: exp.description.replace(/\n/g, '<br />') }}></p>
          <h3>Tech Stack: <span>{exp.tech}</span></h3>
        </div>
      )}
    </div>
  );

  return (
    <div className='title'>
      <i className='fa fa-suitcase'></i>
      <h2>EXPERIENCE</h2>
      {myExperience}
    </div>
  );
};

export default Experience;
