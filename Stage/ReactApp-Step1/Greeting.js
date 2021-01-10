import React from 'react'


export const Greeting = () =>{

  let newDate = new Date(); 
  let hrs =newDate.getHours();
  let greeting=(hrs<13);
  let timeofElt =greeting?<h3>Good Morning</h3>:<h3>Good Evening</h3>;
  let mins=newDate.getMinutes();
  let secs=newDate.getSeconds();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
return  ( <> {timeofElt}
<h3>Time is:  {hrs}:{mins}:{secs}</h3> 
<h3>Date is : {date}:{month}:{year}</h3></>)
} 