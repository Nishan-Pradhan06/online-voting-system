import React from 'react';
import NewsMarquee from '../components/NewsMarquee';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <>
            <div id="wrapper">
                <NewsMarquee />
                <div id="hero-sections">
                    <div id="left">
                        <h1>मतदाताहरूलाई सशक्त पार्दै,<br /> प्रजातन्त्रलाई सुदृढ बनाउँदै,</h1>
                        <br />
                        <p>
                            निष्ठा, सत्यता अनवरत् रहोस्, प्रगतिको पथ अवलम्बन होस्।<br />
                            मतदानको महिमा उज्ज्वल बनाऔं, भाविभविष्य उज्ज्वल निर्माण गरौं।<br />
                            विवेकशील विचार विमर्शले, योग्य नेतृत्व चुनौं सर्वसम्मतिले।<br />
                            जनगुञ्जनको जयकार गुञ्जित होस्, जनहितकारी कर्म फलित होस्।<br />
                            सच्चरित्र नेता सिंहासनमा बसून्, देशभक्तिको ज्योति उज्ज्वल बलून्।<br />
                            वाणीको वज्रपात आवाज उठाऔं, राष्ट्रहितलाई सर्वोपरि मानौं।<br />
                            निष्ठा, सत्यता र प्रगतिको खोजी गर्दै, आफ्नो मतले देशको भविष्य घडाऔं।<br />
                            भोलिको लागि विचार गरौं बुद्धिमानी, भोट दिऔं सही व्यक्तिलाई जनताको आवाज बनी।<br />
                            सच्चरित्र भएका नेतालाई चुनौं सुझबुझले, उनीहरूमार्फत देशको प्रगति गर्ने सपना बुनौं।<br />
                            आवाज उठाऔं जनताको हित खोज्दै, राष्ट्रिय हितलाई सर्वोपरी राख्दै।
                        </p>
                        <p style={{ textAlign: 'end' }}><span>-&nbsp;</span><a href="https://github.com/Nishan-Pradhan06" target="_blank">निशान प्रधान</a></p>
                    </div>
                    <div id="right">
                        <figure>
                            <img src="./assets/thumb.jpeg" alt="election-img" />
                        </figure>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Home;
