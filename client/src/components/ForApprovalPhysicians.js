import React, { useState, useEffect } from 'react';
import NoDocsForApproval from './NoDocsForApproval';
import ApproveDecline from './ApproveDecline';

export default function ForApprovalPhysicians(props) {
  const [isEmpty, setIsEmpty] = useState(false);
  const { documentArray } = props;

  useEffect(() => {
    if (documentArray.length <= 0) {
      setIsEmpty(true);
    }
  }, [documentArray])

  return (
    <>
        <h3 className='orange--highlight'>Physicians</h3>
        { isEmpty ? <NoDocsForApproval /> :
              documentArray.map((document) => {
                return (
                  <div key={document.physicianID} className="for-approval--container" >
                        <span>PHYSICIAN ID: {document.physicianID}</span>
                        <span>LICENSE NUMBER: {document.licenseNumber}</span>
                        <span>SPECIALIZATION: {document.specialization}</span>
                        <span>USERNAME: {document.username}</span>
                        <span>FIRST NAME: {document.firstName}</span>
                        <span>LAST NAME: {document.lastName}</span>
                        <span>SEX: {document.sex}</span>
                        <span>DATE OF BIRTH: {document.birthdate}</span>

                        <ApproveDecline docType="physician" id={document._id} />
                  </div>
                )
          })
        }
    </>
  );
}
