import { useState, useEffect, useMemo } from "react"; // Add useState and useEffect here
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesComponent = (props) => {
    const [init, setInit] = useState(false);
  
    useEffect(() => {
      console.log("Initializing particles engine...");
      initParticlesEngine(async (engine) => {
        await loadSlim(engine);
      }).then(() => {
        console.log("Particles engine initialized!");
        setInit(true);
      });
    }, []);
  
    const particlesLoaded = (container) => {
      console.log("Particles container loaded:", container);
    };
  
    const options = useMemo(
      () => ({
        background: {
          color: {
            value: "#ffffff",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "repulse",
            },
            onHover: {
              enable: true,
              mode: 'grab',
            },
          },
          modes: {
            push: {
              distance: 200,
              duration: 15,
            },
            grab: {
              distance: 150,
            },
          },
        },
        particles: {
          color: {
            value: "#56bdff",
          },
          links: {
            color: "#56bdff",
            distance: 150,
            enable: true,
            opacity: 1,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: true,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
            },
            value: 150,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 3, max: 5 },
          },
        },
        detectRetina: true,
      }),
      [],
    );
  
    if (!init) {
      return null; // Return null if particles engine is not initialized
    }
  
    return <Particles id={props.id} init={particlesLoaded} options={options} />;
  };
  
  export default ParticlesComponent;