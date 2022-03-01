import react from "react";

export default class Coments extends react.Component{
    constructor(props){
        super(props)
         
        // Set initial state
        this.state = {coments: ['test comment'] }
         
        // Binding this keyword
        this.handleClick = this.handleClick.bind(this)
      }

      handleClick(i){
   
        // Changing state
        this.setState({coments: [...this.state.coments, ...['another comments']] })
      }

     render() {
        return(
         <div className="container">
              {this.state.coments.map((star,i) =>{
             
                return <div key = {i}>{this.state.coments[i]}</div>  
                })
              }
                <div class="box">
                    <label for="exampleFormControlComents" class="form-label">Enter your coments</label>
                    <textarea class="form-control" id="exampleFormControlComents" rows="3"></textarea>
                
                </div>
                    <button onClick={() => this.handleClick()} type="button" class="btn btn-primary">Submit</button>
         </div>
         
     
        );
    }
}