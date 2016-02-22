import React, { Component } from 'react';
import RadioGroup from 'react-radio-group';
import { connect } from 'react-redux';
import { LOCATIONS, selectLocation, getSelectedLocation  } from '../ducks/mission';

function createOptions(Radio) {
  const options = LOCATIONS.map((location) => {
    return <span key={`location-option-${location}`}>
        <Radio id={location} value={location}/>
        <label htmlFor={location}>{location}</label>
      </span>
  });

  return <div>{options}</div>
}

export function LocationSelector({selectedLocation, selectLocation}) {
  return <section className="location-selector">
    <RadioGroup name="location" selectedValue={selectedLocation} onChange={selectLocation}>
      {createOptions}
    </RadioGroup>
  </section>
}

export default connect(getSelectedLocation, { selectLocation })(LocationSelector);
