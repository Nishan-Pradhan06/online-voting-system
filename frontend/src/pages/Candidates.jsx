import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const candidatesData = [
    {
        CName: "बलेन शाह",
        img: "../assets/candidate/candidate-1.jpg",
        location: "काठमाण्डौ",
        position: "मेयर",
        constituency: "निर्वाचन क्षेत्र नं. 1",
        party: "स्वतन्त्र",
        logo: "../assets/candidate/BalenShah_20220430130800.png"
    },
    {
        CName: "सुनिता डंगोल",
        img: "../assets/candidate/candidate-4.jpg",
        location: "काठमाण्डौ",
        position: "उपमेयर",
        constituency: "निर्वाचन क्षेत्र नं. 1",
        party: "एमाले",
        logo: "../assets/candidate/logo.png"
    },
    {
        CName: "हर्क सम्पाङ राई",
        img: "../assets/candidate/candidate-2.jpg",
        location: "धरान",
        position: "मेयर",
        constituency: "निर्वाचन क्षेत्र नं. 1",
        party: "स्वतन्त्र",
        logo: "../assets/candidate/BalenShah_20220430130800.png"
    },
    {
        CName: "गोपाल हमाल",
        img: "../assets/candidate/gopal_hamal_dhangadi1653197136_1024.jpg",
        location: "धनगढी",
        position: "मेयर",
        constituency: "निर्वाचन क्षेत्र नं. 1",
        party: "स्वतन्त्र",
        logo: "../assets/candidate/BalenShah_20220430130800.png"
    }
];

const Candidates = () => {
    return (
        <>
            <NavBar />
            <div id="headings-title">
                <h1>नयाँ उम्मेदवार २०२१</h1>
            </div>
            <section id="candidate-card-section">
                {candidatesData.map((candidate, index) => (
                    <div className="candidate-card-container" key={index}>
                        <div className="cards">
                            <div className="imgs">
                                <img src={candidate.img} alt="candidate-img" />
                            </div>
                            <div className="candiate-details">
                                <h3>{candidate.CName}</h3>
                                <p>{candidate.location}</p>
                                <div className="details-post">
                                    <p>{candidate.constituency}</p>
                                    <p><strong>{candidate.position}</strong></p>
                                </div>
                                <div className="position">
                                    <p>पार्टी: {candidate.party}</p>
                                    <img src={candidate.logo} alt="logo" />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
            <Footer />
        </>
    );
}

export default Candidates;
