import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import { pathAuthorizes } from 'routes';
import { Body } from './body';
import { Drawer } from './drawer';

const Authorized = () => {
  const [open, setOpen] = useState(true);

  return (
    <Box>
      <Drawer />
      <Routes>
        
        {pathAuthorizes.map((route: any) => {
          return (
            <Route
              key={route.path}
              path={
                route.id
                  ? `/${route?.path}/:${route?.id}`
                  : route.path
              }
              element={
                <div style={{padding:" 0px 0 119px 0"}}>

                <Body open={open} setOpen={setOpen} route={route}>
                  {route.element}
                </Body>
                </div>
                
              }
            />
          );
        })}
      </Routes>
    </Box>
  );
};

export default Authorized;
