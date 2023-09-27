const BASE_URL = '/api/overlays'; 

const OverlayService = {
  getOverlays: async () => {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
      throw new Error(`Error fetching overlays: ${response.statusText}`);
    }
    return response.json();
  },

  createOverlay: async (data) => {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(`Error creating overlay: ${response.statusText}`);
    }
    return response.json();
  },

  updateOverlay: async (id, data) => {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(`Error updating overlay: ${response.statusText}`);
    }
    return response.json();
  },

  deleteOverlay: async (id) => {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error(`Error deleting overlay: ${response.statusText}`);
    }
    return response.json();
  },
};

export default OverlayService;
