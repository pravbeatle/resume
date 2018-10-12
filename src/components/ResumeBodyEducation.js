
import React from 'react';
import {List, ListItem} from 'material-ui';
import TabContainer from './TabContainer';

const educationListContainer = (education) => education.map(education =>
  <div>
    <ListItem disableGutters={true} className="card_skills" key="1">
      <div className="card__skills-text">{education.major}</div>
    </ListItem>

    <ListItem disableGutters={true} className="card_skills" key="2">
      <div className="card__skills-text">{education.graduationSemester}{education.graduationYear}</div>
    </ListItem>

    <ListItem disableGutters={true} className="card_skills" key="3">
      <div className="card__skills-text">{education.schoolName}</div>
    </ListItem>

    <ListItem disableGutters={true} className="card_skills" key="4">
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