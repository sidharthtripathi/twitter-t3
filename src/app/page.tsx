import Main from "./components/sections/Main"
import Navbar from "./components/sections/Navbar"
import Sidebar from "./components/sections/Sidebar"

async function page() {
  return (
    <div className="w-full h-full flex p-2 relative justify-around">
    <Navbar/>
    <Main/>
    <Sidebar/>
    </div>
    
  )
}

export default page