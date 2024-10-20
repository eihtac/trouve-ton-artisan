import logo from '../assets/images/Logo.png';
import search from  '../assets/images/search.png';
import '../styles/main.scss';

const SiteHeader = () => {
    return (
        <header className='bg-white d-flex justify-content-between align-items-start px-5'>
            <img src={logo} alt='logo "Trouve ton artisan"' className='ms-5'></img> {/* ajouter lien*/}
            
            <div className='d-flex flex-column align-items-end me-5'>
                <form className='mt-3 border-bottom border-end border-primary d-flex justify-content-between'>
                    <input type='text' placeholder='Rechercher' className='border-0'/>
                    <button type='submit' className='border-0 bg-transparent'>
                        <img src={search} alt='icone loupe' className='mb-1' />
                    </button>
                </form>

                <nav>
                    <ul className='d-flex list-unstyled mt-4'>
                        <li className='me-5'>Bâtiment</li> {/*Ajouter liens*/}
                        <li className='me-5'>Services</li>
                        <li className='me-5'>Fabrication</li>
                        <li>Alimentation</li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default SiteHeader;
