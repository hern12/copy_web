import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header.react'
import Ads from './Components/Ads.react'
import ContentList from './Components/contentlist.react';
import ProjectList from './Components/ProjectList.react';
import Feedback from './Components/Feedback.react';
import Bottom from './Components/bottom.react'
import Footer from './Components/footer.react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Ads />
        <ContentList />
        <ProjectList />
        <Feedback />
        <Bottom />
        <Footer />
      </div>
    );
  }
}

export default App;
