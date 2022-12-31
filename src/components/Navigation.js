import { Link } from "react-router-dom";

function Navigation() {
    return ( 
        <div className="">
            <nav className="flex justify-between items-center h-[50px] px-5 shadow-md bg-gray-500 text-white">
                <h3 className="font-bold">Posts</h3>

                <span className="">
                    <Link to="/" className="mr-2" >Home</Link>
                    <Link to="/favourites">Favourites</Link>
                </span>
            
            </nav>
        </div>
     );
}

export default Navigation;