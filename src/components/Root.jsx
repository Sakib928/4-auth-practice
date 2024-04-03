import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { Helmet } from "react-helmet-async";

const Root = () => {
  return (
    <div>
      <Helmet>
        <title>Auth Route Practice</title>
      </Helmet>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
