import {useSignUpQuery} from "../../queries/signup.query";
import React, {useEffect, useState} from "react";
import {ISignUp} from "../../interfaces/signup.interface";
import {useNavigate} from "react-router-dom";

function SignUp({darkMode} : any){
    /** React-Query */
    const {post} = useSignUpQuery()
    const navigate = useNavigate()
    /** UseState */
    const [member, setMember] = useState<ISignUp>({nickname : '', email : '', password : '', phoneNumber: ''})

    /** UseEffect */
    useEffect(()=> {
        if (post.isSuccess) {
            navigate('/')
        }
    },[post.isSuccess, navigate])

    /** function */
    function handleChange(e : React.ChangeEvent<HTMLInputElement>) {
        const {name, value} = e.target
        setMember(e => ({...e, [name] : value}))
    }

    function create() {
        post.mutate(member)
    }

    return (
        <div className={`flex h-screen justify-center items-center ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
            <div className={`w-4/12 h-90 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'} flex flex-col gap-3 rounded-lg shadow-lg p-5`}>
                <p className={'text-2xl font-bold text-center'}>회원가입</p>
                <div className={'flex-col flex gap-3 py-5'}>
                    <input name='email' value={member.email} onChange={handleChange} type={'text'} className={`px-3 py-2 rounded-lg border ${darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-black border-gray-300'}`} placeholder={'Email'} />
                    <input name='password' value={member.password} onChange={handleChange} type={'password'} className={`px-3 py-2 rounded-lg border ${darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-black border-gray-300'}`} placeholder={'Password'} />
                    <input name='phoneNumber' value={member.phoneNumber} onChange={handleChange} type={'text'} className={`px-3 py-2 rounded-lg border ${darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-black border-gray-300'}`} placeholder={'Phone'} />
                    <input name='nickname' value={member.nickname} onChange={handleChange} type={'text'} className={`px-3 py-2 rounded-lg border ${darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-black border-gray-300'}`} placeholder={'NickName'} />
                </div>
                <button
                    onClick={create}
                    className={'bg-blue-400 text-white text-sm py-1.5 rounded-lg hover:bg-blue-500 transition duration-300 active:bg-blue-600 shadow-xl'}
                >회원가입</button>
            </div>
        </div>
    )
}

export default SignUp