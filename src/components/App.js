import React from "react";
import GlobalStyle from "./assets/GlobalStyles";
import Fonts from "./assets/Fonts";
import Navbar from "./NavBar";
import MainPage from "./MainPage";
import OurServices from "./OurServices";
import BlogPage from "./BlogPage2";
import Subscribe from "./Subscribe";
import Slider from "./Slider";
import Testimonials from "./Testimonials";
import Footer from "./Footer";


function App() {

    return (
        <>
            <GlobalStyle/>
            <Fonts/>
            <Navbar />
            <MainPage/>
            <OurServices/>
            <BlogPage/>
            <BlogPage revert/>
            <Slider/>
            <Testimonials/>
            <Subscribe/>
            <Footer/>
        </>
    );
}

export default App;

