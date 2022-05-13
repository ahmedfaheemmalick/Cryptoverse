import { Link } from "react-router-dom"

const Coin = ({ coin }) => {

    console.log(coin);

    return (
        <div key={coin.uuid} className="w-96 max-w-sm bg-white rounded-lg border border-gray-200 shadow-m py-4">
            <div className="flex flex-col items-center">
                <img className="mb-3 w-14 h-14 rounded-full shadow-lg" src={coin.iconUrl} alt="Bonnie" />
                <h5 className="mb-1 text-xl font-medium text-gray-900 pb-3">{coin.name} - {coin.symbol}</h5>
                <div className='w-9/12 flex justify-between'>
                    <span className="text-sm text-black">24h Volume: </span>
                    <span className="text-sm text-gray-500">{coin["24hVolume"]}</span>
                </div>
                <div className='w-9/12 flex justify-between'>
                    <span className="text-sm text-black">Market Cap: </span>
                    <span className="text-sm text-gray-500">{coin["marketCap"]}</span>
                </div>
                <div className='w-9/12 flex justify-between'>
                    <span className="text-sm text-black">Price: </span>
                    <span className="text-sm text-gray-500">{coin["price"]}</span>
                </div>
                <div className='w-9/12 flex justify-between'>
                    <span className="text-sm text-black">Change: </span>
                    <span className="text-sm text-gray-500">{coin["change"]}</span>
                </div>
                <div className="flex mt-8 space-x-3 lg:mt-6">
                    <Link to={`/coin/${coin.uuid}`} className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-black bg-gray-400 rounded-lg border border-gray-300 hover:bg-gray-500 focus:ring-4 focus:ring-blue-300">See detail</Link>
                </div>
            </div>
        </div>
    )
}

export default Coin