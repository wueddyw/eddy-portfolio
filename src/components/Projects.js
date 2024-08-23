import React from 'react';
import '../styling/Projects.css'; // Import the CSS file for styling
import demo from '../assets/demo.gif';
import project3 from '../assets/social_distance_sim.png'
import project1 from '../assets/reliable_udp.gif'
import 'font-awesome/css/font-awesome.min.css';
import Button from 'react-bootstrap/Button';

const projects = [
  {
    title: 'Reliable UDP Simulation',
    description: `Created a reliable UDP-based network protocol, facilitating data transmission between a client and server via proxy, simulating network unreliability.
    Utilized Python and network sockets in IPV4 to manage and generate a continuous stream of data transmission over a network, introducing dynamic features such as window-based transmission.
    Used Pyplot to show a dynamic visualization of real-time data flow for performance assessment.`,
    technologies: 'Python, IPv4',
    link: 'https://github.com/wueddyw/ReliableUDP-server-and-client',
    date: 'April 2024',
    image: project1,
  },
  {
    title: 'Bomberman Replica',
    description: `Created a replica of Bomberman game using Unity and Node.js within a team of 4. Developed UDP multicast and web sockets multiplayer feature and hosted on AWS.
    Wrote server and client-side code to work for a C# server using Microsoft WebSocket library.`,
    technologies: 'Unity, C#, Node.js',
    link: 'https://github.com/wueddyw/Unity-WebSocket-Bomberman',
    date: 'Dec 2020',
    image: demo, 
  },
  {
    title: 'Social Distancing Simulator',
    description: `Collaborated with a team of 4 to build a social distance awareness game for the COVID-19 pandemic. Implemented features including an in-game leaderboard that tracked the fastest game clears using JavaScript, HTML/CSS, and the Phaser 3 framework.
    Created the Firebase backend for hosting the game and facilitating authentication for the leaderboard.`,
    technologies: 'HTML, CSS, JavaScript, Phaser 3, Firebase',
    link: 'https://github.com/wueddyw/Social-Distance-Simulator',
    date: 'Jan - April 2020',
    image: project3,
  },
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            {project.image && (
              <img src={project.image} alt={`${project.title} Demo`} className="project-gif" />
            )}
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-technologies">{project.technologies}</p>
              <p className="project-description">{project.description}</p>
              <p className="project-date">{project.date}</p>
              <Button 
                variant="primary" 
                href={project.link}
                target="_blank"
                className="download-button"
            >
                <i class="fa fa-github"/>Repository
            </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
