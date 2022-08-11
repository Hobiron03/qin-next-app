import {
  Container,
  ActionIcon,
  Group,
  ThemeIcon,
  Text,
  Drawer,
  CloseButton,
} from "@mantine/core";
import { IconMenu2, IconMoon } from "@tabler/icons";
import Link from "next/link";
import { useState } from "react";
import { useCallback } from "react";

import { useMediaQuery } from "src/lib/mantine";

const Header = () => {
  const [opendDrawer, setOpenedDrawer] = useState<boolean>(false);
  const largerThanSm = useMediaQuery("sm");

  const onClickToggleIconMenu = useCallback(() => {
    setOpenedDrawer(!opendDrawer);
  }, [opendDrawer]);

  return (
    <>
      <Drawer
        opened={opendDrawer}
        onClose={() => setOpenedDrawer(false)}
        padding="xl"
        size="full"
        styles={{
          drawer: { backgroundColor: "#E64980" },
          closeButton: {
            display: "none",
          },
        }}
      >
        <CloseButton onClick={onClickToggleIconMenu} size="md" color="white" />
        <div className="mt-100">
          <Link href="/">
            <Text
              weight={700}
              size={28}
              color="white"
              className={largerThanSm ? "text-white" : "text-red"}
            >
              <span className="mb-10">About</span>
            </Text>
          </Link>
          <Link href="/blog-page">
            <Text
              weight={700}
              size={28}
              color="white"
              className={largerThanSm ? undefined : "hidden"}
            >
              Blog
            </Text>
          </Link>
          <Link href="/portfolio-page">
            <Text
              weight={700}
              color="white"
              size={28}
              className={largerThanSm ? undefined : "hidden"}
            >
              Portfolio
            </Text>
          </Link>
          <Link href="/contact-page">
            <Text
              weight={700}
              size={28}
              color="white"
              className={largerThanSm ? undefined : "hidden"}
            >
              Contact
            </Text>
          </Link>
        </div>
      </Drawer>

      <Container size="md">
        <header className="w-full flex items-center justify-between h-16">
          <ActionIcon
            variant="light"
            className={largerThanSm ? "hidden" : undefined}
            onClick={onClickToggleIconMenu}
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
              <a className="no-underline">
                <Text
                  weight={700}
                  size="lg"
                  className={largerThanSm ? undefined : "hidden"}
                  color="dark"
                >
                  About
                </Text>
              </a>
            </Link>
            <Link href="/blog-page">
              <a className="no-underline">
                <Text
                  weight={700}
                  size="lg"
                  className={largerThanSm ? undefined : "hidden"}
                  color="dark"
                >
                  Blog
                </Text>
              </a>
            </Link>
            <Link href="/portfolio-page">
              <a className="no-underline">
                <Text
                  weight={700}
                  size="lg"
                  className={largerThanSm ? undefined : "hidden"}
                  color="dark"
                >
                  Portfolio
                </Text>
              </a>
            </Link>
            <Link href="/contact-page">
              <a className="no-underline">
                <Text
                  weight={700}
                  size="lg"
                  className={largerThanSm ? undefined : "hidden"}
                  color="dark"
                >
                  Contact
                </Text>
              </a>
            </Link>
            <ThemeIcon variant="outline" color="dark">
              <IconMoon />
            </ThemeIcon>
          </Group>
        </header>
      </Container>
    </>
  );
};

export default Header;
