import React from 'react'


export const Greeting = ({person,ToDo}) =>{ 
  const {name,country}=person;
  let newDate = new Date(); 
  let hrs =newDate.getHours();
  let greeting=(hrs<13);
  let timeofElt =greeting?<h3>Good Morning {name}</h3>:<h3>Good Evening {name}</h3>;
   let mins=newDate.getMinutes();
  let secs=newDate.getSeconds();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  let DateElt = (!country)?null:<h3>Date is : {date}:{month}:{year} {hrs}:{mins}:{secs} in {country}</h3>
 
return  ( <> {timeofElt} 
{DateElt}
<h3> Your action item for today {ToDo}</h3></>
)
} 