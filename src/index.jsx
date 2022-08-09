import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Error from './components/Error';
import Footer from './components/Footer';
import Header from './components/Header';
import Freelances from './pages/Freelances';
import Home from './pages/Home';
import Results from './pages/Results';
import Survey from './pages/Survey';
import { SurveyProvider, ThemeProvider } from './utils/context';
import { GlobalStyle } from './utils/style/GlobalStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <ThemeProvider>
                <SurveyProvider>
                    <GlobalStyle />
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route
                            path="/survey/:questionNumber"
                            element={<Survey />}
                        ></Route>
                        <Route path="/results" element={<Results />}></Route>
                        <Route
                            path="/freelances"
                            element={<Freelances />}
                        ></Route>
                        <Route path="*" element={<Error />}></Route>
                    </Routes>
                    <Footer />
                </SurveyProvider>
            </ThemeProvider>
        </Router>
    </React.StrictMode>
);
