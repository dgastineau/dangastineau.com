import React, {PropTypes} from 'react';
import Header from './common/Header'
import Footer from './common/Footer'

const style = {
  height: '100%',
  margin: '-0.5em'
}

class App extends React.Component {
  render() {
    return (
      <div style={style} >
        <Header/>
        {this.props.children}
        <Footer/>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App
