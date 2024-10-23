import { useParams } from "react-router-dom";
import artisans from "../data/artisans.json";
import RatingStars from '../components/RatingStars';
import buttonIcon from '../assets/images/button-icon.png';

const ArtisansPage = () => {
    const { categoryName } = useParams();
    const filteredArtisans = artisans.filter(artisan => artisan.category === categoryName);

    return (
        <main className="py-4">
            <h1 className="ms-5 fw-bold fs-2">Liste des artisans de la catégorie {categoryName} :</h1>
            <div className="row ms-5">
                {filteredArtisans.map(artisan => (
                    <div key={artisan.id} className="artisan-card position-relative pt-3 mt-5 col-4 ps-5">
                        <div className='top-border position-absolute top-0 ms-1'></div>
                        <h3 className='fw-bold fs-4 ms-1'>{artisan.name}</h3>
                        <RatingStars note={artisan.note}/>
                        <p className='ms-1 mb-1'>{artisan.specialty}</p>
                        <p className='mb-2 ms-1'>{artisan.location}</p>
                        <button className='px-3 py-1 border-0 rounded-pill mb-4'>Voir la fiche <img src={buttonIcon} alt="icone redirection" className='mb-1'/></button> {/* Ajouter lien fiche artisan */}
                    </div>
                ))}
            </div>
        </main>
    )
}

export default ArtisansPage;
