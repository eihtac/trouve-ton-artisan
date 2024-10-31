const SiteFooter = () => {
    return (
        <footer className="w-100">
            <div>
                <ul className="list-unstyled lh-lg">
                    <li>Mentions légales</li>
                    <li>Données personnelles</li>
                    <li>Accessibilité</li>
                    <li>Cookies</li>
                </ul>

                <address>
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