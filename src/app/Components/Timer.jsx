'use client';
import { useEffect, useState } from 'react';
import Countdown from 'react-countdown';

export default function MyCountdown() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const eventDate = new Date(2026, 0, 17, 21, 0, 0);

  const pad = (n) => String(n).padStart(2, '0');

  return (
    <Countdown
      date={eventDate}
      renderer={({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
          return (
            <div
              style={{
                position: 'absolute',
                bottom: '12%',
                left: '50%',
                transform: 'translateX(-50%)',
                padding: '20px 32px',
                borderRadius: '24px',
                background: 'rgba(255,255,255,0.95)',
                color: '#716558',
                fontWeight: 700,
                boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
                textAlign: 'center',
                backgroundColor: '#bc894c',
              }}
            >
              ¡HOY ES EL DÍA!
            </div>
          );
        }

        return (
          <div
            style={{
              position: 'absolute',
              bottom: '12%',
              left: '50%',
              transform: 'translateX(-50%)',
              padding: '22px 26px',
              borderRadius: '26px',
              background: 'rgba(255,255,255,0.9)',
              color: '#716558',
              boxShadow: '0 10px 25px rgba(0,0,0,0.18)',
              backdropFilter: 'blur(6px)',
              zIndex: 10,
              width: '90%',
              maxWidth: '360px',
              textAlign: 'center',
            }}
          >
            {/* TÍTULO */}
            <div
              style={{
                fontSize: '14px',
                letterSpacing: '1px',
                marginBottom: '10px',
                fontWeight: 600,
              }}
            >
              TIEMPO QUE FALTA PARA LA FIESTA
            </div>

            {/* NÚMEROS */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '34px',
                fontWeight: 700,
                lineHeight: 1,
              }}
            >
              <span>{days}</span>
              <span>:</span>
              <span>{pad(hours)}</span>
              <span>:</span>
              <span>{pad(minutes)}</span>
              <span>:</span>
              <span>{pad(seconds)}</span>
            </div>

            {/* LABELS */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: '6px',
                fontSize: '11px',
                letterSpacing: '1px',
                opacity: 0.85,
              }}
            >
              <span>DÍAS</span>
              <span>HORAS</span>
              <span>MINUTOS</span>
              <span>SEGUNDOS</span>
            </div>
          </div>
        );
      }}
    />
  );
}
