import React from "react";
import AdminLoginForm from "../components/FormComponents/AdminLoginForm";
import NavHandler from "../components/Nav/NavHandler";
import Footer from "../components/Footer";

export default function AdminLogin() {

  return (
    <>
        <div className="gradient--blue">
          <div className="max-width login--container">
            <div className="form--div">
                  <NavHandler />

                  <h2 className="teal--highlight">Login as Admin</h2>

                  <span>Enter valid credentials to access administrative privileges.</span>

                  <AdminLoginForm />

            </div>
          </div>
        </div>
        
        <Footer />
    </>
  );
}