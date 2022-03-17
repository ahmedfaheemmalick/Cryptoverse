import { Link } from "react-router-dom"

const Coin = ({ coin }) => {
    return (
        <div key={coin.uuid} className="w-96 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 py-4">
            <div className="flex flex-col items-center">
                <img className="mb-3 w-14 h-14 rounded-full shadow-lg" src={coin.iconUrl} alt="Bonnie" />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white pb-3">{coin.name}</h5>
                <div className='w-9/12 flex justify-between'>
                    <span className="text-sm text-white">Visual Designer</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
                </div>
                <div className='w-9/12 flex justify-between'>
                    <span className="text-sm text-white">Visual Designer</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
                </div>
                <div className='w-9/12 flex justify-between'>
                    <span className="text-sm text-white">Visual Designer</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
                </div>
                <div className="flex mt-8 space-x-3 lg:mt-6">
                    <Link to={`/coin/${coin.uuid}`} className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-800">See detail</Link>
                </div>
            </div>
        </div>
    )
}

export default Coin