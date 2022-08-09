import React, { useState } from 'react'
import { Menu, Container,Header } from 'semantic-ui-react'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'
import {useHistory} from "react-router"
import { Link } from "react-router-dom";





export default function Navi() {
  const history =useHistory()

  const [isAuthenticated, setIsAuthenticated] = useState(false)

  function handleSignOut() {
    setIsAuthenticated(false)
    // history.push("/")
   history.push("/")
  }

  function handleSignIn() {
    setIsAuthenticated(true)
    //history.push("/createDay")
  }

  return (

    <div>
      {/* <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="home" />
          <Menu.Item name="messages" />

          <Menu.Menu position="right">
           
            {isAuthenticated?<signedIn signOut={handleSignOut} />
            :<signOut signIn={handleSignIn}/>}  
          </Menu.Menu>
        </Container>
      </Menu> */}




      <Menu inverted="top">
        <Container>
          
        <Menu.Item  name="Ana Sayfa"  as={Link} to={"/users"}>
          <Header as="h4" color="blue" className="orbitron" icon="cube" content="Altın Günü" />
            
          </Menu.Item>
        

        <Menu.Menu position='right'>

         {/* <CartSummary/> */}
         {isAuthenticated?<SignedIn  signOut={handleSignOut}/>:   <SignedOut signIn={handleSignIn}/>} 

         
         
        </Menu.Menu>
        </Container>
      </Menu>
    </div>
  )
}
