import React from 'react';
import {PeopleItem} from './PeopleItem';
import styled from 'styled-components'; 

const Wrapper=styled.div`
        border:2px solid white;
        padding:32px;  

`;
export const PeopleList =({people_lst}) => {
    return(
        <Wrapper>
        {people_lst.map(person => (<PeopleItem person={person} key={person.name}/> ))}
        </Wrapper> );
}