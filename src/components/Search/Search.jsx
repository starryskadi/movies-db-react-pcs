import { TextField, Box, InputAdornment, IconButton } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";

const Search = ({ refer, onClick }) => {
  return (
    <Box mt={2}>
      <TextField
        inputRef={refer}
        label="Search...."
        name="currentSearch"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={onClick}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default Search;
