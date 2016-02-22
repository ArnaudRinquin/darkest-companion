import React from 'react';
import LocationSelector from './locationSelector';
import LengthSelector from './lengthSelector';
import MissionProvisions from './missionProvisions';
import LocationCurios from './locationCurios';
import LocationTips from './locationTips';

export default function App() {
  return <div className='app'>
    <div className='selectorsAndProvisions'>
      <div className='selectors'>
        <LocationSelector/>
        <LengthSelector/>
      </div>
      <MissionProvisions/>
      <LocationTips/>
    </div>
    <LocationCurios/>
  </div>
}
