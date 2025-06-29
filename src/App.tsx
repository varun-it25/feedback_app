import { Building, ChevronDown, Search, User } from "lucide-react";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const App = () => {
  const [searchFor, setSearchFor] 
  return (
    <div className="w-screen h-screen flex items-center justify-between px-12 py-6">
      <div className="h-full w-52">Left</div>

      <div className="flex-1 h-full">
        <div className="relative w-full">
          <Input placeholder="Search person here..." className="pr-36 py-6 pl-10" />
          <Search className="absolute left-4 top-4.5 text-zinc-500" size={16} />

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="sm" variant="outline" className="absolute bottom-2 right-4 rounded-full flex items-center space-x-1">
                <User />
                <span>People</span>
                <ChevronDown className="h-4 w-4 mt-0.5" />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-48 mt-2">
              <DropdownMenuLabel>Searching for?</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="flex items-center space-x-2">
                <User />
                <span>People</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center space-x-2">
                <Building />
                <span>Company</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="h-full w-52">Filters</div>
    </div>
  );
};

export default App;