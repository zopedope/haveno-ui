// =============================================================================
//  Copyright 2022 Haveno
//
//  Licensed under the Apache License, Version 2.0 (the "License");
//  you may not use this file except in compliance with the License.
//  You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
//  Unless required by applicable law or agreed to in writing, software
//  distributed under the License is distributed on an "AS IS" BASIS,
//  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//  See the License for the specific language governing permissions and
//  limitations under the License.
// =============================================================================

import { useState } from "react";
import {
  Box,
  Collapse,
  createStyles,
  Group,
  Stack,
  Text,
  UnstyledButton,
} from "@mantine/core";
import { ReactComponent as XMRLogo } from "@assets/xmr-logo-1.svg";
import { ReactComponent as ArrowDown } from "@assets/arrow-down.svg";
import { ReactComponent as ArrowUp } from "@assets/arrow-up.svg";

export function WalletBalance() {
  const [isOpen, setOpen] = useState(false);
  const { classes } = useStyles({ isOpen });
  return (
    <Box className={classes.container}>
      <Stack>
        <Group spacing="sm">
          <XMRLogo />
          <Text className={classes.heading} weight={700}>
            Available Balance
          </Text>
        </Group>
        <Stack spacing={4}>
          <UnstyledButton
            className={classes.btnToggle}
            onClick={() => setOpen(!isOpen)}
          >
            <Group>
              <Text className={classes.xmr}>10.647382650365</Text>
              <ArrowDown />
            </Group>
          </UnstyledButton>
          <Text className={classes.fiat}>(EUR 2441,02)</Text>
        </Stack>
        <Collapse in={isOpen}>
          <Stack>
            <Stack spacing={4}>
              <Text className={classes.balanceLabel}>Total</Text>
              <Text className={classes.balanceValue}>14.048212174412</Text>
            </Stack>
            <Stack spacing={4}>
              <Text className={classes.balanceLabel}>Reserved</Text>
              <Text className={classes.balanceValue}>2.874598526325</Text>
            </Stack>
            <Stack spacing={4}>
              <Text className={classes.balanceLabel}>Locked</Text>
              <Text className={classes.balanceValue}>0.854975624859</Text>
            </Stack>
          </Stack>
        </Collapse>
      </Stack>
    </Box>
  );
}

const useStyles = createStyles<string, { isOpen: boolean }>(
  (theme, params) => ({
    container: {
      border: `solid 1px ${theme.colors.gray[4]}`,
      borderRadius: theme.radius.md,
      padding: theme.spacing.md,
    },
    heading: {
      fontSize: "0.5rem",
      fontWeight: 700,
      textTransform: "uppercase",
    },
    btnToggle: {
      svg: {
        transform: `rotate(${params.isOpen ? 180 : 0}deg)`,
        transition: "transform 0.2s",
        width: 8,
      },
    },
    xmr: {
      fontSize: "0.75rem",
      fontWeight: 600,
    },
    fiat: {
      color: theme.colors.gray[6],
      fontSize: "0.625rem",
      fontWeight: 500,
    },
    balanceLabel: {
      color: theme.colors.gray[6],
      fontSize: "0.625rem",
      fontWeight: 700,
      textTransform: "uppercase",
    },
    balanceValue: {
      color: theme.colors.gray[8],
      fontSize: "0.625rem",
      fontWeight: 600,
    },
  })
);
