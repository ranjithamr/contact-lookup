import React, { useState } from 'react';
import Image from 'next/image'
import { Contact } from '../models/contact.model';
import { ContactDetailsModal } from './ContactDetailsModal';

export default function ContactList({ contacts }: { contacts: Contact[] }) {
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  
  const handleContactClick = (contact: Contact) => {
    setSelectedContact(contact);
  };

  const handleCloseModal = () => {
    setSelectedContact(null);
  };

  return (
    <div className="flex flex-wrap">
      {contacts.map((contact) => (
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4 p-4" key={contact.id}>
          <div className="bg-white shadow-md rounded-lg p-4 cursor-pointer" onClick={() => handleContactClick(contact)}>
            <Image
              src={contact.avatarImage}
              width={500}
              height={500}
              alt={`${contact.firstName} ${contact.lastName}`}
              className="w-20 h-20 rounded-full m-auto"
            />
            <div className="mt-2">
              <p className="text-lg font-medium">{`${contact.firstName} ${contact.lastName}`}</p>
              <p className="text-gray-500">{contact.email}</p>
            </div>
          </div>
        </div>
      ))}
      {selectedContact && (
      <ContactDetailsModal contact={selectedContact || {}} onClose={handleCloseModal} isOpen={selectedContact !== null}/>
      )}
    </div>
  );
};
