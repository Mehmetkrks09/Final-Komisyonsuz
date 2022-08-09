
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Button,
  Input,
  Card,
  Form,
  Grid,
} from "semantic-ui-react";
import CreateDayService from '../Sevices/CreateDayService';
import { toast } from "react-toastify";


export default function CreateDayJoin() {

  var UserId = 1



  let createService = new CreateDayService()


  const CreateDaySchema = Yup.object().shape({

    //------------------------------------
  });




  const formik = useFormik({
    initialValues: {
      amount: 0,
      id: 0,
      paymentId: 0,
      userId: UserId,
      userQueu: 0,
      month: 0,
      fullName: "",
      skt: "",
      cvc: ""

    },
    enableReinitialize: true,
    validationSchema: CreateDaySchema,

    onSubmit: (values) => {
      console.log(values);

      // 

      createService.postCreateDay(values).then((result) => result.data.success?toast.success(result.data.message):toast.error(result.data.message))




    },

  }

  );

  return (
    <div>
      <Card fluid>
        <Card.Content header="Güne Katıl" />
        <Card.Content>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Field style={{ marginBottom: "1rem" }}>
              <Grid stackable>
                <Grid.Column width={8}>
                  <label style={{ fontWeight: "bold" }}>
                    Miktar
                  </label>
                  <Input
                    style={{ width: "100%" }}
                    type="number"
                    placeholder="Amount"
                    value={formik.values.amount}
                    name="amount"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  ></Input>
                  {formik.errors.amount && formik.touched.amount && (
                    <div className={"ui pointing red basic label"}>
                      {formik.errors.amount}
                    </div>
                  )}
                </Grid.Column>
                <Grid.Column width={8}>
                  <label style={{ fontWeight: "bold" }}>
                    Ay
                  </label>
                  <Input
                    style={{ width: "100%" }}
                    type="number"
                    placeholder="Month"
                    value={formik.values.month}
                    name="month"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  ></Input>
                  {formik.errors.month && formik.touched.month && (
                    <div className={"ui pointing red basic label"}>
                      {formik.errors.month}
                    </div>
                  )}
                </Grid.Column>


                <label style={{ fontWeight: "bold" }}>
                  Ad Soyad
                </label>
                <Input
                  style={{ width: "100%" }}
                  placeholder="Ad Soyad"
                  value={formik.values.fullName}
                  name="fullName"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.fullName && formik.touched.fullName && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.fullName}
                  </div>
                )}

                <Grid.Column width={5}>
                  <label style={{ fontWeight: "bold" }}>
                    Son Kullanma Tarihi
                  </label>
                  <Input
                    style={{ width: "100%" }}
                    type="date"
                    placeholder="Son Kullanma Tarihi"
                    value={formik.values.skt}
                    name="skt"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  ></Input>
                  {formik.errors.skt && formik.touched.skt && (
                    <div className={"ui pointing red basic label"}>
                      {formik.errors.skt}
                    </div>
                  )}

                </Grid.Column>

                <Grid.Column width={5}>
                  <label style={{ fontWeight: "bold" }}>
                    Cvc
                  </label>
                  <Input
                    style={{ width: "100%" }}
                    type="number"
                    placeholder="Cvc"
                    value={formik.values.cvc}
                    name="cvc"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  ></Input>
                  {formik.errors.cvc && formik.touched.cvc && (
                    <div className={"ui pointing red basic label"}>
                      {formik.errors.cvc}
                    </div>
                  )}

                </Grid.Column>


              </Grid>
              <label>3D Secure Güvenli Ödeme Kullanılmaktadır</label>
            </Form.Field>

            <Button
              content="Ekle"
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
