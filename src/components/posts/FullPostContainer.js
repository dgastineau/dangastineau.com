import React, {PropTypes} from 'react';
import showdown from 'showdown'


function md(text) {
  const converter = new showdown.Converter()
  const html = converter.makeHtml(text)
  return {__html: html}
}

function dateFormat(dateStr) {
  let date = new Date(dateStr)
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December']
  let monthIndex = date.getMonth()
  let year = date.getFullYear()
  let day = date.getDate()
  return monthNames[monthIndex] + ' ' + day + ', ' + year
}

const FullPostContainer = ({post}) => {


  return (
    <div className="article" >
      <p className="headline">{post.fields.title}</p>
      <p className="date">{dateFormat(post.fields.date)}</p>
      <div className="imgDiv" >
        <img className="img" src={post.fields.heroImage.fields.file.url} />
      </div>
      <div className="content" dangerouslySetInnerHTML={md(post.fields.body)} />
    </div>
  )
}

FullPostContainer.propTypes = {
  post: PropTypes.object.isRequired
};

export default FullPostContainer
