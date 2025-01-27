import React from "react";
import HiddenSideBar from "./../../components/Account/Components/HiddenSideBar/HiddenSideBar";
import MainContainer from "./../../components/Account/Components/MainContainer/MainContainer";
import Footer from './../../components/Welcome/Footer/Footer';
import Navbar from "./../../components/Welcome/Navbar/Navbar"
import { isLoggedIn } from "./../../utils/auth"

import "./Account.css";

/**
 * Footer
 * @type {Function}
 * @returns {jsx} Dummy Footer
 * <Footer/>
 * TODO : change this to the real one when they merge it
 *
 */


/**
 * this is the account and this renders NavBar , Hidden sideBar , MainContainer , Footer
 * @type {Function}
 * @returns {jsx} Account Component
 * <Account/>
 */
/*do not forget to handel hiddenSidebar*/
function Account() {
  return (
    <div className="account" data-test="Account">
      <Navbar data-test="NavBar" />
      <HiddenSideBar data-test="HiddenSideBar" />
      <MainContainer data-test="MainContainer" />
      <Footer data-test="Footer" />
    </div>
  );
}

export default Account;
