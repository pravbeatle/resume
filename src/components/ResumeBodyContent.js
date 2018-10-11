import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import {ResumeBodySkills, ResumeBodyExperience, ResumeBodyProjects, ResumeBodyEducation} from '../components';

const ResumeBodyContent = ({value, handleChangeIndex, educationList, experienceList, projectsList, notablesList, volunteeringList}) => (
  <SwipeableViews
    index={value}
    onChangeIndex={handleChangeIndex}
  >
    <ResumeBodyEducation education={educationList}  />
    <ResumeBodyExperience className='card__content-view' experiences={experienceList} />
    <ResumeBodyProjects className='card__content-view' experiences={projectsList} />
    <ResumeBodySkills skills={notablesList} />
    <ResumeBodySkills skills={volunteeringList} />
  </SwipeableViews>
  )

export default ResumeBodyContent;