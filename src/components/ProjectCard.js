import { useState } from 'react'
import Modal from 'react-modal'

Modal.setAppElement('#root')

const ProjectCard = ({ info }) => {
    const { img, summary, description, bullets } = info
    const [modalIsOpen, setModalIsOpen] = useState(false)

    return (
        <>
            <div className="project-card" onClick={() => setModalIsOpen(true)}>
                <img src={img} alt="wsky website preview" />
                <span>{description}</span>
            </div>
            <Modal className="modal-content" overlayClassName="modal-overlay" isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                <img src={img} alt="wsky website preview" />
                <p>{summary}</p>
                <ul>
                    {
                        bullets.map(bullet => <li>{bullet}</li>)
                    }
                </ul>
            </Modal>
        </>
    )
}

export default ProjectCard