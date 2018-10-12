
import React from 'react';
import {ListItem, ListItemIcon, List} from 'material-ui';
import TabContainer from './TabContainer';
import CodeIcon from 'material-ui-icons/Code';
import LinkIcon from 'material-ui-icons/Link';
import {Button} from 'material-ui';


const skillListItems = (skills) => skills.map(skill => 
  <ListItem key={skill.label.replace(/ /g, '')} disableGutters={true} className="card_skills">
    <ListItemIcon>
      <CodeIcon className="card__icon" />
    </ListItemIcon>
    <div className="card__skills-text">
      {skill.label}
      {skill.link && 
         <Button dense onClick={() => { window.open(skill.link) }} color="primary">
          <LinkIcon />
        </Button>}
    </div>
  </ListItem>
)

const ResumeBodySkills = ({skills}) =>
  <div className='card__content-view'>
    <TabContainer>
      <List>
        {skillListItems(skills)}
      </List>
    </TabContainer>
  </div>

export default ResumeBodySkills;