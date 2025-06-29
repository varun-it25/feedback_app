import { Building, ChevronDown, MapPin, Search, User } from "lucide-react";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { useState } from "react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const App = () => {
  const [searchFor, setSearchFor] = useState("people");

  return (
    <div className="w-screen h-screen flex items-center justify-between px-12 py-6 space-x-4">
      <div className="h-full w-52">Filters</div>

      <div className="flex-1 h-full">
        <div className="relative w-full">
          <Input placeholder={`Search ${searchFor} here...`} className="font-medium rounded-full pr-36 py-6 pl-12" />
          <Search className="absolute left-5 top-[17.5px] text-zinc-500" size={16} />

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              {
                searchFor === "people"
                  ? <Button size="sm" variant="outline" className="absolute bottom-2 right-4 rounded-full flex items-center space-x-1">
                      <User />
                      <span>People</span>
                      <ChevronDown className="h-4 w-4 mt-0.5" />
                    </Button>
                  : <Button size="sm" variant="outline" className="absolute bottom-2 right-4 rounded-full flex items-center space-x-1">
                      <Building />
                      <span>Company</span>
                      <ChevronDown className="h-4 w-4 mt-0.5" />
                    </Button>
              }
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-48 mt-2">
              <DropdownMenuLabel>Searching for?</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="flex items-center space-x-2" onClick={() => setSearchFor("people")}>
                <User />
                <span>People</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center space-x-2" onClick={() => setSearchFor("company")}>
                <Building />
                <span>Company</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="h-full w-96 bg-zinc-50 flex-col p-6 flex items-center rounded-xl border">
        <div className="w-full flex space-x-4 bg-zinc-100 rounded-lg">
            <div className="h-36 aspect-[9/12] rounded-lg">
              <img src="https://media.istockphoto.com/id/1399788030/photo/portrait-of-young-confident-indian-woman-pose-on-background.webp?b=1&s=170667a&w=0&k=20&c=8D_YP_bxKh8CH_W3n0kKr9bzQjZeYxUv9QgqfXjHNX8=" className="w-full h-full rounded-l-lg object-cover" /> 
            </div>
            <div className="py-3">
                <p className="font-medium text-xl">Angel Priya</p>
                <div className="flex items-center mt-1 text-xs text-zinc-500">
                  <MapPin className="mt-0.5" size={14} />
                  <span className="font-medium pl-1">Jaipur, India</span>
                </div>
                <div className="rounded-full py-1 mt-4 font-medium px-3 text-xs bg-sky-100">Software developer</div>
            </div>
        </div>
      </div>

    </div>
  );
};

export default App;