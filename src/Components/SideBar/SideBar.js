import { Link } from 'react-router-dom'
import { ReactComponent as Home } from "../../Assets/home.svg"
import { ReactComponent as Crypto } from "../../Assets/crypto.svg"
import { ReactComponent as News } from "../../Assets/news.svg"

const SideBar = () => {
    return (
        <div className="min-h-screen h-full w-64 overflow-y-auto py-4 px-3 bg-gray-50">
            <ul className="space-y-2">
                <li>
                    <Link to="/" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100">
                        <Home className='fill-white w-5 h-5' />
                        <span className="ml-3">Home</span>
                    </Link>
                </li>
                <li>
                    <Link to="/coins" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100">
                        <Crypto className='fill-white w-5 h-5' />
                        <span className="flex-1 ml-3 whitespace-nowrap">Coins</span>
                    </Link>
                </li>
                <li>
                    <Link to="/news" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100">
                        <News className='fill-white w-5 h-5' />
                        <span className="flex-1 ml-3 whitespace-nowrap">News</span>
                    </Link>
                </li>

            </ul>
        </div>
    )
}

export default SideBar