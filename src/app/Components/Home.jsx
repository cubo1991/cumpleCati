'use client'
import React from 'react';
import Asistencia from '../images/cati_ASISTENCIA.jpg';
import Direccion from '../images/cati_DIRECCIÓN.jpg';
import Playlist from '../images/cati_PLAYLIST.jpg';
import Regalo from '../images/cati_REGALO.jpg';
import TeEspero from '../images/cati_TEESPERO.jpg';
import Fondo from '../images/cati_FONDO.jpg';
import Image from 'next/image';
import Link from 'next/link';
import MyCountdown from './Timer';


const HomePage = () => {
  return (
    // CONTENEDOR GENERAL (fondo desktop)
    <div
      style={{
        minHeight: '100vh',
        background: '#716558', // luego cambiás el color
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      {/* CONTENEDOR STORY */}
      <div
        style={{
          maxWidth: '430px',
          width: '100%',
        }}
      >
        <div className="home-container">
      <div className="image-wrapper" style={{ position: 'relative' }}>
  <Image src={Fondo} alt="Fondo" layout="responsive" />
  <MyCountdown />
</div>

          <div style={{ position: 'relative', width: '100%' }}>
            <Image src={Direccion} alt="Dirección" layout="responsive" />

            <Link
              href="https://maps.app.goo.gl/fwnoKC1SyiY3QUJx8"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                position: 'absolute',
                top: '60%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                padding: '18px 48px',
                borderRadius: '999px',
                background: 'rgba(255,255,255,0.9)',
                color: '#716558',
                fontWeight: 700,
                fontSize: '20px',
                textDecoration: 'none',
                boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
                backdropFilter: 'blur(4px)',
                cursor: 'pointer',
                zIndex: 10,
              }}
            >
              Aquí
            </Link>
          </div>

          <div className="image-wrapper">
             <div style={{ position: 'relative', width: '100%' }}>
            <Image src={Asistencia} alt="Asistencia" layout="responsive" />
                  <Link
              href="https://forms.gle/jBMUTboGFGAvjzsV8"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                position: 'absolute',
                top: '60%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                padding: '18px 48px',
                borderRadius: '999px',
                background: 'rgba(255,255,255,0.9)',
                color: '#716558',
                fontWeight: 700,
                fontSize: '20px',
                textDecoration: 'none',
                boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
                backdropFilter: 'blur(4px)',
                cursor: 'pointer',
                zIndex: 10,
              }}
            >
              Confirmar
            </Link>
            </div>
          </div>

          <div className="image-wrapper">
            <Image src={Regalo} alt="Regalo" layout="responsive" />
          </div>

          <div className="image-wrapper">
            
          <div style={{ position: 'relative', width: '100%' }}>
            <Image src={Playlist} alt="Playlist" layout="responsive" />
              <Link
              href="https://open.spotify.com/playlist/22BALEg2TqsKwBk90PA7aX?si=P2ZrH20PT4KZODRfm2kHWw&pt=191953ca6467c81d73563e3a21284396&pi=2t7l6gjMTRSFm"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                position: 'absolute',
                top: '70%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                padding: '18px 48px',
                borderRadius: '999px',
                background: 'rgba(255,255,255,0.9)',
                color: '#716558',
                fontWeight: 700,
                fontSize: '20px',
                textDecoration: 'none',
                boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
                backdropFilter: 'blur(4px)',
                cursor: 'pointer',
                zIndex: 10,
              }}
            >
              Aquí
            </Link>
            </div>
          </div>

          <div className="image-wrapper">
            <Image src={TeEspero} alt="Te Espero" layout="responsive" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
