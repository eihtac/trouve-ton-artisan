const SiteFooter = () => {
    return (
        <footer className="d-flex justify-content-between px-5">
            <ul className="list-unstyled ms-5 mt-3 lh-lg">
                <li>Mentions légales</li> {/*Ajouter liens */}
                <li>Données personnelles</li>
                <li>Accessibilité</li>
                <li>Cookies</li>
            </ul>

            <address className="mt-3 border-start">
                101 cours Charlemagne <br />
                CS 20033 <br />
                69269 LYON CEDEX 02 <br />
                France <br />
                <a href="tel:0426734000" className="text-decoration-none">+33 (0)4 26 73 40 00</a>
            </address>
        </footer>
    );
};

export default SiteFooter;