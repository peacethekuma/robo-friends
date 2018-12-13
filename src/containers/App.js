import React, { Component } from 'react';
// import connect method from react-redux
import { connect } from 'react-redux'
import CardList from '../components/CardList';
import SearchBar from '../components/SearchBar';
import Scroll from '../components/Scroll';
import './App.css';

// import action 
import { setSearchField, requestRobots } from '../actions';

const mapStateToProps = (state) => {
  return {
    //state is all state stored in redux store
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}
//dispatch is what trigger the actions
const mapDispatchToProps = (dispatch) => {
  return {
    // the event dispatchs action:setSearchField  
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())

  }
}


class App extends Component {

  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    const { searchField, onSearchChange, robots , isPending } = this.props;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })
    return isPending ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBar searchChange={onSearchChange} />
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      );
  }
}

// connect is to subscribe the store
export default connect(mapStateToProps, mapDispatchToProps)(App);
              // what state listen to?  //what actions should listen to ? 