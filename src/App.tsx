import React, {useEffect, useState} from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import CustomNavbar from "./components/navbar/Navbar";
import SignUp from "./components/pages/SignUp";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient()
  /** useState */
  const [darkMode, setDarkMode] = useState(false)

  /** useEffect */
  useEffect(()=> {
    const localDarkMode = localStorage.getItem('darkMode') === 'true'
    setDarkMode(localDarkMode)
  },[])

  /** function */
  function fnDarkMode() {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
  }

  return (
      <QueryClientProvider client={queryClient}>
    <div className={`App ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`} style={{minHeight : '100vh'}}>
      <CustomNavbar darkMode={darkMode} toggleDarkMode={fnDarkMode}/>
        <Routes>
          <Route path='/signup' element={<SignUp darkMode={darkMode}/>}/>
          <Route path='/login'></Route>
          <Route path='/my'></Route>
        </Routes>
    </div>
      </QueryClientProvider>
  );
}

export default App;
