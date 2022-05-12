import "./App.css"
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";

// propsでpositionを受け取る
function Box(props){
  const ref = useRef();
  const [clicked, setClicked] = useState(false);
  // fiber用意している関数
  useFrame(() => (ref.current.rotation.x += 0.01));

  return(
    <mesh 
      {...props} 
      ref={ref}
      onClick={() => setClicked(!clicked)} scale={clicked ? 2 : 1}
    >
      <boxGeometry args={[1,1,1]} />
      <meshStandardMaterial color={"orange"} />
    </mesh>
  )
}

function App() {
  return (
    <>
      <div id="canvas-container">
        <Canvas>
          <Box position={[-1.6,0,0]}></Box>
          <Box position={[1.6,0,0]}></Box>
          <ambientLight intensity={0.5} />
          <spotLight position={[10,10,10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10,10,10]} />
        </Canvas>
      </div>
      <h1>Threejs Fiber</h1>
      <a href="">もっとみる</a>
    </>
  );
}

export default App;
