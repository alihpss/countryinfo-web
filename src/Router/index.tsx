import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../view/Pages/Home';
import CountryInfo from '../view/Pages/CountryInfo';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:countryCode" element={<CountryInfo />} />
      </Routes>
    </BrowserRouter>
  );
}
