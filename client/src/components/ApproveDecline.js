import React from 'react';
import Admin from "../methods/admin";

export default function ApproveDecline(props) {
  const { docType, id } = props;

  console.log(docType, id)

  const handleClick = (id, status) => {
    if (docType === 'user') {
      Admin.approveOrDeclineUser(id, status)
          .then(response => {
              console.log(response);
              
              alert("Document approved successfully. Please refresh the page.");
          })
          .catch(error => alert("An error occurred. Please refresh the page."));
    } else if (docType === 'physician') {
      Admin.approveOrDeclinePhysician(id, status)
          .then(response => {
              console.log(response);

              alert("Document approved successfully. Please refresh the page.");
          })
          .catch(error => {
            console.log(error);

            alert("An error occurred. Please refresh the page.")
          });
    }
  }

  return (
      <div>
        <button onClick={() => { handleClick(id, false) }}>Decline</button>

        <button onClick={() => { handleClick(id, true) }}>Approve</button>
      </div>
  )
}