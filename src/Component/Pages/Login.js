import React from 'react';

const Login = () => {
    return (
        <div>
            <h2 className="text-center text-3xl font-semibold mt-6">Login</h2>
            <form className="mt-16 text-center" >
                <div className="mt-2 grid grid-cols-2">
                    <label className="font-semibold mr-2 flex justify-end">Your Email Address:</label>
                    <input required className="border-2 rounded px-2 w-1/2 border-gray-500 mr-4 flex justify-start" type="email" name=""  placeholder="Email Address" />
                </div>
                <div className="mt-2 grid grid-cols-2">
                    <label className="font-semibold mr-2 flex justify-end">Password :</label>
                    <input  required className="border-2 rounded px-2 w-1/2 border-gray-500 flex justify-start" type="password" name=""  placeholder="Password" />
                </div >
                
                
                    <div className="my-2"><input className='bg-neutral-400 p-1 w-1/4 rounded font-semibold hover:bg-green-400 hover:text-white duration-300'  type="submit" value="Submit" /></div>
                    <div className="text-red-400 font-medium cursor-pointer" >Forget Password</div>
                    
            </form>
           
            <p className='text-center'>New in here? Please <span className="text-yellow-400 cursor-pointer" >Register</span></p>
            
        </div>
    );
};

export default Login;