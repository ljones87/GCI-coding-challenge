import React from 'react'
import { connect } from 'react-redux';


class Main extends React.component {
  render () {
    return (
      <div>
          <h1>Users</h1>
      </div>
    )
  }
}

const mapStateToProps = () => {

}

const mapDispatchToProps = () => {

}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
