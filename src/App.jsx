import SiteHeader from "./components/SiteHeader.jsx";
import SiteFooter from "./components/SiteFooter.jsx";
import HomePage from "./pages/HomePage.jsx";

function App() {
  return (
    <div className="App">
      <SiteHeader/>
      <HomePage/>
      <SiteFooter/>
    </div>
  );
}

export default App;
