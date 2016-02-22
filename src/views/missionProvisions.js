import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSelectedLocationAndLength } from '../ducks/mission';

export function LevelProvisions({selectedLocation, selectedLength}) {
  return <section className="level-provisions">
    Selected location: {selectedLocation}
    <br />
    Selected length: {selectedLength}
  </section>
}

export default connect(getSelectedLocationAndLength)(LevelProvisions);
