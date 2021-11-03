import React  from "react";
import reactDom from "react-dom";
import Navbar from "./Navbar";
import Header from "./Header";

// CSS
import './index.css'

function FirstPage() {
  return (
     <container>
      <Navbar />
      <Header></Header>

     </container>
    )
}





reactDom.render(<FirstPage/>, document.getElementById('root'))

