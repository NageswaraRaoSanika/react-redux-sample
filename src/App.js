import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { loadBlog } from './store/user/user.js'

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro" onClick = {() => this.props.loadUser()}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    user: state.user
  }
}
function mapDispatchToProps(dispatch) {
  return({
      loadUser: () => {dispatch(loadBlog())}
  })
}
export default connect(mapStateToProps, mapDispatchToProps) (App);
