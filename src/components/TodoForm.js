import React from 'react';

export default class TodoForm extends React.Component {
  render() {
    return (
      <>
        <form onSubmit={this.props.handleSubmit}>
          <input
            type="text"
            name="task"
            value={this.props.currentInput}
            onChange={this.props.handleChanges}
          />
          <button>Add</button>
        </form>
        <button onClick={this.props.clearCompleted}>
          Clear Completed Tasks
        </button>
      </>
    );
  }
}
