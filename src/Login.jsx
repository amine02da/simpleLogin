import React from 'react'
import { useRef } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import HelloPage from './HelloPage'

function Login() {

    const data = JSON.parse(localStorage.getItem("students"))
    const RefId = useRef()
    const RefPswd = useRef()
    const redi = useNavigate()



    const CheckLogin = (e)=>{
        e.preventDefault()
        data.map((item)=>{if(item.name === RefId.current.value && item.pswd === RefPswd.current.value){
            (
                function(){
                    redi("/hello",{state:{name:item.name}})
                }
            )()
            document.getElementById("errorId").innerHTML = "";
            document.getElementById("errorpswd").innerHTML = "";
        }else if(item.name !== RefId.current.value){
            document.getElementById("errorId").innerHTML = "Votre identifiant est incorrect";
        }else if(item.pswd != RefPswd.current.value || RefPswd.current.value === ""){
            
            document.getElementById("errorpswd").innerHTML = "Votre mot de passe est incorrect";
        }
    })
        
    }
    
  return (
    <div>
        <h2>Connexion</h2>
        <NavLink to={"/"}>register</NavLink>
        <form action="">
            <div className="fG">
                <label htmlFor="id">L'identifiant</label>
                <input type="text" ref={RefId}/>
                <small id='errorId'></small>
            </div>
            <div className="fG">
                <label htmlFor="id">Mot de Passe</label>
                <input type="password" ref={RefPswd} />
                <small id='errorpswd'></small>
            </div>
            <div>
                <input type={"submit"} value="login" onClick={CheckLogin} />
            </div>
        </form>
    </div>
  )
}

export default Login