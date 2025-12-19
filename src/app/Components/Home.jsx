import React from 'react';
import Asistencia from '../images/cati_ASISTENCIA.jpg'
import Direccion from '../images/cati_DIRECCIÓN.jpg'
import Playlist from '../images/cati_PLAYLIST.jpg'
import Regalo from '../images/cati_REGALO.jpg'
import TeEspero from '../images/cati_TEESPERO.jpg'
import Fondo from '../images/cati_FONDO.jpg'
import Image from 'next/image';

const HomePage = () => {
    return (
        <div className="home-container">
            <div className="image-wrapper">
                <Image 
                    src={Fondo} 
                    alt="Fondo"
                    style={{ width: '100%', height: 'auto' }}
                    layout="responsive"
                />
            </div>
            <div className="image-wrapper">
                <Image 
                    src={TeEspero} 
                    alt="Te Espero"
                    style={{ width: '100%', height: 'auto' }}
                    layout="responsive"
                />
            </div>
            <div className="image-wrapper">
                <Image 
                    src={Asistencia} 
                    alt="Asistencia"
                    style={{ width: '100%', height: 'auto' }}
                    layout="responsive"
                />
            </div>
            <div className="image-wrapper">
                <Image 
                    src={Direccion} 
                    alt="Dirección"
                    style={{ width: '100%', height: 'auto' }}
                    layout="responsive"
                />
            </div>
            <div className="image-wrapper">
                <Image 
                    src={Playlist} 
                    alt="Playlist"
                    style={{ width: '100%', height: 'auto' }}
                    layout="responsive"
                />
            </div>
            <div className="image-wrapper">
                <Image 
                    src={Regalo} 
                    alt="Regalo"
                    style={{ width: '100%', height: 'auto' }}
                    layout="responsive"
                />
            </div>
        </div>
    );
};

export default HomePage;