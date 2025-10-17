import { BrowserRouter, Route, Routes } from 'react-router';

import { Navbar } from '@app/components/common';
import { AboutPage, HomePage } from '@app/pages';

import './styles.css';

export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage title="Home Page" />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
};
