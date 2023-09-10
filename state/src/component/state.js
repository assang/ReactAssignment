import {useState} from "react";

//functional component
const State = () =>{
    const [name,setName] = useState('Harshada')
    return (
        <div>
            <h2>Name is: {name}</h2>
            <button onClick={()=>setName(name + ' Kamble')}>Display</button>
        </div>
    )
}

export default State; 