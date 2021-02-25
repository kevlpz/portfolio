const ProjectCard = ({ info }) => {
    const { img, description } = info

    return (
        <div className="project-card">
            <img src={img} alt="wsky website preview" />
            <span>{description}</span>
        </div>
    )
}

export default ProjectCard