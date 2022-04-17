import React from 'react';

const Register = () => {
    return (
        <div>
                <h2 className="text-center text-3xl font-semibold mt-6">Sign Up</h2>
                <form className="mt-16 text-center" >
                    <div className="mt-2 grid grid-cols-2">
                        <label className="font-semibold mr-2 flex justify-end" htmlFor="name">Your Name <span className="text-red-600 font-semibold">*</span></label>
                        <input className="border-2 rounded px-2 w-1/2 border-gray-500 mr-4 flex justify-start" type="text" name="name" required/>
                    </div>
                    <div className="mt-2 grid grid-cols-2">
                        <label className="font-semibold mr-2 flex justify-end" htmlFor="email">Email<span className="text-red-600 font-semibold">*</span></label>
                        <input className="border-2 rounded px-2 w-1/2 border-gray-500 mr-4 flex justify-start" type="email" name="email" required />
                    </div>
                    <div className="mt-2 grid grid-cols-2">
                        <label className="font-semibold mr-2 flex justify-end" htmlFor="password">Password<span className="text-red-600 font-semibold">*</span></label>
                        <input className="border-2 rounded px-2 w-1/2 border-gray-500 mr-4 flex justify-start" type="password" name="password" required />
                    </div>
                    <div className="mt-2 grid grid-cols-2">
                        <label className="font-semibold mr-2 flex justify-end" htmlFor="confirmPassword">Confirm Password<span className="text-red-600 font-semibold">*</span></label>
                        <input className="border-2 rounded px-2 w-1/2 border-gray-500 mr-4 flex justify-start" type="password" name="confirmPassword" required />
                    </div>
                    <input  type="checkbox" name="terms" id="terms" />
                    <label  htmlFor="terms">Accept Genius Terms & Conditions</label>
                    <p className='text-red-500 font-semibold'></p>
                    <input className={`bg-neutral-400 p-1 w-1/4 rounded font-semibold duration-300 my-2  'disabled:opacity-75'}`}  type="submit" value="Sign Up" />
                </form>
                
                <p className='text-center'>Already Have An Account? <span  className="text-yellow-400 cursor-pointer" to="/login">Login</span></p>
               
            </div>
    );
};

export default Register;