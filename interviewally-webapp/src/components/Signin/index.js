import React from 'react'
import { Container, Icon,Form, FormButton, FormContent, FormH1, FormInput, FormLabel, FormWrap, Text } from './SigninElements'

const SignIn = () => {
  return (
   <>
   <Container>
  <FormWrap>
  <Icon to="/"> IA</Icon>
  <FormContent>
  <Form action="#">
 <FormH1>Sign in to your account</FormH1>
 <FormLabel htmlfor='for'>Email</FormLabel>
 <FormInput type='email' required/>

 <FormLabel htmlfor='for'>Email</FormLabel>
 <FormInput type='password' required/>

 <FormButton type='submit'>Continue</FormButton>
 <Text>Forgot Password</Text>
  </Form>


  </FormContent>


  </FormWrap>


   </Container> 
   
   </>
  )
}

export default SignIn;