import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from './Header';
import Landing from './Landing';
import SearchBar from './SearchBar';
import GridListHorizontal from './GridListHorizontal';
const Dashboard = () => <h2>Dashboard</h2>;
const TaskNew = () => <h2>Task New</h2>;

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <MuiThemeProvider>
            <div>
              <Header />
              <div className="container">
                <Route exact path="/" component={Landing} />
                <Route exact path="/" component={SearchBar} />
                <Route exact path="/" component={GridListHorizontal} />
                <Route exact path="/tasks" component={Dashboard} />
                <Route path="/tasks/new" component={TaskNew} />
              </div>
            </div>
          </MuiThemeProvider>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
