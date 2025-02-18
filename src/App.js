import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './pages/AboutPage';
import { FeedbackProvider } from './context/FeedbackContext';
import AboutIconLink from './components/AboutIconLink';

function App() {
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        document.body.style.backgroundColor = darkMode ? '#001219' : '#ffffff';
        document.body.style.color = darkMode ? '#ffffff' : '#000000';
    }, [darkMode]);

    return (
        <FeedbackProvider>
            <Router>
                <Header darkMode={darkMode} />
                <div className="container">
                    <Routes>
                        <Route
                            exact
                            path="/"
                            element={
                                <>
                                    <FeedbackForm />
                                    <FeedbackStats />
                                    <FeedbackList darkMode={darkMode} />
                                    <AboutIconLink />
                                </>
                            }
                        ></Route>

                        <Route path="/about" element={<AboutPage />} />
                    </Routes>
                </div>
            </Router>
        </FeedbackProvider>
    );
}

export default App;
