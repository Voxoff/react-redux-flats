import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setFlats } from '../actions';

import Flat from './flat'

class FlatList extends Component {
  // static defaultProps = {
  //   flats: [{
  //     "name": "Charm at the Steps of Montmartre",
  //     "imageUrl": "https://raw.githubusercontent.com/ lewagon/flats-boilerplate/master/images/flat1.jpg",
  //     "price": 164,
  //     "priceCurrency": "EUR"
  //   }]
  // }
  componentWillMount() {
    this.props.setFlats()
  }

  render() {
    return (
      <div className="flat-list col-sm-7">
        {this.props.flats.map((flat) => 
          <div className="col-sm-6" key={flat.name}>
            <Flat flat={flat} /> 
          </div>
        )}
      </div>
    );
  }
}

  function mapDispatchToProps(dispatch) {
    return bindActionCreators(
      { setFlats: setFlats },
      dispatch
    );
  }

  function mapStateToProps(state){
    return{
      flats: state.flats
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(FlatList)





















// const FlatList = ({ flats, method }) => {
//   return (
//     <div>
//       {flats.map((flat) => <div className="col-sm-6"  key={flat.name} >
//         <Flat flat={flat} method={method} />
//         </div>
//          )}
//     </div>
//   )
// }
// export default FlatList;

