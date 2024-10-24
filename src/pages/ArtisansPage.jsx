import { useParams } from "react-router-dom";
import artisans from "../data/artisans.json";
import RatingStars from '../components/RatingStars';
import buttonIcon from '../assets/images/button-icon.png';
import { Link } from "react-router-dom";

const ArtisansPage = () => {
    const { categoryName, searchTerm } = useParams();

    const filteredArtisans = artisans.filter(artisan => {
        if (categoryName) {
            return artisan.category === categoryName;
        } else if (searchTerm) {
            return artisan.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                   artisan.specialty.toLowerCase().includes(searchTerm.toLowerCase()) || 
                   artisan.location.toLowerCase().includes(searchTerm.toLowerCase());
        }
        return true;
    });

    return (
        <main className="py-4">
            <h1 className="ms-5 fw-bold fs-2">{categoryName ? `Liste des artisans de la catégorie ${categoryName} :` : `Résultats pour "${searchTerm}"`}</h1>
            {filteredArtisans.length === 0 ? (
                <p className="ms-5 mt-3">Aucun artisan ne correspond à votre recherche.</p>
            ) : (
                <div className="row ms-5">
                    {filteredArtisans.map(artisan => (
                        <div key={artisan.id} className="artisan-card position-relative pt-3 mt-5 col-4 ps-5">
                            <div className='top-border position-absolute top-0 ms-1'></div>
                            <h3 className='fw-bold fs-4 ms-1'>{artisan.name}</h3>
                            <RatingStars note={artisan.note}/>
                            <p className='ms-1 mb-1'>{artisan.specialty}</p>
                            <p className='mb-2 ms-1'>{artisan.location}</p>
                            <Link to={`/artisan/${artisan.id}`}>
                                <button className='px-3 py-1 border-0 rounded-pill mb-4'>Voir la fiche <img src={buttonIcon} alt="icone redirection" className='mb-1'/></button> 
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </main>
    );
}

export default ArtisansPage;