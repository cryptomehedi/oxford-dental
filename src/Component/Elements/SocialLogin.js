import React from 'react';
import googleLogo from '../../Img/social/google-logo.png'
import facebookLogo from '../../Img/social/facebook-logo.png'
import gitHubLogo from '../../Img/social/github-logo.png'
import { useAuthState, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const SocialLogin = () => {
    const [user] = useAuthState(auth)
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [signInWithGithub] = useSignInWithGithub(auth);
    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";

    if(user){
        navigate(from, { replace: true })
    }
    return (
        <div>
            <div className='flex justify-center items-center'>
                <div style={{height: '1px'}} className='bg-slate-400 w-1/2'></div>
                <p className='mx-2'>or</p>
                <div style={{height: '1px'}} className='bg-slate-400 w-1/2'></div>
            </div>
            {/* <p className='text-red-500 font-semibold text-center'>{error1?.message.length > 5 ? error1?.message : error2?.message}</p> */}
            <div className='flex justify-center my-3 '><div onClick={()=>signInWithGoogle()} className='bg-neutral-400 p-1 px-3 rounded font-semibold hover:bg-green-400 hover:text-white duration-300 text-center w-1/2 flex justify-center items-center'> <img className='w-7 mr-2' src={googleLogo} alt="" /><p>Google Sign In</p></div></div>
                {/* <div className='flex justify-center my-3 '><div className='bg-neutral-400 p-1 px-3 rounded font-semibold hover:bg-green-400 hover:text-white duration-300 text-center w-1/2 flex justify-center items-center'> <img className='w-7 mr-2' src={facebookLogo} alt="" /><p>Facebook Sign In</p></div></div> */}
            <div className='flex justify-center my-3 '><div onClick={()=>signInWithGithub()} className='bg-neutral-400 p-1 px-3 rounded font-semibold hover:bg-green-400 hover:text-white duration-300 text-center w-1/2 flex justify-center items-center'> <img className='w-7 mr-2' src={gitHubLogo} alt="" /><p>GitHub Sign In</p></div></div>
            
        </div>
    );
};

export default SocialLogin;