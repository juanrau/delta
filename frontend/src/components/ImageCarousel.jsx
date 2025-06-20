import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function ImageCarousel() {
  return (
    <div style={{ width: '100%', maxWidth: '1200px', margin: 'auto', marginTop: '2rem' }}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        style={{ height: '400px' }}
      >
        <SwiperSlide>
          <img src="/images/instalacioneselectricas.png" alt="Instalaciones eléctricas" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/panelesS.png" alt="Paneles solares" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/seguridad.png" alt="Sistemas de seguridad" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </SwiperSlide>
      </Swiper>
      <div className="row gy-4">
      <br></br>
      <hr></hr>
      
      </div>
    </div>
    
  );
}
