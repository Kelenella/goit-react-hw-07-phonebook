// import { connect } from 'react-redux';
// import actions from '../../redux/Phonebook/phonebook-actions';
// import { useState, useEffect } from 'react';
import Container from '../Container';
import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactsList';
// import initialContacts from '../../contacts.json';
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
// const mapStateToProps = state => {
//   return {
//     contacts: state,
//   };
// };
// const mapDispatchToProps = dispatch => ({
//   addNote: text => dispatch(actions.addContact(text)),
// });
export default App;
