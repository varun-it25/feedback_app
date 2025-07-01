import { LogOut, Menu } from "lucide-react"
import { Button } from "./ui/button"

const Navbar = () => {
  return (
    <div className="w-full py-3 px-6 shadow flex justify-between items-center">
        <p className="font-bold text-amber-500 text-lg">RevFund</p>
        <div className="hidden sm:flex items-center space-x-12">
            <p className="font-semibold text-sm py-1 px-1 cursor-pointer hover:text-zinc-700">Dashboard</p>
            <p className="font-semibold text-sm text-amber-500 border-b-2 border-amber-400 px-1 py-1 cursor-pointer hover:border-amber-500 hover:text-amber-600">Explore</p>
            <p className="font-semibold text-sm py-1 px-1 cursor-pointer hover:text-zinc-700">Approvals</p>
            <p className="font-semibold text-sm py-1 px-1 cursor-pointer hover:text-zinc-700">Profile</p>
        </div>
        <div className="hidden sm:flex items-center rounded-full px-4 py-2 cursor-pointer hover:bg-zinc-600 text-xs font-semibold bg-zinc-500 text-white">Logout <LogOut size={16} className="ml-2" /></div>
        <Button variant={'outline'} size={`sm`} className="block sm:hidden"><Menu /></Button>
    </div>
  )
}

export default Navbar