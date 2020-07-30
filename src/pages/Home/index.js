import React from 'react';
import Menu from '../../components/Menu';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';
import api from '../../data/api.json';

function Home() {
  return (
    <>
      <Menu />

      <BannerMain
        videoTitle={api.banner.title}
        videoDescription={api.banner.description}
        url={api.banner.url}
      />

      <Carousel ignoreFirstVideo category={api.categorias[0]} />

      <Carousel category={api.categorias[1]} />

      <Carousel category={api.categorias[2]} />

      <Footer />
    </>
  );
}

export default Home;
