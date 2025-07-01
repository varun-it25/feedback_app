import { Building, Fullscreen, MapPin, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react"
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FilterSection = () => {
  const [age, setAge] = useState(0);

  return (
    <Card className="hidden sm:block h-fit mt-4 shadow-md">
          <CardHeader>
            <div className="w-full flex justify-between items-center">
                <CardTitle className="text-slate-600 text-base w-fit">All Filters</CardTitle>
                {/* <div className="rounded-full px-4 py-1 text-xs font-semibold bg-amber-100 text-amber-400">Apply</div> */}
                <div className="rounded-full px-4 py-1 cursor-pointer hover:bg-amber-600 text-xs font-semibold bg-amber-500 text-white">Apply</div>
            </div>
          </CardHeader>

          <CardContent className="space-y-4 mt-4">
              <div>
                  <label className="text-xs font-semibold mb-1.5 block">Company</label>
                  <div className="relative">
                    <Input placeholder="Search company" className="h-8 rounded-none text-xs pl-9" />
                    <Building className="absolute left-3 top-2 text-zinc-500" size={16} />
                  </div>
              </div>

              <div>
                  <div className="flex w-full justify-between items-center mb-3.5">
                      <label className="text-xs font-semibold">Age</label>
                      <div className="border rounded-full text-xs font-medium px-3 py-0.5">{age} Yrs</div>
                  </div>
                  <Slider value={[age]} onValueChange={(value) => setAge(value[0])} max={100} min={18} step={1} className="w-full" />
              </div>

              <div>
                  <label className="text-xs font-semibold mb-1 block">Location</label>
                  <div className="relative">
                      <Select>
                          <SelectTrigger className="w-full pl-9 h-8 rounded-full">
                            <SelectValue placeholder="Choose location" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All Locations</SelectItem>
                            <SelectItem value="jaipur">Jaipur</SelectItem>
                            <SelectItem value="delhi">Delhi</SelectItem>
                            <SelectItem value="mumbai">Mumbai</SelectItem>
                            <SelectItem value="bangalore">Bangalore</SelectItem>
                          </SelectContent>
                      </Select>
                      <MapPin className="absolute left-3 top-2.5 text-zinc-500" size={16} />
                  </div>
              </div>

              
              <div>
                  <label className="text-xs font-semibold mb-1 block">Aadhar No.</label>
                  <div className="relative">
                    <Input placeholder="Search aadhar no." className="h-8 rounded-none text-xs pl-9" />
                    <User className="absolute left-3 top-2 text-zinc-500" size={16} />
                  </div>
              </div>

              <div>
                  <label className="text-xs font-semibold mb-1 block">Pan No.</label>
                  <div className="relative">
                    <Input placeholder="Search pan no." className="h-8 rounded-none text-xs pl-9" />
                    <Fullscreen className="absolute left-3 top-2 text-zinc-500" size={16} />
                  </div>
              </div>

          </CardContent>
    </Card>
  )
}

export default FilterSection