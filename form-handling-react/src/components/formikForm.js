import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
    name : Yup.string().required('Name is required'),
    email : Yup.string().email('Invalid email format').required('Email is required'),
});

const FormikForm = () => {
    return (
        <Formik
            initialValues={{ name:'', email:'' }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
                console.log('Form submitted', values);
                setSubmitting(false);
              }}
            >
              {({ isSubmitting }) => (
                <Form style={{ maxWidth: '400px', margin: '0 auto' }}>
                  <h2>Register</h2>
                  <div style={{ marginBottom: '10px' }}>
                    <label>
                      Name:
                      <Field
                        type="text"
                        name="name"
                        style={{ width: '100%', padding: '8px', margin: '5px 0' }}
                      />
                      <ErrorMessage name="name" component="div" style={{ color: 'red' }} />
                    </label>
                  </div>
                  <div style={{ marginBottom: '10px' }}>
                    <label>
                      Email:
                      <Field
                        type="email"
                        name="email"
                        style={{ width: '100%', padding: '8px', margin: '5px 0' }}
                      />
                      <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
                    </label>
                  </div>
                  <button type="submit" disabled={isSubmitting} style={{ padding: '10px', backgroundColor: '#333', color: '#fff', border: 'none', borderRadius: '5px' }}>
                    Register
                  </button>
                </Form>
              )}
            </Formik>
          );
        };
        
        export default FormikForm;
                
            
