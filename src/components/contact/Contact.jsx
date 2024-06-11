import { Formik } from 'formik';
import Button from '../../layout/button/Button';
import wunmi from './Contact.module.css';
import notification from '../../assets/notification.svg'

const contact = () => {
  return (
    <section className={wunmi.contact_container}>
        <div className={wunmi.content_wrapper}>
            <div className={wunmi.contact_content}>
                <h2>Contact</h2>
                <p>I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.
                </p>
            </div>
            <div className={wunmi.contact_form}>
                <Formik
                    initialValues={{ email: '', password: '', }}
                    validate={values => {
                        const errors = {};
                        if (!values.email) {
                            errors.email = 'Required, Kindly enter an email';
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                            errors.email = 'Sorry, invalid format here';
                        }
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 400);
                    }}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                        /* and other goodies */
                    }) => (
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="name">
                                <input type="text" placeholder="Name" />
                            </label>

                            <label htmlFor="email">
                                <input
                                type="email"
                                name='email'
                                placeholder="Email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                style={
                                    errors.email !== undefined && errors.email.length > 1 ?{borderBottom: '2px solid #ff6f5b'} : undefined
                                }
                                />
                                <img src={notification} alt="notification" className={wunmi.notification} />
                            </label>

                            {/*console.log(errors.email)*/}

                            {errors.email !== undefined && errors.email.length > 1 && (
                                <small>
                                    {errors.email && touched.email && errors.email}
                                </small>
                            )}

                            <label htmlFor="message">
                                <textarea name='message' placeholder="Message" id='' rows={4}></textarea>
                            </label>
                            <div className={wunmi.form_button}>
                                <Button text='Send Message' disable={isSubmitting} />
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    </section>
  )
}

export default contact