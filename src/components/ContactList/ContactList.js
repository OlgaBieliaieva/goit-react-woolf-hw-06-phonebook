import css from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
  const filteredContacts = contacts();

  return (
    <ul className={css.contactList}>
      {filteredContacts?.map(({ id, name, number }) => {
        return (
          <li className={css.contactItem} key={id}>
            {name}: {number}
            <button
              className={css.listItemBtn}
              id={id}
              type="button"
              onClick={() => onDeleteContact(id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
