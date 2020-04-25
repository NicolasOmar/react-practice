import React from 'react'
import { connect } from 'react-redux'
import { signIn, signOut } from '../actions'

class GoogleAuth extends React.Component {
  state = {
    isSignedIn: null
  }

  signOutBtn = {
    color: 'red',
    text: 'Sign Out',
    onClick: auth  => auth.signOut()
  }

  signInBtn = {
    color: 'blue',
    text: 'Sign In with Google',
    onClick: auth => auth.signIn()
  }

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '680258446482-onmh773f6njr6e4o2qj642supsp0pslb.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance()
        this.onAuthChange(this.auth.isSignedIn.get())
        this.auth.isSignedIn.listen(this.onAuthChange)
      })
    })
  }

  onAuthChange = isSignedIn => isSignedIn ? 
    this.props.signIn(this.auth.currentUser.get().getId()) :
    this.props.signOut()

  render() {
    const { color, text, onClick } = this.props.isSignedIn ? this.signOutBtn : this.signInBtn

    return (
      <div>
        { 
          this.props.isSignedIn === null ?
            <div>Loading...</div> :
            <button className={`ui ${color} google button`} onClick={() => onClick(this.auth)}>
              <i className="google icon" />
              {text}
            </button>
        }
      </div>
    )
  }
}

const mapPropsToState = state => {
  return { isSignedIn: state.auth.isSignedIn }
}

export default connect(mapPropsToState, { signIn, signOut })(GoogleAuth)