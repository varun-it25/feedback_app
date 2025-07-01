import FilterSection from "@/components/FilterSection";
import ProfileSection from "@/components/ProfileSection";
import SearchSection from "@/components/SearchSection";
import Navbar from "./components/Navbar";

const App = () => {
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

export default App;
