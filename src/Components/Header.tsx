import Cart from "./Header/Cart";
import LogoNav from "./Header/Logo&Nav";
import BurgerMenu from "./Header/mobile/BurgerMenu";
import MobileCart from "./Header/mobile/MobileCart";
import NavLogin from "./Header/NavLogin";
import ThemeToggleButton from "./Header/ThemeToggleButton";
import LogoTypeSVG from "./SVGs/nav/mobile/LogoTypeSVG";

const Header = () => {
  return (
    <>
      <header className="bg-black/50 md:w-[98%] z-50 lg:w-[95%] xl:w-[90%] h-24 pr-8 xl:pr-10 pl-4 py-5 
      rounded-3xl fixed top-9 left-1/2 -translate-x-1/2 text-white hidden md:flex items-center backdrop-blur-[6px]">
        <div className="w-full xl:px-6 flexBetween">
          <LogoNav />
          <div className="flex text-orange-200">
            <div className="flex items-center gap-x-4 ml-5 xl:ml-8">
              <Cart mode="qty" />
              <ThemeToggleButton />
            </div>
            <span className="w-px h-14 block bg-white/20" />
            <NavLogin />
          </div>
        </div>
      </header>

      <div className="flex items-center justify-between md:hidden bg-background">
        <BurgerMenu />
        <LogoTypeSVG className="w-25" width={100} height={40} fill="oklch(83.7% 0.128 66.29)" />
        <MobileCart />
      </div>
    </>
  )
}

export default Header;