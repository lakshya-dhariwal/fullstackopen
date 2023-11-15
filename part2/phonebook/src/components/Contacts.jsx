import { Contact } from "./Contact";

export const Contacts = ({ contacts, search, setContacts }) => {
  return (
    <div>
      <table>
        <tbody>
          {contacts.map((element) => {
            if (search.length === 0 || element.name.search(search) !== -1) {
              return (
                <Contact
                  key={element.id}
                  contact={element}
                  setContacts={setContacts}
                />
              );
            }
            return null;
          })}
        </tbody>
      </table>
    </div>
  );
};
