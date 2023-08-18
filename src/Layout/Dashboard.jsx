import Header from "../components/Header";
import { Link, Outlet } from "react-router-dom";

function Dashboard() {
    return (
        <>
            <div className="flex flex-auto">
                {/* #331D2C */}
                <aside className="bg-slate-800 text-white h-screen w-1/5 flex flex-col justify-between">
                    <div>
                        <div className="mt-4 mb-16 ml-4 mr-4" >
                            <img src="../src/assets/comm buzz final.png" alt="Comm Buzz Logo" />

                        </div>
                        <ul className="ml-8 text-lg">
                            <Link to={'/dashboard'}><li><i className="fa-solid fa-house mr-3 pb-4"></i>Home</li></Link>
                            <Link to={'/dashboard'}><li><i className="fa-solid fa-envelope mr-3 pb-4"></i>Messages</li></Link>
                            <Link to={'/dashboard/people'}><li><i className="fa-solid fa-people-arrows mr-3 pb-4"></i>People</li></Link>
                            <Link to={'/dashboard'}><li><i className="fa-solid fa-user mr-3 pb-4"></i>Profile</li></Link>
                            {/* <Link to={}><li><i className="fa-solid fa-user-group mr-3 pb-4"></i>Groups</li></Link> */}
                            <Link to={'/dashboard/jobs'}><li><i className="fa-solid fa-briefcase mr-3 pb-4"></i>Jobs</li></Link>
                            <Link to={'/dashboard/events'}><li><i className="fa-regular fa-calendar-days mr-3 pb-4"></i>Events</li></Link>
                            <Link to={'/dashboard/adverts'}><li><i className="fa-brands fa-adversal mr-3 pb-4"></i>Adverts</li></Link>
                            <Link to={'/dashboard/announcements'}><li><i className="fa-solid fa-bullhorn mr-3 pb-4"></i>Announcements</li></Link>
                        </ul>

                    </div>

                    <div className="text-center mb-4">
                        <i className="fa-solid fa-right-from-bracket text-3xl"></i>
                    </div>

                </aside>
                <div className="h-screen w-screen">
                    <Header />
                    <main className="overflow-scroll main overflow-x-hidden">
                        <Outlet />
                        {/* <People/> */}
                        {/* <Jobs/> */}
                        {/* <Adverts/> */}
                        {/* <Events/> */}
                        {/* <Announcements/> */}
                        {/* <Home/> */}
                    </main>

                </div>

            </div>

        </>
    )

}

export default Dashboard;