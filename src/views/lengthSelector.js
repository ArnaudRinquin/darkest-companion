import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TorchRadioGroup } from '../components/torchRadioGroup';
import { LENGTHS, selectLength, getSelectedLength  } from '../ducks/mission';

export function LengthSelector({selectedLength, selectLength}) {
  return <section className="length-selector centered">
    <h1>Length</h1>
    <TorchRadioGroup options={LENGTHS} name="length" selectedValue={selectedLength} onChange={selectLength}/>
  </section>
}

export default connect(getSelectedLength, { selectLength })(LengthSelector);
