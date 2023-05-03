import { Button, Grid, OutlinedInput, styled } from "@mui/material";

export const StyledButton = styled(Button)`
  color: #ffffff;
  text-transform: none;
  font-weight: 800;
  margin-bottom: 1rem;
`;

export const StyledOutlinedInput = styled(OutlinedInput)`
  background-color: var(--main-color-20);
  border-radius: 0.4rem;
`;

export const StyledFirstBox = styled(Grid)`
  height: 100vh;
  width: 70%;
  background-color: var(--bg-color);
`;
export const StyledSecondBox = styled(Grid)`
  height: 100vh;
  width: 30%;
  background-color: var(--main-color);
`;
