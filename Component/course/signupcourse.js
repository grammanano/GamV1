import React,{useState,useContext,useEffect} from 'react';
import {GlobalContext} from '../../hook/GlobalHook';
import Router from 'next/router';
export default function signupcourse () {
    const GlobalHook = useContext(GlobalContext);
    const[getToken,setToken]= useState()
    const[getUser,setUser]= useState()
    useEffect(() => {
        if (localStorage.getItem("globalToken")) {
          const token = localStorage.getItem("globalToken");
          const user = JSON.parse(localStorage.getItem("globalUser"));
          setToken(token);
          setUser(user)
          console.log(getToken)
          console.log(getUser)
    
        }
      }, []);
      function HeandleSingup(){
        Router.push({
            pathname: '/SignUp/signup',
          }) 
        }
      if(getToken){
        return (
            <div>
                Hello User
                
            </div>
        ) }
        else{
            return(
                <div>SignUp
                    {
                        e=>HeandleSingup()
                        }
                </div>
            )
        }
    
}
