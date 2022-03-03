import React from 'react';
import { useState } from 'react';
import LIsttodo from './LIsttodo';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import reactSpring, { animated, useSpring } from 'react-spring';

export default function Todo01(props) {

const [list, setlist] = useState("");
const [aler, setaler] = useState("dark")
const [listitem, setlistitem] = useState([]);
const [mode, setmode] = useState("Enable");
const [ward, setward] = useState({

  color:"black"
});

const Ravan=()=>{

  if(ward.color=="black")
  {
    setward({

      color:"white",
      background:"#041021"
    })
    setmode("Disable");
    setaler("info");
    document.body.style.backgroundColor="#041021"
  }
  else
  {
    setward({

      color:"black",
    })
    setaler("dark");
    document.body.style.backgroundColor="#ffffff";
    setmode("Enable");
  }
}

const addfun =()=>{

  setlistitem((olditems)=>{

    return [...olditems,list];
  });
  setlist("");

};

console.log(listitem);


const Deleteitem=(id)=>{
  console.log("deleted");
  setlistitem((olditems)=>{
    return olditems.filter((arry,index)=>{
      return index !== id;
    })
  })
}


  return <>
  <div className="container my-3" style={ward}>
  <nav className="navbar navbar-expand-lg navbar-light" style={ward}>
    <div className="container-fluid  my-5" style={ward}>

    <Fade right>
      <a className="navbar-brand" href="#" style={ward}><p class="fs-1">🅰️ Annex To-do app</p>
      <p class="fs-2">What's Plan for Today?</p>
    </a>
      </Fade>

      
    <div class="form-check form-switch">
    <input class="form-check-input" type="checkbox" onClick={Ravan} id="flexSwitchCheckChecked"/>
    <label class="form-check-label" for="flexSwitchCheckChecked">{mode} the dark mode</label>
  </div>

    </div>

  </nav>
  <form className="d-flex" >
  <input className="form-control me-2"  style={ward} type="search" placeholder="Add items" value={list} onChange={(event)=>{setlist(event.target.value)}} aria-label="Search"/> 
  <button type="button" className="btn btn-outline-success" onClick={addfun} >Add </button>
</form>

<div className="container my-5 mx-2">
<Zoom left>
<h3 className='fs-2'>preview</h3>
        </Zoom>
        
<div className="container my-3 mx-2">
  <ul>
 
{
  
  listitem.map((listval,index)=>{
  return <LIsttodo
  alert={aler} 
  title={listval}
  id={index}
  key={index}
  onselect={Deleteitem}/>
  

})}
</ul>
</div>




</div>


</div>


  
  
  
  
  </>;
}
