import React from "react";
import PhysicianLoginForm from "../components/PhysicianLoginForm";
import NavHandler from "../components/Nav/NavHandler";
import Footer from "../components/Footer";

export default function UserLogin() {
  return (
    <>
        <div className="gradient--blue">
          <div className="max-width login--container">
            <NavHandler />

            <h2 className="teal--highlight">Login as Physician</h2>

            <span>Access your patients' medical history. Send relevant files easily.</span>

            <PhysicianLoginForm />
          </div>
        </div>
        
        <Footer />
    </>
  );
}