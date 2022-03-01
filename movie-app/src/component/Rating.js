import React, { Component } from 'react'
 
class Rating extends Component {
  constructor(props){
    super(props)
     
    // Set initial state
    this.state = {index: -1 }
     
    // Binding this keyword
    this.handleClick = this.handleClick.bind(this)
  }
 
  handleClick(i){
   
    // Changing state
    this.setState({index: i })
  }
   
  render(){
    return (
        <div>
            
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        {[...Array(5)].map((star,i) =>{
             
            return <span onClick={() => this.handleClick(i)} className={i <= this.state.index  ? 'fa fa-star checked ' : 'fa fa-star'}></span>
        })}
        
    </div>
         
 

    )
  }
}

export default Rating ;