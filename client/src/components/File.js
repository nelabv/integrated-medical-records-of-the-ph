import React, { useEffect } from "react";
import { FaFileAlt, FaDownload } from "react-icons/fa";

function File(props) {
  const { file, downloadFile } = props;

  useEffect(() => {

  }, [])

  return ( 
      <div className="user-file" key={file.Key} >
        <div className="file-tag">
            <FaFileAlt size="1.5em" />
            <span>{file.Key}</span>
        </div>

        <FaDownload size="1.5em" 
                    onClick={() => downloadFile(file.Key)} />
      </div>
  );
}

export default File;