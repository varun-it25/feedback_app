import { BriefcaseBusiness, Building, ChevronDown, ChevronRight, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

function PersonCard(){
    return(
        <div className="w-full h-fit py-2 px-3 border space-y-2 rounded-lg cursor-pointer hover:bg-zinc-100">
            <div className="w-full flex space-x-3 items-center">
                <div className="w-12 h-12">
                    <img src="https://media.istockphoto.com/id/1399788030/photo/portrait-of-young-confident-indian-woman-pose-on-background.webp?b=1&s=170667a&w=0&k=20&c=8D_YP_bxKh8CH_W3n0kKr9bzQjZeYxUv9QgqfXjHNX8=" className="w-full h-full rounded-lg object-cover" />
                </div>
                <div className="flex-1 flex flex-col justify-center">
                    <p className="font-semibold">Angel Priya</p>
                    <p className="text-xs font-medium text-zinc-500 flex items-center mt-0.5"><BriefcaseBusiness size={14} className="mr-1.5" /> Frontend developer</p>
                </div>
                <ChevronRight className="text-zinc-300" />
            </div>
        </div>
    )
}

function SearchBar(){
    const [searchFor, setSearchFor] = useState("people");

    return(
        <div className="relative w-full">
            <Input placeholder={`Search ${searchFor} here...`} className="font-medium rounded-full pr-36 py-6 pl-12" />
            <Search className="absolute left-5 top-[17.5px] text-zinc-500" size={16} />

            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    {
                      searchFor === "people"
                        ? <Button size="sm" variant="outline" className="absolute bottom-2 right-4 rounded-full flex items-center space-x-1 cursor-pointer"><User /><span>People</span><ChevronDown className="h-4 w-4 mt-0.5" /></Button>
                        : <Button size="sm" variant="outline" className="absolute bottom-2 right-4 rounded-full flex items-center space-x-1 cursor-pointer"><Building /><span>Company</span><ChevronDown className="h-4 w-4 mt-0.5" /></Button>
                    }
                </DropdownMenuTrigger>

                <DropdownMenuContent align="end" className="w-48 mt-2">
                    <DropdownMenuLabel>Searching for?</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="flex items-center space-x-2 cursor-pointer" onClick={() => setSearchFor("people")}><User /><span>People</span></DropdownMenuItem>
                    <DropdownMenuItem className="flex items-center space-x-2 cursor-pointer" onClick={() => setSearchFor("company")}><Building /><span>Company</span></DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}

const SearchSection = () => {
  return (
    <div className="flex-1 p-4 h-full flex flex-col overflow-auto">
        <SearchBar />
        <div className="flex-1 w-full mt-4 px-2 py-4 border shadow-md rounded-lg overflow-auto">
            <div className="flex w-full h-full px-2 flex-col space-y-2 overflow-auto">
                <div className="flex pb-1 pl-1 items-center">
                    <p className="text-sm pl-0 font-semibold text-zinc-500">Results for : </p>
                    <p className="font-bold text-xs py-0.5 pl-3 pr-4 rounded-full ml-2 text-zinc-700 border bg-zinc-100 flex items-center">
                        <User className="text-zinc-500 mr-1" size={12} />
                        Ang
                    </p>
                </div>
                <PersonCard />
                <PersonCard />
                <PersonCard />
                <PersonCard />
                <PersonCard />
                <PersonCard />
                <PersonCard />
                <PersonCard />
                <PersonCard />
                <PersonCard />
                <PersonCard />
                <PersonCard />
            </div>
        </div>
    </div>
  )
}

export default SearchSection