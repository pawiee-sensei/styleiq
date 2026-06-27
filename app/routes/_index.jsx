import {HeroSection} from '../components/home/HeroSection';
import {TrustBar} from '../components/home/TrustBar';

import {CollectionGrid} from '../components/home/CollectionGrid';
import {StorySection} from '../components/home/StorySection';
import {BestSellers} from '../components/home/BestSellers';
import {CraftSection} from '../components/home/CraftSection';
import {NewArrivals} from '../components/home/NewArrivals';
import {Lookbook} from '../components/home/Lookbook';
import {Subscribe} from '../components/home/Subscribe';


export default function Homepage() {
  return (
    <>

      <HeroSection />
      <TrustBar />
      <CollectionGrid />
      <StorySection />
      <BestSellers />
      <CraftSection />
      <NewArrivals />
      <Lookbook />
      <Subscribe />

    </>
  );
}