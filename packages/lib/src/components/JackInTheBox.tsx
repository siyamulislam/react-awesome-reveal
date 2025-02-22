import { jackInTheBox } from "../animations/specials";
import type { RevealProps } from "../Reveal";
import { Reveal } from "../Reveal";

export type JackInTheBoxProps = Omit<RevealProps, "keyframes" | "css">;

export const JackInTheBox: React.FC<JackInTheBoxProps> = (props) => {
  return <Reveal keyframes={jackInTheBox} {...props} />;
};
