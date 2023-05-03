import { useNavigate } from "react-router-dom";



const Navbar = () => {
    const navigate = useNavigate();

    const deleteCookie= (name) => {
        console.log("fa");
        document.cookie = name + '=; Max-Age=-99999999;';
        navigate('/login');
    }
    return (
        <div className="min-h-[60px] p-4 flex flex-row-reverse m-[auto] overlay">
            <div className="flex">
                <div 
                    className="rounded-lg text-white font-bold w-[100px] mx-4 text-center cursor-pointer"
                    onClick={() => navigate('/home')}
                >
                    Home
                </div>
                <div className="rounded-lg text-white font-bold w-[100px] mx-4 text-center">
                    Contact Us
                </div>
                <div 
                    className="rounded-lg text-white font-bold w-[100px] mx-4 text-center cursor-pointer"
                    onClick={() => deleteCookie('userId')}
                >
                    Logout
                </div>
            </div>
        </div>
    )
}

export default Navbar;