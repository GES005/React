import React from 'react';

export const PeopleList =({people_lst}) => {
    return(
        <div> 
        {people_lst.map(person=>(
                <li>{person.name} expert in {person.Skill}  is working in {person.org}</li>

                 )
                 )
        }
        </div> );
}