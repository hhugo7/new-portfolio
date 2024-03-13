import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';


function App(props) {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/navbar" element={<Navbar/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}


/*
function AppLayout({children}) {
  if (window.location.pathname === "/") {
    return (
      <div>
        {children}
      </div>
    );
  } else {
    return (
      <div>
        <Header />
        {children}
        <Footer />
      </div>
    );
  }
}
*/




export default App;