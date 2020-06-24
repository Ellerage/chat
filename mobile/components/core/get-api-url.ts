import { MODE, ModeEnum } from "./constants"

export const getApiUrl = (url: string): string =>
  MODE === ModeEnum.development
    ? `http://192.168.0.101:5000/api/${url}`
    : `http://ec2-54-93-250-255.eu-central-1.compute.amazonaws.com/api/${url}`

export const WSUrl =
  MODE === ModeEnum.development
    ? "http://192.168.0.101:4000"
    : "http://ec2-54-93-250-255.eu-central-1.compute.amazonaws.com/socket.io"
