import React from 'react';
import { Formik } from 'formik';

export default class CustomerForm extends React.Component {

    state = {

    }

    handleSubmit() {
        console.log('Hello')
    }

    renderForm({ handleSubmit }) {
        return (
            <form onSubmit={handleSubmit}>
                <input type="text" name="i1" />
            </form>
        )
    }
    render() {

        const { renderForm, handleSubmit } = this;
        return <Formik
            render={({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
            }) => (
                    <form onSubmit={handleSubmit}>
                        <input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                        />
                        {touched.email && errors.email && <div>{errors.email}</div>}
                        <input
                            type="password"
                            name="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                        />
                        {touched.password && errors.password && <div>{errors.password}</div>}
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                  </button>
                    </form>
                )}

        ></Formik>
    }
}