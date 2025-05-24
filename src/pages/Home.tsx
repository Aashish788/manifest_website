import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/home/HeroSection';
import FeaturesSection from '../components/home/FeaturesSection';
import TestimonialSection from '../components/home/TestimonialSection';
import DarkThemeSection from '../components/home/DarkThemeSection';
import UseCasesSection from '../components/home/UseCasesSection';
import CtaSection from '../components/home/CtaSection';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar transparent={true} />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <TestimonialSection />
        <DarkThemeSection />
        <UseCasesSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
