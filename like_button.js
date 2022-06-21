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

  //["1","2","3","4","5","6","7"]
  //const commentId = []; 
  //commentID[1]= "Cabernet-Franc";
  //commentID[2]= "Malbec";
  //commentID[3]= "Cabernet-Sauvignon";
  //commentID[4]= "Pinot Noir";
  //commentID[5]= "Bonarda";
  //commentID[6]= "Syrah";
  //commentID[7]= "Blends";

  const commentId = ["Cabernet-Franc", "Malbec", "Cabernet-Sauvignon", "Pinot Noir", "Bonarda", "Syrah", "Blends"]

  