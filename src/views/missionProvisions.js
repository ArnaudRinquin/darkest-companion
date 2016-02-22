import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSelectedLocationAndLength } from '../ducks/mission';
import { getMissionProvisions } from '../data/provisions';

export function MissionProvisions({selectedLocation, selectedLength}) {
  const provisions = getMissionProvisions(selectedLocation, selectedLength);

  return <section className="level-provisions">
    <h1 className='centered'>Provisions</h1>
    <div><span className='provision-amount'>{provisions.food}</span> Food</div>
    <div><span className='provision-amount'>{provisions.shovels}</span> Shovels</div>
    <div><span className='provision-amount'>{provisions.antivenoms}</span> Antivenoms</div>
    <div><span className='provision-amount'>{provisions.bandages}</span> Bandages</div>
    <div><span className='provision-amount'>{provisions.herbs}</span> Medicinal Herbs</div>
    <div><span className='provision-amount'>{provisions.keys}</span> Skeleton Keys</div>
    <div><span className='provision-amount'>{provisions.holyWaters}</span> Holy Waters</div>
    <div><span className='provision-amount'>{provisions.torches}</span> Torches</div>
  </section>
}

export default connect(getSelectedLocationAndLength)(MissionProvisions);
