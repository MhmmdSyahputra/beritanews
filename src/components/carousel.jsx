import React from "react";
import Carousel from "react-bootstrap/Carousel";

const componentCarousel = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="imgcarousel d-block w-100"
          src="https://cdn.discordapp.com/attachments/999546779882233869/1038854695818637444/image.png"
          alt="First slide" height='450'
        />
        <Carousel.Caption>
          <h3>Medan Tuan Rumah Event Nasional Anniversary ke-16 Fans Club MU</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="imgcarousel d-block w-100"
          src="https://cdn.discordapp.com/attachments/999546779882233869/1038856055003815936/image.png"
          alt="Second slide" height='450'
        />

        <Carousel.Caption>
          <h3>65,37 Juta Warga Indonesia Peroleh Perlindungan Dosis Penguat</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="imgcarousel d-block w-100"
          src="https://cdn.discordapp.com/attachments/999546779882233869/1038856627727634552/image.png"
          alt="Third slide" height='450'
        />

        <Carousel.Caption>
          <h3>Wapres Ma’ruf: Pemerintah Dukung BSI Masuk Top 10 Global Islamic Bank</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default componentCarousel;
