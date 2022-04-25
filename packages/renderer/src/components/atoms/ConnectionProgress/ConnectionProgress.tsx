import { Box, createStyles, keyframes, Stack, Text } from "@mantine/core";
import { FormattedMessage } from "react-intl";
import { LangKeys } from "@constants/lang/LangKeys";

export function ConnectionProgress() {
  const { classes } = useStyles();
  return (
    <Stack align="center" justify="center">
      <Text size="sm">
        <FormattedMessage
          id={LangKeys.ConnectingToNetwork}
          defaultMessage="Connecting to Monero Network"
        />
      </Text>
      <Box className={classes.container}>
        <Box className={classes.bar} />
      </Box>
    </Stack>
  );
}

const bounce = keyframes({
  "from, to": { transform: "translate3d(0, 0, 0)" },
  "50%": { transform: "translate3d(19rem, 0, 0)" },
});

const useStyles = createStyles((theme) => ({
  container: {
    background: "rgba(17, 17, 17, 0.15)",
    borderRadius: 3,
    height: 6,
    position: "relative",
    width: "23rem",
  },
  bar: {
    animation: `${bounce} 3s ease-in-out infinite`,
    background: theme.primaryColor,
    borderRadius: 3,
    height: 6,
    position: "absolute",
    width: "4rem",
  },
}));
