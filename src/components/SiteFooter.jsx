const SiteFooter = () => {
    return (
        <footer className="container-fluid w-100">
            <div className="row">
                <ul className="list-unstyled lh-lg col-6">
                    <li>Mentions légales</li> {/*Ajouter liens */}
                    <li>Données personnelles</li>
                    <li>Accessibilité</li>
                    <li>Cookies</li>
                </ul>

                <address className="border-start col-6 ps-5">
                    101 cours Charlemagne <br />
                    CS 20033 <br />
                    69269 LYON CEDEX 02 <br />
                    France <br />
                    <a href="tel:0426734000" className="text-decoration-none">+33 (0)4 26 73 40 00</a>
                </address>
            </div>
        </footer>
    );
};

export default SiteFooter;