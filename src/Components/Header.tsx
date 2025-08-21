import Cart from "./Header/Cart";
import LogoNav from "./Header/Logo&Nav";
import NavLogin from "./Header/NavLogin";
import ThemeToggleButton from "./Header/ThemeToggleButton";

const Header = () => {
  return (
    <header className="bg-black/50 md:w-[98%] lg:w-[95%] xl:w-[90%] h-24 pr-8 xl:pr-10 pl-4 py-5 rounded-3xl fixed top-9 left-1/2 -translate-x-1/2 text-white hidden md:flex items-center backdrop-blur-[6px]">
      <div className="w-full xl:px-6 flexBetween">
        <LogoNav />
        <div className="flex text-orange-200">
          <div className="flex items-center gap-x-4 ml-5 xl:ml-8">
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