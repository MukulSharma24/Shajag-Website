"use client";

import {
    Box,
    Flex,
    HStack,
    IconButton,
    Button,
    useDisclosure,
    Stack,
    Link as ChakraLink,
    VStack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Link from "next/link";
import Image from "next/image";



// Increased logo sizes for a more prominent fit
const LOGO_ICON_SIZES = { base: 90, sm: 105, md: 120, lg: 135 };

const LOGO_MAIN_TEXT = { base: "1.75rem", sm: "2rem", md: "2.25rem", lg: "2.5rem" };
const LOGO_SUB_TEXT = { base: "0.9rem", sm: "1rem", md: "1.1rem", lg: "1.2rem" };


const navItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/partners", label: "Partners" },
];

export default function Header() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box
            as="header"
            w="100%"
            bg="white"
            boxShadow="sm"
            position="fixed"
            zIndex={10}
            minH="auto"               // Remove unnecessary min-height
            h={{ base: "60px", md: "68px" }}  // Set explicit shorter height for header
        >
            <Flex
                align="center"
                justify="space-between"
                maxW="1400px"
                mx="auto"
                px={{ base: 4, md: 6 }}
                h={{ base: "60px", md: "72px" }}
                w="100%"
            >
                {/* LOGO SECTION */}
                <Box
                    as={Link}
                    href="/"
                    display="flex"
                    alignItems="center"
                    flex="0 0 auto"
                    mr={{ base: 2, md: 4 }}
                    lineHeight={0}
                >
                    <Box
                        h="60px"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        overflow="visible"
                    >
                        <Image
                            src="/Shajag.svg"
                            alt="Shajag Logo"
                            width={200}
                            height={60}
                            priority
                            style={{
                                objectFit: "contain",
                                transform: "scale(1.75)",          // Scale up 3.5x!
                                transformOrigin: "left center",
                                marginLeft: "40px",               // Adjust spacing after scale
                                display: "block"
                            }}
                        />
                    </Box>
                </Box>


                {/* NAVIGATION */}
                <HStack
                    as="nav"
                    spacing={{ base: 3, md: 6 }}
                    align="center"
                    flex="1"
                    justify="center"
                    display={{ base: "none", md: "flex" }}
                    minW="0"
                >
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
                </HStack>

                {/* RIGHT BUTTONS */}
                <Flex
                    align="center"
                    justify="flex-end"
                    gap={3}
                    flex="0 0 auto"
                >
                    <Box display={{ base: "none", md: "block" }}>
                        <Button as={Link} href="/contact" colorScheme="green" size="md">
                            Contact US
                        </Button>
                    </Box>
                    <IconButton
                        size="md"
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label="Open Menu"
                        display={{ md: "none" }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                </Flex>
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
