import { Link } from 'react-router-dom';
import Loading from '../../Components/Loading/Loading';
import Coin from '../../Components/Coin/Coin';
import News from '../../Components/News/News';
import { useGetCryptosQuery } from "../../Services/cryptoCoinsApi"
import { useGetNewsQuery } from "../../Services/cryptoNewsApi"

const Home = () => {
    const { data: coins, isLoading: loadingCoins, error: errorCoins } = useGetCryptosQuery(10)
    const { data: news, isLoading: loadingNews, error: errorNews } = useGetNewsQuery(10)

    return (
        <>
            <h1 className='text-3xl	text-center my-6'>Top 10 Coins of the World.</h1>
            {loadingCoins ? <Loading /> : coins.data.coins.length ? (
                <div className="grid grid-cols-3 gap-4 justify-items-center my-30">
                    {coins.data.coins.map(coin => <Coin key={coin.uuid} coin={coin} />)}
                </div>
            ) : errorCoins ? (
                <div>
                    <h1>{errorCoins.message}</h1>
                </div>
            ) : null}
            <Link to="/coins" className="my-0 mx-auto w-121 block py-2 px-4 text-sm font-medium text-center text-black bg-gray-400 rounded-lg border border-gray-300 hover:bg-gray-500 focus:ring-4 focus:ring-blue-30">
                See All Coins
            </Link>
            <h1 className='text-3xl	text-center my-6'>Top 10 Cryptocurrencies News.</h1>
            {loadingNews ? <Loading /> : news?.value.length ? (
                <div className="grid grid-cols-3 gap-4 justify-items-center my-30">
                    {news?.value?.map(news => <News key={news.name} news={news} />)}
                </div>
            ) : errorNews ? (
                <div>
                    <h1>{errorNews.message}</h1>
                </div>
            ) : null}
            <Link to="/news" className="my-0 mx-auto w-121 block py-2 px-4 text-sm font-medium text-center text-black bg-gray-400 rounded-lg border border-gray-300 hover:bg-gray-500 focus:ring-4 focus:ring-blue-30">
                See All News
            </Link>
        </>
    )
}

export default Home