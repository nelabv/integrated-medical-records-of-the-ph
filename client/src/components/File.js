import React from "react";
import { FaFileAlt, FaDownload } from "react-icons/fa";

function File(props) {
  const { file, downloadFile } = props;

  return ( 
    <>
        <div className="file--tag">
            <FaFileAlt className="file--icon" size="1.5em" />
            <span>{file.Key}</span>
        </div>

        <FaDownload size="1.5em" 
                    className="download--icon"
                    onClick={() => downloadFile(file.Key)} />
    </>
  );
}

export default File;