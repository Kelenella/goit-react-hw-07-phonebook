import Container from '../Container';
import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactsList';

import s from './App.module.css';

function App() {
  return (
    <Container>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm />
      <Filter />
      <h2 className={s.contactsTitle}>Contacts</h2>
      <ContactList />
    </Container>
  );
}

export default App;
