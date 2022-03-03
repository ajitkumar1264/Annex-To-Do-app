import React from 'react';
import Fade from 'react-reveal/Fade';

export default function LIsttodo(props) {





  return <>
  <Fade top>
  <div className="container">
  <div className={`alert alert-danger alert-dismissible fade show fw-normal`} role="alert">
  <li className='mx-5'>{props.title}</li>
  <button type="button" className="btn-close" onClick={()=>{
      props.onselect(props.id)
  }} data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
  </div>
  </Fade>

  </>;
}
 