// components/ContactPageInput/ContactPageInput.js
import React, { useState } from 'react';
import styles from '../../../styles/App.module.scss';

const ContactPageInput = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (comment.length > 500) {
      setError('Коментар не може перевищувати 500 символів');
      return;
    }
    setError('');

    const response = await fetch('/api/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, comment }),
    });

    if (response.ok) {
      setName('');
      setEmail('');
      setComment('');
      alert('Коментар успішно відправлено');
    } else {
      alert('Не вдалося відправити коментар');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className={styles.input}
        placeholder="Ваше ім'я"
        required
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={styles.input}
        placeholder="Ваш email"
        required
      />
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className={styles.inputMessage}
        placeholder="Ваш коментар"
        required
      />
      {error && <p className={styles.error}>{error}</p>}
      <button type="submit" className={styles.asideBtn}>Надіслати</button>
    </form>
  );
};

export default ContactPageInput;
