import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import PricingHeader from '../components/pricing/PricingHeader';
import PricingPlans from '../components/pricing/PricingPlans';
import PricingComparison from '../components/pricing/PricingComparison';

const Pricing = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar transparent={false} />
      <main className="flex-grow">
        <PricingHeader />
        <PricingPlans />
        <PricingComparison />
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
