import { AuroraBackground } from './components/AuroraBackground';
import { BackgroundGradientAnimation } from './components/BackgroundGradientAnimation';
import Button from './components/Button';
import Card from './components/Card/Card';
import Navbar from './components/Navbar/Navbar';
import Shapes from './components/Shapes';
import SlideButton from './components/SlideButton';
import Text from './components/Text/Text';
import { VaultCard } from './components/VaultCard';
import { WavyBackground } from './components/WavyBackground';

function App() {
  return (
    <>
      <Navbar />
      <Text content="Hello World, This is My UI playground :)" />
      <Text content="Check it out!" />
      <Card />
      <Shapes />
      <SlideButton />
      <AuroraBackground  children="Hello"/>
      <WavyBackground
        numberOfWaves={10} // Set the number of waves to 10
        colors={[
          '#E40303',
          '#FF8C00',
          '#FFED00',
          '#008026',
          '#004DFF',
          '#750787',
          '#3C3C3B',
          '#55CDFC',
          '#F7A8B8',
          '#FFFFFF',
        ]}
        waveWidth={5} // Custom wave width
        backgroundFill="black" // Custom background color
        blur={5} // Custom blur
        speed="fast" // Custom speed
        waveOpacity={0.9} // Custom wave opacity
      >
        <h1 className="text-white">Hello, World!</h1>
      </WavyBackground>
      <Button />
      <div className="flex flex-row justify-center items-center p-10">
        <VaultCard className=" border border-lime-600 rounded-md w-auto h-[350px] " />
      </div>

      <BackgroundGradientAnimation />
    </>
  );
}

export default App;
