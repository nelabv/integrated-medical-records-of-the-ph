import React, { useState, useEffect } from "react";
import NavHandler from "../components/Nav/NavHandler";
import Footer from "../components/Footer";

export default function ViewPatientRecords({patientInfo}) {
  const [patientInformation, setPatientInformation] = useState(null);
  const [showLoading, setShowLoading] = useState(false);

/*   useEffect(() => {
    if (!patientInformation) {

    }
  }, []) */
  return (
    <> 
      <NavHandler isNavTransparent={false} />

      <div className="gradient--blue">
        <div className="dashboard--container">
            This is where files should be accessed
        </div>
      </div>

      <Footer />
    </>
  );
}