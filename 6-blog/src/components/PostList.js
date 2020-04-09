import React from 'react'
// IMPORT REDUX CONNECT
import { connect } from 'react-redux'
// IMPORT ACTIONS
import { fetchPostAndUsers } from '../actions'
// IMPORT COMPONENTS
import UserHeader from './UserHeader';

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPostAndUsers();
  }

  render() {
    const { posts } = this.props
    return <div className="ui relaxed divided list">
      {
        posts.map(({ id, body, title, userId }) => {
          return (
            <div key={id} className="item">
              <i className="small middle aligned icon user"></i>
              <div className="content">
                <div className="description">
                  {`Post #${id} - '${title}' - ${body}`}
                </div>
                {userId && <UserHeader userId={userId} />}
              </div>
            </div>
          )
        })
      }
    </div> 
  }
}

const mapStateToProps = ({ posts }) => {
  return { posts }
}

export default connect(mapStateToProps, { fetchPostAndUsers })(PostList)