import React from "react";
import PhysicianLoginForm from "../components/PhysicianLoginForm";
import NavHandler from "../components/Nav/NavHandler";
import Footer from "../components/Footer";
import DevelopersNote from "../components/DevelopersNote";

export default function UserLogin() {
  const note = 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in.';


  return (
    <>
      <NavHandler />

      <div className='physicians-login-img'>
              <h3><span className='colored-text'>Physicians'</span> Portal</h3>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium</p>
      </div>

      <div className="default">
                <DevelopersNote devNote={note} />

                <PhysicianLoginForm />
            </div>

      <Footer />
    </>
  );
}