import { Header, Text, Group, ThemeIcon, Container } from "@mantine/core";
import { IconMoon } from "@tabler/icons";
import Link from "next/link";
import { ReactNode } from "react";

const Layout = (props: { children: ReactNode }) => {
  return (
    <>
      <Container size="md">
        <header className="w-full flex items-center justify-between h-16">
          <Text weight={700} size="lg">
            Shimabu IT University
          </Text>
          <Group position="right" spacing="xl" align="center">
            <Link href="/">
              <Text weight={700} size="lg">
                About
              </Text>
            </Link>
            <Link href="/Blog">
              <Text weight={700} size="lg">
                Blog
              </Text>
            </Link>
            <Link href="/Portfolio">
              <Text weight={700} size="lg">
                Portfolio
              </Text>
            </Link>
            <Link href="/Contact">
              <Text weight={700} size="lg">
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
