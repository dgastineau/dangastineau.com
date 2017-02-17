import React, {PropTypes} from 'react';
import {Link} from 'react-router';


const ChartContainer = ({chart}) => {
  return (
    <figure className="chartImgDiv" >
      <a target="_blank" href={chart.url}>
        <img className="img" src={chart.image.fields.file.url}/>
      </a>
    </figure>
  )
}

ChartContainer.propTypes = {
  chart: PropTypes.object.isRequired
};

export default ChartContainer
