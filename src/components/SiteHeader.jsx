import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/images/Logo.png';
import search from '../assets/images/search.png';
import menu from '../assets/images/menu.png';

const SiteHeader = ({ setContentMargin }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
    const navigate = useNavigate();

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 1024);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            navigate(`/recherche/${searchTerm}`);
            setSearchOpen(false);
            setContentMargin(false);
        }
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        setContentMargin(!menuOpen || searchOpen);
    };

    const toggleSearch = () => {
        setSearchOpen(!searchOpen);
        setContentMargin (!searchOpen || menuOpen);
    };

    return (
        <header className='bg-white d-flex justify-content-between align-items-center position-relative shadow-sm'>
            <Link to="/"><img src={logo} alt='logo "Trouve ton artisan"' className='logo'/></Link>

            {!isMobile && (
                <div className='d-flex flex-column align-items-end mt-4'>
                    <form className='border-bottom border-end border-primary d-flex justify-content-between' onSubmit={handleSearch}>
                        <input type='text' placeholder='Rechercher' className='border-0' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
                        <button type='submit' className='border-0 bg-transparent mb-1'><img src={search} alt='icone loupe'/></button>
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
            )}

            {isMobile && (
                <div className='d-flex align-items-center'>
                    <button className='border-0 bg-transparent me-1' onClick={toggleSearch}><img src={search} alt='icone de recherche'/></button>

                    {searchOpen && (
                        <div className="w-100 position-absolute top-100 start-0 bg-white p-2 shadow-sm">
                            <form className='border-bottom border-end border-primary d-flex justify-content-between' onSubmit={handleSearch}>
                                <input type='text' placeholder='Rechercher' className='border-0 w-100' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
                                <button type='submit' className='bg-transparent border-0 mb-1'><img src={search} alt='icone loupe' /></button>
                            </form>
                        </div>
                    )}

                    <button className='border-0 bg-transparent' onClick={toggleMenu}><img src={menu} alt='icone de menu'/></button>

                    {menuOpen && (
                        <nav className="w-100 position-absolute top-100 start-0 bg-white p-2 shadow-sm">
                            <ul className='list-unstyled d-flex'>
                                <li className='me-5'><Link to="/artisans/Bâtiment" onClick={toggleMenu} className='text-decoration-none'>Bâtiment</Link></li>
                                <li className='me-5'><Link to="/artisans/Services" onClick={toggleMenu} className='text-decoration-none'>Services</Link></li>
                                <li className='me-5'><Link to="/artisans/Fabrication" onClick={toggleMenu} className='text-decoration-none'>Fabrication</Link></li>
                                <li><Link to="/artisans/Alimentation" onClick={toggleMenu} className='text-decoration-none'>Alimentation</Link></li>
                            </ul>
                        </nav>
                    )}
                </div>
            )}
        </header>
    );
};

export default SiteHeader;
