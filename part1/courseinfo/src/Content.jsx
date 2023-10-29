export function Content({ parts }) {
  return (
    <div>
      {parts.map((part, i) => {
        return <Part part={part} key={i} />;
      })}
    </div>
  );
}

function Part({ part }) {
  return (
    <div>
      <p>
        {part.name} : {part.exercises}
      </p>
    </div>
  );
}
