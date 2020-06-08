import socketIOClient from "socket.io-client"
import { getApiUrl, WSUrl } from "./get-api-url"

export const WS = socketIOClient(WSUrl)
