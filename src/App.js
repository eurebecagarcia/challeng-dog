import React, { useEffect, useState } from "react";
import { api } from "./services/api";
import styled from "styled-components";
import postit from "./assets/Imagem-Postit.png";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  figure {
    max-width: 500px;
    width: 400px;
    min-width: 400px;
    min-height: 400px;
    height: 450px;
    max-height: 500px;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  @media (max-width: 830px) {
    flex-direction: column-reverse;
  }
  @media (max-width: 500px) {
    figure {
      max-width: 300px;
      width: 250px;
      min-width: 200px;
      min-height: 300px;
      height: 250px;
      max-height: 300px;
    }
  }
`;

const BoxText = styled.div`
  width: 350px;
  height: 300px;
  margin-right: 40px;
  background-image: url(${postit});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  button {
    width: 200px;
    height: 40px;
    border: 10px solid;
    border-image-slice: 1;
    border-width: 5px;
    border-image-source: linear-gradient(to left, #743ad5, #d53a9d, red);
    margin-top: 20px;
  }

  @media (max-width: 830px) {
    margin-right: 0;
    margin-top: 40px;
  }
  @media (max-width: 500px) {
    width: 250px;
    height: 200px;
    h1 {
      font-size: 22px;
    }
  }
`;

export default function App() {
  const [image, setImage] = useState("");

  useEffect(() => {
    getDogs();
  }, []);

  const getDogs = async () => {
    const { data } = await api.get();
    setImage(data.message);
    console.log(data);
  };

  return (
    <Container>
      <BoxText>
        <h1>Tenha um dia Feliz :)</h1>
        <button onClick={() => getDogs()}>Clique aqui</button>
      </BoxText>
      <figure>
        <img src={image} />
      </figure>
    </Container>
  );
}
