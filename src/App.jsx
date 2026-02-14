import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './pages/Home'
import Parks from './pages/Parks'
import ParkDetails from './pages/ParkDetails'
import About from './pages/About'
import Contact from './pages/Contact'
import Conservation from './pages/Conservation'

// Scroll to top on route change
function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

function App() {
    return (
        <Router>
            <div className="app">
                <ScrollToTop />
                <Navigation />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/parks" element={<Parks />} />
                        <Route path="/park/:id" element={<ParkDetails />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/conservation" element={<Conservation />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    )
}

export default App
