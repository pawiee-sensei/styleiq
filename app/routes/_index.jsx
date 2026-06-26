import {HeroSection} from '../components/home/HeroSection';
import {TrustBar} from '../components/home/TrustBar';
import {Header} from '../components/layout/Header';

export default function Homepage() {
  return (
    <>
      <Header />
      <HeroSection />
      <TrustBar />
    </>
  );
}