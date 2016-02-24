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

function stacks(quantity, stackSize) {
  const stacks = [];
  const rest = quantity % stackSize;
  for(let i = stackSize ; i < quantity ; i += stackSize) {
    stacks.push(stackSize);
  }
  if (rest) {
    stacks.push(rest);
  } else {
    stacks.push(stackSize);
  }
  return stacks;
}

function renderProvisionStack(provision, quantity, index) {
  return <div className="provision-item" key={`provision-${provision.label}-${index}`}>
    <img className='provision-icon' src={provision.icon(quantity)} alt={provision.label}/>
    <div className='provision-quantity'>{quantity > 1 ? quantity : ''}</div>
  </div>
}

function renderProvisionStacks(provision) {
  return stacks(provision.quantity, provision.stack)
    .map(renderProvisionStack.bind(null, provision));
}

export function MissionProvisions({selectedLocation, selectedLength}) {
  const provisions = getMissionProvisions(selectedLocation, selectedLength);

  return <section className="level-provisions centered">
    <h1>Provisions</h1>
    <div className='provisions-list'>
      {types.reduce((rendered, type) => {

        const provision = provisions[type];

        if (!provision.quantity) return rendered;

        return [
          ...rendered,
          ...renderProvisionStacks(provision),
        ]
      }, [])}
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
