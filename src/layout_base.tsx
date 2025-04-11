import { AlignJustify, Search, ShoppingCart } from "lucide-react";
import { Outlet } from "react-router";

export default function LayoutBase() {
  return (
    <div className="w-full h-full grid grid-rows-[max-content,1fr]">
      <header className="row-span-1 flex justify-between items-center px-4 py-2 border-b">
        <div>
          <span>Logos</span>
        </div>
        <div className="w-[400px] flex gap-2">
          <div className="border px-2 flex gap-2 items-center rounded-md bg-blue-400 text-white">
            <AlignJustify size={16} />
            <span className='text-sm'>Filter</span>
          </div>
          <form className="flex-1">
            <div className="border relative rounded-md">
              <input type="search" className="w-full border rounded-md outline-none px-2 py-px" />
              <button className="absolute right-0 mt-[0.3rem]  mr-1.5" type="submit">
                <Search size={16} className="text-neutral-500" />
              </button>
            </div>
          </form>
        </div>
        <div className="text-black">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <ShoppingCart size={16} />
              <span className="text-sm">Carts</span>
            </span>
            <div className='border rounded-md bg-black text-white flex justify-center items-center p-2'>
              <span className="text-xs">Sign In</span>
            </div>
          </div>
        </div>
      </header>
      <Outlet />
    </div>
  )
}

