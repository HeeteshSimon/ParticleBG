import "./styles.css";
// import Particles from 'react-particles-js';
import Particles from "react-tsparticles";

export default function App() {
  return (
    <div className="App">
      <img
        style={{
          background_color: "#b61924",
          position: "fixed",
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
          zIndex: -1,
          width: "100vw",
          height: "100vh"
        }}
        src="https://dp5zphk8udxg9.cloudfront.net/wp-content/uploads/2016/06/5-amenities-e1466597431628.jpg"
        alt="bg"
      />
      <Particles
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
          zIndex: -1
        }}
        id="tsparticles"
        options={{
          background: {
            color: {
              value: ""
            }
          },
          fpsLimit: 400,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: {
                enable: true,
                mode: "push"
              },
              onHover: {
                enable: true,
                mode: "repulse"
              },
              resize: true
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40
              },
              push: {
                quantity: 4
              },
              repulse: {
                distance: 200,
                duration: 0.4
              }
            }
          },
          particles: {
            color: {
              value: "#ffffff"
            },
            links: {
              color: "#000000",
              distance: 150,
              enable: true,
              opacity: 2.0,
              width: 3
            },
            collisions: {
              enable: true
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 6,
              straight: false
            },
            number: {
              density: {
                enable: true,
                value_area: 800
              },
              value: 80
            },
            opacity: {
              value: 0.5
            },
            shape: {
              type: "circle"
            },
            size: {
              random: true,
              value: 5
            }
          },
          detectRetina: true
        }}
      />
    </div>
  );
}
