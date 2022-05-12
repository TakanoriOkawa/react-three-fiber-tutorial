import "./App.css"
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

// propsでpositionを受け取る
function Box(props){
  const ref = useRef();
  // fiber用意している関数
  useFrame(() => (ref.current.rotation.x += 0.01));
  return(
    <mesh {...props} ref={ref}>
      <boxGeometry args={[2,2,2]} />
      <meshStandardMaterial color={"hotpink"} />
    </mesh>
  )
}

function App() {
  return (
    <div id="canvas-container">
      <Canvas>
        <Box position={[-1.6,0,0]}></Box>
        <Box position={[1.6,0,0]}></Box>
        <ambientLight intensity={0.5} />
        <pointLight position={[-10,10,10]} color={''} />
      </Canvas>
    </div>
  );
}

export default App;
