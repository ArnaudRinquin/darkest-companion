import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSelectedLocationAndLength } from '../ducks/mission';
import { getMissionProvisions } from '../data/provisions';

const types = [
  'firewood',
  'food',
  'shovels',
  'antivenoms',
  'bandages',
  'herbs',
  'keys',
  'holyWaters',
  'torches',
];

function renderProvision(provision) {
  if (!provision.quantity) return null;
  return <div className="provision-item" key={`provision-${provision.label}`}>
    <img className='provision-icon' src={provision.icon} alt={provision.label}/>
    <div className='provision-quantity'>{provision.quantity}</div>
  </div>
}

export function MissionProvisions({selectedLocation, selectedLength}) {
  const provisions = getMissionProvisions(selectedLocation, selectedLength);

  return <section className="level-provisions centered">
    <h1>Provisions</h1>
    <div className='provisions-list'>
      {types.map(type => renderProvision(provisions[type]))}
    </div>
    <div className='provisions-total'>
      <span className='provisions-total-label'>Total Cost:</span>
      &nbsp;
      <img src='./icons/coin.png'/>
      &nbsp;
      <span className='provisions-total-amount'>{provisions.totalCost.toLocaleString()}</span>
    </div>
  </section>
}

export default connect(getSelectedLocationAndLength)(MissionProvisions);
