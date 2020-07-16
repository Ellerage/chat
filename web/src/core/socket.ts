import socketIOClient from "socket.io-client"
import { WSUrl } from "./get-api-url"

export class Socket {
  private static instance: SocketIOClient.Socket

  private constructor() {}

  public static getInstance(): any {
    if (!Socket.instance) {
      Socket.instance = socketIOClient(WSUrl)
    }

    return Socket.instance
  }
}

export const WS = Socket.getInstance()
