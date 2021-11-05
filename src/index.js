import React  from "react";
import reactDom from "react-dom";
import Navbar from "./Navbar";
import Header from "./Header";
import Panel1 from './Panel1';

// CSS
import './index.css'

function FirstPage() {
  return (
     <container>
      <Navbar />
      <Header></Header>
       <br/> <hr/>
       <Panel1 />
       <hr/>

     </container>
    )
}





reactDom.render(<FirstPage/>, document.getElementById('root'))

