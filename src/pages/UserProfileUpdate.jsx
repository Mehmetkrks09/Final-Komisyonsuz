import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Card, Form } from "semantic-ui-react";
import { toast } from "react-toastify";
import UserService from '../Sevices/UserService';
import {  useEffect, useState } from "react";

export default function UserProfileUpdate() {

    const [users, setUsers] = useState([])

    let userService = new UserService()
    useEffect(() => {
        
        userService.findById(1).then(result => setUsers(result.data.data))
     },[])


    const UserUpdateSchema = Yup.object().shape({
        // adress:Yup.string().min(10,"Yeterli Uzunlukta Değil"),
        // password: Yup.string().required('No password provided.') .min(8, 'Password is too short - should be 8 chars minimum.').matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
    });



    const formik = useFormik({
        
        initialValues: {
        
            id: users.id,
            adress:users.adress,
            email:users.email ,
            password:users.password,
            
          
        },
        validationSchema: UserUpdateSchema,
        enableReinitialize: true,   
        onSubmit: (values) => {
            

        userService.updateUser(values.id,values.adress,values.password,values.email).then((result) => console.log(result.data.success));

            console.log(values);
            toast.success("User Has Been Updated");



      
        },  
    });

    return (
        <div>
            <Card fluid>
                <Card.Content header="Profil Güncelle" />
                <Card.Content>

                    <Form onSubmit={formik.handleSubmit}>
                      


                        <Form.Field>
                            <label>Email </label>
                            <input
                                type="email"
                                placeholder="Email..."
                                error={Boolean(formik.errors.email).toString()}
                                value={formik.values.email}
                                name="email"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.errors.email && formik.touched.email && (
                                <div className={"ui pointing red basic label"}>
                                    {formik.errors.email}
                                </div>
                            )}
                        </Form.Field>

                        <Form.Field>
                            <label>Password </label>
                            <input
                                type="password"
                                placeholder="Password"
                                error={Boolean(formik.errors.passwords).toString()}
                                value={formik.values.password}
                                name="password"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.errors.password && formik.touched.password && (
                                <div className={"ui pointing red basic label"}>
                                    {formik.errors.password}
                                </div>
                            )}
                        </Form.Field>
                        <Form.Field>
                            <label>Address </label>
                            <input
                                type="text"
                                placeholder="Address"
                                error={Boolean(formik.errors.adress).toString()}
                                value={formik.values.adress}
                                name="adress"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.errors.adress && formik.touched.adress && (
                                <div className={"ui pointing red basic label"}>
                                    {formik.errors.adress}
                                </div>
                            )}
                        </Form.Field>

                        <Button
                            content="Güncelle"
                            labelPosition="right"
                            icon="add"
                            positive
                            type="submit"
                            style={{ marginLeft: "20px" }}
                        />
                    </Form>
                </Card.Content>
            </Card>
        </div>
    )
}
