import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const ElectionLaw = () => {
    return (
        <>
            <NavBar />
            <section className="election-law-section">
                <div className="election-law-container">
                    <h1 className="election-law-title">निर्वाचन सम्बन्धी कानूनी संरचना</h1>
                    <p>
                        निर्वाचनसम्बन्धी कानूनी संरचना भन्नाले नेपालको सन्दर्भमा संघ, प्रदेश र
                        स्थानीय तहको निर्वाचनसँग सम्बन्धित संवैधानिक व्यवस्था तथा कानून बुझिन्छ।
                        निर्वाचनसम्बन्धी कानूनी संरचनाअन्तर्गत मूलतः निम्न कुराहरू पर्दछन् :
                    </p>
                    <ul>
                        <li>क) निर्वाचनसँग सम्बन्धित संवैधानिक प्रावधानहरू</li>
                        <li>ख) व्यवस्थापिकाले पारित गरेका निर्वाचनसम्बन्धी ऐन तथा निर्वाचनलाई प्रभावित पार्ने अन्य सबै ऐनहरू</li>
                        <li>ग) निर्वाचनसम्बन्धी अध्यादेशहरू</li>
                        <li>घ) निर्वाचन आयोगले बनाएका नियमावलीहरू</li>
                        <li>ङ) निर्वाचनसम्बन्धी महत्वपूर्ण निर्देशिका, कार्यविधि, आदेश र आचार संहिताहरू</li>
                    </ul>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default ElectionLaw;
