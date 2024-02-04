import DonateFoodForm from "@/components/DonateFoodForm";
import DonateFoodHero from "@/components/DonateFoodHero";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Layout from "@/layout/Layout";

const DonateFood = () => {
  return (
    <>
      <Layout>
        <NavBar />
        <div className="grid grid-cols-2 gap-20 m-5 my-5 mb-36 px-8 py-8 h-[70vh] justify-center align-middle items-center">
          <DonateFoodForm />
          <DonateFoodHero />
        </div>
      </Layout>
      <Footer />
    </>
  );
};

export default DonateFood;
