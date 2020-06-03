import React from 'react';


 function RandomColor() {
   const alphabet = Array.from("0123456789ABCDEF");
   var color = "#";
   for (var i = 0; i < 6; i++) {
     color += alphabet[Math.floor(Math.random() * alphabet.length)];
   }
   return color;
 
const Button = React.createClass({
  getInitialState: function(){
    return{backgroundColor: RandomColor()}
  },
  handleClick:function(){
    this.setState({backgroundColor: RandomColor()})
  },
  render: function() {
    return (
      <div ></div>
    )



  }
})
} 

export default RandomColor;