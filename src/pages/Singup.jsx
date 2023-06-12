import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { AiOutlineGoogle } from 'react-icons/ai'
import { AiFillApple } from 'react-icons/ai'
import s from './Singup.module.sass'

export default function Singup() {
    return (
        <div className={s.App}>
            <div className={s.container}>
                <div className={s.navbar}>
                    <button className={s.arrow}>
                        <IoIosArrowBack size={25} />
                    </button>
                    <h2>Sign up</h2>
                </div>

                <div className={s.authSingUp}>
                    <p className={s.p}>Sign up with one of following options</p>
                    <div className={s.authSingUpButton}>
                        <button className={s.authSingUpButtonView}>
                            <AiOutlineGoogle size={25} />
                        </button>
                        <button className={s.authSingUpButtonView}>
                            <AiFillApple size={25} />
                        </button>
                    </div>
                </div>

                <div className={s.inputs}>
                    <div className={s.inputs}>
                        <label className={s.label}>Name</label>
                        <input className={s.input}></input>
                    </div>
                    <div className={s.inputs}>
                        <label className={s.label}>Email</label>
                        <input className={s.input}></input>
                    </div>
                    <div className={s.inputs}>
                        <label className={s.label}>Password</label>
                        <input className={s.input}></input>
                    </div>
                </div>
                <button className={s.button}>
                    <b>Create Account</b>
                </button>
                <p className={s.p}>
                    Already have an account? <b>Log In</b>
                </p>
            </div>
        </div>
    )
}
