import FormatDate from "../../Utils/FormatDate";

const News = ({ news }) => {

    console.log(news);
    return (
        <div className="w-96 max-w-sm bg-white rounded-lg border border-gray-200 shadow-m">
            <a href={news?.url} target="_blank" rel="noreferrer" key={news.name} >
                <img className="rounded-t " src={news?.image?.thumbnail?.contentUrl} alt={news.name} />
                <div className="p-3">
                    <h3>{news?.name}</h3>
                    <p>{news.description.length > 100 ? `${news.description.substring(0, 100)}...` : news.description}</p>
                    <div className="flex items-center">
                        <img className="rounded w-12 h-12" src={news.provider[0]?.image?.thumbnail?.contentUrl} alt="" />
                        <h3>{news.provider[0]?.name}</h3>
                    </div>
                    <p>{FormatDate(new Date(news.datePublished))}</p>
                </div>
            </a>
        </div>
    )
}

export default News
