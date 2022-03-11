type NavProps = {
  isLoggedIn: boolean
}
const Nav = ({ isLoggedIn }: NavProps) => {
  return <div className="text-white w-full h-14 fixed z-10 opacity-95 bg-black flex justify-between items-center px-6" >

    <div>
      <a href="/"><h1 className="text-lg font-bold">Eden-Tree</h1></a>
    </div>
    <div>
      {isLoggedIn ? <div className="flex items-center gap-4"> <h1>Hi, user01</h1> <a href="/login"> <button className="text-sm border border-white px-4 py-1 rounded-md hover:bg-white hover:text-black transition-colors">Sign Out</button></a></div>
        : <a href="/login"> <button className="text-sm border border-white px-4 py-1 rounded-md hover:bg-white hover:text-black transition-colors">Sign In</button></a>}
    </div>

  </div>
}
export default Nav
