'use client';

import React, { useState } from 'react';
import ContactList from '../app/components/ContactList';
import SearchBar from '../app/components/SearchBar';
import { Contact } from './models/contact.model';

export default function Home() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [filteredContacts, setFilteredContacts] = useState<Contact[]>([]);

  const fetchContacts = async () => {
    try {
      const response = await fetch('/api/contacts');
      const contacts = await response.json();
      setContacts(contacts);
      setFilteredContacts(contacts);
    } catch (error) {
      console.log('Error fetching contacts:', error);
    }
  };

  const handleSearch = (query: string) => {
    const filtered = contacts.filter((contact) =>
      contact.firstName.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredContacts(filtered);
  };

  React.useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div className="text-center">
      <h1 className="text-6xl font-bold my-8">Contact Lookup</h1>
      <SearchBar onSearch={handleSearch} />
      <ContactList contacts={filteredContacts} />
    </div>
  );
};

