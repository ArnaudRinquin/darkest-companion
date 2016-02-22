import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSelectedLocation } from '../ducks/mission';
import { getTipsForLocation } from '../data/tips';
import Capitalize from '../components/capitalize';

function renderTip(tip, index) {
  return <div className='tips-list-item' key={index}>
    <div className='tips-label'>{tip.label}</div>
    <div className='tips-details'>{tip.details}</div>
  </div>
}

function renderTipsCategory(category, tips) {
  if (!tips.length) {
    return null;
  }
  return <div className='tips-category-item' key={`category-${category}`}>
    <div className='tips-cell'>
      <div className={`tips-category tips-category-${category}`}>
        <Capitalize text={category}/>
      </div>
      <div  className='tips-list'>
        {tips.map(renderTip)}
      </div>
    </div>
  </div>
}

const tipCategories = ['effective', 'ineffective', 'dangers'];

export function LocationTips({selectedLocation}) {
  const tips = getTipsForLocation(selectedLocation);

  return <section className="location-tips">
    <h1 className='centered'>Tips</h1>
    <div className='tips-category-list'>
      {tipCategories.map(category => renderTipsCategory(category, tips[category]))}
    </div>
  </section>
}

export default connect(getSelectedLocation)(LocationTips);
