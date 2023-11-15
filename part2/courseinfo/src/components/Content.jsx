import { Part } from "./Part";

export function Content({ parts }) {
  return (
    <div>
      {parts.map((part, i) => {
        return <Part part={part} key={i} />;
      })}
    </div>
  );
}
