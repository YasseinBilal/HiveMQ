import mqtt from 'mqtt'
import { v4 as uuidv4 } from 'uuid'

export const connect = (
  hostname: string,
  username: string,
  password: string,
) => {
  return mqtt.connect({
    clientId: uuidv4(),
    protocol: 'wss',
    hostname,
    username,
    password,
    protocolVersion: 4,
    port: 8884,
    path: '/mqtt',
    clean: true,
    resubscribe: false,
    keepalive: 60,
    reconnectPeriod: 0,
  })
}
