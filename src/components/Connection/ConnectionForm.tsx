import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Row from 'react-bootstrap/Row'

export type ConnectionFormFields = {
  hostname: string
  username: string
  password: string
}

type Props = {
  onSubmit: (fields: ConnectionFormFields) => void
}

export const ConnectionForm = ({ onSubmit }: Props) => {
  const [hostname, setHostname] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const onFormSubmit = () => {
    onSubmit({ hostname, username, password })
    setHostname('')
    setUsername('')
    setPassword('')
  }

  const isSubmitDisabled = !hostname || !username || !password

  return (
    <Form>
      <h2>Connection</h2>
      <Row className='mb-3'>
        <Form.Group as={Col} md='4' controlId='hostname'>
          <Form.Label>Hostname</Form.Label>
          <Form.Control
            required
            type='text'
            data-testid='hostname'
            value={hostname}
            onChange={(event) => setHostname(event.target.value)}
          />
        </Form.Group>
        <Form.Group as={Col} md='4' controlId='username'>
          <Form.Label>Username</Form.Label>
          <Form.Control
            required
            data-testid='username'
            type='text'
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </Form.Group>
        <Form.Group as={Col} md='4' controlId='password'>
          <Form.Label>Password</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type='password'
              data-testid='password'
              onChange={(event) => setPassword(event.target.value)}
              aria-describedby='inputGroupPrepend'
              required
              value={password}
            />
          </InputGroup>
        </Form.Group>
      </Row>
      <Button type='button' disabled={isSubmitDisabled} onClick={onFormSubmit}>
        Connect
      </Button>
    </Form>
  )
}
