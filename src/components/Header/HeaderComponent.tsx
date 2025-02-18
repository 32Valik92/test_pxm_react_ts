import React, {FC} from "react";
import {NavLink} from "react-router-dom";

const HeaderComponent: FC = () => {
   return (
      <header className="headerContainer">
         <NavLink to={"/"}>Home page</NavLink>
      </header>
   );
};

export {HeaderComponent};