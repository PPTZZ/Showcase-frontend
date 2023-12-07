import './login.css';
import { Link } from 'react-router-dom';
import desktop from './desktop.jpg'
import { useState } from 'react';


const Login = ()=>{

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    return(
        <div className='cardContainer'>
            <img src ={desktop} className='backgroundImage'/>
            <div className='card'>
                <h1>Login</h1>
                <div>
                    <label 
                        htmlFor='email'>
                        Email</label>
                    <br/>
                    <input 
                        onChange={event =>setEmail(event.target.value)}
                        id='email'
                        className= 'inputField'
                        type='email'
                        required
                    />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <br/>
                    <input 
                        onChange={event =>setPass(event.target.value)}
                        id='password' 
                        className= 'inputField'
                        type= 'password'
                        required
                    />
                    <p id='forgotPassword' className='linkText'>
                        {"Forgot your password?"}
                    </p>
                </div>
                <Link to='/profile' className='reactLink'>
                    <input
                        onSubmit={()=>console.log(email, pass)}
                        id='submit' 
                        className= 'inputButton'
                        type='submit'
                        value={'Login'}
                    />
                </Link>
                <Link to='/register' className='reactLink'>
                    <p  
                        id='register'
                        className= 'linkText'>
                        {"Don't have an account? Sign up"}
                    </p>
                </Link>


            </div>
        </div>
    )
}

export default Login;