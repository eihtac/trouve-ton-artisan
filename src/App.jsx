import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SiteHeader from "./components/SiteHeader.jsx";
import SiteFooter from "./components/SiteFooter.jsx";
import HomePage from "./pages/HomePage.jsx";
import ArtisansPage from "./pages/ArtisansPage.jsx";
import ArtisanDetailPage from "./pages/ArtisanDetailPage.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <SiteHeader/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/artisans/:categoryName" element={<ArtisansPage/>}/>
          <Route path="/recherche/:searchTerm" element={<ArtisansPage/>}/>
          <Route path="/artisan/:artisanId" element={<ArtisanDetailPage/>}/>
        </Routes>
        <SiteFooter/>
      </div>
    </Router>
  );
}

export default App;