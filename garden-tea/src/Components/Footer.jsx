import { useNavigate } from "react-router-dom";

function Footer() {
    const navigate = useNavigate();
    const newDate = new Date().getFullYear();

    return (
        <footer className="page-footer">
            <p>
                &copy; <span>{newDate} </span>
                <span className="footer-logo" onClick={() => navigate('/')}>Garden-to-Cup Tea </span>
                Built by <a href="https://github.com/Figensoftware" target="_blank">@FigenSoftware</a>
            </p>
        </footer>
    )
}

export default Footer
