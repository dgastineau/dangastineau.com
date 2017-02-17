import React, {PropTypes} from 'react';
import showdown from 'showdown'


function md(text) {
  const converter = new showdown.Converter()
  const html = converter.makeHtml(text)
  return {__html: html}
}

const AboutPost = ({about}) => {
  
  return (
    <div>
      <h1 className="pageTitle" >about</h1>
      <div className="abtContainer">   
        {about.map(abt => 
          <div key={abt.sys.id} >
            <div className="content" dangerouslySetInnerHTML={md(abt.fields.body)} />
            <div className="abtImgDiv" >
              <img className="img" src={abt.fields.image.fields.file.url} />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

AboutPost.propTypes = {
  about: PropTypes.array.isRequired
}

export default AboutPost