import Cartlogin from "./Header/Cart&login";
import LogoNav from "./Header/Logo&Nav";

const Header = () => {
  return (
    <header className="bg-black/50 w-[90%] h-24 pr-10 pl-4 py-5 rounded-3xl fixed top-9 left-1/2 -translate-x-1/2 text-white flex items-center backdrop-blur-[6px]">
      <div className="flex w-full justify-between items-center px-6">
        <LogoNav />
        <Cartlogin />
      </div>
    </header>
  )
}

export default Header;