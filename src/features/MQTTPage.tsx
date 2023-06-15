import React, { useState, useEffect } from 'react'
import { MqttClient } from 'mqtt'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { connect } from '../services'

import {
  ConnectionForm,
  ConnectionFormFields,
  SubscriptionForm,
  SubscriptionFormFields,
  MessageForm,
  MessageFormFields,
  SubscriptionList,
  MessageList,
} from '../components'

export const MQTTPage = () => {
  const [isConnected, setIsConnected] = useState(false)
  const [client, setClient] = useState<MqttClient>()
  const [topicSubscriptions, setTopicSubscriptions] = useState<string[]>([])
  const [publishedMessages, setPublishedMessages] = useState<
    MessageFormFields[]
  >([])

  useEffect(() => {
    if (client) {
      client.on('message', (topic: string, message: string) => {
        setPublishedMessages((prev) => {
          return [...prev, { topic, message: message.toString() }]
        })
      })
    }
  }, [client])

  const onConnectionFormSubmit = ({
    hostname,
    username,
    password,
  }: ConnectionFormFields) => {
    const cl = connect(hostname, username, password)
    cl.on('connect', function () {
      setIsConnected(true)
      setClient(cl)
    })
  }

  const onSubscriptionFormSubmit = ({ topic }: SubscriptionFormFields) => {
    if (client && !topicSubscriptions.includes(topic)) {
      client.subscribe(topic, () => {
        setTopicSubscriptions([...topicSubscriptions, topic])
      })
    }
  }

  const onMessageFormSubmit = ({ topic, message }: MessageFormFields) => {
    if (client) {
      client.publish(topic, message)
    }
  }

  return !isConnected ? (
    <Container>
      <Row className='justify-content-md-center'>
        <Col md='auto'>
          <ConnectionForm onSubmit={onConnectionFormSubmit} />
        </Col>
      </Row>
    </Container>
  ) : (
    <Container>
      <Row className='justify-content-md-center'>
        <Col md='auto'>
          <br />
          <p>Broker connected successfully</p>
          <br />
        </Col>
      </Row>
      <Row className='justify-content-md-center'>
        <Col xs lg='5'>
          <SubscriptionForm onSubmit={onSubscriptionFormSubmit} />
          <br />
          <SubscriptionList subscriptions={topicSubscriptions} />
        </Col>
        <Col xs lg='5'>
          <MessageForm onSubmit={onMessageFormSubmit} />
          <br />
          <MessageList messageList={publishedMessages} />
        </Col>
      </Row>
    </Container>
  )
}
