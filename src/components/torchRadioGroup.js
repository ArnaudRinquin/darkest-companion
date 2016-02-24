import React from 'react';
import RadioGroup from 'react-radio-group';
import Capitalize from '../components/capitalize';

const renderOption = (Radio, option) => {
  return <label className='torch-radio' key={`option-${option}`} htmlFor={option}>
    <Radio id={option} value={option}/>
    <i className='torch-radio-icon'/>
    <div className='torch-radio-label'>
      <Capitalize text={option}/>
    </div>
  </label>
}

const renderOptions = (options) => (Radio) => {
  return <div>{options.map(renderOption.bind(null, Radio))}</div>
}

export function TorchRadioGroup({selectedValue, onChange, name, options}) {
    return <div className="torch-radio-group">
      <RadioGroup name={name} selectedValue={selectedValue} onChange={onChange}>
          {renderOptions(options)}
      </RadioGroup>
    </div>
}
