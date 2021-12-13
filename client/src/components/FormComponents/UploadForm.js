import React, { useState } from "react";
import Physician from "../../methods/physicians"

export default function UploadForm(props) {
  const { patientID } = props;

	const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);

  const changeHandler = (event) => {
		setSelectedFile({
      preview: URL.createObjectURL(event.target.files[0]),
      /* this contains the file we want to send */
      file: event.target.files[0]
    });

		setIsFilePicked(true);
	};

	const handleSubmission = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", selectedFile.file);
    formData.append("patientID", patientID);

/*     for (var key of formData.entries()) {
      console.log(key[0] + ", " + key[1]);
    } */

/*     const paramsForBucketUpload = {
      patientID: 1,
      recordType: 'IMAGE',
      _contentType: selectedFile.file.type,
      fileExtension: selectedFile.file.name.split('.').pop()
    } */
    
    Physician.uploadFileToPatientDatabase(formData, patientID)
      .then((res) => console.log(res));
	};

  return (
    <form onSubmit={handleSubmission} encType="multipart/form-data">
      <div>
          <input type="file" name="file" onChange={changeHandler} />
          { isFilePicked ? (
            <div>
              <p>File Name: {selectedFile.file.name}</p>
              <p>File Type: {selectedFile.filetype}</p>
              <p>
                Last Modified Date:{' '}
                {selectedFile.file.lastModifiedDate.toLocaleDateString()}
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