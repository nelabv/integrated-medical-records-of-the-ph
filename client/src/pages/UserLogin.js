import React from "react";
import UserLoginForm from "../components/UserLoginForm";
import NavHandler from "../components/Nav/NavHandler";
import Footer from "../components/Footer";

export default function UserLogin() {

  return (
    <>
        <div className="gradient--blue">
          <div className="max-width login--container">
            <div className="form--div">
                  <NavHandler />

                  <h2 className="teal--highlight">Login as Patient</h2>

                  <span>Access your health records anywhere you go.</span>

                  <UserLoginForm />
            </div>
          </div>
        </div>
        
        <Footer />
    </>
  );
}