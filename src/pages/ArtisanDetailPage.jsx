import { useParams } from "react-router-dom";
import artisans from "../data/artisans.json";
import emplacement from "../assets/images/emplacement.png";

const ArtisanDetailPage = () => {
    const { artisanId } = useParams();
    const artisan = artisans.find(artisan => artisan.id === artisanId);

    return (
        <main className="py-4">
            <section className="ps-5">
                <div className="d-flex justify-content-between">
                    <div className="col-4">
                        <h1 className="fw-bold fs-2 mb-3">{artisan.name} - {artisan.specialty}</h1>
                        <div className="d-flex ms-5">
                            <p className="blue fs-5 fw-bold me-2 nowrap">À propos :</p>
                            <p className="mb-0">{artisan.about}</p>
                        </div>
                    </div>
                    <div className="col-3 lh-1">
                        <p className="blue fs-5 fw-bold me-5"><img src={emplacement} alt="icone de localisation"></img> {artisan.location}</p>
                        <p className="blue fs-5 fw-bold">Note : {artisan.note} / 5</p>
                        {artisan.website && (
                            <>
                                <p className="blue fs-5 fw-bold d-inline">Site web : </p>
                                <a href={artisan.website} target="_blank" rel="noopener noreferrer" className="text-decoration-none d-inline">{artisan.website}</a>
                            </>
                        )}
                    </div>
                </div>               
            </section>

            <section className="mt-4 ps-5">
                <h2 className="fw-bold fs-2 mb-3">Contacter l'artisan</h2>
                <form className="mx-5">
                    <div className="row">
                        <div className="mb-3 col-6">
                            <label htmlFor="name" className="form-label">Nom</label>
                            <input type="text" className="form-control border-2 rounded-pill" id="name" />
                        </div>
                        <div className="mb-3 col-6">
                            <label htmlFor="subject" className="form-label">Objet</label>
                            <input type="text" className="form-control border-2 rounded-pill" id="subject" />
                        </div>
                    </div>
                    
                    <div className="mb-3 w-50">
                        <label htmlFor="message" className="form-label">Message</label>
                        <textarea className="form-control border-2 rounded-4" id="message" rows="5"></textarea>
                    </div>
                    <button type="submit" className="px-3 py-2 border-0 rounded-pill mt-3">Envoyer</button>
                </form>
            </section>
        </main>
    );
};

export default ArtisanDetailPage;
