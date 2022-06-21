function darktheme() {
    var element = document.body;
    var elementfooter = document.getElementById("footer"); 
    var elementnavbar = document.getElementById("navbar");
    element.classList.toggle("dark-mode");
    console.log(elementfooter.style.backgroundColor);
    if (elementfooter.style.backgroundColor == "lightgray") {
    elementfooter.style.backgroundColor = "black"
    elementfooter.style.color = "white"
    }
    else {
        elementfooter.style.backgroundColor = "lightgray"
        elementfooter.style.color = "black"
    }
    console.log(elementnavbar.style.backgroundColor);
    if (elementnavbar.style.backgroundColor == "black") {
    elementnavbar.style.backgroundColor = "white"
    elementnavbar.style.color = "black"
    }
    else {
        elementnavbar.style.backgroundColor = "black"
        elementnavbar.style.color = "white"
    }
 }
function calculo(){
    let cuantos = document.getElementById("personas").value
    let chequeado = document.getElementById("bases").checked
    if(chequeado!= true){
        alert("Debe estar de acuerdo con las condiciones")
    }
    if(cuantos <= 1){
        alert ("No te vas a tomar un vino solo sinvenguencha")
    }
    if(cauntos > 1 && chequeado == true){
        document.append(int(cuantos/0.75))

    }
} 

'use strict';

 const r = React.createElement;
 
 class LikeButton extends React.Component {
   constructor(props) {
     super(props);
     this.state = { liked: false };
   }
 
   render() {
     if (this.state.liked) {
       return 'You liked this Wine Variety!';
     }
 
     return r(
       'button',
       { onClick: () => this.setState({ liked: true }) },
       'Like'
     );
   }
 }
 
 document.querySelectorAll('.like_button_container')
   .forEach(domContainer => {
     const commentID = parseInt(domContainer.dataset.commentid, 10);
     const root = ReactDOM.createRoot(domContainer);
     root.render(
       r(LikeButton, { commentID: commentID })
     );
   });

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

       