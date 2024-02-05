import Layout from "@/layout/Layout";

import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import ContactUs from "@/components/ContactUs";
import NewsLetter from "@/components/NewsLetter";
import Products from "@/components/Products";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import Partners from "@/components/Partners";
import { useEffect } from "react";

const LandingPage = () => {
  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <>
      <Layout>
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
