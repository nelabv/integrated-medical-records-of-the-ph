import React, { useEffect, useState } from "react";
import User from "../methods/users";

function UserFileList() {
  const [fileList, setFileList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [downloadURL, setDownloadURL] = useState('');

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
        )
  }
  
  return (
    <>
      {
        isLoading 
          ? null
          : fileList.map((file) => {
            let fileName = file.Key;

            return (
              <div key={file.Key}>
                <span>{file.Key}</span>

                <button onClick={() => downloadFile(fileName)}>DOWNLOAD</button>
              </div>
            )
          })
      }
    </>
  );
}

export default UserFileList;