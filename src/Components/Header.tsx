import Cart from "./Header/Cart";
import LogoNav from "./Header/Logo&Nav";
import NavLogin from "./Header/NavLogin";
import ThemeToggleButton from "./Header/ThemeToggleButton";

const Header = () => {
  return (
    <header className="bg-black/50 w-[90%] h-24 pr-10 pl-4 py-5 rounded-3xl fixed top-9 left-1/2 -translate-x-1/2 text-white flex items-center backdrop-blur-[6px]">
      <div className="flex w-full justify-between items-center px-6">
        <LogoNav />
        <div className="flex text-orange-200">
          <div className="flex items-center gap-x-5 ml-10">
            <Cart mode="Initial price" />
            <ThemeToggleButton />
          </div>
          <span className="w-px h-14 block bg-white/20" />
          <NavLogin />
        </div>
      </div>
    </header>
  )
}

export default Header;