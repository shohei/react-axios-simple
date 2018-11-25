import React,{Component} from "react";
import ReactDOM from "react-dom";
import axios from "axios";

const ENDPOINT = 'https://jsonplaceholder.typicode.com/todos/1';

class  App extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: 'initial title',
    };
  }
  handleGet(){
    axios
      .get(ENDPOINT, {})
      .then( (results) => {
        this.setState(
          {title: results.data.title}
        );
      })
      .catch( (e) => {
        console.log(e);
      });
  }
  render(){
    return (
      <div>
        <p>title: {this.state.title}</p>
        <button onClick={()=>this.handleGet()}>Click</button>
      </div>
    )
  }
}

ReactDOM.render(<App/>,document.getElementById("root"));

