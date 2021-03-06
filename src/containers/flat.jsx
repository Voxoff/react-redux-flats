import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectFlat } from '../actions/index.js';


// COMPONENT OR CONSTANT?
class Flat extends Component {
  handleClick = () => {
    this.props.selectFlat(this.props.flat)

  }

  render() {
    let classes = "flat card"
    if(this.props.flat === this.props.selectedFlat) {
      classes += " selected"
    }

    return(
        <div className={classes}
        onClick={this.handleClick}
        style={{backgroundImage: `linear-gradient(
          rgba(0, 0, 0, 0.3), 
          rgba(0, 0, 0, 0.2)), url('${this.props.flat.imageUrl}')`}}>
          <h3 className="name">{this.props.flat.name}</h3>
          <h4 className="price">£{this.props.flat.price}</h4>
        </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectFlat: selectFlat },
    dispatch
  );
}

function mapStateToProps(state) {
  return{
    selectedFlat: state.selectedFlat 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Flat);
