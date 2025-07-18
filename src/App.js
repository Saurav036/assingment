import { useState } from 'react';
import FileExplorer from './components/FileExplorer';
import PermissionEditor from './components/PermissionEditor';
import './styles.css';

function App() {
  const [currentUser, setCurrentUser] = useState('manager');
  const [showPermissionEditor, setShowPermissionEditor] = useState(false);
  const [permissions, setPermissions] = useState({
    employee1: ['Documents/Projects', 'Pictures'],
    employee2: ['Documents']
  });

  // Expanded file structure
  const fileStructure = {
    name: "Root",
    type: "folder",
    path: "Root",
    children: [
      {
        name: "Documents",
        type: "folder",
        path: "Root/Documents",
        children: [
          { name: "Resume.pdf", type: "file", path: "Root/Documents/Resume.pdf" },
          { name: "CoverLetter.docx", type: "file", path: "Root/Documents/CoverLetter.docx" },
          {
            name: "Projects",
            type: "folder",
            path: "Root/Documents/Projects",
            children: [
              { 
                name: "Project1", 
                type: "folder", 
                path: "Root/Documents/Projects/Project1", 
                children: [
                  { name: "Specs.pdf", type: "file", path: "Root/Documents/Projects/Project1/Specs.pdf" },
                  { name: "Designs", type: "folder", path: "Root/Documents/Projects/Project1/Designs", children: [] }
                ]
              },
              { name: "Project2", type: "folder", path: "Root/Documents/Projects/Project2", children: [] }
            ]
          }
        ]
      },
      {
        name: "Pictures",
        type: "folder",
        path: "Root/Pictures",
        children: [
          { name: "Vacation.jpg", type: "file", path: "Root/Pictures/Vacation.jpg" },
          { name: "Profile.png", type: "file", path: "Root/Pictures/Profile.png" }
        ]
      },
      {
        name: "Confidential",
        type: "folder",
        path: "Root/Confidential",
        children: [
          { name: "Salaries.xlsx", type: "file", path: "Root/Confidential/Salaries.xlsx" }
        ]
      }
    ]
  };

  // Tested permission checker
  const hasAccess = (itemPath, user) => {
    if (user === 'manager') return true;
    
    // Normalize paths by removing "Root/" prefix
    const normalizePath = path => path.replace(/^Root\//, '');
    const itemNormalized = normalizePath(itemPath);
    
    return permissions[user]?.some(permission => {
      const permNormalized = normalizePath(permission);
      
      // Exact match
      if (itemNormalized === permNormalized) return true;
      
      // Item is inside a permitted folder
      if (itemNormalized.startsWith(permNormalized + '/')) return true;
      
      // Permission is inside this item's folder
      if (permNormalized.startsWith(itemNormalized + '/')) return true;
      
      return false;
    });
  };

  const filterStructure = (structure, user) => {
    const filtered = { ...structure };
    
    if (filtered.children) {
      filtered.children = filtered.children
        .filter(item => hasAccess(item.path, user))
        .map(item => ({
          ...item,
          children: item.type === 'folder' ? filterStructure(item, user).children : undefined
        }));
    }
    
    return filtered;
  };

  // Fixed permission editor handler
  const handlePermissionChange = (employee, newPermissions) => {
    setPermissions(prev => ({
      ...prev,
      [employee]: newPermissions.map(p => p.startsWith('Root/') ? p : `Root/${p}`)
    }));
  };

  return (
    <div className="app">
      <div className="header">
        <h1>File Explorer</h1>
        <div className="controls">
          <div className="user-buttons">
            <button 
              className={currentUser === 'manager' ? 'active' : ''}
              onClick={() => setCurrentUser('manager')}
            >
              Manager
            </button>
            <button 
              className={currentUser === 'employee1' ? 'active' : ''}
              onClick={() => setCurrentUser('employee1')}
            >
              Employee 1
            </button>
            <button 
              className={currentUser === 'employee2' ? 'active' : ''}
              onClick={() => setCurrentUser('employee2')}
            >
              Employee 2
            </button>
          </div>
          {currentUser === 'manager' && (
            <button 
              className="edit-permissions"
              onClick={() => setShowPermissionEditor(true)}
            >
              Edit Permissions
            </button>
          )}
        </div>
      </div>

      <FileExplorer 
        data={filterStructure(fileStructure, currentUser)} 
        user={currentUser} 
      />

      {showPermissionEditor && (
        <PermissionEditor
          permissions={permissions}
          onSave={handlePermissionChange}
          onClose={() => setShowPermissionEditor(false)}
          fileStructure={fileStructure}
        />
      )}
    </div>
  );
}

export default App;