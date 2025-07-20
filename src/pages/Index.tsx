import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CommunityStats from "@/components/CommunityStats";
import CommunityBoards from "@/components/CommunityBoards";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <CommunityStats />
      <CommunityBoards />
      <Footer />
    </div>
  );
};

export default Index;
