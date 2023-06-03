import React from 'react'
import { connect } from 'react-redux'
import { addComment } from '../actions'
import cn from 'classnames'
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { v4 as uuidv4 } from 'uuid';

const signInSchema = Yup.object().shape({
    text: Yup.string().required("Add your comment").min(5, "Minimum 5 characters"),
})

const AddComment = ({ post, user, addComment }) => {
    return (
        <Formik
            initialValues={{ text: "" }}
            validationSchema={signInSchema}
            onSubmit={(values, actions) => {
                const comment = {
                    "postId": post.id,
                    "id": uuidv4(),
                    "name": user.username,
                    "email": user.email,
                    "body": values.text
                }
                addComment(comment)
                actions.resetForm()
            }}
        >
            {({ errors, touched }) => {
                return (
                    <Form>
                        <div className='d-flex align-items-start gap-1'>
                            <div className="form-group flex-grow-1">
                                <Field
                                    type="text"
                                    name="text"
                                    id="text"
                                    placeholder="Type comment..."
                                    className={cn("form-control", { 'is-invalid': errors.text && touched.text })}
                                />
                                <ErrorMessage name="text" component="span" className="invalid-feedback" />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary"
                            >Add</button>
                        </div>
                    </Form>
                )
            }}
        </Formik>
    )
}

export default connect(null, { addComment })(AddComment)
