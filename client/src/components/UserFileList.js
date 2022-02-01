import React, { useEffect, useState } from "react";
import User from "../methods/users";

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
    <div className="file-container">
      {
        isLoading 
          ? null
          : fileList.map((file) => {
            let fileName = file.Key;

            return (
              <div className="user-file" key={file.Key}>
                <span>{file.Key}</span>

                <button className="primary-btn" onClick={() => downloadFile(fileName)}>DOWNLOAD</button>
              </div>
            )
          })
      }
    </div>
  );
}

export default UserFileList;