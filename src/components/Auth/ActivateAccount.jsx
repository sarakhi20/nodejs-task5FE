import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { activateAccount } from '../../api/api';

const ActivateAccount = () => {
  const { token } = useParams();

  useEffect(() => {
    const activate = async () => {
      try {
        await activateAccount(token);
        alert('Account activated successfully!');
      } catch (error) {
        alert('Error activating account.');
      }
    };
    activate();
  }, [token]);

  return <div>Activating your account...</div>;
};

export default ActivateAccount;