import Nav from '../components/Nav/Nav'
import {CustomCursor} from '../components/CustomCursor/CustomCursor'
import Page from '../pages/Page.js'
import Loading from '../pages/Loading';

import './App.scss';

import React, { Component } from 'react'

class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      prevScrollPos: window.pageYOffset,
      visible: true,
      isLoading: true,
    };
    this.handleScroll = this.handleScroll.bind(this);
  }


  handleScroll = () => {
    const { prevScrollPos } = this.state;
  
    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollPos > currentScrollPos;
  
    this.setState({
      prevScrollPos: currentScrollPos,
      visible
    });
  };

  // adding listener to detect scroll event 
  componentDidMount() {
    this.setState({isLoading: false});
    window.addEventListener("scroll", this.handleScroll);
  };
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  };

  render() {
    return (
      <div className="App">
        
        <CustomCursor className="CustomCursor"/>

        {this.state.isLoading ? (<Loading />) : 
        (
          <div id="App">
            <Nav visible={this.state.visible} />
            <Page />
          </div>
        )}
      </div>
    );
  }
  
}

export default App;
