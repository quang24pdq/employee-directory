import axios from 'axios';

const API_URL = 'https://<subdomain>.bitrix24.com/rest/1/<access_token>/user.get';

export const getEmployees = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data.result.map(user => ({ id: user.ID, name: user.NAME }));
  } catch (error) {
    console.error('Error fetching employees:', error);
    throw error;
  }
};
