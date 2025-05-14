import React from 'react';
import TermsAndConditions from './TermsAndConditions';
import { Modal } from 'react-bootstrap';

const TermsModal = ({ show, onHide, onAgree }) => {
  return (
    <Modal show={show} onHide={onHide} centered>
      <TermsAndConditions onClose={onHide} onAgree={onAgree} />
    </Modal>
  );
};

export default TermsModal;