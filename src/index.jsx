import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Error from './components/Error';
import Header from './components/Header';
import Freelances from './pages/Freelances';
import Home from './pages/Home';
import Results from './pages/Results';
import Survey from './pages/Survey';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/survey/:questionNumber" element={<Survey />}></Route>
                <Route path="/results" element={<Results />}></Route>
                <Route path="/freelances" element={<Freelances />}></Route>
                <Route path="*" element={<Error />}></Route>
            </Routes>
        </Router>
    </React.StrictMode>
);
