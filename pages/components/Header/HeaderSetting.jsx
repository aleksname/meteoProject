import React from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

import settingImg from '../img/header/Setting_line.png'
import Image from 'next/image';

import styles from '../../../styles/App.module.scss'
export default function HeaderSetting() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (open) => () => {
    setState({ ...state, right: open });
  };

  return (
    <>
      <Button onClick={toggleDrawer(true)}>
      <Image src={settingImg} alt="1"  className={styles.headerSetting} />
      </Button>
      <Drawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer(false)}
      >
        <div className={ styles.headerSettingTitle}>Select setting</div>
        <FormControlLabel
          control={<Switch />}
          label="Switch thema"
          sx={{ m: 1 }}
        />
      </Drawer>
    </>
  );
}
