import Image from "next/image";

const DashboardNavbar = () => {
  return (
    <div className="md:flex md:flex-row py-4 px-6 text-custom-color-dashboard">
      <div className="md:flex gap-4">
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
        <form action="" method="post" className="flex items-center">
          <div>
            <input type="text" name="search" placeholder="Search..." autoComplete="false" className="bg-slate-100 rounded-l-md px-3 py-2" />
            <button type="submit" className="px-3 py-2 bg-blue-400 hover:bg-blue-500 rounded-r-lg float-right right-10">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 text-white h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </button>
          </div>
        </form>
      </div>
      
      <div className="md:flex gap-4 ml-auto items-center">
        <Image 
          src="/images/users/default.jpg"
          alt="avatar user"
          width="10"
          height="10"
          className="rounded-full w-10 h-10"
        />
        <p className="text-color-custom-dashboard">Admin123</p>
      </div>
    </div>
  )
}

export default DashboardNavbar;