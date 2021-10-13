import React from "react";
import { withRouter } from 'react-router-dom';

function MedicationsForm(props) {
  const { prescriptionForm, handleChange } = props;

  return (
    <>
      <div style={{
        display: 'flex', 
        flexDirection: 'column',
        marginBottom: '1em'}}>
          
          <label>Notes</label>
          <textarea 
            style={{
              whiteSpace:'pre-line'
            }}
            value={prescriptionForm.medications}
            name="medications"
            onChange={e => {
              handleChange(e)
            }}
          />
      </div>
    </>
  );
}

export default withRouter(MedicationsForm)