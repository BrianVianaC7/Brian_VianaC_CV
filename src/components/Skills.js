import React from 'react';

const Skills = (props) => {
  const mySkills = (
    <div>
      {props.skills.map((skll) =>
        <div className='item w33' key={skll.name}>
          <p>- {skll.name}</p>
        </div>
      )}
    </div>
  );
  
  const additionalSkills = (
    <div>
      {props.additionalSkills.map((skll) =>
        <div className='item w33' key={skll.name}>
          <p>- {skll.name}</p>
        </div>
      )}
    </div>
  );

  return (
    <div className='title'>
      <i className='fa fa-tasks'></i>
      <h2>TECH STACK</h2>
      <h3> FRONT-END AND BACK-END</h3>
      {mySkills}
      <h3> SOFTWARE</h3>
      {additionalSkills}
    </div>
  )
};

export default Skills;