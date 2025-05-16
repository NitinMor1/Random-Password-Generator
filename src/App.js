
import './App.css';
import { useState } from 'react';
import { LC, NC, SC, UC } from './data/passChar';

function App() {

  let [uppercase,setuppercase]=useState(false)
  let [lowercase,setlowercase]=useState(false)
  let [number, setnumber]=useState(false)
  let [symbols,setsymbols]=useState(false)
  let [passwordlen,setpasswordlen]=useState(10)
  let [fpass,setpass]=useState('')
  let createpassword=()=>{
    let finalPass=''
    let charset=''
    if(lowercase || uppercase || number || symbols){
      if(uppercase)
        charset+=UC
      
      if(lowercase)charset+=LC
      if(number)charset+=NC
      if(symbols)charset+=SC
      for(let i=0;i<passwordlen;i++){
        finalPass+=charset.charAt(Math.floor(Math.random()*charset.length))
      }
      setpass(finalPass);
    }else{
      alert('Please select on checkBox!....')
    }
  }

  let copypass =()=>{
    navigator.clipboard.writeText(fpass)
  }
  return (
    <>
      <div className='passwordBox'>
        <h2>Password Generator</h2>

        <div className='passwordBoxin'>
          <input type='text'value={fpass} readOnly />
          <button onClick={copypass}>Copy</button>
        </div>
        <div className='passlength'>
          <label>Password Length</label>
          <input type='number' max={20} min={10} value={passwordlen} onChange={(event)=> setpasswordlen(event.target.value)} />
        </div>
        <div className='passlength'>
          <label>Include uppercase letters</label>
          <input type='checkbox' checked={uppercase} onChange={()=>setuppercase(!uppercase)}></input>
        </div>
        <div className='passlength'>
          <label>Include lowercase letters</label>
          <input type='checkbox' checked={lowercase} onChange={()=>setlowercase(!lowercase)}></input>
        </div>
        <div className='passlength'>
          <label>Include numbers</label>
          <input type='checkbox' checked={number} onChange={()=>setnumber(!number)}></input>
        </div>
        <div className='passlength'>
          <label >Include symbols</label>
          <input type='checkbox' checked={symbols} onChange={()=>setsymbols(!symbols)}></input>
        </div>
        <button className='btn' onClick={createpassword}>Generate password</button>
      </div>

    </>
  );
}

export default App;
