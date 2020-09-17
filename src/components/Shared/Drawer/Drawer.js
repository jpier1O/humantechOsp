import React, {useState} from "react";
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
  Drawer as MUIDrawer,  
	List,
	IconButton,
	Divider,
} from "@material-ui/core";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItems from '../ListItems/ListItems';

const Drawer = () => {
	const [open, setOpen] = useState(true);	
	const drawerWidth = 240;

	const handleDrawerClose = () => {
    setOpen(false);
	};
	
	const useStyles = makeStyles((theme) => ({
		
		drawerPaper: {
			// position: 'relative',
			whiteSpace: 'nowrap',
			width: drawerWidth,
			transition: theme.transitions.create('width', {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.enteringScreen,
			}),
		},
		drawerPaperClose: {
			overflowX: 'hidden',
			transition: theme.transitions.create('width', {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.leavingScreen,
			}),
			width: theme.spacing(7),
			[theme.breakpoints.up('sm')]: {
				width: theme.spacing(9),
			},
		},
		paper: {
			padding: theme.spacing(2),
			display: 'flex',
			overflow: 'auto',
			flexDirection: 'column',
		},
	}));

	const classes = useStyles();

	return  (
		<MUIDrawer
			variant="permanent"			
			// className={classes.drawer}
			classes={{				
				paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
			}}
			open={open}
		>
			<div className={classes.toolbarIcon}>
				<IconButton onClick={handleDrawerClose}>
					<ChevronLeftIcon />
				</IconButton>
			</div>
			<Divider />
			<List><ListItems/></List>        
		</MUIDrawer>
	);
}

export default Drawer;