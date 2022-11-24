import React from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate,} from "react-router-dom"
import NewPlace from './places/pages/NewPlace';
import UserPlaces from './places/pages/UserPlaces';
import MainNavigation from './shared/components/Navigation/MainNavigation';

import Users from './users/pages/Users';

function App() {
  return (
<Router>
<MainNavigation />

<main>
  <Routes>
    <Route path='/' element={<Users/>} />
    <Route path='/:userId/places' element={<UserPlaces/>} />
    <Route path='/places/new' element={<NewPlace/>}/>
    <Route path='*' element={<Navigate to={"/"}/>} />
  </Routes>
  </main>
</Router>
  )
}

export default App;
