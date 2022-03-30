import React, { useEffect, useState } from 'react';
import { makeStyles, createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Collapse, Button } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll';
import { ReportProblemTwoTone } from '@material-ui/icons';
import ReactDOM from 'react-dom';

const theme = createMuiTheme({
    status: {
      danger: '#e53e3e',
    },
    palette: {
      primary: {
        main: '#49c859',
        darker: '#053e85',
      },
      neutral: {
        main: '#64748B',
        contrastText: '#fff',
      },
    },
  });
  
  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontFamily: 'Nunito',
    },
    appbar: {
      background: '#3d4844',
    },
    appbarWrapper: {
      width: '80%',
      margin: '0 auto',
    },
    appbarTitle: {
      flexGrow: '1',
      textAlign: 'center',
    },
    icon: {
      color: '#fff',
      fontSize: '2rem',
    },
    colorTitle: {
      color: '#5DD5AD',
      fontFamily: 'Satisfy',
    },
    colorText: {
      color: 'white',
    },
    container: {
      textAlign: 'center',
    },
    title: {
      color: '#fff',
      fontSize: '4.5rem',
    },
    goDown: {
      color: '#5AFF3D',
      fontSize: '4rem',
    },
    footer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50vh',
        fontFamily: 'Nunito',
        background: '#fff',
    },
  }));

export default function Footer() {
    const classes = useStyles();
    const [checked, setChecked] = useState(false);
    useEffect(() => {
      setChecked(true);
    }, []);
    return (
    <div className={classes.footer} id="footer">
         
    </div>
    )

}