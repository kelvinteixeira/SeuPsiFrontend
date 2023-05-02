import { Button } from "@mui/material";
import styled from "@emotion/styled";

export const StyledLinksButton = styled(Button)`
  color: #000000;
  text-transform: none;
  font-weight: 800;
  margin-left: 1rem;
`;

export const StyledBackToTopButton = styled(Button)`
  display: flex;
  flex-direction: column;
  text-transform: none;
  position: fixed;
  z-index: 1;
`;
