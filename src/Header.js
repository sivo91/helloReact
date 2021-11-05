import React, { Component } from 'react'

export class Header extends Component {
  render() {
    return (
      <div>
         <Head />
      </div>
    )
  }
}

const Head = () => {
  return (
   <section className="header">
     <HTML />
     <JS />
     <Reactt />
   </section>
  )
}

const HTML = () => {
  return(
      <section className="box1">
         <h3>HTML,CSS</h3>
         <img src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80" className="ocko" alt="ocko" />
      </section>
  )
}


const JS = () => {
  return (
     <section className="box2">
        <h3>JS</h3>
        <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1469&q=80" className="ocko" alt="shad" /> 
     </section>
  )
}

const Reactt = () => {
  return (
     <section className="box3">
        <h3>REACT</h3>
         <img src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80" className="ocko" alt="shad" />
     </section>
  )
}

export default Header
