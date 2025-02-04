import React, { useState, useEffect } from 'react';
import SendNuiCallback from '../../utils/sendnuicallback';

export function WeaponCards() {
  const [weaponConfigs, setWeaponConfigs] = useState([]);

  useEffect(() => {
    SendNuiCallback('getWeaponConfig', {}, (cb) => {
      setWeaponConfigs(cb);
    });
  }, []);

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '20px',
        padding: '20px',
      }}
    >
      {weaponConfigs.map((weapon, index) => {
        return (
          <div>
            <h1>{weapon.title}</h1>
            <h1>{weapon.description}</h1>
          </div>
        );
      })}
    </div>
  );
}
