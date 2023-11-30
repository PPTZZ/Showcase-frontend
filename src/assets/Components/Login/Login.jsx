const Login = ()=>{
    return(
        <div className="cardContainer">
            <div className="card">
                <label htmlFor="email">e-mail: </label>
                <input 
                    type='email'
                    id='email'
                    required
                />
                <br/>
                <label>password: </label>
                <input 
                    id ='password' 
                    className = 'inputField'
                    type = 'password'
                    required
                />
                <br/>
                <input
                    id='submit' 
                    className = 'inputField'
                    type='submit'
                    value={'Login'}
                    />
                <p 
                    id='registerLink'
                    className="linkText">
                    Register
                </p>

            </div>
        </div>
    )
}

export default Login;