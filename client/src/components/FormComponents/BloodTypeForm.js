import React from 'react';

function BloodTypeForm(props) {
  const { handleChange } = props;

  return (
    <>
      <label>Blood Type</label>
      <input type="radio" 
              id="A"
              name="bloodType" 
              value="A" 
              onChange={e => {
                handleChange(e)
              }} required/>
      <label htmlFor="A">A</label>      

      <input type="radio" 
              id="AB"
              name="bloodType" 
              value="AB" 
              onChange={e => {
                handleChange(e)
              }}/>
      <label htmlFor="AB">AB</label>    

      <input type="radio" 
              id="B"
              name="bloodType" 
              value="B" 
              onChange={e => {
                handleChange(e)
              }}/>
      <label htmlFor="B">B</label>   

      <input type="radio" 
              id="O"
              name="bloodType" 
              value="O" 
              onChange={e => {
                handleChange(e)
              }}/>
      <label htmlFor="O">O</label>   
    </>
  );
}

export default BloodTypeForm;
