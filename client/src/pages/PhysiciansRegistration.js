import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import NavHandler from '../components/Nav/NavHandler';
import Footer from "../components/Footer";
import PhysicianRegistrationForm from '../components/FormComponents/PhysicianRegistrationForm';

export default function PhysicianRegistration() {
  let history = useHistory();

  useEffect(() => {
    if (sessionStorage.getItem("AUTH")) {
      history.push("/dashboard")
    }
  }, [history])

  return (
    <>
      <NavHandler isNavTransparent={true}/>

      <div className='gradient--blue'>
          <div className='max-width registration--container'>
                  <h2 className='teal--highlight'>Register as Physician</h2>
                    <span>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</span>

                    <PhysicianRegistrationForm />
          </div>
      </div>

      <Footer />
    </>
  );
}
