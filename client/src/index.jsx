import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from 'react-router-dom';

import primaryLayout from "./primaryLayout.jsx";

class App extends React.Component {

  render(){
    return(
      <BrowserRouter>
        <Route path="/" component={primaryLayout} />
      </BrowserRouter>
    )}
};

ReactDOM.render(<App/>, document.getElementById('app'));
