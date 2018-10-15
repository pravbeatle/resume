import avatar from './images/LIC.png';

const ResumeData = {
  myName: 'Praveen Selvaraj',
  
  avatar: avatar,

  tabLabels: ['Education','Experience', 'Projects', 'Notables', 'Volunteering'],
  
  profileSummary: `Aspiring Roboticist.`,
  
  buttonList: [
    {
      label: 'Github',
      link: '<Link To Your GitHub>'
    },
    {
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/pravcfc/'
    },
  ],

  educationList: [
   {
     schoolName: 'College of Engineering Guindy, Anna University',
     schoolLocation: 'Chennai, India',
     major: 'Bachelor of Technology in Information Technology, First Class',
     graduationSemester: 'Fall ',
     graduationYear: '2015',
   },
  ],

  notablesList: [
    {
      label: 'Top 5 picks to look out for, from 124 startups in 6 countries in Asia. Sep 2016',
      link: 'https://www.techinasia.com/here-are-the-124-startups-exhibiting-in-bangalore-infographic'
    }, 
    {
      label: 'One of top 19 out of 300+ teams in Save the Hacker, hackathon by FreshDesk. May 2017',
      link: 'https://www.youtube.com/watch?v=00-Tq1aF0kA'
    }
  ],

  volunteeringList: [
    {
      label: 'Core Member of Students Association and Tech Lead, for cultural festival Techofes. 2015',
      link: 'https://en.wikipedia.org/wiki/Techofes'
    }, 
    {
      label: 'Students notehouse, built for ease of sharing educational resources. 2015',
      link: ''
    },
  ],

  projectsList: [
    {
      company: 'Robotics',
      projects: [
        {
          id: 1,
          value: ` Robotic arm with six degrees of freedom to perform pick and place actions using Inverse Kinematics.`,
          link: 'https://github.com/pravbeatle/Robotic-Arm-Pick---Place'
        },
        {
          id: 2,
          value: ` Training a deep neural network to identify and track a target in simulation and then issue commands to a drone to follow that target.`,
          link: 'https://github.com/pravbeatle/Follow-Me-DL'
        },
        {
          id: 3,
          value: `Using Monte Carlo Localization algorithm in ROS in conjunction with sensor data and a map of the world to estimate a mobile robot’s position and orientation.`,
          link: 'https://github.com/pravbeatle/Monte-Carlo-Localization'
        },
        {
          id: 4,
          value: `Using a ROS SLAM package and simulated sensor data to create an agent that can both map the world around it and localize within it.`,
          link: 'https://github.com/pravbeatle/Map-My-World'
        },
        {
          id: 5,
          value: `Train a robotic arm using Deep Q-netork to recognize an object from a set and draft a viable path to pick and place it.`,
          link: 'https://github.com/pravbeatle/DeepRL-Robotic-Arm'
        },
        {
          id: 6,
          value: `Build a home service robot simulation that can map, localize, and navigate in a given environment.`,
          link: 'https://github.com/pravbeatle/Home-Service-Bot'
        },
      ]
    },
    {
      company: 'Deep Learning',
      projects: [
        {
          id: 0,
          value: `Trained a Deep Neural Network to drive a car around a simulated track.`,
          link: 'https://github.com/pravbeatle/Behavior-Cloning'
        },
        {
          id: 1,
          value: `Sequence to sequence network for English to French translation.`,
          link: 'https://github.com/pravbeatle/UdacityDLNDProjects/tree/master/Term%203/term%203%20language%20translation'
        },
        {
          id: 2,
          value: `Convolutional neural network that to classifies CIFAR-10 images.`,
          link: 'https://github.com/pravbeatle/UdacityDLNDProjects/tree/master/Term%202'
        },
        {
          id: 3,
          value: `Using DCGAN on the CelebA dataset to generate images of novel and realistic human faces.`,
          link: 'https://github.com/pravbeatle/UdacityDLNDProjects/tree/master/Term%204'
        },
        {
          id: 4,
          value: `Recurrent neural network trained on scripts from The Simpson's to generate new scripts.`,
          link: 'https://github.com/pravbeatle/UdacityDLNDProjects/tree/master/Term%203/term%203%20tv%20script%20generation'
        },
        {
          id: 5,
          value: `Neural network that takes in various features to predict bike rentals.`,
          link: 'https://github.com/pravbeatle/UdacityDLNDProjects/tree/master/Term%201'
        },
      ] // end projects array
    }, // end project object
    {
      company: 'Miscellaneous',
      projects: [
        {
          id: 1,
          value: `A Raspberry Pi based facial recognition door openner.`,
          link: 'https://github.com/pravbeatle/facepi'
        },
        {
          id: 2,
          value: `A VR enabled news browsing app.`,
          link: 'https://github.com/zekedran/zeus'
        },
      ] // end projects array
    } // end project object
  ], // end experienceList array

  experienceList: [
  {
      company: 'Software Engineer',
      projects: [
        {
          id: 1,
          value: `LiftOff Software LLP, Bangalore, India`
        },
        {
          id: 2,
          value: `Feb 2017 - Dec 2017`
        },
      ] // end projects array
    },
    {
      company: 'Co-Founder, CTO',
      projects: [
        {
          id: 1,
          value: `Meals on Wheels Technology LLP, Chennai, India`
        },
        {
          id: 2,
          value: `July 2015 - Jun 2016`
        },
      ]
    },
    {
      company: 'Software Engineering Intern',
      projects: [
        {
          id: 1,
          value: `Codebrahma Technologies Pvt Ltd, Bangalore, India`
        },
        {
          id: 2,
          value: `May 2014 - Aug 2014`
        },
      ]
    } // end project object 
  ] // end experienceList array

} // end ResumeData

export default ResumeData;