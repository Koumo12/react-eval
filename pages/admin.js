import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { auth } from './src/components/auth/firebase';
import {signInWithEmailAndPassword } from 'firebase/auth';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';

function Login() {
   

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const onLogin = event => {      

        event.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((user) => {
          console.log(user);
          Router.push('./dashboard')
        }).catch((error) => {
          console.log(error);
        })
    }

  return (
    <Form onSubmit={onLogin}>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Email
        </Form.Label>
        <Col sm="10">
          <Form.Control type='text' value={email} onChange={event => setEmail(event.currentTarget.value)} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Password
        </Form.Label>
        <Col sm="10">
          <Form.Control type="password" value={password}  onChange={event => setPassword(event.currentTarget.value)}/>
        </Col>        
      </Form.Group>
      <button type='submit'>Se connecter</button>
      <button >
        <Link href={'/signUp'}>S´enregistrer </Link>
      </button>
    </Form>
  )
}

export default Login;