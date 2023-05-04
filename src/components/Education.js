import React from 'react';

const Education = (props) => {
  const myEducation = (
    <div>
      {props.education.map((edu) =>
        <div className='item' key={edu.degree}>
          <h3>{edu.degree} | {edu.institution} <span>{edu.startDate} - {edu.endDate}</span></h3>
          <p>{edu.description}</p>
          <p>- {edu.subdescription}</p>
        </div>
      )}
    </div>
  );
  return (
    <div className='title'>
      <i className='fa fa-university'></i>
      <h2>EDUCATION</h2>
      {myEducation}
    </div>
  )
};

export default Education;