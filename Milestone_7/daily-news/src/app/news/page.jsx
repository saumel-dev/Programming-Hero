import React from 'react';

const NewsPage = async () => {
    const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=7d38a41ed6d14c5ba6e95c529000d4e5');
    const news = await response.json();
    console.log(news);
    //     "articles": [
    // {
    // "source": {
    // "id": null,
    // "name": "Honolulu Star-Advertiser"
    // },
    // "author": "Reuters",
    // "title": "Record gas price surge fuels sharp rise in U.S. inflation - Honolulu Star-Advertiser",
    // "description": "WASHINGTON >> U.S. consumer prices increased by the most in nearly four years in March as the war with Iran led to a record surge in the cost of gasoline and diesel, dealing a blow to President Donald Trump, whose approval ratings have been falling because of…",
    // "url": "https://www.staradvertiser.com/2026/04/10/breaking-news/record-gas-price-surge-fuels-sharp-rise-in-u-s-inflation/",
    // "urlToImage": "https://www.staradvertiser.com/wp-content/uploads/2026/04/web1_20260410_brk_gas01.jpg",
    // "publishedAt": "2026-04-11T02:26:01Z",
    // "content": "WASHINGTON &gt;&gt; U.S. consumer prices increased by the most in nearly four years in March as the war with Iran led to a record surge in the cost of gasoline and diesel, dealing a blow to President… [+4618 chars]"
    // }
    return (
        <div className='container mx-auto mt-10'>

            <div className='grid grid-cols-3 gap-5 justify-items-center'>

                {
                    news.articles.map(article => <div key={article.url}>
                        {
                        const {name, title, author, description, urlToImage, publishedAt, content} = article;
                        <div className="card bg-base-100 image-full w-96 shadow-sm">
                            <figure>
                                <img
                                    src={article.urlToImage} />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Card Title</h2>
                                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}

};

export default NewsPage;