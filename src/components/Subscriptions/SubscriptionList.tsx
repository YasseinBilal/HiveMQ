import React from 'react'
import Table from 'react-bootstrap/Table'

type Props = {
  subscriptions: string[]
}

export const SubscriptionList = ({ subscriptions }: Props) => {
  return (
    <Table striped>
      <thead>
        <tr>
          <th>Subscribed Topics</th>
        </tr>
      </thead>
      <tbody>
        {subscriptions.map((subscription) => (
          <tr>
            <td>{subscription}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}
