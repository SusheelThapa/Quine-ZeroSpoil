import CommunityHubSidebar from "@/components/CommunityHubSidebar";
import CommunityHubPost from "@/components/CommunityHubPost";

import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Layout from "@/layout/Layout";

const CommunityHub = () => {
  return (
    <>
      <Layout>
        <NavBar />
        <div className="grid grid-cols-4">
          <CommunityHubSidebar />
          <CommunityHubPost />
        </div>
      </Layout>
      <Footer />
    </>
  );
};

export default CommunityHub;
