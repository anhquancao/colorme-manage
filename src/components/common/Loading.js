import React from 'react';

class Loading extends React.Component {
    constructor(props, context){
        super(props, context);
    }
  render() {
    return (
      <div style={{textAlign:"center"}}>Loading...</div>
    );
  }
}

Loading.propTypes = {
  // myProp: PropTypes.string.isRequired
};

export default Loading;
