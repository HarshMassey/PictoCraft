import React from 'react';
import { UilGithubAlt } from '@iconscout/react-unicons';
import { UilLinkedinAlt } from '@iconscout/react-unicons';
import { UilTwitterAlt } from '@iconscout/react-unicons';
import { UilBagAlt } from '@iconscout/react-unicons';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import { logo } from './assets';
import { Home, CreatePost } from './pages';

const App = () => (
  <BrowserRouter>
    <header className="w-full flex justify-between items-center bg-[#773b2b] sm:px-8 px-4 py-4 border-b border-b-[#000000]">
      <Link to="/">
        <img src={logo} alt="logo" className="w-28 object-contain" />
      </Link>

      <Link to="/create-post" className="font-inter font-medium bg-[#2b6777] text-white px-4 py-2 rounded-md border">Create</Link>
    </header>
    <main className="sm:p-8 px-4 py-8 w-full bg-[#2b6777] min-h-[calc(100vh-73px)]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </main>
  </BrowserRouter>
  
);

export default App;
