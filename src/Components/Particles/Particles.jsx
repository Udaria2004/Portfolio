import ParticlesComponent from "./ParticlesComponent";
import { ParticleOptions } from "./particlesOptions";

const Particles = () => {
  return (
    <div className="w-full h-screen min-h-[800px]">
      <ParticlesComponent
        id="particles"
        className="w-full h-screen z-0 min-h-[800px]"
        particlesOptions={ParticleOptions}
      />
    </div>
  );
};

export default Particles;
