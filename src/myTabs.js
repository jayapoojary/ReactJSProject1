import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const MyTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Tabs value={value} onChange={handleChange}>
        <Tab style={{ width: "50%" }} label="Tab 1" />
        <Tab style={{ width: "50%" }} label="Tab 2" />
      </Tabs>

      {value === 0 && (
        <div>
          Content for Tab 1 goes here.
        </div>
      )}

      {value === 1 && (
        <div>
          Content for Tab 2 goes here.
        </div>
      )}
    </div>
  );
};

export default MyTabs;
