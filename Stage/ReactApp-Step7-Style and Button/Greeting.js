import React from 'react';
import styled from 'styled-components';

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
  const Wrapper =styled.div`
                border:2px solid white;
                padding:32px;              
                 `;
return  ( <Wrapper style={{color:'green',fontSize:'20px'}}> 
  {timeofElt} 
  {DateElt}
  <p style={{color: "blue",fontSize:'20px'}}> Your action item for today : {ToDo}</p>
</Wrapper>
)
} 