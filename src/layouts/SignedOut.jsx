import React, { useState } from 'react'
import { Button } from 'semantic-ui-react'
import { Link } from "react-router-dom";


export default function SignedOut({signIn}) {

 
  return (

    
    <div>
         

         <Button primary  as={Link} to={"/login"} onClick={signIn}  >Giriş Yap</Button>
         <Button primary style={{marginLeft:'0.5em'}}  as={Link} to={"/userAd"}> Kayıt Ol</Button>

        
         
    </div>
  )
}
