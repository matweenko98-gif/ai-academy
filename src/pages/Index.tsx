import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import CoursesSection from "@/components/home/CoursesSection";
import DirectionsSection from "@/components/home/DirectionsSection";
import TeachersSection from "@/components/home/TeachersSection";
import StatsSection from "@/components/home/StatsSection";
import ReviewsSection from "@/components/home/ReviewsSection";
import InstallmentSection from "@/components/home/InstallmentSection";
import CertificatesSection from "@/components/home/CertificatesSection";
import FAQSection from "@/components/home/FAQSection";
import ContactSection from "@/components/home/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <CoursesSection />
        <DirectionsSection />
        <StatsSection />
        <TeachersSection />
        <ReviewsSection />
        <InstallmentSection />
        <CertificatesSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
