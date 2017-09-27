import React from 'react';
import { connect } from 'react-redux';
import { fetchUsersData } from '../store';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

import UserList from './UserList.jsx';
import AddUser from './AddUser.jsx';
import EditUser from './EditUser.jsx';


class Main extends React.Component {

  componentWillMount() {
    this.props.fetchUsersThunk();
  }

  render() {

    return (
      <div id="main" className="container-fluid">
        <div className="col-xs-10">
          <Switch>
            <Route exact path="/add-user" component={AddUser} />
            <Route exact path="/edit-user/:userId" component={EditUser} />
            <Route exact path="/" component={UserList} />
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.userData
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsersThunk() {
      dispatch(fetchUsersData());
    }
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
