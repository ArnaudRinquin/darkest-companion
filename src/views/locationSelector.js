import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TorchRadioGroup } from '../components/torchRadioGroup';
import { LOCATIONS, selectLocation, getSelectedLocation  } from '../ducks/mission';

export function LocationSelector({selectedLocation, selectLocation}) {
  return <section className="location-selector centered">
    <h1>Location</h1>
    <TorchRadioGroup options={LOCATIONS} selectedValue={selectedLocation} onChange={selectLocation} name='location'/>
  </section>
}

export default connect(getSelectedLocation, { selectLocation })(LocationSelector);
