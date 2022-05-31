import React, { useState, useEffect } from 'react';
import NoDocsForApproval from './NoDocsForApproval';
import ApproveDecline from './ApproveDecline';

export default function ForApprovalUsers(props) {
  const [isEmpty, setIsEmpty] = useState(false);
  const { documentArray } = props;

  useEffect(() => {
    if (documentArray.length <= 0) {
      setIsEmpty(true);
    }
  }, [documentArray])

  return (
    <>
        <h3 className='orange--highlight'>Users</h3>
        { isEmpty ? <NoDocsForApproval /> :
              documentArray.map((document) => {
                return (
                  <div key={document.patientID} className="for-approval--container" >
                        <span>USERNAME: {document.username}</span>
                        <span>FIRST NAME: {document.firstName}</span>
                        <span>LAST NAME: {document.lastName}</span>
                        <span>SEX: {document.sex}</span>
                        <span>DATE OF BIRTH: {document.birthdate}</span>
                        <span>BLOOD TYPE: {document.bloodType}</span>
                        <span>ADDRESS: {document.address.region}, {document.address.province}, {document.address.city}, {document.address.barangay}, {document.address.houseNumberStreet}</span>

                        <ApproveDecline docType="user" id={document._id} />
                  </div>
                )
          })
        }
    </>
  );
}
