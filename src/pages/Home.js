import React, {useEffect, useRef} from 'react';
import MainHero from "../components/MainHero/MainHero";
import Catalog from "../components/Catalog/Catalog";
import Advantages from "../components/Advantages/Advantage";
import WhyUs from "../components/WhyUs/WhyUs";
import ContactUs from "../components/ContactUs/ContactUs";
import Footer from "../components/Footer/Footer";

const Home = (props) => {
    const catalogRef = useRef(null);
    const advantagesRef= useRef(null);
    const whyUsRef = useRef(null);
    const reviewsRef = useRef(null);
    const contactRef = useRef(null);
    const scrollTo = (ref) => ref.current.scrollIntoView({
        behavior: "smooth"
    });
    const goTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "auto",
        });
    };
    console.log(props.match.url);
    const scroll = () => {
        if(props.match.url === '/catalogue') {
            scrollTo(catalogRef)
        }else if(props.match.url === '/reviews') {
            scrollTo(reviewsRef)
        }else if(props.match.url === '/why_us') {
            scrollTo(whyUsRef)
        }else if(props.match.url === '/advantages') {
            scrollTo(advantagesRef)
        }else if(props.match.url === '/contacts') {
            scrollTo(contactRef)
        }else if(props.match.url === '/learn_more') {
            scrollTo(contactRef)
        }else if(props.match.url === '/get_promotion') {
            scrollTo(contactRef)
        }else {
            goTop()
        }
    }

    useEffect(() => {
        scroll()
    },[props.match.params.section])


    return (
        <>
        <MainHero/>
        <Catalog catalogRef={catalogRef}/>
        <Advantages advantagesRef={advantagesRef}/>
        <WhyUs whyUsRef={whyUsRef}/>
        {/* <Reviews reviewsRef={reviewsRef}/> */}
        <ContactUs contactRef={contactRef}/>
        <Footer/>
        </>
    )
}

export default Home;