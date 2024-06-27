import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import FriendList from './FriendList';
import FriendDetail from './FriendDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Daftar Teman</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<FriendList />} />
          <Route path="/friend/:id" element={<FriendDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
