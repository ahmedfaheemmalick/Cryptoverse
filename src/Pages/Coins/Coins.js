import React from 'react'
import { useGetCryptosQuery } from "../../Services/cryptoCoinsApi"
import Loading from '../../Components/Loading/Loading'
import Coin from '../../Components/Coin/Coin'

const Coins = () => {
    const { data: coins, isLoading: loadingCoins, error: errorCoins } = useGetCryptosQuery(50)

    return (
        <div>
            <h1 className='text-3xl	text-center my-6'>All Coins</h1>
            {loadingCoins ? <Loading /> : coins.data.coins.length ? (
                <div className="grid grid-cols-3 gap-4 justify-items-center my-30">
                    {coins.data.coins.map(coin => <Coin key={coin.uuid} coin={coin} />)}
                </div>
            ) : errorCoins ? (
                <div>
                    <h1>{errorCoins.message}</h1>
                </div>
            ) : null}
        </div >
    )
}

export default Coins