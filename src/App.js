import React from 'react';
import './App.css';
import { Route, Routes} from "react-router-dom";
import Homepage from "./Components/Homepage/Homepage";
import Authentication from "./Components/Authentication/Authentication";


function App() {
  return (
    <div className="">
      <Routes>
  <Route path= "/" element={true?<Homepage/>:<Authentication/>}>

  </Route>
    </Routes>

    </div>
  );
}

export default App;
