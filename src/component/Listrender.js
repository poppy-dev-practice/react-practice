import React from 'react'
import Person from '../Person';

function Listrender() {
   const persons = [
    {
    id:1,
    name:"pavi",
    clg:"mit",
    empolyment:"null"

   }, {
    id:2,
    name:"viki",
    clg:"gvmc",
    empolyment:"orthodoctor"

   }, {
    id:3,
    name:"nava",
    clg:"mmc",
    empolyment:"general doctor"

   }];

   const personlist = persons.map(person => <Person person = {person}></Person>)
  
   return (
     <div>{personlist}</div>)
}

export default Listrender