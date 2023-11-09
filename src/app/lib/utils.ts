import { twMerge } from "tailwind-merge"
import type {ClassNameValue} from 'tailwind-merge'
export const cn = (...classList : ClassNameValue[])=>{
    return twMerge(classList)
}