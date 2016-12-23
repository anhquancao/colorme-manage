import React from 'react';

class Loading extends React.Component {
    constructor(props, context){
        super(props, context);
    }
  render() {
    return (
      <h5>Loading...</h5>
    );
  }
}

Loading.propTypes = {
  // myProp: PropTypes.string.isRequired
};

export default Loading;
