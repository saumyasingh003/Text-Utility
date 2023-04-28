import React from 'react'
import {Link} from 'react-router-dom'
export default function Navbar(props) {
  const popAlert = (mode) =>{
    alert(`${mode} mode is activated`);
  }
 
  
  return (
  <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
  <div className={`container-fluid `} >
    
    <Link className={`navbar-brand text-${props.mode ==='light'?'#395e93':'light'} `} to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className={`collapse navbar-collapse `} id="navbarSupportedContent">
      <ul className={`navbar-nav me-auto mb-2 mb-lg-0 `}>
        <li className="nav-item">
          <Link className={`nav-link active text-${props.mode ==='light'?'#395e93':'light'}`} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link active text-${props.mode ==='light'?'#395e93':'light'}`} to="/about">About</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">{props.Abouttext}</a>
        </li>
      </ul>
      <div className="d-flex">
      <div className="bg-primary rounded mx-2" onClick={()=>{props.toggleMode('primary'); popAlert('primary');}}style={{height:'20px' , width:'20px',cursor:'pointer'}}></div>
      <div className="bg-danger rounded mx-2" onClick={()=>{props.toggleMode('danger'); popAlert('danger');}} style={{height:'20px' , width:'20px',cursor:'pointer'}}></div>
      <div className="bg-warning rounded mx-2" onClick={()=>{props.toggleMode('warning'); popAlert('warning');}}style={{height:'20px' , width:'20px',cursor:'pointer'}}></div>
      <div className="bg-success rounded mx-2" onClick={()=>{props.toggleMode('success'); popAlert('success');}}style={{height:'20px' , width:'20px',cursor:'pointer'}}></div>
      </div>


      <div className={`Form-check Form-switch } text-${props.mode ==='light'?'#395e93':'light'}`}>
      <input className="Form-check-input" style = {{marginRight:'5px'}} onClick={()=>props.toggleMode(null)} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
      <label className="Form-check-label"  htmlFor="flexSwitchCheckDefault"> Dark Mode</label>
     </div>
  </div>
  </div>

 </nav>
  )
}






    // Navbar.prototype={title : PropTypes.string ,
     //                Abouttext :PropTypes.string ,
     //              }


    // Navbar .defaultProps ={
    //     title :'set title here',
    //     Abouttext :'set about here'
    // }