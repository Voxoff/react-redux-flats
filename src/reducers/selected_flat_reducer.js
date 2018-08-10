import flats from '../../data/flats'

const selectedFlatReducer = (state, action) => {
  if (state === undefined){
    return flats[0]
  }

  switch(action.type) {
    case 'SELECT_FLAT':
      return action.payload
    default:
      return state
  }
}

export default selectedFlatReducer;
