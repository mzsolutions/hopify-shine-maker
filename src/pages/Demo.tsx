import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HomeTrialSection from "@/components/home/HomeTrialSection";

const Demo = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <HomeTrialSection />
      </main>
      <Footer />
    </div>
  );
};

export default Demo;
