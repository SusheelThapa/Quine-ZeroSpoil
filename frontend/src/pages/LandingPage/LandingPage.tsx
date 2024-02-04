import Layout from "@/layout/Layout";

import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import ContactUs from "@/components/ContactUs";
import NewsLetter from "@/components/NewsLetter";
import Products from "@/components/Products";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import Partners from "@/components/Partners";

const LandingPage = () => {
  return (
    <>
      <Layout className="mx-auto mt-5 w-5/6 bg-white">
        <NavBar />
        <Hero />
        <Products />
        <Partners />
        <Testimonials />
        <NewsLetter />
        <ContactUs />
      </Layout>
      <Footer />
    </>
  );
};

export default LandingPage;
