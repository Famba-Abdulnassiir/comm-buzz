import React, { useEffect } from "react";
import { Progress } from '@mantine/core';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginScreen() {

    const navigate = useNavigate();

    const [progress, setProgress] = useState(0);
    setTimeout(() => {
        setProgress(prevProgress => {
            if (prevProgress >= 100) {
                navigate('/dashboard');
                return 100;
            }
            
            return prevProgress + 10;
            
        });    

    }, 800);

    

    return (
        <div className="flex w-screen h-screen justify-center align-middle gap-5">

            <div className="self-center w-4/5">
                <div className="" >
                    <img src="https://res.cloudinary.com/dxlqahuqr/image/upload/v1692798827/obazgor43wietofqs8ex.png" alt="Comm Buzz Logo" />
                </div>
                <Progress value={progress} className="" />
            </div>
        </div>)
}

export default LoginScreen;