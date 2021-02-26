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
                        bullets.map((bullet, i) => <li key={i}>{bullet}</li>)
                    }
                </ul>
                <div className="modal-buttons">
                    <a href="https://github.com/kevlpz/wsky" target="_blank" rel="noreferrer">
                        <button>View front-end code</button>
                    </a>
                    <a href="https://github.com/kevlpz/wsky-be" target="_blank" rel="noreferrer">
                        <button>View back-end code</button>
                    </a>
                    <a href="https://wsky-fe.herokuapp.com/" target="_blank" rel="noreferrer">
                        <button>Visit site</button>
                    </a>
                </div>
                <span>(Please allow the server about 60 seconds to "wake up" when visiting site)</span>
            </Modal>
        </>
    )
}

export default ProjectCard