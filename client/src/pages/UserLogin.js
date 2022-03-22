import React from "react";
import UserLoginForm from "../components/UserLoginForm";
import NavHandler from "../components/Nav/NavHandler";
import Footer from "../components/Footer";

export default function UserLogin() {

  return (
    <>
        <div className="gradient--blue">
          <div className="max-width login--container">
            <NavHandler />

            <h2 className="teal--highlight">Welcome back!</h2>

            <span>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </span>

            <UserLoginForm />
          </div>
        </div>
        
        <Footer />
    </>
  );
}