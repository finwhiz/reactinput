class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.submitMessage = this.submitMessage.bind(this)
  }
  // add handleChange() and submitMessage() methods here
  handleChange(event) {
    this.setState ({
      input: event.target.value});
  }
  
  submitMessage() {
    this.setState ({
      messages: [...this.state.messages, this.state.input]
    })
    console.log(this.state.messages);
  }

  render() {
    const items = this.state.messages.map(item => <li>{item}</li>);
    return (
      <div>
        <h2>Type in a new Message:</h2>
        { /* render an input, button, and ul here */ }
        <input value={this.state.input} onChange={this.handleChange}/>
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {items}
        </ul>
        { /* change code above this line */ }
      </div>
    );
  }
};
