import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
// COMPONENTS
import CommentDetail from './commentDetails';
import ApprovalCard from './approvalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 2:00PM"
          comment="Interesting answer"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>      
      <ApprovalCard>
        <CommentDetail
          author="Will"
          timeAgo="Today at 1:00PM"
          comment="Good point of view"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Andrew"
          timeAgo="Yesterday at 3:15PM"
          comment="I could be better using blue"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  )
};

ReactDOM.render(<App />, document.querySelector('#root'));