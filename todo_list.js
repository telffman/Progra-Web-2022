
'use strict';

const r = React.createElement;

class TodoApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = { items: [], text: '' };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h3",
          null,
          "Your Variety List"
        ),
        React.createElement(TodoList, { items: this.state.items }),
        React.createElement(
          "form",
          { onSubmit: this.handleSubmit },
          React.createElement(
            "label",
            { htmlFor: "new-todo" },
            "What Variety would you like to try?"
          ),
          React.createElement("input", {
            id: "new-todo",
            onChange: this.handleChange,
            value: this.state.text
          }),
          React.createElement(
            "button",
            null,
            "Add to List"
          )
        )
      );
    }
  
    handleChange(e) {
      this.setState({ text: e.target.value });
    }
  
    handleSubmit(e) {
      e.preventDefault();
      if (this.state.text.length === 0) {
        return;
      }
      const newItem = {
        text: this.state.text,
        id: Date.now()
      };
      this.setState(state => ({
        items: state.items.concat(newItem),
        text: ''
      }));
    }
  }
  
  class TodoList extends React.Component {
    render() {
      return React.createElement(
        "ul",
        null,
        this.props.items.map(item => React.createElement(
          "li",
          { key: item.id },
          item.text
        ))
      );
    }
  }
  
    const domContainer = document.querySelector('#to_do_list');
    const root = ReactDOM.createRoot(domContainer);
    root.render(r(TodoApp, null));