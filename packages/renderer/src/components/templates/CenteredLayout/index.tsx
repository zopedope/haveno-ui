import { FC } from "react";
import { Container, Stack } from "@mantine/core";
import { HeaderWithLogo } from "@atoms/Header";

interface CenteredLayoutProps {
  showHeader?: boolean;
}

export const CenteredLayout: FC<CenteredLayoutProps> = (props) => {
  const { children, showHeader = false } = props;
  return (
    <Stack sx={{ width: "100%" }}>
      {showHeader && <HeaderWithLogo />}
      <Container p="sm" sx={{ display: "flex", flex: 1 }}>
        {children}
      </Container>
    </Stack>
  );
};
