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

import { ReactNode } from "react";
import {
  Box,
  createStyles,
  Group,
  Navbar,
  Stack,
  Text,
  UnstyledButton,
} from "@mantine/core";
import { ReactComponent as Logo } from "@assets/logo-icon.svg";
import { ReactComponent as MarketsIcon } from "@assets/markets.svg";
import { ReactComponent as OffersIcon } from "@assets/offers.svg";
import { ReactComponent as TradesIcon } from "@assets/trades.svg";
import { ReactComponent as NotificationsIcon } from "@assets/notifications.svg";
import { ReactComponent as AccountIcon } from "@assets/account.svg";

export function Sidebar() {
  return (
    <Stack>
      <Navbar p={0} width={{ base: 210 }}>
        <Navbar.Section>
          <Box component={Logo} height={32} sx={{ padding: "1.5rem 2.5rem" }} />
        </Navbar.Section>
        {links.map((link) => (
          <Navbar.Section key={link.label}>
            <NavLink {...link} />
          </Navbar.Section>
        ))}
      </Navbar>
    </Stack>
  );
}

const links = [
  {
    icon: <MarketsIcon />,
    label: "Markets",
  },
  {
    icon: <OffersIcon />,
    label: "My Offers",
  },
  {
    icon: <TradesIcon />,
    label: "My Trades",
  },
  {
    icon: <NotificationsIcon />,
    label: "Notifications",
  },
  {
    icon: <AccountIcon />,
    label: "Account",
  },
];

interface NavLinkProps {
  icon: ReactNode;
  isActive?: boolean;
  label: string;
}

function NavLink({ icon, isActive = false, label }: NavLinkProps) {
  const { classes } = useStyles({ isActive });
  return (
    <UnstyledButton className={classes.navLink}>
      <Group>
        {icon}
        <Text
          className={classes.text}
          color="gray"
          size="xs"
          transform="uppercase"
          weight={700}
        >
          {label}
        </Text>
      </Group>
    </UnstyledButton>
  );
}

const useStyles = createStyles<string, { isActive: boolean }>(
  (theme, { isActive }, getRef) => ({
    navLink: {
      display: "block",
      padding: "1.5rem 2.5rem",
      transition: "opacity 0.2s",
      width: "100%",

      [`svg, .${getRef("text")}`]: {
        opacity: isActive ? 1 : 0.5,
        transition: "opacity 0.2s",
      },

      svg: isActive
        ? {
            path: {
              fill: theme.colors.brand[6],
            },
          }
        : null,

      "&:hover": {
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[6]
            : theme.colors.gray[0],

        [`svg, .${getRef("text")}`]: {
          opacity: 1,
        },
      },
    },
    text: {
      ref: getRef("text"),
      color:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.dark[8],

      transition: "opacity 0.2s",
    },
  })
);
