import '../Login/login.css';
import { Link } from 'react-router-dom';

const Register = ()=>{
    return(
        <div className='cardContainer'>
            <img src='/desktop-image.svg' className='backgroundImage'/>
            <div className='card'>
                <h1>Sign up</h1>
                <div>
                    <label htmlFor='name'>Name</label>
                    <br/>
                    <input 
                        id='name'
                        className= 'inputField'
                        type='text'
                        required
                    />
                </div>
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
                </div>
                <Link to='/' className='reactLink'>
                    <input
                        id='submit' 
                        className= 'inputButton'
                        type='submit'
                        value={'Sign up'}
                    />
                </Link>

                <Link to='/' className='reactLink'>
                    <p 
                        id='register'
                        className= 'linkText'>
                        {"Already have an account? Login"}
                    </p>
                </Link>
            </div>
        </div>
    )
}

export default Register;