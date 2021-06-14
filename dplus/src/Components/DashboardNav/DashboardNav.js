import React from "react";
import { Nav, Logo, NavMenu } from "./styled.nav";
import styles from './Dashboard.module.css'

function DashboardNav(selectedUser) {
  const { selectedAvatar, selectedUsername } = selectedUser;

  return (
    <Nav>
      <Logo>
        <img src="/images/dashboard/logo.svg" alt="Disney+" />
      </Logo>
      <NavMenu>
        <a href="/dashboard">
          <img src="/images/dashboard/home-icon.svg" alt="HOME" />
          <span>HOME</span>
        </a>
        <a href="/search">
          <img src="/images/dashboard/search-icon.svg" alt="SEARCH" />
          <span>SEARCH</span>
        </a>
        <a href="/watchlist">
          <img src="/images/dashboard/watchlist-icon.svg" alt="WATCHLIST" />
          <span>WATCHLIST</span>
        </a>
        <a href="/originals">
          <img src="/images/dashboard/original-icon.svg" alt="ORIGINALS" />
          <span>ORIGINALS</span>
        </a>
        <a href="/movies">
          <img src="/images/dashboard/movie-icon.svg" alt="MOVIES" />
          <span>MOVIES</span>
        </a>
        <a href="/series">
          <img src="/images/dashboard/series-icon.svg" alt="SERIES" />
          <span>SERIES</span>
        </a>
      </NavMenu>
      <div className={styles.signOutWrapper}>
        <span>{selectedUsername}</span>
        <img src={`/${selectedAvatar}`} alt={selectedUsername}/>
      </div>
    </Nav>
  );
}

export default DashboardNav;
