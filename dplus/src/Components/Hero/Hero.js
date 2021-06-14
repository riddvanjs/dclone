import React from "react";
import { HeroSection, HeroContent, Meta, HeaderBrands, HeaderBGWrapper, HeaderImage } from "./hero.styled";
import Plans from "../Plans/Plans";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <HeroSection>
      <HeroContent>
        <Meta>
            <div className={styles.logoBlock}>
                <img src="/images/home/logo.svg" alt="Disney+"/>
            </div>
            <h1>Marvel Studios' Loki</h1>
            <h2>Original serie stream nu</h2>
            <HeaderBrands>
                <div className={styles.brandsWrapper}>
                    <img src="/images/home/brands.png" alt="brands"/>
                </div>
            </HeaderBrands>
            <Plans/>
            <p className="fine">*Abonnementsvoorwaarden van toepassing</p>
        </Meta>
        <HeaderBGWrapper>
            <HeaderImage desktop="/images/home/hero_desktop_loki.jpg" mobile="/images/home/hero_mobile_loki.jpg"/>
        </HeaderBGWrapper>
      </HeroContent>
    </HeroSection>
  );
}

export default Hero;
