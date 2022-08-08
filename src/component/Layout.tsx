import {
  AppShell,
  Header,
  Text,
  Container,
  Group,
  Button,
  ThemeIcon,
} from "@mantine/core";
import { IconMoon } from "@tabler/icons";
import Link from "next/link";
import { ReactNode } from "react";

const Layout = (props: { children: ReactNode }) => {
  return (
    <AppShell
      padding="md"
      header={
        <Header height={65} className="flex justify-around items-center">
          <Text weight={700} size="lg" style={{ fontFamily: "Avenir Next" }}>
            Shimabu IT University
          </Text>
          <Group position="right" spacing="xl" align="center">
            <Link href="/">
              <Text
                weight={700}
                size="lg"
                style={{ fontFamily: "Avenir Next" }}
              >
                About
              </Text>
            </Link>
            <Link href="/Blog">
              <Text
                weight={700}
                size="lg"
                style={{ fontFamily: "Avenir Next" }}
              >
                Blog
              </Text>
            </Link>
            <Link href="/Portfolio">
              <Text
                weight={700}
                size="lg"
                style={{ fontFamily: "Avenir Next" }}
              >
                Portfolio
              </Text>
            </Link>
            <Link href="/Contact">
              <Text
                weight={700}
                size="lg"
                style={{ fontFamily: "Avenir Next" }}
              >
                Contact
              </Text>
            </Link>
            <ThemeIcon variant="outline" color="dark">
              <IconMoon />
            </ThemeIcon>
          </Group>
        </Header>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      <Container>
        <div>hello</div>
      </Container>
    </AppShell>
  );
};

export default Layout;
