import React,{FC} from "react"
import { cn } from "../lib/utils"

interface UserAuthFormProps extends React.HTMLAttributes<HTMLButtonElement>{}
function Button ({className,...props} : UserAuthFormProps) {
  return (
    <button className="bg-white">Button</button>
  )
}

export default Button