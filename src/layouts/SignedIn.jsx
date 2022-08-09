import React from 'react'
import { Menu, Dropdown, Image } from 'semantic-ui-react';
import { Link } from "react-router-dom";

export default function SignedIn({ signOut }) {
  return (
    <div>
      <Menu.Item>
        <Image avatar spaced="right" src="https://i.pinimg.com/236x/22/c0/33/22c033d512da0090314d5d59b7e7a7b1.jpg" />
        <Dropdown pointing="top left" text='Mehmet'>
          <Dropdown.Menu>
            <Dropdown.Item as={Link} to={"/users/:id"} text="Bilgilerim" icon="info" />
            <Dropdown.Item onClick={signOut}  text="Çıkış Yap" icon="sign-out"  />
          
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>

    </div>
  )
}
