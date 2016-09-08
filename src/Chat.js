import React, {Component} from 'react'

class Chat extends Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     list: [],
  //     loading: true
  //   }
  //   this.handleAddMessage = this.handleAddMessage.bind(this);
  //   this.handleRemoveMessage = this.handleRemoveMessage.bind(this);
  // }
  //
  // componentDidMount () {
  //   this.rebaseRef = base.syncState('chatList', {
  //     context: this,
  //     state: 'list',
  //     asArray: true,
  //     then () {
  //       this.setState({loading:false})
  //     }
  //   })
  // }
  // componentWillUnmount () {
  //   base.removeBinding(this.rebaseRef)
  // }
  // handleAddMessage (event) {
  //   event.preventDefault()
  //   let message = event.target.elements[0].value;
  //   this.setState({
  //     list: this.state.list.concat([message])
  //   })
  // }
  // handleRemoveMessage (index) {
  //   let newlist = this.state.list;
  //   newList.splice(index, 1);
  //   this.setState({
  //     list: newList
  //   })
  // }
  render () {
    return (
      <div className="chat">
      <form onSubmit={this.handleAddMessage}>
      <input type="text"/>
      <button type="submit">Post message</button>
      </form>
      </div>
    )
  }
}

export default Chat
