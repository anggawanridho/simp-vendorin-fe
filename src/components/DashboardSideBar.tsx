import Link from "next/link";

const DashboardSideBar = () => {
  return (
    <div className="md:flex md:flex-col h-screen md:gap-4 md:w-64 border text-custom-color-dashboard">
      <div className="md:p-4 md:flex md:flex-row md:gap-4">
        <svg className="md:h-10 md:w-10" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 48">
          <path fill="#f80" d="M30,43H9c-2.209,0-4-1.791-4-4V18c0-2.209,1.791-4,4-4h21c2.209,0,4,1.791,4,4v21 C34,41.209,32.209,43,30,43z M28,34V23c0-1.657-1.343-3-3-3H14c-1.657,0-3,1.343-3,3v11c0,1.657,1.343,3,3,3h11 C26.657,37,28,35.657,28,34z"></path><path d="M34,27v8h-6.18c0.12-0.31,0.18-0.65,0.18-1v-7H34z" opacity=".07"></path><path d="M34,27.5v7h-6.05C27.99,34.34,28,34.17,28,34v-6.5H34z" opacity=".07"></path><path fill="#25a2e5" d="M39,5H18c-2.21,0-4,1.79-4,4v5h6c0-1.66,1.34-3,3-3h11c1.66,0,3,1.34,3,3v11c0,1.66-1.34,3-3,3H23 c-1.66,0-3-1.34-3-3v-5h-6v10c0,2.21,1.79,4,4,4h21c2.21,0,4-1.79,4-4V9C43,6.79,41.21,5,39,5z"></path><path d="M20.18,13C20.06,13.31,20,13.65,20,14h-6.02v-1H20.18z" opacity=".05"></path><path d="M20.05,13.5C20.01,13.66,20,13.83,20,14h-6.02v-0.5H20.05z" opacity=".07"></path><rect width="6.019" height="1" x="13.981" y="20" opacity=".05" transform="rotate(-180 16.99 20.5)"></rect><rect width="6.019" height=".5" x="13.981" y="20" opacity=".07" transform="rotate(-180 16.99 20.25)"></rect>
        </svg>
        <h1 className="md:text-xl md:my-auto hover:cursor-pointer transition-colors hover:text-blue-500 duration-300">
          Vendorin
        </h1>
      </div>
      <ul className="md:flex md:flex-col gap-2 md:px-4">
        <li>
          <Link href="/dashboard" className="flex flex-row rounded-lg px-3 py-2 gap-4 text-custom-color-dashboard hover:text-blue-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
            Dashboard
          </Link>
        </li>
        <li>
          <Link href="/dashboard" className="flex flex-row rounded-lg px-3 py-2 gap-4 text-custom-color-dashboard hover:text-blue-500">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
          </svg>
            Users
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default DashboardSideBar;