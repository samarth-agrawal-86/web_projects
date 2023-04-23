import { Box, Container, Button } from '@mui/material';
import React from 'react';

function HookArray() {
  const [items, setItems] = React.useState([]);

  function handleAddItem() {
    const newItem = {
      id: items.length,
      value: Math.floor(Math.random() * 10 + 1),
    };
    //setItems(items.concat(newItem));
    setItems([...items, newItem]);
  }
  return (
    <Box>
      <Container>
        <Button variant="contained" color="primary" onClick={handleAddItem}>
          Add Item
        </Button>
        <ul>
          {items.map((item) => (
            <li key={item.id}>{item.value}</li>
          ))}
        </ul>
      </Container>
    </Box>
  );
}

export default HookArray;
