import socketIOClient from "socket.io-client"
import { WSUrl } from "./get-api-url"

export const WS = socketIOClient(WSUrl)

console.log(WS)
