import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as chartAction from '../../actions/chartActions';
import ChartSection from './ChartSection';
import Infinite from 'react-infinite'


class ResourcesPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  
  
  render() {
    const {charts} = this.props
    
    return (
      <Infinite containerHeight={500} 
                elementHeight={176}
                useWindowAsScrollContainer
                infiniteLoadBeginEdgeOffset={200}>
        <ChartSection charts={charts} />
      </Infinite>
    )
  }
}


ResourcesPage.propTypes = {
  charts: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    charts: state.charts
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(chartAction, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResourcesPage)
