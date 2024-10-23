import logo from '../assets/images/Logo.png';
import search from  '../assets/images/search.png';

const SiteHeader = () => {
    return (
        <header className='bg-white d-flex justify-content-between'>
            <img src={logo} alt='logo "Trouve ton artisan"'></img> {/*ajouter lien*/}
            
            <div className='d-flex flex-column align-items-end mt-4'>
                <form className='border-bottom border-end border-primary d-flex justify-content-between'>
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
