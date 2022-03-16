import React from "react";
import NavHandler from "../components/Nav/NavHandler";
import Footer from "../components/Footer";

export default function ViewPatientRecords({patientInfo}) {

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