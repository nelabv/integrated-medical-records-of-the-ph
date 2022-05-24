import React from 'react';

function BloodTypeForm(props) {
  const { handleChange } = props;

  return (
    <>
      <label>Blood Type</label>

      <label htmlFor="A" className='radio-btn'>
          <input type="radio" 
                  id="A"
                  name="bloodType" 
                  value="A" 
                  onChange={e => {
                    handleChange(e)
                  }} required/>
          <span className='label'>A</span>
      </label>      

      <label htmlFor="AB" className='radio-btn'>
          <input type="radio" 
                  id="AB"
                  name="bloodType" 
                  value="AB" 
                  onChange={e => {
                    handleChange(e)
                  }}/>
          <span className='label'>AB</span>
      </label>    

      <label htmlFor="B" className='radio-btn'>
          <input type="radio" 
                  id="B"
                  name="bloodType" 
                  value="B" 
                  onChange={e => {
                    handleChange(e)
                  }}/>  
          <span className='label'>B</span>
      </label>   

      <label htmlFor="O" className='radio-btn'>
          <input type="radio" 
                  id="O"
                  name="bloodType" 
                  value="O" 
                  onChange={e => {
                    handleChange(e)
                  }}/>  
          <span className='label'>O</span>
      </label>   
    </>
  );
}

export default BloodTypeForm;
