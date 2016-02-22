import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSelectedLocation } from '../ducks/mission';
import { getCuriosForLocation } from '../data/curios';

function renderOutcome(outcome) {
  return <div className='curio-outcome'>
    <span className='curio-outcome-chances'>{outcome.chances}%</span>
    &nbsp;
    <span className='curio-outcome-label'>{outcome.type.label}</span>
  </div>
}

function renderCurioOption(option) {
  return <div className="curio-cell curio-option">
    <div className="curio-with">{option.with}</div>
    {option.outcomes.map(renderOutcome)}
  </div>
}

function renderCurio(curio) {
  return <div className='curio'>
    <div className='curio-cell curio-description'>
      <div className='curio-name'>{curio.name}</div>
      <div  className='curio-description'>{curio.description}</div>
    </div>
    {curio.options.map(renderCurioOption)}
  </div>
}

export function LocationCurios({selectedLocation}) {
  const curios = getCuriosForLocation(selectedLocation);

  return <section className="level-curios">
    <h1 className='centered'>Curios</h1>
    {curios.map(renderCurio)}
  </section>
}

export default connect(getSelectedLocation)(LocationCurios);
