import React from "react";
import UserLoginForm from "../components/UserLoginForm";
import NavHandler from "../components/Nav/NavHandler";
import Footer from "../components/Footer";
import DevelopersNote from "../components/DevelopersNote";

export default function UserLogin() {
  const note = 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in.';

  return (
    <>
        <NavHandler />
            <div className='login-portal-image'>
              <h3><span className='colored-text'>Patients'</span> Portal</h3>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium</p>
            </div>


            <div className="default">
                <DevelopersNote devNote={note} />

                <UserLoginForm />


            </div>
        <Footer />
    </>
  );
}