import React, { useState, useEffect } from 'react';

function OverlayManager({ overlays }) {
  const [newOverlay, setNewOverlay] = useState({ positionX: 0, positionY: 0, sizeX: 100, sizeY: 50, content: '' });
  const [editOverlayId, setEditOverlayId] = useState(null);

  useEffect(() => {
    if (editOverlayId === null) {
      setNewOverlay({ positionX: 0, positionY: 0, sizeX: 100, sizeY: 50, content: '' });
    }
  }, [editOverlayId]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewOverlay({
      ...newOverlay,
      [name]: value,
    });
  };

  const handleAddOverlay = () => {
    overlays.push(newOverlay);
    setNewOverlay({ positionX: 0, positionY: 0, sizeX: 100, sizeY: 50, content: '' });
  };

  const handleEditOverlay = (id) => {
    const selectedOverlay = overlays[id];
    setNewOverlay({
      positionX: selectedOverlay.positionX,
      positionY: selectedOverlay.positionY,
      sizeX: selectedOverlay.sizeX,
      sizeY: selectedOverlay.sizeY,
      content: selectedOverlay.content,
    });
    setEditOverlayId(id);
  };

  const handleUpdateOverlay = () => {
    overlays[editOverlayId] = newOverlay;
    setEditOverlayId(null);
  };

  const handleDeleteOverlay = (id) => {
    overlays.splice(id, 1);
  };

  return (
    <div className="OverlayManager">
      <h2>Overlay Manager</h2>
      <div>
        <h3>Add/Edit Overlay</h3>
        <input
          type="number"
          name="positionX"
          placeholder="X Position"
          value={newOverlay.positionX}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="positionY"
          placeholder="Y Position"
          value={newOverlay.positionY}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="sizeX"
          placeholder="Width"
          value={newOverlay.sizeX}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="sizeY"
          placeholder="Height"
          value={newOverlay.sizeY}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="content"
          placeholder="Overlay Content"
          value={newOverlay.content}
          onChange={handleInputChange}
        />
        {editOverlayId === null ? (
          <button onClick={handleAddOverlay}>Add Overlay</button>
        ) : (
          <button onClick={handleUpdateOverlay}>Update Overlay</button>
        )}
      </div>
      <div>
        <h3>Overlay List</h3>
        <ul>
          {overlays.map((overlay, index) => (
            <li key={index}>
              {overlay.content}{' '}
              <button onClick={() => handleEditOverlay(index)}>Edit</button>
              <button onClick={() => handleDeleteOverlay(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default OverlayManager;
