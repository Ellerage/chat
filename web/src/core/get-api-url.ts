export const getApiUrl = (path: string): string => {
  return process.env.NODE_ENV === "production"
    ? `/api/${path}`
    : `http://localhost:5000/api/${path}`
}

export const WSUrl =
  process.env.NODE_ENV === "production" ? "/socket.io" : "http://localhost:4000"
