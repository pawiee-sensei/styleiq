import {HeroSection} from '../components/home/HeroSection';
import {TrustBar} from '../components/home/TrustBar';
import {Header} from '../components/layout/Header';
import {CollectionGrid} from '../components/home/CollectionGrid';
import {StorySection} from '../components/home/StorySection';
import {BestSellers} from '../components/home/BestSellers';
import {CraftSection} from '../components/home/CraftSection';
import {NewArrivals} from '../components/home/NewArrivals';
import {Lookbook} from '../components/home/Lookbook';
import {Subscribe} from '../components/home/Subscribe';
import {Footer} from '../components/layout/Footer';

export default function Homepage() {
  return (
    <>
      <Header />
      <HeroSection />
      <TrustBar />
      <CollectionGrid />
      <StorySection />
      <BestSellers />
      <CraftSection />
      <NewArrivals />
      <Lookbook />
      <Subscribe />
      <Footer />
    </>
  );
}