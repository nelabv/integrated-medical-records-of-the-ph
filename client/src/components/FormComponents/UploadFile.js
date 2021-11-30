import React, { useState } from "react";
import Physician from "../../methods/physicians"

export default function UploadFile() {
	const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);

  const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsFilePicked(true);
	};

	const handleSubmission = (e) => {
    e.preventDefault();

    const paramsForBucketUpload = {
      patientID: 1,
      file: selectedFile,
      recordType: 'IMAGE',
      _contentType: selectedFile.type
    }

    Physician.uploadFileToPatientDatabase(paramsForBucketUpload)
	};

  return (
    <form onSubmit={handleSubmission}>
      <div>
          <input type="file" name="file" onChange={changeHandler} />
          { isFilePicked ? (
            <div>
              <p>File Name: {selectedFile.name}</p>
              <p>File Type: {selectedFile.type}</p>
              <p>
                Last Modified Date:{' '}
                {selectedFile.lastModifiedDate.toLocaleDateString()}
              </p>

              <button type="submit">Submit</button>
            </div>
          ) : (
            <p>Select a file to show details</p>
          )}
        </div>
    </form>
  );
}