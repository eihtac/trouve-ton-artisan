import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import SiteHeader from "./components/SiteHeader.jsx";
import SiteFooter from "./components/SiteFooter.jsx";
import HomePage from "./pages/HomePage.jsx";
import ArtisansPage from "./pages/ArtisansPage.jsx";
import ArtisanDetailPage from "./pages/ArtisanDetailPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

function App() {
    const [contentMargin, setContentMargin] = useState(false);

    return (
        <Router>
            <div className="App">
                <SiteHeader setContentMargin={setContentMargin}/>
                <div className={contentMargin ? 'content content-margin' : 'content'}>
                    <Routes>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="/artisans/:categoryName" element={<ArtisansPage/>}/>
                        <Route path="/recherche/:searchTerm" element={<ArtisansPage/>}/>
                        <Route path="/artisan/:artisanId" element={<ArtisanDetailPage/>}/>
                        <Route path="*" element={<NotFoundPage/>}/>
                    </Routes>
                </div>
                <SiteFooter/>
            </div>
        </Router>
    );
}

export default App;