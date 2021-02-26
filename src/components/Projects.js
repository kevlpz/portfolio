import ProjectCard from './ProjectCard'
import wskyImg from '../assets/wsky.png'

const Projects = () => {
    const info = {
        wsky: {
            description: 'wsky: E-commerce Application',
            img: wskyImg,
            summary: 'An online whiskey store I built. The app supports user creation and login, as well as adding, removing, and modifying items in a cart. I built the front-end with React and styled it using Sass. The app fully responsive - Everything will resize and reconfigure to fit any size screen. It\'s a single page application, so navigating the website is fast and smooth. I built the back-end using Node.js and Express. I designed the database schema for users and shopping carts, which are stored in a Postgres database. The app uses session-based authentication with Passport.js to manage users. Full application deployed on Heroku, with images hosted on Amazon Web Services.',
            bullets: [
                'Front-end built with React',
                'Responsive design',
                'Back-end built with Node.js and Express',
                'RESTful API',
                'Full CRUD operations',
                'Database schema built with knex',
                'SQL database with Postgres'
            ]
        }
    }

    return (
        <div className="projects">
            <h3>Projects</h3>
            <ProjectCard info={info.wsky} />
        </div>
    )
}

export default Projects