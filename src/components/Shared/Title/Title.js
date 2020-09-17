import React, { useEffect, useState } from 'react';
import { Menu, MenuItem, AppBar, Button, IconButton, Toolbar, Typography, Badge} from '@material-ui/core';
import {MenuIcon, NotificationsIcon} from '@material-ui/icons/Menu';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './Title.module.scss';

const Title = () => {
	const [open, setOpen] = React.useState(true);

	/*
	
  const handleOpenMenu = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setMenuAnchorEl(null);
  };

  const handleSignOut = () => {
    Auth.signOut()
      .then(() => {
        handleCloseMenu();
        window.location.reload();
      })
      .catch(err => console.error('Sign out error', err));
  };
	*/
  return (
		<AppBar position="absolute" className={clsx(styles.appBar, open && styles.appBarShift)}>
		<Toolbar className={styles.toolbar}>
			<IconButton
				edge="start"
				color="inherit"
				aria-label="open drawer"				
				className={clsx(styles.menuButton, open && styles.menuButtonHidden)}
			>
				<MenuIcon />
			</IconButton>
			<Typography component="h1" variant="h6" color="inherit" noWrap className={styles.title}>
				Evaluación Osp
			</Typography>
			<IconButton color="inherit">
				<Badge badgeContent={4} color="secondary">
					<NotificationsIcon />
				</Badge>
			</IconButton>
		</Toolbar>
	</AppBar>
  );
};

export default Title;
