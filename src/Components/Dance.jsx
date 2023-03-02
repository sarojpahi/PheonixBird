import { useLoader } from "@react-three/fiber";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";

export const Dance = () => {
  const fbx = useLoader(FBXLoader, "/SillyDancing.fbx");
  return <primitive object={fbx} />;
};
