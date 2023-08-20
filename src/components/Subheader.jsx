function Subheader(prop){
    return(
        <>
        <p className="bg-slate-800 text-white text-2xl pt-4 pl-4">
                {prop.title}
            </p>
            <div className="flex align-middle justify-center gap-2 bg-slate-800 p-2">
                <div className="w-32">
                    <img src="../src/assets/megaphone2.png" alt="Megaphone image for notifications" />
                </div>
                <div className="flex w-4/5 justify-center align-middle gap-2">
                    <Input className="m-auto w-4/5"
                        icon={<IconBellSearch />}
                        placeholder="Search...."
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                    />

                    <Button className="w-1/5 bg-lime-900 m-auto" onClick={handleSearch}>
                        Search
                    </Button>


                    <Button className="w-1/4 bg-black m-auto" onClick={open}>
                        Create Announcement
                    </Button>

                </div>
            </div>

        </>
    )

}

export default Subheader;