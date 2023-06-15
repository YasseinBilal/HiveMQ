import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'

export type SubscriptionFormFields = {
  topic: string
}

type Props = {
  onSubmit: (fields: SubscriptionFormFields) => void
}

export const SubscriptionForm = ({ onSubmit }: Props) => {
  const [topic, setTopic] = useState('')

  const onFormSubmit = () => {
    onSubmit({ topic })
    setTopic('')
  }

  return (
    <Form>
      <h2>Subscriptions</h2>
      <Row className='mb-3'>
        <Form.Group as={Col} md='4' controlId='topic'>
          <Form.Label>Topic</Form.Label>
          <Form.Control
            data-testid='subscription-topic'
            required
            type='text'
            onChange={(event) => setTopic(event.target.value)}
            value={topic}
          />
          <Form.Control.Feedback type='invalid'>
            Please enter a topic
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Button type='button' disabled={!topic} onClick={onFormSubmit}>
        Subscribe
      </Button>
    </Form>
  )
}
