'use client';
import { useState } from 'react';
import { ContactAPI } from '../data/ContactAPI';
import ContactList from '../components/ContactList';
import Link from 'next/link';
import Image from 'next/image';

export default function Contact() {
	const [allContacts, _] = useState(ContactAPI.all());

	  return (
    <>
      <div className='row'>
        <div className='col-md-6 offset-md-3 mt-3 text-center'>
          <div className='page-header'>
            <h1>All Contacts</h1>
          </div>

          <Link href='/contacts/new'>
            <button
              type='button'
              className='btn btn-primary add-contact'
            >
              Add Contact
            </button>
          </Link>
        </div>
      </div>
      <div className='row'>
      <ContactList contacts={allContacts}/>
      </div>
    </>
    );
  }