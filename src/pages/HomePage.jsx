import topRightArrow from '../assets/images/top-right-arrow.png';
import magnifyingGlass from '../assets/images/m-glass.png';
import message1 from "../assets/images/message1.png";
import message2 from "../assets/images/message2.png";
import artisans from "../data/artisans.json";
import RatingStars from '../components/RatingStars';
import buttonIcon from '../assets/images/button-icon.png';
import { Link } from 'react-router-dom';

const HomePage = () => {
    const artisansDuMois = artisans.filter(artisan => artisan.top);

    return (
        <main className="py-4">
            <section className='ps-5'>
                <h1 className="fw-bold fs-2">Comment trouver mon artisan ?</h1>
                <ol className="ms-5 fs-4 fw-bold">
                    <li className='ms-5 mt-3'>Choisir la catégorie d'artisanat dans le menu <img src={topRightArrow} alt='flèche pointant vers le menu' className='ms-2'/></li>
                    <li className='ms-5'>Choisir un artisan <img src={magnifyingGlass} alt="icone loupe" className='ms-2'/></li>
                    <li className='ms-5'>Le contacter via le formulaire de contact <img src={message1} alt="icone de message" className='ms-2'/></li>
                    <li className='ms-5'>Une réponse sera apportée sous 48h <img src={message2} alt="icone de message" className='ms-2'/></li>
                </ol>
            </section>

            <section className='ps-5'>
                <h2 className='fw-bold'>Artisans du mois :</h2> 
                <div className="row ms-5">
                    {artisansDuMois.map(artisan => (
                        <div key={artisan.id} className="artisan-card position-relative pt-3 mt-4 col-4 ps-5">
                            <div className='top-border position-absolute top-0 ms-1'></div>
                            <h3 className='fw-bold fs-4 ms-1'>{artisan.name}</h3>
                            <RatingStars note={artisan.note}/>
                            <p className='ms-1 mb-1'>{artisan.specialty}</p>
                            <p className='mb-2 ms-1'>{artisan.location}</p>
                            <Link to={`/artisan/${artisan.id}`}>
                                <button className='px-3 py-1 border-0 rounded-pill'>Voir la fiche  <img src={buttonIcon} alt="icone redirection" className='mb-1'/></button>  
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    )
}

export default HomePage;