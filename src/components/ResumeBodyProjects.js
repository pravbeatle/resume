
import React from 'react';
import {ListItem, ListItemIcon, List, Typography, Divider} from 'material-ui';
import TabContainer from './TabContainer';
import RadioButtonCheckedIcon from 'material-ui-icons/RadioButtonChecked';
import {Button} from 'material-ui';
import LinkIcon from 'material-ui-icons/Link';

const experienceListItems = (experience) => experience.projects.map(project => 
    <ListItem key={project.id} disableGutters={true} className="card__experience">
      <ListItemIcon>
        <RadioButtonCheckedIcon className="card__icon"/>
      </ListItemIcon>
      <div className="card__experience-text">{project.value} 
        {project.link && 
         <Button dense onClick={() => { window.open(project.link) }} color="primary">
          <LinkIcon />
        </Button>}
      </div>
    </ListItem>
)

const experienceListContainer = (experiences) => experiences.map(experience =>
  <div key={experience.company}>
    <Typography type="headline" component="h2">
      {experience.company}
    </Typography>
    <Divider style={{margin: '10px 0'}} />
    {experienceListItems(experience)}
  </div>
)

const ResumeBodyProjects = ({experiences}) =>
  <div className='card__content-view'>
    <TabContainer>
      <List>
        {experienceListContainer(experiences)}
      </List>
    </TabContainer>
  </div>
  

export default ResumeBodyProjects;