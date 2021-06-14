import React from "react";
import { Navbar, UserNavbar } from "./nav.styled";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";
import { Logo, ProfileEditButton } from "../Style/Layout";
import TokenService from "../../services/token.service";

function Nav() {
  const userToken = TokenService.hasToken();
  
  return !userToken ? (
    <Navbar>
      <Link to="/login" className={styles.loginBtn}>
        Inloggen
      </Link>
    </Navbar>
  ) : (
    <UserNavbar>
      <Logo src="/images/home/logo.svg" />
      <ProfileEditButton>Profiel bewerken</ProfileEditButton>
    </UserNavbar>
  );
}

export default Nav;
