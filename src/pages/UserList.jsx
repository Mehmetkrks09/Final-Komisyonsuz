import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import UserService from '../Sevices/UserService';


export default function UserList() {

    const [users, setUsers] = useState([])


    useEffect(() => {
        let userService = new UserService()
        userService.getUser().then(result => setUsers(result.data.data))
      
     },[])

    return (

        <div>
            <Table celled >
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Fotoğraf</Table.HeaderCell>
                        <Table.HeaderCell>Adı</Table.HeaderCell>
                        <Table.HeaderCell>Soy Adı</Table.HeaderCell>
                        <Table.HeaderCell>Ödeme Durumu</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        users.map(users => (
                            <Table.Row key={users.id}>
  
                                <Table.Cell><img className="ui tiny bordered image" src= {users.photo}/></Table.Cell>
                                <Table.Cell > <Link to={`/users/${users.id}`}>{users.name}</Link></Table.Cell>
                                <Table.Cell>{users.surName}</Table.Cell>
                                <Table.Cell>{users.state ? (
                                    <Label color="green">
                                        <Icon name="check" size="large" />
                                    </Label>
                                ) : (
                                    <Label
                                        basic
                                        color="red"
                                        style={{ marginLeft: "0.5em", fontSize: "0.80em" }}
                                    >
                                        <Icon name="hourglass two" />
                                        Ödeme Bekleniyor
                                    </Label>
                                )}</Table.Cell>



                            </Table.Row>
                        ))
                    }


                </Table.Body>

                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='3'>
                            <Menu floated='right' pagination>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron left' />
                                </Menu.Item>
                                <Menu.Item as='a'>1</Menu.Item>
                                <Menu.Item as='a'>2</Menu.Item>
                                <Menu.Item as='a'>3</Menu.Item>
                                <Menu.Item as='a'>4</Menu.Item>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron right' />
                                </Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table></div>
    )
}
