import { TextField } from '@mui/material'
import React from 'react'
import { styled } from '@mui/system';

const WhiteTextField = styled(TextField)({
    '& .MuiInputLabel-root': {
        color: 'black', // Set label color to white
    },
    '& .MuiFilledInput-root': {
        color: 'black', // Set text color to white
        backgroundColor: 'white', // Set filled background color to white
        '&:hover': {
            backgroundColor: 'white !important', // Override hover background color to white
        },
    },
});

const Login = () => {
    return (
        <div className='bg-black flex h-screen flex-col gap-10 justify-center items-center text-white'>
            <h1 className='font-bold text-4xl'>Login</h1>
            <div className='flex w-1/3 flex-col gap-5'>
                <WhiteTextField
                    id="filled-basic"
                    label="Email"
                    variant="filled"
                />
                <WhiteTextField
                    id="filled-basic"
                    label="Password"
                    variant="filled"
                />
                <button class="inline-flex font-normal text-white border-0 py-2 -mx-5 px-5 w-max focus:outline-none rounded-sm text-sm md:mt-0 underline">Forgot your password?
                </button>
                <div className='flex flex-col justify-center gap-3 items-center'>
                    <button class="inline-flex bg-[#121212] font-normal text-white border-0 mx-3 py-2 px-5 w-max focus:outline-none rounded-sm text-sm md:mt-0">Sign In
                    </button>
                    <button class="inline-flex font-normal text-white border-0 mx-3 py-2 px-5 w-max focus:outline-none rounded-sm text-sm md:mt-0 underline">Create Account
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login
