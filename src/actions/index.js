import flats from '../../data/flats'

export function setFlats() {
  //mimic api
  
  return {
    type: 'SET_FLATS',
    payload: flats
  }
}
