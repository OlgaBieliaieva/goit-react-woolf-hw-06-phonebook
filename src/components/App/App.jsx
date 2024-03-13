import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { add, remove, getContacts } from 'redux/contactsSlice';
import { filter, getFilterQuery } from 'redux/filterSlice';
import SectionTitle from '../SectionTitle/SectionTitle';
import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';
import css from './App.module.css';

export default function App() {
  const contacts = useSelector(getContacts);
  const filterQuery = useSelector(getFilterQuery);
  const dispatch = useDispatch();

  const createContact = (name, number) => {
    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };
    const isExist = contacts.find(
      contact => contact.name.trim().toLowerCase() === name.trim().toLowerCase()
    );

    if (isExist) {
      alert(`${name} is already in contacts`);
      return;
    }
    dispatch(add(newContact));
  };

  const removeContact = id => {
    const remainingContacts = contacts.filter(contact => contact.id !== id);
    dispatch(remove(remainingContacts));
  };

  const handleFilterChange = e => {
    const { value } = e.target;
    dispatch(filter(value));
  };

  const getFilteredContacts = () =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterQuery.toLowerCase())
    );

  return (
    <main className={css.appContainer}>
      <SectionTitle text="Phonebook" />
      <ContactForm addContact={createContact} />

      <SectionTitle text="Contacts" />
      <Filter filter={filterQuery} filterChangeHandler={handleFilterChange} />
      <ContactList
        contacts={getFilteredContacts}
        onDeleteContact={removeContact}
      />
    </main>
  );
}
