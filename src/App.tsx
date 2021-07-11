import React, { useEffect, useState } from 'react';

import logo from './logo.svg';
import './App.css';
import UserList from './UserList';

function App() {
  let [page, setPage] = useState(1);

  let[title, setTitle] = useState('Favorite');
  

  return (
    <div className = "items-start   space-y-8">
      <UserList page = {page} title = {title} />
      <button className = "px-7 py-3 rounded-full bg-green-400 border-2 font-bold" onClick = {() => setPage(page+1)}>
        Next
      </button>
    </div>
    
  );
}

export default App;
