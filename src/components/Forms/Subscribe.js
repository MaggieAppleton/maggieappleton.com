import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { css } from '@emotion/core'
import { withTheme } from '../Theming'
import { rhythm, fonts } from '../../lib/typography'
import { bpMaxSM } from '../../lib/breakpoints'

const FORM_ID = process.env.CONVERTKIT_SIGNUP_FORM

const SubscribeSchema = Yup.object().shape({
  email_address: Yup.string()
    .email('Invalid email address')
    .required('Required'),
  first_name: Yup.string(),
})

const PostSubmissionMessage = ({ response }) => {
  return (
    <div css={css({})}>
      <h3>Thanks for joining!</h3>
      <p style={{ maxWidth: '800px', margin: '0.2em 0 1em' }}>
        I just sent you an email with the confirmation link – please check your
        inbox.
      </p>
    </div>
  )
}

class SignUp extends React.Component {
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
    const { submitted, response, errorMessage } = this.state
    const { theme } = this.props
    const successful = response && response.status === 'success'

    return (
      <div
        css={css`
          display: flex;
          flex-direction: column;
          .formHeader {
            display: flex;
            flex-direction: column;
            margin-bottom: 0;
          }
        `}
      >
        <div className="formHeader">
          {!successful && (
            <>
              <h3
                css={css`
                  margin-top: ${rhythm(1)};
                `}
              >
                Join the newsletter
              </h3>
              <p style={{ maxWidth: '800px', margin: '0.2em 0 1em' }}>
                For weekly notes on visual thinking, ethical technology, and cultural anthropology.
              </p>
            </>
          )}
        </div>
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
                  css={css`
                    display: flex;
                    font-size: 0.9em;
                    align-items: flex-end;
                    button {
                      margin-left: 10px;
                    }
                    .field-error {
                      color: ${theme.colors.red};
                      font-size: 80%;
                    }
                    input,
                    label {
                      max-width: 360px;
                      font-family: ${fonts.walsheim};
                      color: ${theme.colors.grey};
                    }
                    input {
                      width: 200px;
                      height: 40px;
                      font-size: 0.8em;
                      padding-top: 6px;
                      border: 1px solid ${theme.colors.lightGrey};
                      color: ${theme.colors.grey};
                    }
                    ${bpMaxSM} {
                      flex-direction: column;
                      align-items: flex-start;
                      width: auto;
                      label,
                      input {
                        margin: 5px 0 0 0 !important;
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                      }
                      button {
                        margin: 20px 0 0 0;
                      }
                    }
                  `}
                >
                  <label htmlFor="first_name">
                    <div
                      css={css`
                        display: flex;
                        justify-content: space-between;
                        align-items: flex-end;
                      `}
                    >
                      First Name
                      <ErrorMessage
                        name="first_name"
                        component="span"
                        className="field-error"
                      />
                    </div>
                    <Field
                      aria-label="your first name"
                      aria-required="false"
                      name="first_name"
                      placeholder="Margaret Mead"
                      type="text"
                    />
                  </label>
                  <label
                    htmlFor="email"
                    css={css`
                      margin-left: 10px;
                    `}
                  >
                    <div
                      css={css`
                        display: flex;
                        justify-content: space-between;
                        align-items: flex-end;
                      `}
                    >
                      Email
                      <ErrorMessage
                        name="email_address"
                        component="span"
                        className="field-error"
                      />
                    </div>
                    <Field
                      aria-label="your email address"
                      aria-required="true"
                      name="email_address"
                      placeholder="mead@semiotics.com"
                      type="email"
                    />
                  </label>
                  <button
                    data-element="submit"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {!isSubmitting && 'Submit'}
                    {isSubmitting && 'Submitting...'}
                  </button>
                </Form>
              )}
              {submitted && <PostSubmissionMessage response={response} />}
              {errorMessage && <div>{errorMessage}</div>}
            </>
          )}
        />
      </div>
    )
  }
}

export default withTheme(SignUp)
