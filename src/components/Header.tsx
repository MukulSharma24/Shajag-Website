"use client";

import { Box, Flex, HStack, VStack, Text, IconButton, Button, useDisclosure, Stack, Link as ChakraLink } from "@chakra-ui/react";

import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Link from "next/link";
import Image from "next/image"; // <-- ADD THIS IMPORT


const navItems = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/partners', label: 'Partners' },
];

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box as="header" w="100%" bg="white" boxShadow="sm" position="fixed" zIndex={10}>
      <Flex h={16} alignItems="center" justifyContent="space-between" maxW="7xl" mx="auto" px={4}>
        {/* Logo + Name */}
        <HStack spacing={4} align="center" h="80px">
  <Box display="flex" alignItems="center" boxSize="64px" minW="64px">
    <Image
      src="/shajag.svg"
      alt="Shajag Logo"
      width={64}
      height={64}
      style={{ objectFit: "contain", display: "block" }}
      priority
    />
  </Box>
  <VStack spacing={0} align="start" justify="center" h="64px">
    <Text
      as="span"
      fontSize="3xl"
      fontWeight="extrabold"
      color="black"
      fontFamily="inherit"
      lineHeight="100%"
      mb={0}
      style={{ marginBottom: 0 }}
    >
      Shajag
    </Text>
    <Text
      as="span"
      fontSize="xl"
      fontWeight="normal"
      color="black"
      fontFamily="Georgia, Times, 'Times New Roman', serif"
      letterSpacing="0.08em"
      textTransform="uppercase"
      mt={0}
      style={{ marginTop: 0 }}
    >
      Systems and Services
    </Text>
  </VStack>
</HStack>




        {/* Desktop Navigation */}
        <HStack spacing={8} alignItems="center" display={{ base: "none", md: "flex" }}>
          {navItems.map((item) => (
            <ChakraLink
              key={item.href}
              as={Link}
              href={item.href}
              fontWeight="semibold"
              color="gray.700"
              _hover={{ color: "green.500" }}
              px={2}
            >
              {item.label}
            </ChakraLink>
          ))}
          <Button as={Link} href="/contact" colorScheme="green">
            Contact US
          </Button>
        </HStack>

        {/* Mobile Nav Toggle */}
        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Open Menu"
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
      </Flex>

      {/* Mobile Menu */}
      {isOpen ? (
        <Box pb={4} display={{ md: "none" }} bg="white" shadow="md">
          <Stack as="nav" spacing={4} px={8}>
            {navItems.map((item) => (
              <ChakraLink
                key={item.href}
                as={Link}
                href={item.href}
                fontWeight="semibold"
                color="gray.700"
                _hover={{ color: "green.500" }}
                onClick={onClose}
              >
                {item.label}
              </ChakraLink>
            ))}
            <Button as={Link} href="/contact" colorScheme="green" w="full" onClick={onClose}>
              Get Started
            </Button>
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}
