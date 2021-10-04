import React, { useState, useContext, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';

export const Second = () => {
  const contactContext = useContext(ContactContext);

  const addContact = contactContext;
  const clearCurrent = contactContext;
  const current = contactContext;
  
  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({
        name: '',
        email: '',
        phone: '',
        type: 'personal',
      });
    }
  }, [contactContext, current]);

  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'personal',
  });

  const name = contact;
  const email = contact;
  const phone = contact;
  const type = contact;

  const onChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (current === null) {
        addContact(contact);
      }
    clearAll();
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <section className='forms' style={{ backgroundImage: `url(second1.png)` }}>
    <form onSubmit={onSubmit} >
      <h2 className='text-primary'>
        LET'S HELP YOU REACH YOUR GOAL...
      </h2>
      <p>Answer three questions to help us achieve our expertise<br />and software solutions to your need.</p>
      <span>QUESTION 1/3</span> <br />
      <span>WHAT SERVICE(S) DO YOU NEED?</span>
      <input
        type='text'
        placeholder=''
        name='name'
        value={name}
        onChange={onChange}
      />
      <input
        type='email'
        placeholder='Email'
        name='email'
        value={email}
        onChange={onChange}
        required
      />
      <input
        type='text'
        placeholder='Phone'
        name='phone'
        value={phone}
        onChange={onChange}
        required
      />
      <input
        type='radio'
        name='type'
        value='personal'
        checked={type === 'personal'}
        onChange={onChange}
      />{' '}
      Personal{' '}
      <p style={{ borderBlock: '2m solid black'}}><input
        type='radio'
        name='type'
        value='professional'
        checked={type === 'professional'}
        onChange={onChange}
      />{' '}
      Professional</p>
      <section>
        <input
          type='submit'
          value='Next'
          className='btn btn-primary btn-block'
        />
      </section>
        <section>
          <a href="#!"><img src="arrow.png" alt="" />Back</a>
          </section>
    </form>
    </section>
  );
};

export default Second;
