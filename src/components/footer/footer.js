import './footer.css'

export const Footer = () => {
    return (
        <footer className="footer-area">
            <div className="tasks-Board">
                <p className="activ-p">Active tasks: ()</p>
                <p className="finished-p">Finished tasks: ()</p>
            </div>
                <p className="kanban-board-by">Kanban board by NAME, YEAR</p>
        </footer>
    )
}


