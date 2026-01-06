import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { Helmet } from "react-helmet"; 
import "./App.css";

function App() {
  return (
    <>
      <Helmet>
        {/* Standard meta tags */}
        <meta
          name="description"
          content="Little Lemon is a family-owned Mediterranean restaurant offering fresh, traditional dishes. Reserve your table online quickly and easily."
        />
        <title>Little Lemon</title>

        {/* Open Graph tags for social media */}
        <meta property="og:title" content="Little Lemon Restaurant – Reserve a Table" />
        <meta
          property="og:description"
          content="Book a table at Little Lemon and enjoy authentic Mediterranean cuisine made with fresh ingredients."
        />
        <meta property="og:image" content="/images/little-lemon-og-image.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com" />
      </Helmet>
      <div className="app-layout">
        <Header />
        <Nav />
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default App;
