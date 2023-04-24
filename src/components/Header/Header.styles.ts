import { IconButton, Button } from "@mui/material";
import styled from "@emotion/styled";

export const StyledLinksButton = styled(Button)`
  color: #ffffff;
  border: 1px solid #ffffff;
  text-transform: none;
  font-weight: 800;

  :hover {
    border: 1px solid #ffffff;
    background-color: #ffffff;
    color: var(--main-color);
  }
`;

export const StyledBackToTopButton = styled(Button)`
  display: flex;
  flex-direction: column;
  text-transform: none;
  position: fixed;
  z-index: 1;
`;
