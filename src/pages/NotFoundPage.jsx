import errorImage from '../assets/images/error-404.png';
import buttonIcon from '../assets/images/button-icon.png';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <main>
            <h1 className="fw-bold fs-2 ms-5">Erreur 404</h1>
            <p className="ms-5 mt-4">Page non trouvée...</p>
            <img src={errorImage} alt="erreur 404" className='rounded-5 ms-5 d-block notfound mb-4'/>
            <Link to="/" className='px-3 py-1 border-0 rounded-pill ms-5 mt-3 button text-decoration-none'>Retourner à la page d'accueil <img src={buttonIcon} alt="icone de redirection"/></Link>
        </main>
    )
}

export default NotFoundPage;