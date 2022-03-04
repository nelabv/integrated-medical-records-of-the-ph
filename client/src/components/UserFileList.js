import React, { useEffect, useState } from "react";
import User from "../methods/users";
import LoadingSpinner from "./LoadingSpinner";
import File from "./File";

function UserFileList() {
  const [fileList, setFileList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    User.fetchFileList()
    .then((res) => {
      setFileList(res.data.data)
      setIsLoading(false)
    })
  }, [])

  const downloadFile = async (fileName) => {
    const encodedURI = encodeURIComponent(fileName);

    await User.downloadFile(encodedURI)
        .then(res => 
          window.open(res.data.fileURL, "_blank")
        ) // Might not be the best practice. To replace for now
  }
  
  return (
    <div className="file--container">
      <h3>Your Files</h3>
      {
        isLoading 
          ? <LoadingSpinner />
          : fileList.map((file) => {

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