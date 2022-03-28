import React from "react";
import {
        BrowserRouter,
        Routes,
        Route
} from "react-router-dom";

import { CalcFrete } from './pages/CalcFrete';


function App() {

  return ( 
    <BrowserRouter>
      <Routes>

        <Route path='/frete' element={<CalcFrete />} />
        <Route path='*' element={<h1>Página Inexiste</h1>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
