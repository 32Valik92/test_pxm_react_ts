import React, {FC} from "react";
import {Outlet} from "react-router-dom";

import {FooterComponent, HeaderComponent} from "../components";

const MainLayout: FC = () => {
   return (
      <div className="mainLayout">
         <HeaderComponent/>
         <Outlet/>
         <FooterComponent/>
      </div>
   );
};

export default MainLayout;