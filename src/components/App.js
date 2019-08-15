import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./Main";


const App = () => (
    <Router>
      <div className="onboarding">
        <Main />
      </div>
    </Router>
  
);

export default App;
