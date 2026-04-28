import './App.css';
import { MessageCircle } from 'lucide-react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import ProblemAwareness from './components/ProblemAwareness/ProblemAwareness';
import About from './components/About/About';
import Services from './components/Services/Services';
import Differentials from './components/Differentials/Differentials';
import SocialProof from './components/SocialProof/SocialProof';
import Location from './components/Location/Location';
import FAQ from './components/FAQ/FAQ';
import FinalCTA from './components/FinalCTA/FinalCTA';
import Footer from './components/Footer/Footer';
import ChatAgent from './components/ChatAgent/ChatAgent';
import { getWhatsAppLink } from './utils/whatsapp';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProblemAwareness />
        <About />
        <Services />
        <Differentials />
        <SocialProof />
        <Location />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      
      {/* Floating WhatsApp Button */}
      <a 
        href={getWhatsAppLink()}
        target="_blank" 
        rel="noopener noreferrer" 
        className="whatsapp-float"
        aria-label="Falar com a clínica pelo WhatsApp"
      >
        <MessageCircle fill="currentColor" stroke="none" />
      </a>

      {/* AI Chat Agent */}
      <ChatAgent />
    </>
  );
}

export default App;
