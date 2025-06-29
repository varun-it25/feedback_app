import { BadgeAlert, Building, ChevronDown, CircleGauge, Mail, MapPin, Phone, Search, Sparkles, Star, StarHalf, User } from "lucide-react";
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
                  ? <Button size="sm" variant="outline" className="absolute bottom-2 right-4 rounded-full flex items-center space-x-1 cursor-pointer">
                      <User />
                      <span>People</span>
                      <ChevronDown className="h-4 w-4 mt-0.5" />
                    </Button>
                  : <Button size="sm" variant="outline" className="absolute bottom-2 right-4 rounded-full flex items-center space-x-1 cursor-pointer">
                      <Building />
                      <span>Company</span>
                      <ChevronDown className="h-4 w-4 mt-0.5" />
                    </Button>
              }
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-48 mt-2">
              <DropdownMenuLabel>Searching for?</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="flex items-center space-x-2 cursor-pointer" onClick={() => setSearchFor("people")}>
                <User />
                <span>People</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center space-x-2 cursor-pointer" onClick={() => setSearchFor("company")}>
                <Building />
                <span>Company</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="h-full w-80 px-2 py-4 rounded-xl border">
        <div className="space-y-4 flex-col px-2 flex items-center w-full h-full overflow-auto">





            <div className="w-full flex space-x-4 bg-zinc-100 rounded-lg">
              <div className="h-36 aspect-[9/12] rounded-lg">
                <img src="https://media.istockphoto.com/id/1399788030/photo/portrait-of-young-confident-indian-woman-pose-on-background.webp?b=1&s=170667a&w=0&k=20&c=8D_YP_bxKh8CH_W3n0kKr9bzQjZeYxUv9QgqfXjHNX8=" className="w-full h-full rounded-l-lg object-cover" /> 
              </div>
              <div className="py-3">
                <p className="font-medium text-xl">Angel Priya</p>
                <div className="rounded-full mt-2 w-fit py-1 font-medium px-3 bg-zinc-200 text-zinc-900 text-[11px] border">Frontend developer</div>
                <div className="flex items-center mt-4 text-xs">
                  <Mail className="mt-0.5 text-zinc-500" size={14} />
                  <span className="font-medium pl-1.5">angelpriya@gmail.com</span>
                </div>
                <div className="flex items-center mt-2 text-xs">
                  <MapPin className="mt-0.5 text-zinc-500" size={14} />
                  <span className="font-medium pl-1.5">Jaipur, India</span>
                </div>
              </div>
            </div>






            <div className="w-full">
                <p className="font-medium text-slate-500 text-sm">Personal Details</p>

                <div className="space-y-3.5 mt-2 p-1">
                    <div className="flex items-center text-xs">
                      <User className="mr-2" size={14} />
                      <span className="font-semibold text-zinc-500">Angel Priya</span>
                    </div>

                    <div className="flex items-center text-xs">
                      <CircleGauge className="mr-2" size={14} />
                      <span className="font-semibold text-zinc-500">21 Yrs Old</span>
                    </div>

                    <div className="flex items-center text-xs">
                      <Phone className="mr-2" size={14} />
                      <span className="font-semibold text-zinc-500">+91 92573-07752</span>
                    </div>

                    <div className="flex items-center text-xs">
                      <Mail className="mr-2" size={14} />
                      <span className="font-semibold text-zinc-500">priya.angel@gmail.com</span>
                    </div>

                    <div className="flex items-center text-xs">
                      <MapPin className="mr-2" size={14} />
                      <span className="font-semibold text-zinc-500">Jaipur, India</span>
                    </div>

                    <div className="flex items-center space-x-2">
                      <div className="flex-1 text-xs font-medium border rounded-lg px-2 py-1.5">
                        <p className="">Aaddar No.</p>
                        <p className="mt-0.5 text-zinc-500 text-[0.7rem]">9876-4567-2618-2810</p>
                      </div>

                      <div className="flex-1 text-xs font-medium border rounded-lg px-2 py-1.5">
                        <p className="">Pan No.</p>
                        <p className="mt-0.5 text-zinc-500 text-[0.7rem]">ABCPK9031L</p>
                      </div>
                    </div>
                </div>
            </div>





            <div className="w-full">
                <p className="font-medium text-slate-500 text-sm">Work Experience</p>

                <div className="space-y-2 mt-2">
                    <div className="flex items-center space-x-3 border rounded-lg p-2 pr-4.5">
                        <div className="w-10 h-10 rounded full p-2">
                          <img src="https://purepng.com/public/uploads/large/purepng.com-microsoft-logo-iconlogobrand-logoiconslogos-251519939091wmudn.png" className="w-full h-full object-cover" />
                        </div>

                        <div className="flex-1">
                          <div className="flex justify-between items-center">
                            <p className="text-sm font-medium">Microsoft</p>
                            <div className="text-xs font-medium px-2 py-0.5 bg-zinc-100 rounded">2 Yrs</div>
                          </div>
                          <p className="text-xs text-zinc-400 font-medium">Frontend Developer</p>
                        </div>
                    </div>

                    <div className="flex items-center space-x-3 border rounded-lg p-2 pr-4.5">
                        <div className="w-10 h-10 rounded full p-2">
                          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png" className="w-full h-full object-cover" />
                        </div>

                        <div className="flex-1">
                            <div className="flex justify-between items-center">
                              <p className="text-sm font-medium">Google LLC</p>
                              <div className="text-xs font-medium px-2 py-0.5 bg-zinc-100 rounded">1 Yrs</div>
                            </div>
                            <p className="text-xs text-zinc-400 font-medium">Software Developer</p>
                        </div>
                    </div>
                </div>
            </div>





            <div className="w-full">
                <p className="font-medium text-slate-500 text-sm">All Reviews</p>

                <div className="space-y-2 mt-2">
                  <div className="border p-2 space-y-2 rounded-lg">
                    <div className="flex items-center space-x-3 pr-4.5">
                        <div className="w-10 h-10 rounded full p-2 border">
                          <img src="https://purepng.com/public/uploads/large/purepng.com-microsoft-logo-iconlogobrand-logoiconslogos-251519939091wmudn.png" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-center">
                            <p className="text-sm font-medium -mt-1">Microsoft</p>
                            <div className="text-[0.7rem] text-sky-500 font-medium px-2 py-0.5 bg-sky-100 rounded flex items-center"><Sparkles size={12} className="mr-1" />Good</div>
                          </div>
                          <div className="flex space-x-0.5 items-center text-yellow-500 mt-[1px]">
                            <Star size={10} />
                            <Star size={10} />
                            <Star size={10} />
                            <Star size={10} />
                            <StarHalf size={10} />
                          </div>
                        </div>
                    </div>
                    <p className="text-[0.7rem] font-medium text-zinc-500 px-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta facere dicta, nostrum nobis deserunt labore, odio consequuntur praesentium velit iste molestiae incidunt minus. Perferendis ipsa deleniti aperiam molestias amet veritatis.</p>
                    <button className="w-full rounded-full my-1 text-xs font-semibold bg-amber-500 hover:bg-amber-600 cursor-pointer text-white py-1.5">Approve</button>
                  </div>
                </div>

                <div className="space-y-2 mt-2">
                  <div className="border p-2 space-y-2 rounded-lg">
                    <div className="flex items-center space-x-3 pr-4.5">
                        <div className="w-10 h-10 rounded full p-2 border">
                          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-center">
                            <p className="text-sm font-medium -mt-1">Google</p>
                            <div className="text-[0.7rem] text-red-500 font-medium px-2 py-0.5 bg-red-100 rounded flex items-center"><BadgeAlert size={12} className="mr-1" />Bad</div>
                          </div>
                          <div className="flex space-x-0.5 items-center text-yellow-500 mt-[1px]">
                            <Star size={10} />
                            <StarHalf size={10} />
                          </div>
                        </div>
                    </div>
                    <p className="text-[0.7rem] font-medium text-zinc-500 px-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, aspernatur. Perspiciatis, alias.</p>
                    <button className="w-full rounded-full my-1 text-xs font-semibold bg-amber-500 hover:bg-amber-600 cursor-pointer text-white py-1.5">Approve</button>
                  </div>
                </div>

            </div>



        </div>

      </div>

    </div>
  );
};

export default App;