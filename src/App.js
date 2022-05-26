import { LOCALES } from './i18n/locales';
import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import messages from './i18n/messages';
import { NavBar } from './shared/components/NavBar';
import { PokemonList } from './pages/pokemon-list/PokemonList';
import './App.scss';
import { PokemonReport } from './pages/pokemon-list/PokemonReport';

function App() {
  var lang = navigator.language === "es" ? LOCALES.SPANISH : navigator.language === "en-US" ? LOCALES.ENGLISH : LOCALES.ENGLISH;

  const [language, setLanguage] = useState(lang);
  return (
    <>
      <IntlProvider locale={language} messages={messages[language]}>
        <Router>
          <NavBar></NavBar>
          <Routes>
            <Route exact path='/' element={<PokemonList></PokemonList>} />
            <Route exact path='/report' element={<PokemonReport></PokemonReport>} />
            <Route
              path='*'
              element={
                <main style={{ padding: '1rem' }}>
                  <p>There's nothing here!</p>
                </main>
              }
            />
          </Routes>
        </Router>
      </IntlProvider>
    </>
  );
}

export default App;
