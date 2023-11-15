export function Total({ exercises }) {
  const total = exercises.reduce((a, b) => a + b);
  return (
    <>
      <p style={{ fontWeight: "bold" }}>total of {total} exercises</p>
    </>
  );
}
