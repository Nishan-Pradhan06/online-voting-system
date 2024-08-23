import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const AboutUs = () => {
  return (
    <>
      <NavBar />
      <section class="about-section">
        <div class="about-container">
          <div class="left-img">
            <img src="./assets/homeAbout.png" alt="logo"/>
          </div>
          <div class="about-content">
            <h2>परिचय</h2>
            <p>निर्वाचन आयोग, नेपाल (निर्वाचन आयोग, नेपाल) नेपालमा निर्वाचन सञ्चालन र अनुगमनका साथै दल र उम्मेदवार दर्ता गर्ने र निर्वाचन परिणाम रिपोर्ट गर्ने जिम्मेवार संवैधानिक निकाय हो। यो नेपालमा सन् १९५० को क्रान्तिबाट जन्मिएको थियो र समयसँगै कानुनद्वारा केही परिवर्तन भए पनि १९५१ मा कानुनमा स्थापित भएको थियो। यसमा नेपालको संविधानले स्थापना गरे बमोजिम ६ वर्षे कार्यकालका लागि सेवा गर्ने ६ सदस्य रहेका छन् । 2008 को संविधानसभा चुनावको समयमा, यो आफ्नो कर्तव्य पूर्ण रूपमा पालन नगरेको कारण आलोचना भयो, तर पनि चुनाव राम्रोसँग व्यवस्थापन गरेको स्वीकार गरियो।</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default AboutUs;
