import React, { useState } from 'react';
import File from './File';

const Folder = ({ item, level, user }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="folder-item" style={{ '--level': level }}>
      <div 
        className={`folder-header ${isExpanded ? 'expanded' : ''}`}
        onClick={toggleExpand}
        aria-expanded={isExpanded}
      >
        <span className="folder-icon">
          {isExpanded ? (
            <svg className="octicon octicon-chevron-down" viewBox="0 0 16 16" width="16" height="16">
              <path fillRule="evenodd" d="M12.78 6.22a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06 0L3.22 7.28a.75.75 0 011.06-1.06L8 9.94l3.72-3.72a.75.75 0 011.06 0z"></path>
            </svg>
          ) : (
            <svg className="octicon octicon-chevron-right" viewBox="0 0 16 16" width="16" height="16">
              <path fillRule="evenodd" d="M6.22 3.22a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 010-1.06z"></path>
            </svg>
          )}
        </span>
        <span className="folder-name">
          <svg className="octicon octicon-file-directory" viewBox="0 0 16 16" width="16" height="16">
            <path fillRule="evenodd" d="M1.75 1A1.75 1.75 0 000 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0016 13.25v-8.5A1.75 1.75 0 0014.25 3H7.5a.25.25 0 01-.2-.1l-.9-1.2C6.07 1.26 5.55 1 5 1H1.75z"></path>
          </svg>
          {item.name}
        </span>
        {user === 'manager' && (
          <span className="permission-badge">
            <svg className="octicon octicon-lock" viewBox="0 0 16 16" width="16" height="16">
              <path fillRule="evenodd" d="M4 4v2h-.25A1.75 1.75 0 002 7.75v5.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0014 13.25v-5.5A1.75 1.75 0 0012.25 6H12V4a4 4 0 10-8 0zm6.5 2V4a2.5 2.5 0 00-5 0v2h5zM12 7.5h.25a.25.25 0 01.25.25v5.5a.25.25 0 01-.25.25h-8.5a.25.25 0 01-.25-.25v-5.5a.25.25 0 01.25-.25H12z"></path>
            </svg>
          </span>
        )}
      </div>
      
      {isExpanded && item.children && (
        <div className="folder-contents">
          {item.children.map((child, index) => {
            if (child.type === 'folder') {
              return <Folder key={`${child.path}-${index}`} item={child} level={level + 1} user={user} />;
            } else {
              return <File key={`${child.path}-${index}`} item={child} level={level + 1} user={user} />;
            }
          })}
        </div>
      )}
    </div>
  );
};

export default Folder;