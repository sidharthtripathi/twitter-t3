import Link from "next/link"

interface Props{
    name? : string
    username? : string
    image? : string
}
function UserCard({name="name",username="username",image = "https://seeklogo.com/images/M/microsoft-account-logo-2E31F79058-seeklogo.com.png"} : Props) {
    return (
        <div className="flex justify-between items-center space-x-3">
            <img src={image}
             alt="userProfile"
             className="rounded-full w-10" 
             />
            <Link href = {`/${username}`} className="hover:underline">
                <p className="dark:text-white">{name}</p>
                <span  className="text-gray-400">@{username}</span>
            </Link>
            <button className="  px-2 py-1 rounded-full text-sm font-bold">Follow</button>
        </div>
    )
}

export default UserCard