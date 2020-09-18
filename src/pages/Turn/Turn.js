import React from 'react';
import { useHistory } from 'react-router-dom';
// import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import LockIcon from '@material-ui/icons/Lock';
import IconButton from '@material-ui/core/IconButton';
import Create from '@material-ui/icons/Create';
import { Container, Grid, Paper, Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import Title from '../../components/Shared/Title/Title';



const Turn = () => {
  const history = useHistory();

  // Generate Order Data
  function createData(id, date, name, shipTo, paymentMethod, amount) {
    return { id, date, name, shipTo, paymentMethod, amount };
  }

  const rows = [
    createData(0, '16 Mar, 2019', 'Elvis Presley', 'Tupelo, MS', 'VISA ⠀•••• 3719', 312.44),
    createData(1, '16 Mar, 2019', 'Paul McCartney', 'London, UK', 'VISA ⠀•••• 2574', 866.99),
    createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
    createData(3, '16 Mar, 2019', 'Michael Jackson', 'Gary, IN', 'AMEX ⠀•••• 2000', 654.39),
    createData(4, '15 Mar, 2019', 'Bruce Springsteen', 'Long Branch, NJ', 'VISA ⠀•••• 5919', 212.79),
  ];

  const drawerWidth = 240;

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    toolbar: {
      paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 8px',
      ...theme.mixins.toolbar,
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    menuButtonHidden: {
      display: 'none',
    },
    title: {
      flexGrow: 1,
    },
    drawerPaper: {
      position: 'relative',
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
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto',
    },
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
    },
    fixedHeight: {
      height: 240,
    },
  }));

	const classes = useStyles();
	return (
		<React.Fragment>			
			<main className={classes.content}>
        <div className={classes.appBarSpacer} />					
					<Container maxWidth="lg" className={classes.container}>
						<Grid container spacing={3}>
            <Grid item xs={12}>
							<Button variant="contained" color="primary" onClick={() => {history.push('/newturn')}}>Nuevo Turno</Button>
							</Grid>
							<Grid item xs={12}>
								<Paper className={classes.paper}>
                <Title>Peliculas</Title>
									<Table size="small">
										<TableHead>
											<TableRow>
												<TableCell>Id</TableCell>
												<TableCell>Turno</TableCell>												
												<TableCell>Estado</TableCell>                        
												<TableCell align="right"></TableCell>
											</TableRow>
										</TableHead>
										<TableBody>
											{rows.map((row) => (
												<TableRow key={row.id}>
													<TableCell>{row.date}</TableCell>
													<TableCell>{row.name}</TableCell>
													<TableCell>{row.shipTo}</TableCell>													
													<TableCell align="right">
                          <IconButton aria-label="delete" color="primary" >
															<Create/>
      											</IconButton>
														<IconButton aria-label="delete" color="primary">																													
															<LockIcon/>
														</IconButton>
														<IconButton aria-label="delete" color="primary">
															<DeleteIcon/>
														</IconButton>
                          </TableCell>
												</TableRow>
											))}
										</TableBody>
									</Table>
								</Paper>
							</Grid>
						</Grid>
					</Container>
				</main>
		</React.Fragment>
	);
};

export default Turn;
