import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const getFAQs = async () => {
    try {
        const response = await axios.get(`${API_URL}/faqs`);
        return response.data;
    } catch (error) {
        console.error('Error fetching FAQs:', error);
        throw error;
    }
};

export const createFAQ = async (faq) => {
    try {
        const response = await axios.post(`${API_URL}/faqs`, faq);
        return response.data;
    } catch (error) {
        console.error('Error creating FAQ:', error);
        throw error;
    }
};

export const updateFAQ = async (updatedFAQ) => {
  try {
    const response = await axios.put(`${API_URL}/faqs/${updatedFAQ.id}`, updatedFAQ);
    return response.status === 200;
  } catch (error) {
    console.error('Error updating FAQ:', error);
    return false;
  }
};
