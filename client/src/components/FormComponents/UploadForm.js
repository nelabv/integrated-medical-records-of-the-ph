import React, { useState } from "react";
import { useHistory } from "react-router-dom"
import Physician from "../../methods/physicians";
import { AiOutlineUpload } from "react-icons/ai";

export default function UploadForm(props) {
  const { patientID } = props;
  
	const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);

  let history = useHistory();

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

    const params = {
      patientID,
      fileExtension: selectedFile.file.name.split('.').pop()
    }
    
    Physician.uploadFileToPatientDatabase(formData, params)
      .then((res) => {
        console.log(res)
        setIsFilePicked(false);

        if (res.status === 200) {
          history.push({
            pathname: '/confirmed',
            state: {
              test: "MONAYMONAY"
            },
          })
        }
      });
	};

  return (
    <>
      <form onSubmit={handleSubmission} encType="multipart/form-data" className="upload--form">
          <label className="custom-file-upload teal--highlight">
            <input type="file" name="file" onChange={changeHandler} />
            <AiOutlineUpload size="2em"/>
            Click here to browse for files.
          </label>



          { isFilePicked ? (
              <div className="file-upload-info">
                <p>File Name: {selectedFile.file.name}</p>
                <p>
                  Last Modified Date:{' '}
                  {selectedFile.file.lastModifiedDate.toLocaleDateString()}
                </p>

                <button type="submit" className="btn--secondary">Submit</button>
              </div>
            ) : null }
      </form>
    </>
  );
}