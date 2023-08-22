import { Avatar } from '@mantine/core';


function Header() {
    return (
        <>
            <header className="flex flex-row justify-between align-middle mt-0 pr-7 pt-2 bg-white">
                <div className='p-2'>                
                    <input type="text" name="search" id="search_input" placeholder="Search..." className="rounded p-1 text-white bg-gray-200 w-full"/>                 
                    </div>


                {/* <div className="flex-row flex gap-3 align-middle p-2">
                    <p className='text-gray-700'><span><i className="fa-solid fa-bell mr-2"></i></span>Notifications</p>
                    <p className='text-gray-700'><span><i className="fa-solid fa-envelope mr-2"></i></span>Messages</p>
                    <Avatar color="crayn" radius="xl">CB</Avatar>
                </div> */}

            </header>

        </>
    )
}

export default Header;