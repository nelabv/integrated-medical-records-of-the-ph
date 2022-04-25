import React, { useEffect } from "react";
import { useHistory, Link } from 'react-router-dom';
import NavHandler from "../components/Nav/NavHandler";
import Footer from "../components/Footer";

export default function UploadSuccess(props) {
  const data = props.history.location.state?.test;

  let history = useHistory();

  useEffect(() => {
    if (!data) {
      history.push('/')
    }
  }, [data, history])
  
  return (
    <>
        <NavHandler />

        <div className="gradient--blue">
          <div className="upload-success--container">
              <h2 className="teal--highlight">Uploaded file successfully</h2>
              <p>Your selected file can now be accessed through the respective patient's directory. </p>


      
              <Link to='/'>
                    <span>My Dashboard</span>
              </Link>
          </div>
        </div>

        <Footer />
    </>
  );
}