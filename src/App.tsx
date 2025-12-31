import { HeartBackground } from './components/HeartBackground';
import { FloatingPhotos } from './components/FloatingPhotos';
import { Hero } from './components/Hero';
import { PoemSection } from './components/PoemSection';
import { LoveLetter } from './components/LoveLetter';
import { Gallery } from './components/Gallery';
import { SurpriseTrigger } from './components/SurpriseTrigger';

function App() {
  return (
    <div className="min-h-screen w-full relative overflow-x-hidden text-gray-800 bg-soft-pink">
      <HeartBackground />
      <FloatingPhotos />
      
      <main className="relative z-10 w-full">
        <Hero />
        <PoemSection />
        <LoveLetter />
        <Gallery />
        <SurpriseTrigger />
      </main>
    </div>
  );
}

export default App;
