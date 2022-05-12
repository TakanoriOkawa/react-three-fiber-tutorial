import "./App.css"
import { Canvas } from "@react-three/fiber";

function App() {
  return (
    <div id="canvas-container">
      <Canvas>
        <mesh position={[-2,0,0]}>
          <boxGeometry args={[2,2,2]} />
          <ambientLight intensity={0.5} />
          <pointLight position={[-10,10,10]} />
        </mesh>
      </Canvas>
    </div>
  );
}

export default App;
