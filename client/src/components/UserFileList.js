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
    User.downloadFile(fileName)
      .then((res) => {
        window.open(res.data.url)
    })
  }
  
  return (
    <>
      {
        isLoading 
          ? null
          : fileList.map((file) => {
            return (
              <div key={file.Key}>
                <span>{file.Key}</span>

                <button onClick={() => downloadFile(file.Key)}>DOWNLOAD</button>
              </div>
            )
          })
      }
    </>
  );
}

export default UserFileList;