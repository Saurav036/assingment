import React, { useState } from 'react';
import File from './File';

const Folder = ({ item, level, user }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="folder-item" style={{ marginLeft: `${level * 16}px` }}>
      <div 
        className={`folder-header ${isExpanded ? 'expanded' : ''}`}
        onClick={toggleExpand}
        aria-expanded={isExpanded}
      >
        <span className="chevron-icon">
          {isExpanded ? (
            // Down arrow (↓)
            <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
              <path d="M4.427 7.427l3.396 3.396a.25.25 0 00.354 0l3.396-3.396A.25.25 0 0011.396 7H4.604a.25.25 0 00-.177.427z" />
            </svg>
          ) : (
            // Right arrow (→)
            <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
              <path d="M8.427 4.427l3.396 3.396a.25.25 0 010 .354l-3.396 3.396A.25.25 0 018 11.396V4.604a.25.25 0 01.427-.177z" />
            </svg>
          )}
        </span>
        <span className="folder-name">
          <svg className="icon" viewBox="0 0 24 24" width="16" height="16">
            {isExpanded ? (
              <path fill="currentColor" d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z" />
            ) : (
              <path fill="currentColor" d="M4,4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4H4Z" />
            )}
          </svg>
          {item.name}
        </span>
        {user === 'manager' && (
          <span className="permission-badge">
            <svg className="icon" viewBox="0 0 24 24" width="14" height="14">
              <path fill="currentColor" d="M12,3A4,4 0 0,0 8,7V9H6V7A6,6 0 0,1 12,1A6,6 0 0,1 18,7V9H16V7A4,4 0 0,0 12,3M18,11H6A2,2 0 0,0 4,13V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V13A2,2 0 0,0 18,11Z" />
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