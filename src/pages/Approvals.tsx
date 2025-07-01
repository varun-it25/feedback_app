import { Button } from "@/components/ui/button";
import { Bell, LogOut, Menu, User } from "lucide-react";
import { useEffect } from "react";

const Navbar = () => {
  return (
    <div className="w-full py-3 px-6 shadow flex justify-between items-center">
        <p className="font-bold text-amber-500">RevFund</p>
        <div className="hidden sm:flex items-center space-x-12">
            <p className="font-semibold text-sm py-1 px-1 cursor-pointer hover:text-zinc-700">Dashboard</p>
            <p className="font-semibold text-sm py-1 px-1 cursor-pointer hover:text-zinc-700">Explore</p>
            <p className="font-semibold text-sm text-amber-500 border-b-2 border-amber-400 px-1 py-1 cursor-pointer hover:border-amber-500 hover:text-amber-600">Approvals</p>
            <p className="font-semibold text-sm py-1 px-1 cursor-pointer hover:text-zinc-700">Profile</p>
        </div>
        <div className="flex items-center space-x-2 border rounded-full pr-3">
            <div className="w-8 h-8 rounded-full">
                <img src="https://www.catholicsingles.com/wp-content/uploads/2020/06/blog-header-3.png" className="w-full h-full object-cover rounded-full" />
            </div>
            <p className="font-medium text-sm text-zinc-500">Varun Kangotra</p>
        </div>
        {/* <div className="hidden sm:flex items-center rounded-full px-4 py-2 cursor-pointer hover:bg-zinc-600 text-xs font-semibold bg-zinc-500 text-white">Logout <LogOut size={16} className="ml-2" /></div> */}
        <Button variant={'outline'} size={`sm`} className="block sm:hidden"><Menu /></Button>
    </div>
  )
}

const Approvals = () => {
  useEffect(()=>{
    document.title = 'Explore - RevFund';
  })
  return (
    <div className="w-screen h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex flex-col space-y-4 p-6">
        <div className="flex text-sm space-x-4 cursor-pointer font-medium">
            <p className="px-2 border-b-2 border-amber-500 pb-1">All</p>
            <p className="px-2 pb-1">Raised</p>
            <p className="px-2 pb-1">Rejected</p>
        </div>
        <div className="flex-1 border flex flex-col rounded-lg p-4">
            <div className="flex pb-1 pl-1 items-center">
                <p className="text-sm pl-0 font-semibold text-zinc-500">Approvals : </p>
                <p className="font-bold text-xs py-0.5 pl-3 pr-4 rounded-full ml-2 text-zinc-700 border bg-zinc-100 flex items-center">
                    <Bell className="text-zinc-500 mr-1" size={12} />
                    All
                </p>
            </div>
            <div className="flex-1 p-2">
                <div className="flex space-x-4 text-sm bg-zinc-100 rounded-lg px-4 py-2">
                    <div className="w-12 h-12 rounded-full">
                        <img src="https://purepng.com/public/uploads/large/purepng.com-microsoft-logo-iconlogobrand-logoiconslogos-251519939091wmudn.png" className="w-full h-full object-cover" />
                    </div>
                    <div className="">
                        <p className="font-medium text-lg">Microsoft</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga quidem autem hic cupiditate quis amet. Nam, magni non perspiciatis natus repudiandae animi blanditiis veniam repellat eaque, rerum ut molestiae maiores.</p>
                        <div className="flex space-x-4 mt-2">
                            <Button variant={`outline`} size={`sm`}>Reject</Button>
                            <Button size={`sm`}>Accept</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Approvals;
