import React from 'react'
import { connect } from 'react-redux'

class UserHeader extends React.Component {
  render() {
    const { user } = this.props
    return user ? <div className="header">{`${user.name} <${user.email}>`}</div> : null
  }
}

const mapStateToProps = ({ users }, context) => {
  return { user: users.find(({ id }) => id === context.userId)}
}

export default connect(mapStateToProps)(UserHeader)