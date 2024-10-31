import { useParams } from "react-router-dom";
import artisans from "../data/artisans.json";
import emplacement from "../assets/images/emplacement.png";
import { useRef } from "react";
import emailjs from "emailjs-com";

const ArtisanDetailPage = () => {
    const { artisanId } = useParams();
    const artisan = artisans.find(artisan => artisan.id === artisanId);
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_sa3gvbu', 'template_qft4fmh', form.current, 'lrISvVA7pACNGcLuR')
        .then((result) => {
            alert("Message envoyé avec succès !");
        }, (error) => {
            alert("Une erreur est survenue, veuillez réessayer.");
        });

        e.target.reset();
    };

    return (
        <main>
            <section className="desktop">
                <div className="d-flex justify-content-between">
                    <div className="col-5">
                        <h1 className="fw-bold fs-2 mb-3">{artisan.name} - {artisan.specialty}</h1>
                        <div className="d-flex ms-5">
                            <p className="blue fs-5 fw-bold me-2 nowrap">À propos :</p>
                            <p>{artisan.about}</p>
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

            <section className="mobile">
                <h1 className="fw-bold fs-2 mb-3">{artisan.name} - {artisan.specialty}</h1>
                <div className="d-flex justify-content-between">
                    <p className="blue fs-5 fw-bold"><img src={emplacement} alt="icone de localisation"></img> {artisan.location}</p>
                    <p className="blue fs-5 fw-bold">Note : {artisan.note} / 5</p>
                </div>

                <div className="d-flex">
                    <p className="blue fs-5 fw-bold me-2 nowrap">À propos :</p>
                    <p className="mb-0">{artisan.about}</p>
                </div>

                {artisan.website && (
                    <>
                        <p className="blue fs-5 fw-bold d-inline">Site web : </p>
                        <a href={artisan.website} target="_blank" rel="noopener noreferrer" className="text-decoration-none d-inline">{artisan.website}</a>
                    </>
                )}
            </section>

            <section className="mt-4 contact">
                <h2 className="fw-bold fs-2 mb-3">Contacter l'artisan</h2>
                <form ref={form} onSubmit={sendEmail}>
                    <div className="form">
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Nom</label>
                            <input type="text" name="name" className="form-control border-2 rounded-pill" id="name" required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="subject" className="form-label">Objet</label>
                            <input type="text" name="subject" className="form-control border-2 rounded-pill" id="subject" required/>
                        </div>
                    </div>
                    
                    <div className="mb-3 message">
                        <label htmlFor="message" className="form-label">Message</label>
                        <textarea name="message" className="form-control border-2 rounded-4" id="message" rows="5" required></textarea>
                    </div>
                    <button type="submit" className="px-3 py-2 border-0 rounded-pill mt-3">Envoyer</button>
                </form>
            </section>
        </main>
    );
};

export default ArtisanDetailPage;