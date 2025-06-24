
import NavigationBar from "@/components/NavigationBar";
import HeroSection from "@/components/HeroSection";
import DashboardSection from "@/components/DashboardSection";
import FeaturesSection from "@/components/FeaturesSection";
import CallToActionSection from "@/components/CallToActionSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <NavigationBar />
      <HeroSection />
      <DashboardSection />
      <FeaturesSection />
      <CallToActionSection />
      <Footer />
    </div>
  );
};

export default Index;
