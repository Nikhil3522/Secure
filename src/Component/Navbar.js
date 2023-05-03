const Navbar = () => {
    return (
        <div className="min-h-[60px] bg-blue-300 p-4 flex flex-row-reverse">
            <div className="bg-blue-100 flex">
                <div className="bg-red-100 w-[100px] mx-4 text-center">Home</div>
                <div className="bg-red-100 w-[100px] mx-4 text-center">Contact Us</div>
                <div className="bg-red-100 w-[100px] mx-4 text-center">Logout</div>
            </div>
        </div>
    )
}

export default Navbar;