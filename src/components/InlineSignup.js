import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { css } from '@emotion/core'
import { bpMinMD } from '../lib/breakpoints'

const InlineEmailSuccess = () => {
  return (
    <div
      css={css({
        textAlign: 'center',
        padding: '0.3em',
        borderTop: '1px solid #8147C2',
        margin: '20px auto',
      })}
    >
      <h3>Thanks for joining!</h3>
      <p>Please check your inbox for a confirmation email</p>
    </div>
  )
}

const FORM_ID = process.env.CONVERTKIT_SIGNUP_FORM

const SubscribeSchema = Yup.object().shape({
  email_address: Yup.string()
    .email('Invalid email address')
    .required('Required'),
  first_name: Yup.string(),
})

const PostSubmissionMessage = ({ response }) => {
  return <InlineEmailSuccess />
}

class InlineSignUp extends React.Component {
  state = {
    submitted: false,
  }

  async handleSubmit(values) {
    this.setState({ submitted: true })
    try {
      const response = await fetch(
        `https://app.convertkit.com/forms/${FORM_ID}/subscriptions`,
        {
          method: 'post',
          body: JSON.stringify(values, null, 2),
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        },
      )

      const responseJson = await response.json()

      this.setState({
        submitted: true,
        response: responseJson,
        errorMessage: null,
      })
    } catch (error) {
      this.setState({
        submitted: false,
        errorMessage: 'Something went wrong!',
      })
    }
  }

  render() {
    const { response, errorMessage } = this.state
    const successful = response && response.status === 'success'

    return (
      <div
        css={css({
          color: 'rgb(80, 100, 110)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-left',
          input: {
            border: '1px solid #A6B8D2',
            color: '#A6B8D2',
            background: 'transparent',
            borderRadius: '5px',
            padding: '8px 8px',
            marginBottom: '8px',
            maxWidth: '360px',
            textAlign: 'left',
            [bpMinMD]: {
              marginRight: '10px',
            },
            marginRight: 0,
          },
          button: {
            boxSizing: 'border-box',
            color: '#fff',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            backgroundColor: '#7A44BB',
            borderRadius: '5px',
            border: 'none',
            marginBottom: '8px',
            padding: '10px 30px',
            cursor: 'pointer',
            [bpMinMD]: {
              marginTop: 0,
            },
            marginTop: '10px',
          },
          '.field-error': {
            marginLeft: '5px',
            opacity: 0.5,
          },
        })}
      >
        {!successful && (
          <div
            css={css({
              marginTop: '20px',
            })}
          >
            <h3
              css={css({
                fontSize: '1.4em',
                lineHeight: '1.2em',
                fontWeight: 'bold',
                marginBottom: '0.4em',
                marginTop: '0',
              })}
            >
              Want to know every time I post new illustrated articles?
            </h3>
            <p
              css={css({
                margin: '0 auto',
                fontSize: '1em',
              })}
            >
              Join the newsletter and I'll keep you up to date.
            </p>
          </div>
        )}

        <Formik
          initialValues={{
            email_address: '',
            first_name: '',
          }}
          validationSchema={SubscribeSchema}
          onSubmit={values => this.handleSubmit(values)}
          render={({ errors, touched, isSubmitting }) => (
            <>
              {!successful && (
                <Form
                  css={css({
                    display: 'flex',
                    [bpMinMD]: {
                      flexDirection: 'row',
                      alignItems: 'flex-end',
                    },
                    alignItems: 'center',
                    flexDirection: 'column',
                    //justifyContent: 'space-between',
                    marginTop: '20px',
                  })}
                >
                  <div css={css({ textAlign: 'left' })}>
                    <label htmlFor="first_name">
                      <ErrorMessage
                        name="first_name"
                        component="span"
                        className="field-error"
                      />
                    </label>
                    <Field
                      aria-label="your first name"
                      aria-required="false"
                      name="first_name"
                      placeholder="Name"
                      type="text"
                    />
                  </div>
                  <div css={css({ textAlign: 'left' })}>
                    <label htmlFor="email">
                      <ErrorMessage
                        name="email_address"
                        component="span"
                        className="field-error"
                      />
                    </label>
                    <Field
                      aria-label="your email address"
                      aria-required="true"
                      name="email_address"
                      placeholder="Email Address"
                      type="email"
                    />
                  </div>
                  <button
                    data-element="submit"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {!isSubmitting && 'Join'}
                    {isSubmitting && 'Submitting...'}
                  </button>
                </Form>
              )}
              {successful && <PostSubmissionMessage response={response} />}
              {errorMessage && <div>{errorMessage}</div>}
            </>
          )}
        />
      </div>
    )
  }
}

export default InlineSignUp
