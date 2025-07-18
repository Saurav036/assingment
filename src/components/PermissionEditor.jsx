import { useState , useEffect} from 'react';

const PermissionEditor = ({ permissions, onSave, onClose, fileStructure }) => {
  const [editingEmployee, setEditingEmployee] = useState('employee1');
  const [currentPermissions, setCurrentPermissions] = useState([...permissions[editingEmployee]]);
  const [newPath, setNewPath] = useState('');

  const availablePaths = getAllPaths(fileStructure);

   // Update current permissions when employee changes
   useEffect(() => {
    setCurrentPermissions(
      permissions[editingEmployee]?.map(p => p.replace(/^Root\//, '')) || []
    );
  }, [editingEmployee, permissions]);

  const handleEmployeeChange = (employee) => {
    setEditingEmployee(employee);
  };

  const handleAddPermission = () => {
    if (newPath && !currentPermissions.includes(newPath)) {
      setCurrentPermissions([...currentPermissions, newPath]);
      setNewPath('');
    }
  };

  const handleRemovePermission = (path) => {
    setCurrentPermissions(currentPermissions.filter(p => p !== path));
  };

  const handleSave = () => {
    onSave(editingEmployee, currentPermissions);
    onClose();
  };
  return (
    <div className="permission-editor-overlay">
      <div className="permission-editor">
        <h2>Edit Permissions</h2>
        
        <div className="employee-selector">
          <button
            className={editingEmployee === 'employee1' ? 'active' : ''}
            onClick={() => handleEmployeeChange('employee1')}
          >
            Employee 1
          </button>
          <button
            className={editingEmployee === 'employee2' ? 'active' : ''}
            onClick={() => handleEmployeeChange('employee2')}
          >
            Employee 2
          </button>
        </div>
        
        <div className="current-permissions">
          <h3>Current Permissions:</h3>
          {currentPermissions.length > 0 ? (
            <ul>
              {currentPermissions.map(path => (
                <li key={path}>
                  {path}
                  <button onClick={() => handleRemovePermission(path)}>×</button>
                </li>
              ))}
            </ul>
          ) : (
            <p>No permissions set</p>
          )}
        </div>
        
        <div className="add-permission">
          <h3>Add New Permission:</h3>
          <select 
            value={newPath}
            onChange={(e) => setNewPath(e.target.value)}
          >
            <option value="">Select a path</option>
            {availablePaths.map(path => (
              <option key={path} value={path}>
                {path}
              </option>
            ))}
          </select>
          <button onClick={handleAddPermission}>Add</button>
        </div>
        
        <div className="editor-actions">
          <button className="save" onClick={handleSave}>Save</button>
          <button className="cancel" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

const getAllPaths = (node, currentPath = '', paths = []) => {
  if (node.type === 'folder') {
    const path = currentPath ? `${currentPath}/${node.name}` : node.name;
    if (node.name !== 'Root') {
      paths.push(path);
    }
    if (node.children) {
      node.children.forEach(child => getAllPaths(child, path, paths));
    }
  }
  return paths.sort();
};

export default PermissionEditor;