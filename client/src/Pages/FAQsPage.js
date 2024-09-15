import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';

const FAQsPage = () => {
  const [faqs, setFAQs] = useState([]);
  const [newFAQ, setNewFAQ] = useState({ question: '', answer: '' });
  const [editFAQ, setEditFAQ] = useState(null); // Holds the FAQ being edited
  const [editData, setEditData] = useState({ question: '', answer: '' }); // Holds the updated question/answer

  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/faqs');
        setFAQs(response.data);
      } catch (error) {
        console.error('Error fetching FAQs:', error);
      }
    };
    fetchFAQs();
  }, []);

  const handleAddFAQ = async (event) => {
    event.preventDefault();
    if (!newFAQ.question || !newFAQ.answer) {
      alert('Please fill out both the question and answer fields.');
      return;
    }
    try {
      const response = await axios.post('http://127.0.0.1:5000/faqs', newFAQ);
      setFAQs([...faqs, response.data]);
      setNewFAQ({ question: '', answer: '' });
    } catch (error) {
      console.error('Error adding FAQ:', error);
    }
  };

  const handleDeleteFAQ = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:5000/faqs/${id}`);
      setFAQs(faqs.filter(faq => faq.id !== id));
    } catch (error) {
      console.error('Error deleting FAQ:', error);
    }
  };

  // Handle setting an FAQ for editing
  const handleEditClick = (faq) => {
    setEditFAQ(faq);
    setEditData({ question: faq.question, answer: faq.answer });
  };

  // Handle the actual update operation
  const handleUpdateFAQ = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put(`http://127.0.0.1:5000/faqs/${editFAQ.id}`, editData);
      if (response.status === 200) {
        const updatedFAQs = faqs.map(faq =>
          faq.id === editFAQ.id ? { ...faq, question: editData.question, answer: editData.answer } : faq
        );
        setFAQs(updatedFAQs);
        setEditFAQ(null); // Clear the form after update
      }
    } catch (error) {
      console.error('Error updating FAQ:', error);
    }
  };

  return (
    <div className="faqs-page">
      <h2>FAQs</h2>

      {/* Add FAQ Form */}
      <form onSubmit={handleAddFAQ}>
        <h3>Add New FAQ</h3>
        <label>
          Question:
          <input
            type="text"
            value={newFAQ.question}
            onChange={(e) => setNewFAQ({ ...newFAQ, question: e.target.value })}
          />
        </label>
        <br />
        <label>
          Answer:
          <input
            type="text"
            value={newFAQ.answer}
            onChange={(e) => setNewFAQ({ ...newFAQ, answer: e.target.value })}
          />
        </label>
        <br />
        <button type="submit">Add FAQ</button>
      </form>

      {/* Display FAQ List */}
      <ul>
        {faqs.map((faq) => (
          <li key={faq.id}>
            <strong>{faq.question}</strong>: {faq.answer}
            <div>
            <button onClick={() => handleDeleteFAQ(faq.id)}>Remove</button>
            <br/>
            <br/>
            <button onClick={() => handleEditClick(faq)}>Edit</button>
            </div>
          </li>
        ))}
      </ul>

      {/* Edit FAQ Form */}
      {editFAQ && (
        <form onSubmit={handleUpdateFAQ}>
          <h3>Edit FAQ</h3>
          <label>
            Question:
            <input
              type="text"
              value={editData.question}
              onChange={(e) => setEditData({ ...editData, question: e.target.value })}
            />
          </label>
          <br />
          <label>
            Answer:
            <input
              type="text"
              value={editData.answer}
              onChange={(e) => setEditData({ ...editData, answer: e.target.value })}
            />
          </label>
          <br />
          <button type="submit">Update FAQ</button>
        </form>
      )}
    </div>
  );
};

export default FAQsPage;
