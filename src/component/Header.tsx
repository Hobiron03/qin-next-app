import {
  Container,
  ActionIcon,
  Group,
  Text,
  Drawer,
  CloseButton,
  useMantineColorScheme,
} from "@mantine/core";
import { IconMenu2, IconSun, IconMoonStars } from "@tabler/icons";
import Link from "next/link";
import { useState } from "react";
import { useCallback } from "react";

import { useMediaQuery } from "src/lib/mantine";

export const Header = () => {
  const [opendDrawer, setOpenedDrawer] = useState<boolean>(false);
  const largerThanSm = useMediaQuery("sm");

  const onClickToggleIconMenu = useCallback(() => {
    setOpenedDrawer(!opendDrawer);
  }, [opendDrawer]);

  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <div className="w-full">
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
        <header
          className={
            largerThanSm
              ? "w-full flex items-center justify-between h-16"
              : "w-full flex items-center justify-center h-16"
          }
        >
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
            <Link href="/">
              <span className="cursor-pointer">Shimabu IT University</span>
            </Link>
          </Text>

          <Group position="right" spacing="xl" align="center">
            <Link href="/about-page">
              <Text
                weight={700}
                size="lg"
                className={largerThanSm ? "cursor-pointer" : "hidden"}
                color="dark"
              >
                About
              </Text>
            </Link>
            <Link href="/blog-page">
              <Text
                weight={700}
                size="lg"
                className={largerThanSm ? "cursor-pointer" : "hidden"}
                color="dark"
              >
                Blog
              </Text>
            </Link>
            <Link href="/portfolio-page">
              <Text
                weight={700}
                size="lg"
                className={largerThanSm ? "cursor-pointer" : "hidden"}
                color="dark"
              >
                Portfolio
              </Text>
            </Link>
            <Link href="/contact-page">
              <Text
                weight={700}
                size="lg"
                className={largerThanSm ? "cursor-pointer" : "hidden"}
                color="dark"
              >
                Contact
              </Text>
            </Link>
            <ActionIcon
              variant="outline"
              color={dark ? "yellow" : "dark"}
              onClick={() => toggleColorScheme()}
            >
              {/* <IconMoon /> */}
              {dark ? <IconSun size={18} /> : <IconMoonStars size={18} />}
            </ActionIcon>
          </Group>
        </header>
      </Container>
    </div>
  );
};
