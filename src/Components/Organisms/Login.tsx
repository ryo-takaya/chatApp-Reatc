import React from 'react';
import TextField from '@material-ui/core/TextField';

const Login = ()=>{

    return (
        <>
            <form>
                <TextField label="email"></TextField>
                <TextField
                    id="standard-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                />
            </form>
       </>
    )
}

export default Login