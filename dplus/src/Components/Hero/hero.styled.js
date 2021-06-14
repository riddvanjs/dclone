import styled from "styled-components";

export const HeroSection = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  margin-right: auto;
  margin-left: 0;
  text-align: left;
`;

export const HeroContent = styled.div`
  padding: 80px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  position: relative;
  min-height: 100vh;
  align-items: center;
  @media only screen and (min-width: 480px) and (max-width: 768px) {
    padding: 80px 30px;
    min-height: 70vh;
    p {
      margin: 0 auto;
    }
  }
  @media only screen and (max-width: 479px) {
    padding: 80px 20px;
  }
`;

export const Meta = styled.div`
  max-width: 680px;
  margin-right: auto;
  margin-left: 0;
  width: 100%;
  height: auto;
  z-index: 2;
  font-family: Lato, sans-serif;
  p {
    &.fine {
      color: hsla(0, 0%, 75.3%, 0.8);
      font-size: 12px;
    }
  }

  h1 {
    line-height: 1.2;
    margin: 0 0 30px;
    font-family: Lato, sans-serif;
    font-size: 44px;
    margin-right: auto;
    margin-left: 0;
  }

  h2 {
    line-height: 1.2;
    font-size: 26px;
    font-family: Lato, sans-serif;
  }

  @media only screen and (min-width: 480px) and (max-width: 768px) {
    margin-top: 15%;
    p {
      text-align: center;
    }
    h1 {
      text-align: center;
      margin: 0 0 10px;
      font-size: 24px;
    }

    h2 {
      margin: 0 0 16px;
      text-align: center;
      font-size: 16px;
    }
  }
  @media only screen and (max-width: 479px) {
    p {
      text-align: center;
    }
    h1 {
      margin: 0 0 10px;
      font-size: 20px;
      text-align: center;
    }

    h2 {
      font-size: 14px;
      text-align: center;
    }
  }
`;

export const HeaderBrands = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 60px;
    margin-top: 0;
    margin-bottom: 0;
    padding: 0 80px;
    @media (max-width: 768px) {
        display: none;
    }
`

export const HeaderBGWrapper = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
    z-index: 1;
    @media only screen and (min-width: 480px) and (max-width: 768px) {
        display: block;
    }
    @media (max-width: 479px) {
        display: block;
    }
`

export const HeaderImage = styled.div`
    background-image: url(${({ desktop }) => desktop});
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    height: 100%;
    @media only screen and (min-width: 480px) and (max-width: 768px) {
        background-image: url(${({ mobile }) => mobile});
        background-size: 100%;
    }
    @media (max-width: 479px) {
        background-image: url(${({ mobile }) => mobile});
        font-size: 12px;
        background-position: top;
    }
`