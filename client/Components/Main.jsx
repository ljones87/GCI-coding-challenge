import React from 'react'
import { connect } from 'react-redux';

class Main extends React.Component {
  render () {
    return (
      <div>
          <h1>Users</h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return  {
    users: state.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return  {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
