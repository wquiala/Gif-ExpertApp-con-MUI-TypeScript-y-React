import { Box, Button, Divider, TextField } from '@mui/material';
import React, { ChangeEvent, FormEvent, useState } from 'react';

interface IAddCategoriesProps {
  onNewCategory: (value: string) => void;
}

export const AddCategories: React.FC<IAddCategoriesProps> = ({
  onNewCategory,
}) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    setInputValue(target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (inputValue.trim().length < 1) return;
    onNewCategory(inputValue.trim());

    setInputValue('');
  };
  return (
    <Box component={'form'} onSubmit={handleSubmit} margin={2}>
      <TextField
        fullWidth
        id="outlined-size-small"
        size="small"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Escribe el nombre de el Gift que desea Buscar"
      />
    </Box>
  );
};
