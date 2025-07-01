import FilterSection from "@/components/FilterSection";
import ProfileSection from "@/components/ProfileSection";
import SearchSection from "@/components/SearchSection";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
// import Navbar from "@/components/Navbar";
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
        {/* <div className="flex items-center space-x-2 border rounded-full pr-3">
            <div className="w-8 h-8 rounded-full">
                <img src="https://www.catholicsingles.com/wp-content/uploads/2020/06/blog-header-3.png" className="w-full h-full object-cover rounded-full" />
            </div>
            <p className="font-medium text-sm text-zinc-500">Varun Kangotra</p>
        </div> */}
        {/* <div className="hidden sm:flex items-center rounded-full px-4 py-2 cursor-pointer hover:bg-zinc-600 text-xs font-semibold bg-zinc-500 text-white">Logout <LogOut size={16} className="ml-2" /></div> */}
        <Button variant={'outline'} size={`sm`} className="block sm:hidden"><Menu /></Button>
    </div>
  )
}

const Explore = () => {
  useEffect(()=>{
    document.title = 'Explore - RevFund';
  })
  return (
    <div className="w-screen h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 w-full flex p-0 sm:px-4 overflow-hidden">
        <FilterSection />
        <SearchSection />
        <ProfileSection />
      </div>
    </div>
  );
};

export default Explore;
