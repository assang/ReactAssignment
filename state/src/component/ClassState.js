import { Component } from 'react';

class ClassState extends Component{
    constructor(props){
        super()
        this.state = {
            name:'Harshada'
        }
    }

    updateName = () => {
        this.setState({name:"Kamble"});
    }

    render(){
        return(
            <div>
                 {/* {console.log(this.state.name)}; */}
                <h1>Name is : {this.state.name}</h1>
                <button onClick={this.updateName}>Update</button>
            </div>
        )
    }
}

export default ClassState;