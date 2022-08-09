import React from 'react'
import Categories from './Categories'
import { Grid } from "semantic-ui-react";
import { Route } from 'react-router-dom'
import UserDetail from '../pages/UserDetail';
import UserRegister from '../pages/UserRegister';
import CreateDayJoin from '../pages/CreateDayJoin';
import UserProfileUpdate from '../pages/UserProfileUpdate';
import UserPhoto from '../pages/UserPhoto';
import Login from '../pages/Login';
import UserList from '../pages/UserList';
import CreateDayPayment from '../pages/CreateDayPayment';


export default function Dashboard() {
  return (
    <div>

      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
          <Categories/>
          
          </Grid.Column>
          <Grid.Column width={12}>
            <Route></Route>
         
            <Route exact path="/"  />
            <Route exact path="/login" component={Login} />
            <Route exact path="/dayPayment" component={CreateDayPayment} />
            <Route exact path="/userPhoto" component={UserPhoto} />
            <Route exact path="/userUpdate" component={UserProfileUpdate} />
            <Route exact path="/createDay" component={CreateDayJoin} />
            <Route exact path="/users" component={UserList} />
            <Route exact path="/userAd" component={UserRegister} />
            <Route exact path="/users/:id" component={UserDetail} />
            {/* <Route path="/products/:name" component={ProductDetail} />
            <Route path="/cart" component={CartDetail} />
            <Route path="/product/add" component={ProductAdd} /> */}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
}
