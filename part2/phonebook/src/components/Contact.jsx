import API from "../services";

export const Contact = ({ contact, setContacts }) => {
  const handleClick = () => {
    const message = `Delete ${contact.name}`;
    if (window.confirm(message)) {
      API.delete(contact.id);
      API.getAll().then((data) => setContacts(data));
    }
  };

  return (
    <tr>
      <td>{contact.name}</td>
      <td>{contact.number}</td>
      <td>
        <button onClick={handleClick}>Delete</button>
      </td>
    </tr>
  );
};
