import './App.css'
import { useState } from 'react'

function TopSecret() {

    const [hidden, setHidden] = useState(true);
    const [inputs, setInputs] = useState({});


    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
      }
 
    const handleSubmit = (event) => {
        event.preventDefault();
        setHidden(false);
        setInputs("");
      }

    return(
        <div>
        <h1 className="topSecretText">Warning! Confidential</h1>
        <br></br>
        <form onSubmit={handleSubmit}>
            <label className="whiteText">
                Username &nbsp;
                <input 
                type="text" 
                name="username" 
                autocomplete="off"
                value={inputs.username || ""} 
                onChange={handleChange}>
                </input>
            </label>
            &nbsp; &nbsp; &nbsp; &nbsp;
            <label className="whiteText">
                Password &nbsp;
                <input 
                type="text" 
                name="password" 
                autocomplete="off"
                value={inputs.password || ""} 
                onChange={handleChange}>
                </input>
                &nbsp; &nbsp;
                <input type="submit"></input>
            </label>  
        </form>
        <br></br>
        {hidden ? "none" : <p className="redText">Invalid Login</p>}
        </div>
    );
}

export default TopSecret