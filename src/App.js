import React from 'react';
import Menu from './components/Menu';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import api from './data/api.json';

function App() {
  return (
    <>
      <Menu />

      <BannerMain
        videoTitle={api.categorias[0].videos[0].titulo}
        videoDescription="O que é Front-end? Trabalhando na área"
        url={api.categorias[0].videos[0].url}
      />

      <Carousel ignoreFirstVideo category={api.categorias[0]}/>

      <Carousel ignoreFirstVideo category={api.categorias[1]}/>

      <Carousel ignoreFirstVideo category={api.categorias[2]}/>

      <Footer />
    </>
  );
}

export default App;
