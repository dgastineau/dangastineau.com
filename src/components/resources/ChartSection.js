import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as chartAction from '../../actions/chartActions';
import ChartContainer from './ChartContainer';
import { Comparison, Place, Relationship, Trend, Proportion, Frequency} from './ChartIcons';
import Infinite from 'react-infinite'


export class ChartSection extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { charts: this.props.charts }
    this.handleClick = this.handleClick.bind(this)
  }
  
  componentWillReceiveProps(nextProps) {
    this.setState({charts: Object.assign([], nextProps.charts)});
  }
  
  categoryMatch(list, match) {
    let boolVal = false
    for (let value of list) {
      if(value == match) {
        boolVal = true
        break
      }
    }
    return boolVal
  }
  
  handleClick(event) {
    let category = event.currentTarget.id
    const charts = this.props.charts
    let filteredCharts = charts.filter(chart => 
        this.categoryMatch(chart.fields.category, category))
    const allCharts = charts                      
    if (category == 'all') {
      this.setState({charts: allCharts})
    } else {
      this.setState({charts: filteredCharts})
    }
  }
  
  render() {
    const {charts} = this.state
    
    return (
      <div>
        <div className="headerDiv">
          <h1 className="pageTitle chartPageTitle" >charts i like</h1>
          <p className="subheader" >(select chart type to filter)</p>
        </div>
        <div className="iconSection" >
          <div className="iconDiv" id={'comparison'} onClick={this.handleClick} >
            <Comparison />
            <p className="caption">comparison</p>
          </div>
          <div className="iconDiv" id={'trend'} onClick={this.handleClick} >
            <Trend />
            <p className="caption">trend</p>
          </div>
          <div className="iconDiv" id={'place'} onClick={this.handleClick}>
            <Place />
            <p className="caption">place</p>
          </div>
          <div className="iconDiv" id={'relationship'} onClick={this.handleClick}>
            <Relationship />
            <p className="caption">relationship</p>
          </div>
          <div className="iconDiv" id={'proportion'} onClick={this.handleClick}>
            <Proportion />
            <p className="caption">proportion</p>
          </div>
          <div className="iconDiv" id={'frequency'} onClick={this.handleClick}>
            <Frequency />
            <p className="caption">frequency</p>
          </div>
          <div id={'all'} onClick={this.handleClick} >
            <p className="captionAll">all</p>
          </div>
        </div>
        <div className="chartSection">
          { charts.map(chart =>
              <ChartContainer key={chart.fields.id} chart={chart.fields} />
          )}
        </div>
      </div>
    )
  }
}


ChartSection.propTypes = {
  charts: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

ChartSection.contextTypes = {
  router: PropTypes.object
}

function mapStateToProps(state, ownProps) {
  return {
    charts: state.charts
  }
}   

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(chartAction, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChartSection)