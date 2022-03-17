import { useParams } from "react-router-dom";
import { useGetCryptoQuery } from "../../Services/cryptoCoinsApi"
import Loading from "../../Components/Loading/Loading"

const CoinDetail = () => {
    const { uuid } = useParams()
    const { data, isLoading, error } = useGetCryptoQuery(uuid)


    const stripHtml = (html) => {
        let tmp = document.createElement("DIV");
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || "";
    }

    return (
        <div>
            {isLoading ? <Loading /> : data ? (
                <>
                    <h1 className='text-3xl	text-center my-6'>{data?.data?.coin.name} - {data?.data?.coin.symbol}</h1>
                    <p>{data?.data?.coin.description ? stripHtml(data?.data?.coin.description) : ""}</p>
                </>
            )
                : error ? (
                    <div>
                        <h1>{error.message}</h1>
                    </div>
                ) : null
            }
        </div>
    )
}

export default CoinDetail