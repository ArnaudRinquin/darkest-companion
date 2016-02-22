import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSelectedLocationAndLength } from '../ducks/mission';
import { getMissionProvisions } from '../data/provisions';

export function MissionProvisions({selectedLocation, selectedLength}) {
  const provisions = getMissionProvisions(selectedLocation, selectedLength);

  return <section className="level-provisions">
    <h1 className='centered'>Provisions</h1>
    <div>{provisions.food} Food</div>
    <div>{provisions.shovels} Shovels</div>
    <div>{provisions.antivenoms} Antivenoms</div>
    <div>{provisions.bandages} Bandages</div>
    <div>{provisions.herbs} Medicinal Herbs</div>
    <div>{provisions.keys} Skeleton Keys</div>
    <div>{provisions.holyWaters} Holy Waters</div>
    <div>{provisions.torches} Torches</div>
  </section>
}

export default connect(getSelectedLocationAndLength)(MissionProvisions);
