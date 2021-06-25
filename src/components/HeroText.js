import React from "react";
import styled from "styled-components";

const HeroText = () => {
  return (
    <Container>
      <h1>NFT</h1>
      <h1>Anything.</h1>
      <h1>Anytime.</h1>
      <h1>Anywhere.</h1>
      <h3>Bitski connects communities, creators and brands through unique, ownable digital content. This is how the metaverse begins.</h3>
      <BtnContainer>
        <button
          className="readmore"
          type="button"
          href="https://docs.bitski.com/"
        >
          Read More
        </button>
        <button>Connect Apps</button>
      </BtnContainer>
    </Container>
  );
};

const BtnContainer = styled.div`
  margin-top: 2rem;
  button {
    background: #0a173a;
    border: none;
    padding: 0.9rem 1.1rem;
    color: #fff;
    border-radius: 1rem;
    box-shadow: 0px 13px 24px -7px #0a173a;
    transition: all 0.3s ease-in-out;
    margin: 0.5rem;
    font-size: 0.8rem;
    cursor: pointer;
    &:hover {
      box-shadow: 0px 17px 16px -11px #0a173a;
      transform: translateY(-5px);
    }
  }

  .readmore {
    color: #0a173a;
    background: transparent;
    border: 3px solid #0a173a;
    &:hover {
      box-shadow: 0px 17px 16px -11px #0a173a;
      transform: translateY(-5px);
    }
  }
`;

const Container = styled.div`
  padding: 1rem;
  h3 {
    color: #515151;
    font-weight: 500;
    font-size: 0.9rem;
    margin-bottom: 2rem;
    margin-top: 2rem;
  }
  h1 {
    font-size: 3.5rem;
    font-weight: 900;

    &:nth-of-type(1) {
      color: #ffcb45;
      font-weight: 700;
    }
    &:nth-of-type(2) {
      color: #0a173a;
    }
    &:nth-of-type(3) {
      color: #ffcb45;
    }
    &:nth-of-type(4) {
      color: #3c0473;
    }
  }
`;

export default HeroText;
