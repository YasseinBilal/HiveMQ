import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'

export type MessageFormFields = {
  topic: string
  message: string
}

type Props = {
  onSubmit: (fields: MessageFormFields) => void
}

export const MessageForm = ({ onSubmit }: Props) => {
  const [topic, setTopic] = useState('')
  const [message, setMessage] = useState('')

  const onFormSubmit = () => {
    onSubmit({ topic, message })
    setTopic('')
    setMessage('')
  }

  const isSubmitDisabled = !topic || !message

  return (
    <Form>
      <h2>Messages</h2>
      <Row className='mb-3'>
        <Form.Group as={Col} md='4' controlId='hostname'>
          <Form.Label>Topic</Form.Label>
          <Form.Control
            required
            data-testid='message-topic'
            type='text'
            value={topic}
            onChange={(event) => setTopic(event.target.value)}
          />
        </Form.Group>
        <Form.Group as={Col} md='4' controlId='username'>
          <Form.Label>Message</Form.Label>
          <Form.Control
            required
            data-testid='message'
            type='text'
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
        </Form.Group>
      </Row>
      <Button type='button' disabled={isSubmitDisabled} onClick={onFormSubmit}>
        Publish message
      </Button>
    </Form>
  )
}
