export const ContactForm = ({
  handleSubmit,
  newName,
  setNewName,
  newNumber,
  setNewNumber,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        name:{" "}
        <input
          value={newName}
          required
          type="text"
          onChange={(e) => setNewName(e.target.value)}
        />
      </div>
      <div>
        number:{" "}
        <input
          value={newNumber}
          required
          type="text"
          onChange={(e) => setNewNumber(e.target.value)}
        />
      </div>
      <div>
        <button type="submit">Add</button>
      </div>
    </form>
  );
};
