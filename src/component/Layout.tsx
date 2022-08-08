import { Text, Group, ThemeIcon, ActionIcon, Container } from "@mantine/core";
import { IconMoon, IconMenu2 } from "@tabler/icons";
import Link from "next/link";
import { ReactNode } from "react";

import { useMediaQuery } from "src/lib/mantine";

const Layout = (props: { children: ReactNode; largerThanSm?: true }) => {
  const largerThanSm = useMediaQuery("sm");

  return (
    <>
      <Container size="md">
        <header className="w-full flex items-center justify-between h-16">
          <ActionIcon
            variant="light"
            className={largerThanSm ? "hidden" : undefined}
          >
            <IconMenu2 />
          </ActionIcon>

          <Text
            weight={700}
            size="lg"
            className={largerThanSm ? undefined : "m-auto"}
          >
            Shimabu IT University
          </Text>

          <Group position="right" spacing="xl" align="center">
            <Link href="/">
              <Text
                weight={700}
                size="lg"
                className={largerThanSm ? undefined : "hidden"}
              >
                About
              </Text>
            </Link>
            <Link href="/Blog">
              <Text
                weight={700}
                size="lg"
                className={largerThanSm ? undefined : "hidden"}
              >
                Blog
              </Text>
            </Link>
            <Link href="/Portfolio">
              <Text
                weight={700}
                size="lg"
                className={largerThanSm ? undefined : "hidden"}
              >
                Portfolio
              </Text>
            </Link>
            <Link href="/Contact">
              <Text
                weight={700}
                size="lg"
                className={largerThanSm ? undefined : "hidden"}
              >
                Contact
              </Text>
            </Link>
            <ThemeIcon variant="outline" color="dark">
              <IconMoon />
            </ThemeIcon>
          </Group>
        </header>
      </Container>

      {props.children}
    </>
  );
};

export default Layout;
