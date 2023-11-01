"use client"

import { useSession } from "next-auth/react"

function Client() {
    const {data} = useSession()
  return (
    <div>{JSON.stringify(data)}</div>
  )
}

export default Client