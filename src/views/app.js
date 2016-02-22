import React from 'react';
import LocationSelector from './locationSelector';
import LengthSelector from './lengthSelector';
import MissionProvisions from './missionProvisions';

export default function App() {
  return <div className="app">
    <LocationSelector/>
    <LengthSelector/>
    <MissionProvisions/>
  </div>
}
