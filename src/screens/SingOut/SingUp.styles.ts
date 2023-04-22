import { Box, Button, Card, Grid, OutlinedInput, styled } from "@mui/material";

export const StyledButton = styled(Button)`
  color: #ffffff;
  text-transform: none;
  font-weight: 800;
  margin-bottom: 1rem;
  width: 20rem;
`;

export const StyledOutlinedInput = styled(OutlinedInput)`
  background-color: var(--bg-input);
  border-radius: 0.4rem;
  width: 20rem;
  margin-bottom: 1.5rem;
`;

export const StyledFirstBox = styled(Grid)`
  height: 100vh;
  width: 70%;
  overflow: hidden;
  background-color: var(--bg-color);
`;
export const StyledSecondBox = styled(Grid)`
  height: 100vh;
  width: 30%;
  background-color: var(--main-color);
`;
export const StyledTapeHeaderCard = styled(Box)`
  height: 1rem;
  background-color: var(--main-color);
`;

export const StyledCard = styled(Card)`
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-button {
    color: white;
  }

  ::-webkit-scrollbar-thumb {
    border: 1px solid black;
    background-color: var(--main-color);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-track {
    background-color: var(--bg-color);
  }
`;
