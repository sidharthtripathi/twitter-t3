"use client";
import { useState } from "react";
import UserCard from "../UserCard";
import { Skeleton } from "@/app/components/ui/skeleton";
interface User {
  name: string;
  username: string;
  image: string;
}
function Sidebar() {
  const [val, setVal] = useState("");
  const [fetching, setFetching] = useState(false);
  const [users, setUsers] = useState<User[]>([]);
  async function handleSearch(e: any) {
    if (e.key === "Enter") {
      setFetching((p) => !p);
      const res = await fetch("/api/users", {
        method: "POST",
        body: JSON.stringify({ input: val }),
      });
      setFetching((p) => !p);
      const users = await res.json();
      console.log(users);
      setUsers(users);
    }
  }
  return (
    <div
      className={`hidden space-y-3 p-2 md:items-center md:flex-col md:flex md:grow-[3]`}
    >
      <div className={` py-2 px-4 shadow-sm dark:bg-gray-800 rounded-2xl `}>
        <h1 className="font-bold text-xl mb-4 dark:text-white">
          Who to Follow
        </h1>
        <div className="space-y-4">
          <UserCard />
          <UserCard />
          <UserCard />
        </div>
      </div>

      <div className="flex flex-col w-full items-center space-y-3">
        <input
          type="text"
          className="py-2 px-3  bg-gray-700 rounded-full"
          placeholder="search.."
          value={val}
          onChange={(e) => {
            setVal(e.target.value);
          }}
          onKeyDown={(e) => {
            handleSearch(e);
          }}
        />

        {/* search results */}
        <div className="flex justify-center  space-y-2 w-full">
          {users.length === 0 && fetching ? (
            <div className="w-full space-y-2">
              <Skeleton className="w-full h-10 rounded-full" />
              <Skeleton className="w-full h-10 rounded-full" />
              <Skeleton className="w-full h-10 rounded-full" />
            </div>
          ) : (
            <div>
              {users.map((user) => (
                <UserCard
                  key={user.username}
                  username={user.username}
                  name={user.name}
                  image={user.image}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
