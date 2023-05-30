import React from 'react'
//utils
import { Buttonfilled } from '../buttons/Buttons'

const HomeSignin = () => {
    return (
        <div>
            <form className='space-y-4'>
                <div className='flex flex-col space-y-2'>
                    <label className='font-bold text-sm'>Email or phone</label>
                    <input type='text'
                        className='p-2 border border-gray-400 hover:border-black hover:bg-hovering shadow-md pl-6'
                    />
                </div>
                <div className='flex flex-col space-y-2'>
                    <label className='font-bold text-sm'>Password</label>
                    <input type='password'
                        className='p-2 border border-gray-400 hover:border-black hover:bg-hovering shadow-md pl-6'
                    />
                </div>
                <h6 className='text-primary font-bold text-md pt-2 cursor-pointer hover:text-primaryBold hover:underline'>
                    Forgot password
                </h6>
                <Buttonfilled text="Sign in" full/>
            </form>
        </div>
    )
}

export default HomeSignin