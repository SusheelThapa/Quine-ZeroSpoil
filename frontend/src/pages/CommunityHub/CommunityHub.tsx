import CommunityHubSidebar from "@/components/CommunityHubSidebar";
import CommunityPosts from "@/components/CommunityHubPost";

import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Layout from "@/layout/Layout";

const CommunityHub = () => {
  return (
    <>
      <Layout>
        <NavBar />
        <div className="mx-auto my-10 p-4 w-10/12 grid grid-cols-4 bg-stone-100 rounded-3xl justify-center r align-middle">
          <CommunityHubSidebar />
          <CommunityPosts />
        </div>
      </Layout>
      <Footer />
    </>
  );
};

export default CommunityHub;
