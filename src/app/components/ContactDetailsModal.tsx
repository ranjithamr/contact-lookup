import Modal from 'react-modal';
import Image from 'next/image';
import { Contact } from '../models/contact.model';

interface ContactDetailsModalProps {
    contact: Contact
    isOpen: boolean;
    onClose: () => void;
}
  
export const ContactDetailsModal = ({ contact, isOpen, onClose }: ContactDetailsModalProps) => (
    
    <Modal isOpen={isOpen} onRequestClose={onClose} ariaHideApp={false}
        className="
            max-w-sm 
            bg-white 
            border 
            border-gray-200 
            rounded-lg 
            shadow 
            dark:bg-gray-800 
            dark:border-gray-700 
            focus-visible:outline-none 
            m-auto mt-28
            animate-slide-up">
        <Image
            src={contact.avatarImage}
            width="0"
            height="0"
            sizes="500vw"
            alt={`${contact.firstName} ${contact.lastName}`}
            className="w-full h-auto rounded-t-lg"
        />
        <div className="p-5">
            <h2 className="text-xl font-bold">{contact.firstName} {contact.lastName}</h2>
            <p>{contact.email}</p>
            <p>{contact.phone}</p>
        </div>
    </Modal>
);
