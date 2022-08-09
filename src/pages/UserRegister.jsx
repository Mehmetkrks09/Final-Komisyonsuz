import React from 'react'
import { useFormik } from "formik";
import * as Yup from "yup";

import {
    Button,
    TextArea,
    Card,
    Form,
   
} from "semantic-ui-react";
import { toast } from "react-toastify";
import UserService from "../Sevices/UserService";



export default function UserRegister() {
    let userService =  new UserService();


    const UserAdSchema = Yup.object().shape({
         name: Yup.string().required("Bu Alan Boş Bırakılamaz"),
        surName: Yup.string().required("Bu Alan Boş Bırakılamaz"),
       email: Yup.string().email("Geçerli Bir Mail Giriniz").required("Boş Bırakılamaz"),
      password: Yup.string().required('No password provided.') .min(8, 'Password is too short - should be 8 chars minimum.').matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
    identityNumber: Yup.number("Sayı Giriniz").required("Bu Alan Boş Bırakılamaz"),
        birtOfDate: Yup.string().required("Bu Alan Boş Bırakılamaz"),
        adress: Yup.string().required("Bu Alan Boş Bırakılamaz"),
       



     });

    const formik = useFormik({
        initialValues: {
            id:"",
            name: "",
            surName: "",
            email: "",
            password: "",
            identityNumber: "",
            birtOfDate: "",
            adress: "",
            photo: "",
            dayId: "",
            paymentId: ""
        },
       
        
         
        validationSchema: UserAdSchema,
        onSubmit: (values) => {
          //  values.userId = "";
            //values.dayId = "";
            // cvService.postCv(values).then((result) => console.log(result.data.data));
            userService.postUser(values).then((result) => result.success?toast.success(result.data.message):  toast.error(result.data.message)
                
              );
         
           
     
            //cvService.postCvPhoto(values.photo);
            //userService.postPhoto(values.photo);
        },
        
    });
 
    // const handleChangeSemantic = (value, fieldName) => {
    //     formik.setFieldValue(fieldName, value);
        
    // };


    return (
        <div>
            <Card fluid inverted="top">
                <Card.Content header="Kullanıcı Ekle " />
                <Card.Content>
                    <Form onSubmit={formik.handleSubmit}>
                        <Form.Field>
                            <label>Name </label>
                            <input type={"text"}
                                placeholder="Name"
                                error={Boolean(formik.errors.name).toString()}
                                value={formik.values.name}
                                name="name"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.errors.name && formik.touched.name && (
                                <div className={"ui pointing red basic label"}>
                                    {formik.errors.name}
                                </div>
                            )}
                        </Form.Field>

                        <Form.Field>
                            <label>SurName </label>
                            <input type={"text"}
                                placeholder="SurName..."

                                error={Boolean(formik.errors.surName).toString()}
                                value={formik.values.surName}
                                name="surName"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.errors.surName && formik.touched.surName && (
                                <div className={"ui pointing red basic label"}>
                                    {formik.errors.surName}
                                </div>
                            )}
                        </Form.Field>
                        <Form.Field>
                            <label>Email </label>
                            <input type={"text"}
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
                            <input type={"password"}
                                placeholder="Password..."

                                error={Boolean(formik.errors.password).toString()}
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
                            <label>Identity Number </label>
                            <input type={"text"}
                                placeholder="Identity Number ..."

                                error={Boolean(formik.errors.identityNumber).toString()}
                                value={formik.values.identityNumber}
                                name="identityNumber"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.errors.identityNumber && formik.touched.identityNumber && (
                                <div className={"ui pointing red basic label"}>
                                    {formik.errors.identityNumber}
                                </div>
                            )}
                        </Form.Field>
                        <Form.Field>
                            <label>Birt Of Birth Date </label>
                            <input type={"text"}
                                placeholder="Birt Of Birth Date..."

                                error={Boolean(formik.errors.birtOfDate).toString()}
                                value={formik.values.birtOfDate}
                                name="birtOfDate"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.errors.birtOfDate && formik.touched.birtOfDate && (
                                <div className={"ui pointing red basic label"}>
                                    {formik.errors.birtOfDate}
                                </div>
                            )}
                        </Form.Field>

                        <Form.Field>
                            <label>Address </label>
                            <TextArea
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
                            content="Kayıt Ol"
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
