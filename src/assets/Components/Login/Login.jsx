import './login.css';

const Login = ()=>{
    return(
        <div className='cardContainer'>
            <img src='/desktop-image.svg' className='backgroundImage'/>
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
                <input
                    id='submit' 
                    className= 'inputButton'
                    type='submit'
                    value={'Login'}
                    />
                <p 
                    id='register'
                    className= 'linkText'>
                    {"Don't have an account? Sign up"}
                </p>

            </div>
        </div>
    )
}

export default Login;