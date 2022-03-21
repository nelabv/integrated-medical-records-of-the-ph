import React, { useEffect, useState } from "react";
import User from "../methods/users";
import LoadingSpinner from "./LoadingSpinner";
import File from "./File";

function UserFileList({patientID}) {
  const [isLoading, setIsLoading] = useState(true);
  const [fileArray, setFileArray] = useState(null);

  useEffect(() => {
    User.fetchFileList(patientID)
      .then(res => {
        setFileArray(res.data.data);
        setIsLoading(false);
        console.log('set')
      })
  }, [patientID])

  const downloadFile = async (fileName) => {
    const encodedURI = encodeURIComponent(fileName);

    await User.downloadFile(encodedURI)
        .then(res => 
          window.open(res.data.fileURL, "_blank")
        ) // Might not be the best practice. To replace for now
  }
  
  return (
    <div className="file--container">
      {
        isLoading 
            ? <LoadingSpinner />
            : fileArray.map((file) => {
                return (
                  <div className="file--individual" key={file.Key} >
                      <File file={file}
                            downloadFile={downloadFile} />
                  </div>
                )
       })
      }
    </div>
  );
}

export default UserFileList;