import React,{useState,useContext,useEffect} from 'react';
import Form from '../../Component/form';
import Head from '../../Component/head.js';
import {GlobalContext} from '../../hook/GlobalHook';
import useInput from '../../hook/custom-hook.js';
import axios from 'axios';
import Signup from '../../Component/course/signupcourse';
export default function SignupCourse() {
    const GlobalHook = useContext(GlobalContext);

        return (
            <div>
                <Form>
                <Head title="Signup Course" />
                    <br/>
                <Signup/>
                </Form>
                
            </div>
        )

}
