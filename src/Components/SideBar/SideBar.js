import { Link } from 'react-router-dom'
import { ReactComponent as Home } from "../../Assets/home.svg"
import { ReactComponent as Crypto } from "../../Assets/crypto.svg"
import { ReactComponent as News } from "../../Assets/news.svg"

const SideBar = () => {
    return (
        <div className=" h-full w-64 overflow-y-auto py-4 px-3 bg-gray-500">
            <ul className="space-y-2">
                <li>
                    <Link to="/" className="flex items-center p-2 text-base font-normal text-black rounded-lg hover:bg-gray-600">
                        <Home className='fill-black w-5 h-5' />
                        <span className="ml-3">Home</span>
                    </Link>
                </li>
                <li>
                    <Link to="/coins" className="flex items-center p-2 text-base font-normal text-black rounded-lg hover:bg-gray-600">
                        <Crypto className='fill-black w-5 h-5' />
                        <span className="ml-3">Coins</span>
                    </Link>
                </li>
                <li>
                    <Link to="/news" className="flex items-center p-2 text-base font-normal text-black rounded-lg hover:bg-gray-600">
                        <News className='fill-black w-5 h-5' />
                        <span className="ml-3">News</span>
                    </Link>
                </li>

            </ul>
        </div>
    )
}

export default SideBar