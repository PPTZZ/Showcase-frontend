import './login.css';
import { Link } from 'react-router-dom';
import desktop from './desktop.jpg'


const Login = ()=>{
    return(
        <div className='cardContainer'>
            <img src ={desktop} className='backgroundImage'/>
            <div className='card'>
                <h1>Login</h1>
                <div>
                    <label htmlFor='email'>Email</label>
                    <br/>
                    <input 
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