import React from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from "react-router-dom";

export default function Categories() {
  return (
    <div>
      <Menu pointing vertical>
        <Menu.Item  as={Link} to={"/users"} 
         icon="users"
          name='Kullanıcılar'
        />
        <Menu.Item  as={Link} to={"/userPhoto"} 
         icon="users"
          name='Fotoğraf Güncelle'
        />
        <Menu.Item  as={Link} to={"/userUpdate"} 
         icon="users"
          name='Kullanıcı Güncelle'
        />
        <hr/>
    
        <Menu.Item  as={Link} to={"/createDay"} 
         icon="users"
          name='Gün Oluştur'
        />
        <Menu.Item  as={Link} to={"/dayPayment"} 
         icon="users"
          name='Gün Ödemesi'
        />
       
       
      </Menu>
    </div>
  )
}
