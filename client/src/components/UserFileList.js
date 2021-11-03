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
  
  return (
    <>
      {
        isLoading 
          ? null
          : fileList.map((file) => {
            return (
              <div key={file.Key}>
                <span>{file.Key}</span>

                <button>DOWNLOAD</button>
              </div>
            )
          })
      }
    </>
  );
}

export default UserFileList;