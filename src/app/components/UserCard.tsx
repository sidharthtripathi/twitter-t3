import Link from "next/link"


function UserCard() {
    return (
        <div className="flex justify-between items-center space-x-3">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTa31xKmnI6rYS9nSNXJNOewF7o1E49L6r_Q&usqp=CAU"
             alt="userProfile"
             className="rounded-full w-10" 
             />
            <div>
                <p className="dark:text-white">name</p>
                <Link href = '#' className="text-gray-400">@username</Link>
            </div>
            <button className="  px-2 py-1 rounded-full text-sm font-bold">Follow</button>
        </div>
    )
}

export default UserCard