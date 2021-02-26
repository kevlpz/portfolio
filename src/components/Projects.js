import ProjectCard from './ProjectCard'
import wskyImg from '../assets/wsky.png'

const Projects = () => {
    const info = {
        wsky: {
            description: 'wsky: E-commerce Application',
            img: wskyImg,
            bullets: [
                ''
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