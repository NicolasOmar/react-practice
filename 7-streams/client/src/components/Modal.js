import React from 'react'
import ReactDOM from 'react-dom'
import history from '../history'

const Modal = ({ title, content, id, onSubmit }) => {
  return ReactDOM.createPortal(
    <div
      onClick={() => history.push('/')}
      className="ui dimmer modals visible active"
    >
      <div
        onClick={e => e.stopPropagation()}
        className="ui standard modal visible active"
      >
        <div className="header">{title}</div>
        <div className="content">{content}</div>
        <div className="actions">
          <button onClick={() => onSubmit(id)} className="ui negative button">Delete</button>
          <button onClick={() => history.push('/')} className="ui button">Cancel</button>
        </div>
      </div>
    </div>,
    document.querySelector('#modal')
  )
}

export default Modal