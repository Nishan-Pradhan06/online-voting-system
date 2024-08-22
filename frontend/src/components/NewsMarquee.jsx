import React from 'react'

const NewsMarquee = () => {
    return (
        <div id="marque-section">
            <div className="news-container">
                <div className="news-header">
                    <div className="title">
                        <i className="ri-news-line"></i>
                        <p>ताजा अपडेटहरू</p>
                    </div>
                    <div className="news-marquee">
                        <marquee behavior="scroll" direction="left">
                            <a href="#">- नयाँ उम्मेदवारहरूको सूची</a>
                            <a href="#">- मुख्य निर्वाचन अधिकृतको नियुक्ति सम्बन्धी आयोगको सूचना</a>
                            <a href="#">- पछिल्लो वर्षको निर्वाचन परिणाम</a>
                            <a href="#">- परिणामहरू आउँदा सूचित रहनुहोस्। अन्तिम परिणाम आउन समय लाग्न सक्छ।</a>
                        </marquee>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsMarquee