import React from "react";

import { connect } from "react-redux";

const Welcome = props => {
  return (
    <div>
      {props.firstVisit ? (
        <p>Welcome to CryptoDash, please select your favorite coin to begin.</p>
      ) : null}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    firstVisit: state.page.firstVisit
  };
};

export default connect(mapStateToProps)(Welcome);
