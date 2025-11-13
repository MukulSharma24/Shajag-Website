"use client";

import NextLink from "next/link";
import {
    Box,
    Container,
    Grid,
    GridItem,
    Text,
    VStack,
    HStack,
    Link,
    Divider,
    Icon,
    Heading,
    Button,
} from "@chakra-ui/react";
import {
    Facebook,
    Twitter,
    Linkedin,
    Instagram,
    Mail,
    Phone,
    MapPin,
    ArrowRight,
    Send,
} from "lucide-react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionLink = motion(Link);

const Footer = () => {
    const socialLinks = [
        { icon: Facebook, href: "#", label: "Facebook", color: "#1877F2" },
        { icon: Twitter, href: "#", label: "Twitter", color: "#1DA1F2" },
        { icon: Linkedin, href: "https://www.linkedin.com/company/shajag-systems-and-services/", label: "LinkedIn", color: "#0A66C2" },
        { icon: Instagram, href: "#", label: "Instagram", color: "#E4405F" },
    ];

    const serviceLinks = [
        { href: "/services", label: "Data Visualization" },
        { href: "/services", label: "Cloud Infrastructure" },
        { href: "/services", label: "IoT Solutions" },
        { href: "/services", label: "Digital Marketing" },
        { href: "/services", label: "AI & Analytics" },
    ];

    const industryLinks = [
        { href: "/services", label: "Healthcare" },
        { href: "/services", label: "Finance" },
        { href: "/services", label: "Manufacturing" },
        { href: "/services", label: "Retail" },
        { href: "/services", label: "Education" },
    ];

    return (
        <Box as="footer" bg="gray.900" color="white" position="relative" overflow="hidden">
            {/* Animated Background Gradient */}
            <Box
                position="absolute"
                top={0}
                left={0}
                right={0}
                bottom={0}
                bgGradient="radial-gradient(circle at 20% 0%, rgba(200, 90, 23, 0.1) 0%, transparent 50%)"
                opacity={0.5}
            />

            {/* Animated Dots Pattern */}
            <Box
                position="absolute"
                top={0}
                left={0}
                right={0}
                bottom={0}
                opacity={0.03}
                backgroundImage="radial-gradient(circle at 20% 50%, white 1px, transparent 1px)"
                backgroundSize="40px 40px"
                sx={{
                    animation: "drift 20s ease-in-out infinite",
                }}
            />

            {/* Main Footer Content */}
            <Container maxW="7xl" pt={20} pb={8} position="relative">
                <Grid
                    templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "2fr 1fr 1fr 1.5fr" }}
                    gap={{ base: 12, lg: 12 }}
                    mb={16}
                >
                    {/* Company Info */}
                    <GridItem>
                        <MotionBox
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <VStack align="start" spacing={6}>
                                {/* Logo/Brand */}
                                <Box>
                                    <Heading
                                        size="lg"
                                        bgGradient="linear(to-r, orange.400, orange.600)"
                                        bgClip="text"
                                        fontWeight="bold"
                                        mb={2}
                                        letterSpacing="tight"
                                    >
                                        Shajag Systems
                                    </Heading>
                                    <Text
                                        fontSize="sm"
                                        color="orange.400"
                                        fontWeight="600"
                                        letterSpacing="wider"
                                        textTransform="uppercase"
                                    >
                                        And Services
                                    </Text>
                                </Box>

                                <Text color="gray.400" lineHeight="tall" maxW="380px" fontSize="sm">
                                    Empowering organizations with cutting-edge technology solutions that
                                    drive growth, efficiency, and competitive advantage in the digital era.
                                </Text>

                                {/* Enhanced Newsletter */}
                                <Box w="full" maxW="400px">
                                    <HStack mb={3} spacing={2}>
                                        <Icon as={Send} boxSize={4} color="orange.400" />
                                        <Text fontSize="sm" fontWeight="700" color="white">
                                            Subscribe to Newsletter
                                        </Text>
                                    </HStack>
                                    <Text fontSize="xs" color="gray.500" mb={3}>
                                        Get the latest updates and offers
                                    </Text>
                                    <HStack
                                        bg="whiteAlpha.50"
                                        p={1}
                                        rounded="xl"
                                        border="1px solid"
                                        borderColor="whiteAlpha.100"
                                    >
                                        <Box
                                            as="input"
                                            type="email"
                                            placeholder="your@email.com"
                                            flex={1}
                                            px={4}
                                            py={3}
                                            bg="transparent"
                                            border="none"
                                            color="white"
                                            fontSize="sm"
                                            _placeholder={{ color: "gray.500" }}
                                            _focus={{
                                                outline: "none",
                                            }}
                                        />
                                        <Button
                                            bgGradient="linear(to-r, orange.500, orange.600)"
                                            color="white"
                                            px={6}
                                            h="44px"
                                            rounded="lg"
                                            fontWeight="600"
                                            fontSize="sm"
                                            _hover={{
                                                bgGradient: "linear(to-r, orange.600, orange.700)",
                                                transform: "translateY(-2px)",
                                                boxShadow: "0 4px 12px rgba(251, 146, 60, 0.4)",
                                            }}
                                            _active={{
                                                transform: "translateY(0)",
                                            }}
                                            transition="all 0.3s"
                                        >
                                            Subscribe
                                        </Button>
                                    </HStack>
                                </Box>

                                {/* Enhanced Social Links */}
                                <Box pt={2}>
                                    <Text fontSize="xs" color="gray.500" mb={3} fontWeight="600">
                                        FOLLOW US
                                    </Text>
                                    <HStack spacing={3}>
                                        {socialLinks.map(({ icon, href, label, color }) => (
                                            <MotionLink
                                                key={label}
                                                href={href}
                                                aria-label={label}
                                                display="flex"
                                                alignItems="center"
                                                justifyContent="center"
                                                w="44px"
                                                h="44px"
                                                rounded="xl"
                                                bg="whiteAlpha.100"
                                                color="gray.400"
                                                border="1px solid"
                                                borderColor="whiteAlpha.100"
                                                whileHover={{
                                                    y: -4,
                                                    scale: 1.05,
                                                }}
                                                whileTap={{ scale: 0.95 }}
                                                _hover={{
                                                    bg: color,
                                                    color: "white",
                                                    borderColor: color,
                                                    boxShadow: `0 8px 20px ${color}40`,
                                                }}
                                                style={{ transition: "all 0.3s" }}
                                            >
                                                <Icon as={icon} boxSize={5} />
                                            </MotionLink>
                                        ))}
                                    </HStack>
                                </Box>
                            </VStack>
                        </MotionBox>
                    </GridItem>

                    {/* Services */}
                    <GridItem>
                        <MotionBox
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <VStack align="start" spacing={5}>
                                <Box>
                                    <Heading size="sm" color="white" mb={1}>
                                        Services
                                    </Heading>
                                    <Box w="40px" h="2px" bg="orange.500" rounded="full" />
                                </Box>
                                <VStack align="start" spacing={3} w="full">
                                    {serviceLinks.map((link, index) => (
                                        <MotionLink
                                            key={link.label}
                                            as={NextLink}
                                            href={link.href}
                                            color="gray.400"
                                            fontSize="sm"
                                            position="relative"
                                            display="flex"
                                            alignItems="center"
                                            w="full"
                                            py={1}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: index * 0.05 }}
                                            whileHover={{ x: 8 }}
                                            _hover={{
                                                color: "orange.400",
                                            }}
                                            _before={{
                                                content: '""',
                                                position: "absolute",
                                                left: 0,
                                                width: "0",
                                                height: "1px",
                                                bg: "orange.500",
                                                transition: "width 0.3s",
                                            }}
                                            sx={{
                                                "&:hover::before": {
                                                    width: "20px",
                                                }
                                            }}
                                        >
                                            <Box
                                                w="4px"
                                                h="4px"
                                                bg="orange.500"
                                                rounded="full"
                                                mr={3}
                                                opacity={0}
                                                sx={{
                                                    "a:hover &": {
                                                        opacity: 1,
                                                    }
                                                }}
                                                transition="opacity 0.3s"
                                            />
                                            {link.label}
                                        </MotionLink>
                                    ))}
                                </VStack>
                            </VStack>
                        </MotionBox>
                    </GridItem>

                    {/* Industries */}
                    <GridItem>
                        <MotionBox
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <VStack align="start" spacing={5}>
                                <Box>
                                    <Heading size="sm" color="white" mb={1}>
                                        Industries
                                    </Heading>
                                    <Box w="40px" h="2px" bg="orange.500" rounded="full" />
                                </Box>
                                <VStack align="start" spacing={3} w="full">
                                    {industryLinks.map((link, index) => (
                                        <MotionLink
                                            key={link.label}
                                            as={NextLink}
                                            href={link.href}
                                            color="gray.400"
                                            fontSize="sm"
                                            position="relative"
                                            display="flex"
                                            alignItems="center"
                                            w="full"
                                            py={1}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: index * 0.05 }}
                                            whileHover={{ x: 8 }}
                                            _hover={{
                                                color: "orange.400",
                                            }}
                                            _before={{
                                                content: '""',
                                                position: "absolute",
                                                left: 0,
                                                width: "0",
                                                height: "1px",
                                                bg: "orange.500",
                                                transition: "width 0.3s",
                                            }}
                                            sx={{
                                                "&:hover::before": {
                                                    width: "20px",
                                                }
                                            }}
                                        >
                                            <Box
                                                w="4px"
                                                h="4px"
                                                bg="orange.500"
                                                rounded="full"
                                                mr={3}
                                                opacity={0}
                                                sx={{
                                                    "a:hover &": {
                                                        opacity: 1,
                                                    }
                                                }}
                                                transition="opacity 0.3s"
                                            />
                                            {link.label}
                                        </MotionLink>
                                    ))}
                                </VStack>
                            </VStack>
                        </MotionBox>
                    </GridItem>

                    {/* Contact */}
                    <GridItem>
                        <MotionBox
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <VStack align="start" spacing={5}>
                                <Box>
                                    <Heading size="sm" color="white" mb={1}>
                                        Contact Us
                                    </Heading>
                                    <Box w="40px" h="2px" bg="orange.500" rounded="full" />
                                </Box>

                                <VStack align="start" spacing={4} w="full">
                                    {/* Email */}
                                    <MotionBox
                                        whileHover={{ x: 4 }}
                                        transition={{ duration: 0.2 }}
                                        w="full"
                                    >
                                        <HStack
                                            align="start"
                                            spacing={3}
                                            p={4}
                                            rounded="xl"
                                            bg="whiteAlpha.50"
                                            border="1px solid"
                                            borderColor="whiteAlpha.100"
                                            _hover={{
                                                bg: "whiteAlpha.100",
                                                borderColor: "orange.500",
                                            }}
                                            transition="all 0.3s"
                                        >
                                            <Box
                                                p={2}
                                                bg="orange.500"
                                                rounded="lg"
                                                display="flex"
                                                alignItems="center"
                                                justifyContent="center"
                                            >
                                                <Icon as={Mail} boxSize={4} color="white" />
                                            </Box>
                                            <VStack align="start" spacing={0} flex={1}>
                                                <Text fontSize="xs" color="gray.500" fontWeight="600">
                                                    EMAIL
                                                </Text>
                                                <Link
                                                    href="mailto:hello@shajag.com"
                                                    color="gray.300"
                                                    fontSize="sm"
                                                    fontWeight="500"
                                                    _hover={{ color: "white" }}
                                                >
                                                    hello@shajag.com
                                                </Link>
                                            </VStack>
                                        </HStack>
                                    </MotionBox>

                                    {/* Phone */}
                                    <MotionBox
                                        whileHover={{ x: 4 }}
                                        transition={{ duration: 0.2 }}
                                        w="full"
                                    >
                                        <HStack
                                            align="start"
                                            spacing={3}
                                            p={4}
                                            rounded="xl"
                                            bg="whiteAlpha.50"
                                            border="1px solid"
                                            borderColor="whiteAlpha.100"
                                            _hover={{
                                                bg: "whiteAlpha.100",
                                                borderColor: "orange.500",
                                            }}
                                            transition="all 0.3s"
                                        >
                                            <Box
                                                p={2}
                                                bg="orange.500"
                                                rounded="lg"
                                                display="flex"
                                                alignItems="center"
                                                justifyContent="center"
                                            >
                                                <Icon as={Phone} boxSize={4} color="white" />
                                            </Box>
                                            <VStack align="start" spacing={0} flex={1}>
                                                <Text fontSize="xs" color="gray.500" fontWeight="600">
                                                    PHONE
                                                </Text>
                                                <Link
                                                    href="tel:+919812451305"
                                                    color="gray.300"
                                                    fontSize="sm"
                                                    fontWeight="500"
                                                    _hover={{ color: "white" }}
                                                >
                                                    +91 98124 51305
                                                </Link>
                                            </VStack>
                                        </HStack>
                                    </MotionBox>

                                    {/* Address */}
                                    <MotionBox
                                        whileHover={{ x: 4 }}
                                        transition={{ duration: 0.2 }}
                                        w="full"
                                    >
                                        <HStack
                                            align="start"
                                            spacing={3}
                                            p={4}
                                            rounded="xl"
                                            bg="whiteAlpha.50"
                                            border="1px solid"
                                            borderColor="whiteAlpha.100"
                                            _hover={{
                                                bg: "whiteAlpha.100",
                                                borderColor: "orange.500",
                                            }}
                                            transition="all 0.3s"
                                        >
                                            <Box
                                                p={2}
                                                bg="orange.500"
                                                rounded="lg"
                                                display="flex"
                                                alignItems="center"
                                                justifyContent="center"
                                                flexShrink={0}
                                            >
                                                <Icon as={MapPin} boxSize={4} color="white" />
                                            </Box>
                                            <VStack align="start" spacing={0} flex={1}>
                                                <Text fontSize="xs" color="gray.500" fontWeight="600">
                                                    LOCATION
                                                </Text>
                                                <Text color="gray.300" fontSize="sm" lineHeight="tall" fontWeight="500">
                                                    NDM - 1, NSP, New Delhi - 110034
                                                    <br />
                                                    Spaze Tower, Gurugram
                                                </Text>
                                            </VStack>
                                        </HStack>
                                    </MotionBox>
                                </VStack>
                            </VStack>
                        </MotionBox>
                    </GridItem>
                </Grid>

                {/* Enhanced Divider */}
                <Box position="relative" my={12}>
                    <Divider borderColor="whiteAlpha.200" />
                    <Box
                        position="absolute"
                        top="50%"
                        left="50%"
                        transform="translate(-50%, -50%)"
                        px={4}
                        bg="gray.900"
                    >
                        <Box
                            w="40px"
                            h="2px"
                            bgGradient="linear(to-r, transparent, orange.500, transparent)"
                        />
                    </Box>
                </Box>

                {/* Enhanced Bottom Bar */}
                <MotionBox
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <HStack
                        justify="space-between"
                        flexWrap="wrap"
                        gap={4}
                        fontSize="sm"
                        color="gray.500"
                    >
                        <HStack spacing={2}>
                            <Text>
                                &copy; {new Date().getFullYear()} Shajag Systems And Services.
                            </Text>
                            <Text color="gray.600">|</Text>
                            <Text color="gray.600">

                            </Text>
                            <Text color="orange.500">♥</Text>
                        </HStack>

                        <HStack spacing={6} flexWrap="wrap">
                            <Link
                                href="/privacy"
                                color="gray.500"
                                fontSize="sm"
                                fontWeight="500"
                                _hover={{ color: "orange.400" }}
                                transition="color 0.2s"
                            >
                                Privacy Policy
                            </Link>
                            <Text color="gray.700">•</Text>
                            <Link
                                href="/terms"
                                color="gray.500"
                                fontSize="sm"
                                fontWeight="500"
                                _hover={{ color: "orange.400" }}
                                transition="color 0.2s"
                            >
                                Terms of Service
                            </Link>
                            <Text color="gray.700">•</Text>
                            <Link
                                href="/cookies"
                                color="gray.500"
                                fontSize="sm"
                                fontWeight="500"
                                _hover={{ color: "orange.400" }}
                                transition="color 0.2s"
                            >
                                Cookie Policy
                            </Link>
                        </HStack>
                    </HStack>
                </MotionBox>
            </Container>

            <style jsx global>{`
                @keyframes drift {
                    0%, 100% {
                        transform: translate(0, 0);
                    }
                    50% {
                        transform: translate(10px, 10px);
                    }
                }
            `}</style>
        </Box>
    );
};

export default Footer;