import { useState } from 'react';

export default function TaskCard({ title, description, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedDescription, setEditedDescription] = useState(description);

  const handleSave = () => {
    onEdit({ title: editedTitle, description: editedDescription });
    setIsEditing(false);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded shadow p-4 mb-4">
      {isEditing ? (
        <div>
          <input
            className="w-full mb-2 p-2 rounded border"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <textarea
            className="w-full mb-2 p-2 rounded border"
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
          />
          <button
            onClick={handleSave}
            className="bg-green-500 text-white px-3 py-1 rounded mr-2"
          >
            Save
          </button>
          <button
            onClick={() => setIsEditing(false)}
            className="bg-gray-500 text-white px-3 py-1 rounded"
          >
            Cancel
          </button>
        </div>
      ) : (
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-semibold mb-1">{title}</h3>
            <p className="text-gray-700 dark:text-gray-300">{description}</p>
          </div>
          <div className="flex flex-col items-end ml-4">
            <button
              onClick={() => setIsEditing(true)}
              className="text-blue-500 hover:text-blue-700 font-bold text-sm mb-2"
            >
              Edit
            </button>
            <button
              onClick={onDelete}
              className="text-red-500 hover:text-red-700 font-bold text-sm"
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
}