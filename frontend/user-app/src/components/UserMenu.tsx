import React from 'react';
import { Avatar, Menu, MenuItem, Typography, Divider } from '@mui/material';
import {
  Settings,
  Logout,
  Support,
  People,
  GroupAdd,
  HistoryEdu,
  ViewList
} from '@mui/icons-material';

interface UserMenuProps {
  anchorEl: HTMLElement | null;
  open: boolean;
  onClose: () => void;
  onLogout: () => void; // Function to handle logout
}

const UserMenu: React.FC<UserMenuProps> = ({
  anchorEl,
  open,
  onClose,
  onLogout
}) => {
  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: 'visible',
          filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
          mt: 1.5,
          '& .MuiAvatar-root': {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1
          },
          '&:before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: 'background.paper',
            transform: 'translateY(-50%) rotate(45deg)',
            zIndex: 0
          }
        }
      }}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      <MenuItem onClick={onClose}>
        <Avatar /> <Typography variant="body2">View Profile</Typography>
      </MenuItem>
      <MenuItem onClick={onClose}>
        <Settings fontSize="small" />
        <Typography variant="body2" sx={{ ml: 1 }}>
          Settings
        </Typography>
      </MenuItem>
      <MenuItem onClick={onClose}>
        <ViewList fontSize="small" />
        <Typography variant="body2" sx={{ ml: 1 }}>
          Subscription
        </Typography>
      </MenuItem>
      <Divider />
      <MenuItem onClick={onClose}>
        <HistoryEdu fontSize="small" />
        <Typography variant="body2" sx={{ ml: 1 }}>
          Changelog
        </Typography>
      </MenuItem>
      <MenuItem onClick={onClose}>
        <People fontSize="small" />
        <Typography variant="body2" sx={{ ml: 1 }}>
          Team
        </Typography>
      </MenuItem>
      <MenuItem onClick={onClose}>
        <GroupAdd fontSize="small" />
        <Typography variant="body2" sx={{ ml: 1 }}>
          Invite Member
        </Typography>
      </MenuItem>
      <Divider />
      <MenuItem onClick={onClose}>
        <Support fontSize="small" />
        <Typography variant="body2" sx={{ ml: 1 }}>
          Support
        </Typography>
      </MenuItem>
      <Divider />
      <MenuItem onClick={onLogout}>
        {/* This triggers the logout */}
        <Logout fontSize="small" />
        <Typography variant="body2" sx={{ ml: 1 }}>
          Sign Out
        </Typography>
      </MenuItem>
    </Menu>
  );
};

export default UserMenu;
