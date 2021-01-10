import React from 'react';
import './PeopleItem.css';

export const PeopleItem=({person}) => ( 
    <div className="list-item">
    <li>Name: {person.name} </li>
    <li>Skill: {person.Skill} </li> 
    <li>Organization: {person.org}</li> 
    </div>
); 