import { Box } from "@mui/material";
import styled from "@emotion/styled";

export function PageSections() {
  return (
    <>
      <FirstSection />
      <SecondSection />
    </>
  );
}

const FirstSection = styled(Box)`
  height: 100vh;
  background-color: var(--main-color-20);
`;
const SecondSection = styled(Box)`
  height: 100vh;
  background-color: var(--bg-color);
`;
