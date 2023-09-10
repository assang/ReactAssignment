import { Component } from 'react'

class ClassComponent extends Component{
    constructor(props){
        super()
        this.state = {
            name:'Google'
        }
    }

    componentDidMount(){
        console.log('componentDidMount called');
    }

    componentDidUpdate(){
        console.log('componentDidUpdate called');
    }

    componentWillUnmount(){
        console.log("unmounted called");
    }

    changeName = () => {
        //console.log("Button Clicked");
        this.setState({name:"Facebook"});
    }

    
    render(){
        return(
            <div> 
                {console.log("render")}
                <span>Class Component: {this.state.name}</span><br></br>
                <button onClick={this.changeName}>Change</button>
            </div>
        )
    }
}

export default ClassComponent;