
import React from 'react';
import {List, ListItem} from 'material-ui';
import TabContainer from './TabContainer';
import Spacer from './Spacer';

const educationListContainer = (education) => education.map(education =>
  <div>
    <ListItem disableGutters={true} className="card_skills">
      <div className="card__skills-text">{education.major}</div>
    </ListItem>

    <ListItem disableGutters={true} className="card_skills">
      <div className="card__skills-text">{education.graduationSemester}{education.graduationYear}</div>
    </ListItem>

    <ListItem disableGutters={true} className="card_skills">
      <div className="card__skills-text">{education.schoolName}</div>
    </ListItem>

    <ListItem disableGutters={true} className="card_skills">
      <div className="card__skills-text">{education.schoolLocation}</div>
    </ListItem>
  </div>
)

const ResumeBodyEducation = ({education}) =>
  <TabContainer>
    <List>
      {educationListContainer(education)}
    </List>
  </TabContainer>

export default ResumeBodyEducation;


// Sample Education Object
// educationList = [
//   {
//     schoolName: 'Kennesaw State University',
//     schoolLocation: 'Kennesaw, GA',
//     major: 'Computer Science',
//     graduationSemester: 'Fall',
//     graduationYear: '2016'
//   },
// ]