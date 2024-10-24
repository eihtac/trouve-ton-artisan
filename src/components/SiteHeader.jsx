import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/images/Logo.png';
import search from  '../assets/images/search.png';

const SiteHeader = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            navigate(`/recherche/${searchTerm}`);
        }
    };

    return (
        <header className='bg-white d-flex justify-content-between'>
            <Link to="/"><img src={logo} alt='logo "Trouve ton artisan"'></img></Link>
            
            <div className='d-flex flex-column align-items-end mt-4'>
                <form className='border-bottom border-end border-primary d-flex justify-content-between' onSubmit={handleSearch}>
                    <input type='text' placeholder='Rechercher' className='border-0' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
                    <button type='submit' className='border-0 bg-transparent'><img src={search} alt='icone loupe' className='mb-1'/></button>
                </form>

                <nav>
                    <ul className='d-flex list-unstyled mt-4'>
                        <li className='me-5'><Link to="/artisans/Bâtiment" className='text-decoration-none'>Bâtiment</Link></li>
                        <li className='me-5'><Link to="/artisans/Services" className='text-decoration-none'>Services</Link></li>
                        <li className='me-5'><Link to="/artisans/Fabrication" className='text-decoration-none'>Fabrication</Link></li>
                        <li><Link to="/artisans/Alimentation" className='text-decoration-none'>Alimentation</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default SiteHeader;
