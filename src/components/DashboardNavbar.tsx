const DashboardNavbar = () => {
  return (
    <div className="md:flex md:flex-row p-4 text-custom-color-dashboard">
      <div className="md:flex gap-4">
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
      <div className="ml-auto">
        
      </div>
    </div>
  )
}

export default DashboardNavbar;