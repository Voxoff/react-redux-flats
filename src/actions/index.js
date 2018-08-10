import flats from '../../data/flats'

export function setFlats() {
  //mimic api

  return {
    type: 'SET_FLATS',
    payload: flats
  }
}

export function selectFlat(flat) {
  return {
    type: 'SELECT_FLAT',
    payload: flat
  }
}
