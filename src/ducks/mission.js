import { selector } from '.';
import { createSelector } from 'reselect'

export function selectLocation(location) {
  return {
    type: 'SELECT_LOCATION',
    payload: location,
  }
}

export function selectLength(length) {
  return {
    type: 'SELECT_LENGTH',
    payload: length,
  }
}

export const LOCATIONS = [
  'ruins',
  'warrens',
  'weald',
  'cove',
];

export const LENGTHS = [
  'short',
  'medium',
  'long'
];

const initialState = {
  selectedLocation: LOCATIONS[0],
  selectedLength: LENGTHS[0],
};

export default function missionReducer(state = initialState, { type, payload }) {
  switch (type) {
    case 'SELECT_LOCATION':
      if (LOCATIONS.indexOf(payload) === -1) {
        throw new Error(`Invalid location selected: ${payload}`);
      }

      return {
        ...state,
        selectedLocation: payload,
      };
    case 'SELECT_LENGTH':
      if (LENGTHS.indexOf(payload) === -1) {
        throw new Error(`Invalid length selected: ${payload}`);
      }

      return {
        ...state,
        selectedLength: payload,
      };
    default:
      return state;
  }
}

export const getMission = createSelector(
  selector,
  ({mission}) => mission
)

export const getSelectedLocation = createSelector(
  getMission,
  ({selectedLocation}) => ({ selectedLocation })
)

export const getSelectedLength = createSelector(
  getMission,
  ({selectedLength}) => ({ selectedLength })
)

export const getSelectedLocationAndLength = createSelector(
  getSelectedLocation,
  getSelectedLength,
  ({selectedLocation}, {selectedLength}) => ({selectedLocation, selectedLength})
)
