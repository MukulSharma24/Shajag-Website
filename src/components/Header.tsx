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
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/partners", label: "Partners" },
];

export default function Header() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <style jsx global>{`
                @keyframes headerFadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(-100%);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes navItemAppear {
                    from {
                        opacity: 0;
                        transform: translateY(-15px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes shine {
                    0% {
                        left: -100%;
                    }
                    100% {
                        left: 200%;
                    }
                }

                @keyframes pulse {
                    0%, 100% {
                        opacity: 1;
                    }
                    50% {
                        opacity: 0.7;
                    }
                }

                @keyframes slideUp {
                    from {
                        transform: translateY(4px);
                        opacity: 0;
                    }
                    to {
                        transform: translateY(0);
                        opacity: 1;
                    }
                }

                @keyframes glow {
                    0%, 100% {
                        box-shadow: 0 0 5px rgba(200, 90, 23, 0.2);
                    }
                    50% {
                        box-shadow: 0 0 20px rgba(200, 90, 23, 0.4);
                    }
                }
            `}</style>

            <Box
                as="header"
                w="100%"
                position="fixed"
                top={0}
                zIndex={1000}
                sx={{
                    animation: "headerFadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
            >
                <Box
                    position="relative"
                    bg={scrolled
                        ? "rgba(255, 255, 255, 0.92)"
                        : "rgba(255, 255, 255, 0.98)"
                    }
                    backdropFilter={scrolled ? "blur(20px) saturate(180%)" : "blur(12px)"}
                    borderBottom="1px solid"
                    borderColor={scrolled ? "gray.200" : "gray.100"}
                    boxShadow={scrolled
                        ? "0 8px 32px rgba(0, 0, 0, 0.08)"
                        : "0 2px 8px rgba(0, 0, 0, 0.04)"
                    }
                    transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
                    sx={{
                        WebkitBackdropFilter: scrolled ? "blur(20px) saturate(180%)" : "blur(12px)",
                    }}
                >
                    <Flex
                        align="center"
                        justify="space-between"
                        maxW="1400px"
                        mx="auto"
                        px={{ base: 5, md: 8, lg: 12 }}
                        h={{ base: "75px", md: "85px" }}
                    >
                        {/* Logo */}
                        <Link href="/" style={{ display: "flex", alignItems: "center" }}>
                            <Box
                                position="relative"
                                h={{ base: "120px", sm: "130px", md: "145px", lg: "155px" }}
                                w={{ base: "250px", sm: "270px", md: "300px", lg: "320px" }}
                                sx={{
                                    transition: "all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
                                    filter: "drop-shadow(0 2px 8px rgba(200, 90, 23, 0))",
                                    "&:hover": {
                                        transform: "scale(1.03)",
                                        filter: "drop-shadow(0 4px 16px rgba(200, 90, 23, 0.15))",
                                    }
                                }}
                            >
                                <Image
                                    src="/Shajag.svg"
                                    alt="Shajag Systems and Services"
                                    fill
                                    priority
                                    sizes="(max-width: 768px) 250px, (max-width: 1024px) 300px, 320px"
                                    style={{ objectFit: "contain" }}
                                />
                            </Box>
                        </Link>

                        {/* Desktop Navigation */}
                        <HStack
                            as="nav"
                            spacing={{ md: 2, lg: 4 }}
                            align="center"
                            flex="1"
                            justify="center"
                            display={{ base: "none", md: "flex" }}
                            px={6}
                        >
                            {navItems.map((item, index) => {
                                const isActive = pathname === item.href;
                                return (
                                    <Box
                                        key={item.href}
                                        sx={{
                                            animation: `navItemAppear 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${0.1 + index * 0.05}s both`,
                                        }}
                                    >
                                        <ChakraLink
                                            as={Link}
                                            href={item.href}
                                            position="relative"
                                            display="flex"
                                            alignItems="center"
                                            px={{ md: 4, lg: 5 }}
                                            py={2.5}
                                            fontSize={{ md: "15px", lg: "15.5px" }}
                                            fontWeight={isActive ? "600" : "500"}
                                            color={isActive ? "#C85A17" : "gray.700"}
                                            rounded="full"
                                            bg={isActive ? "orange.50" : "transparent"}
                                            letterSpacing="0.2px"
                                            sx={{
                                                transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
                                                "&::before": {
                                                    content: '""',
                                                    position: "absolute",
                                                    inset: 0,
                                                    borderRadius: "full",
                                                    background: "linear-gradient(135deg, rgba(200, 90, 23, 0.1), rgba(200, 90, 23, 0.05))",
                                                    opacity: 0,
                                                    transition: "opacity 0.4s ease",
                                                    zIndex: -1,
                                                },
                                                "&::after": {
                                                    content: '""',
                                                    position: "absolute",
                                                    bottom: "4px",
                                                    left: "50%",
                                                    transform: "translateX(-50%) scaleX(0)",
                                                    transformOrigin: "center",
                                                    width: "60%",
                                                    height: "3px",
                                                    background: "linear-gradient(90deg, transparent, #C85A17, transparent)",
                                                    borderRadius: "full",
                                                    transition: "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
                                                    boxShadow: "0 0 8px rgba(200, 90, 23, 0.4)",
                                                },
                                                ...(isActive && {
                                                    "&::after": {
                                                        transform: "translateX(-50%) scaleX(1)",
                                                    },
                                                }),
                                                "&:hover": {
                                                    color: "#C85A17",
                                                    bg: "orange.50",
                                                    transform: "translateY(-3px) scale(1.02)",
                                                    boxShadow: "0 4px 12px rgba(200, 90, 23, 0.15)",
                                                },
                                                "&:hover::before": {
                                                    opacity: 1,
                                                },
                                                "&:hover::after": {
                                                    transform: "translateX(-50%) scaleX(1)",
                                                },
                                                "&:active": {
                                                    transform: "translateY(-1px) scale(0.98)",
                                                }
                                            }}
                                        >
                                            <Box
                                                as="span"
                                                sx={{
                                                    display: "inline-block",
                                                    transition: "all 0.3s ease",
                                                }}
                                                _groupHover={{
                                                    animation: "slideUp 0.3s ease",
                                                }}
                                            >
                                                {item.label}
                                            </Box>
                                        </ChakraLink>
                                    </Box>
                                );
                            })}
                        </HStack>

                        {/* CTA Buttons */}
                        <Flex align="center" gap={3}>
                            <Box
                                display={{ base: "none", md: "block" }}
                                sx={{
                                    animation: "navItemAppear 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both",
                                }}
                            >
                                <Button
                                    as={Link}
                                    href="/contact"
                                    size="md"
                                    h={{ md: "44px", lg: "46px" }}
                                    px={{ md: 6, lg: 8 }}
                                    position="relative"
                                    overflow="hidden"
                                    bgGradient="linear(to-r, #C85A17, #B8471A)"
                                    color="white"
                                    fontWeight="600"
                                    fontSize={{ md: "14.5px", lg: "15px" }}
                                    rounded="full"
                                    boxShadow="0 4px 14px rgba(200, 90, 23, 0.3)"
                                    _before={{
                                        content: '""',
                                        position: "absolute",
                                        top: 0,
                                        left: "-100%",
                                        width: "50%",
                                        height: "100%",
                                        background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                                        animation: "shine 3s infinite",
                                    }}
                                    _hover={{
                                        bgGradient: "linear(to-r, #B8471A, #A63C1A)",
                                        transform: "translateY(-2px)",
                                        boxShadow: "0 6px 20px rgba(200, 90, 23, 0.4)",
                                    }}
                                    _active={{
                                        transform: "translateY(0)",
                                    }}
                                    transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                                >
                                    Contact Us
                                </Button>
                            </Box>

                            {/* Mobile Menu Button */}
                            <Box
                                display={{ md: "none" }}
                                sx={{
                                    animation: "navItemAppear 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both",
                                }}
                            >
                                <IconButton
                                    size="md"
                                    icon={isOpen ? <CloseIcon boxSize={3} /> : <HamburgerIcon boxSize={5} />}
                                    aria-label="Toggle Navigation"
                                    onClick={isOpen ? onClose : onOpen}
                                    variant="ghost"
                                    rounded="full"
                                    color={isOpen ? "#C85A17" : "gray.700"}
                                    bg={isOpen ? "orange.50" : "transparent"}
                                    _hover={{
                                        bg: "orange.50",
                                        color: "#C85A17",
                                        transform: "scale(1.05)",
                                    }}
                                    transition="all 0.3s ease"
                                />
                            </Box>
                        </Flex>
                    </Flex>
                </Box>

                {/* Mobile Menu */}
                {isOpen && (
                    <Box
                        position="absolute"
                        top="100%"
                        left={0}
                        right={0}
                        display={{ md: "none" }}
                    >
                        <Box
                            mx={4}
                            mt={2}
                            mb={4}
                            bg="rgba(255, 255, 255, 0.98)"
                            backdropFilter="blur(20px)"
                            borderRadius="2xl"
                            overflow="hidden"
                            boxShadow="0 20px 50px rgba(0, 0, 0, 0.15)"
                            border="1px solid"
                            borderColor="gray.100"
                        >
                            <Stack spacing={1} p={3}>
                                {navItems.map((item, index) => {
                                    const isActive = pathname === item.href;
                                    return (
                                        <ChakraLink
                                            key={item.href}
                                            as={Link}
                                            href={item.href}
                                            display="flex"
                                            alignItems="center"
                                            fontWeight={isActive ? "600" : "500"}
                                            fontSize="15px"
                                            color={isActive ? "#C85A17" : "gray.700"}
                                            px={4}
                                            py={3}
                                            rounded="xl"
                                            bg={isActive ? "orange.50" : "transparent"}
                                            onClick={onClose}
                                            sx={{
                                                transition: "all 0.2s ease",
                                                "&:hover": {
                                                    bg: "orange.50",
                                                    color: "#C85A17",
                                                    transform: "translateX(4px)",
                                                }
                                            }}
                                        >
                                            {item.label}
                                        </ChakraLink>
                                    );
                                })}

                                <Box pt={2}>
                                    <Button
                                        as={Link}
                                        href="/contact"
                                        w="full"
                                        h="46px"
                                        bgGradient="linear(to-r, #C85A17, #B8471A)"
                                        color="white"
                                        fontWeight="600"
                                        fontSize="15px"
                                        rounded="xl"
                                        onClick={onClose}
                                        boxShadow="0 4px 14px rgba(200, 90, 23, 0.3)"
                                        _hover={{
                                            bgGradient: "linear(to-r, #B8471A, #A63C1A)",
                                            transform: "translateY(-2px)",
                                            boxShadow: "0 6px 20px rgba(200, 90, 23, 0.4)",
                                        }}
                                        transition="all 0.3s ease"
                                    >
                                        Contact Us
                                    </Button>
                                </Box>
                            </Stack>
                        </Box>
                    </Box>
                )}
            </Box>
        </>
    );
}