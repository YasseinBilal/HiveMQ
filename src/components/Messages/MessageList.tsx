import React from 'react'
import Table from 'react-bootstrap/Table'

import { MessageFormFields } from './MessagesForm'

type Props = {
  messageList: MessageFormFields[]
}

export const MessageList = ({ messageList }: Props) => {
  return (
    <Table striped>
      <thead>
        <tr>
          <th>Topic</th>
          <th>Message</th>
        </tr>
      </thead>
      <tbody>
        {messageList.map((message) => (
          <tr>
            <td>{message.topic}</td>
            <td>{message.message}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}
