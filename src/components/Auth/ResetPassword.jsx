import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Form, Container, Alert } from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

const ResetPassword = () => {
  const { token } = useParams();
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/reset-password', { token, newPassword });
      setMessage(response.data.message);
      setError(''); // Clear any previous errors
    } catch (err) {
      setError(err.response?.data?.message || 'Error resetting password');
      setMessage(''); // Clear any previous messages
    }
  };

  return (
    <Container className="mt-4">
      <h2>Reset Password</h2>
      {message && <Alert variant="success">{message}</Alert>}
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formNewPassword">
          <Form.Label>New Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">
          Reset Password
        </Button>
      </Form>
    </Container>
  );
};

export default ResetPassword;