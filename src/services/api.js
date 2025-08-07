const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const handleResponse = async (response) => {
  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.message || 'API request failed');
  }
  return response.json();
};

export const api = {
  async getPosts() {
    const response = await fetch(`${API_BASE_URL}/api/posts/`);
    return handleResponse(response);
  },

  async getPost(id) {
    const response = await fetch(`${API_BASE_URL}/api/posts/${id}`);
    return handleResponse(response);
  },

  async submitTeammateRequest(data) {
    const response = await fetch(`${API_BASE_URL}/api/teammate-requests/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return handleResponse(response);
  },

  async submitSponsorRequest(data) {
    const response = await fetch(`${API_BASE_URL}/api/sponsor-requests/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return handleResponse(response);
  },
};