import React from 'react'


export const Greeting = (props) =>{
  const {name,ToDo}=props;
  let newDate = new Date(); 
  let hrs =newDate.getHours();
  let greeting=(hrs<13);
  let timeofElt =greeting?<h3>Good Morning {name}</h3>:<h3>Good Evening {name}</h3>;
  let mins=newDate.getMinutes();
  let secs=newDate.getSeconds();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
return  ( <> {timeofElt} 
<h3>Date is : {date}:{month}:{year} {hrs}:{mins}:{secs}</h3>
<h3> Your action item for today {ToDo}</h3></>
)
} 