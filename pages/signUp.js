import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { auth } from './src/components/auth/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import Link from 'next/link';

function Login() {
   

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
   


    const onSignUp = event => {      

        event.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((user) => {
          console.log(user);
        }).catch((error) => {
          console.log(error);
        })
    }

  return (
    <Form onSubmit={onSignUp}>
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
        <button type='submit'>S\´enregistrer</button>
        <button >
            <Link href={'/login'}>Se connecter</Link>
        </button>
    </Form>
  )
}

export default Login
