import React, { useState, useEffect } from "react";
import { useAuth } from '../contexts/session';
import IndividualDrawer from "./IndividualDrawer";
import OrganizationDrawer from "./OrganizationDrawer";


function SideBar() {
  const auth = useAuth();
  

  const [role, setRole] = useState(auth?.session?.user ? auth?.session?.user.role : "");

  useEffect(() => {
    setRole(auth?.session?.user ? auth?.session?.user.role : "");
  }, [auth?.session?.user]);


   return (
    <div className="drawer">
      {role === "individual" ? ( <IndividualDrawer /> ) 
      : role === "organization" ? ( <OrganizationDrawer />)
       : ( <div> </div> )}
    </div>
  );
}

export default SideBar;
