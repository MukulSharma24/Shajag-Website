"use client"

import {
    Box,
    Container,
    Heading,
    Text,
    SimpleGrid,
    VStack,
    HStack,
    Avatar,
    Icon,
    Badge,
    Divider,
} from "@chakra-ui/react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const testimonials = [
    {
        text: "Shajag transformed our data infrastructure completely. Their team's expertise in cloud migration helped us reduce costs by 40% while improving performance significantly.",
        author: "Sara Motwani",
        title: "CTO",
        company: "Global Manufacturing Inc.",
        image: "/api/placeholder/300/300",
        color: "orange.500",
    },
    {
        text: "The IoT solution implemented by Shajag has revolutionized our patient monitoring system. Real-time data insights have improved our response times dramatically.",
        author: "Dr. Manan",
        title: "Head of Digital Health",
        company: "Healthcare Solutions Ltd.",
        image: "/api/placeholder/300/300",
        color: "orange.400",
    },
    {
        text: "Their Industry 4.0 solutions have transformed our production line. Predictive maintenance has reduced downtime by 50% and saved us millions in potential losses.",
        author: "Raghav Sharma",
        title: "VP of Operations",
        company: "Advanced Manufacturing Corp.",
        image: "/api/placeholder/300/300",
        color: "orange.600",
    }
];

export default function Testimonials() {
    return (
        <Box pt={{ base: 20, md: 24 }} bg="white">
            {/* Hero Section with Curve */}
            <Box
                bg="orange.500"
                color="white"
                py={{ base: 16, md: 20 }}
                pb={{ base: 24, md: 28 }}
                position="relative"
                overflow="hidden"
                _after={{
                    content: '""',
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "80px",
                    background: "gray.50",
                    clipPath: "ellipse(50% 100% at 50% 100%)",
                }}
            >
                {/* Background Pattern */}
                <Box
                    position="absolute"
                    top="0"
                    left="0"
                    right="0"
                    bottom="0"
                    opacity={0.1}
                    backgroundImage="radial-gradient(circle at 20% 50%, white 2px, transparent 2px)"
                    backgroundSize="50px 50px"
                />

                {/* Quote Icon Background */}
                <Box
                    position="absolute"
                    top="20%"
                    left="10%"
                    opacity={0.1}
                >
                    <Icon as={FaQuoteLeft} boxSize={40} />
                </Box>

                <Container maxW="6xl" position="relative" zIndex={1}>
                    <MotionBox
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        textAlign="center"
                    >
                        <Badge
                            bg="whiteAlpha.300"
                            color="white"
                            fontSize="sm"
                            px={4}
                            py={2}
                            rounded="full"
                            textTransform="uppercase"
                            mb={4}
                            fontWeight="bold"
                        >
                            Client Success Stories
                        </Badge>

                        <Heading
                            size="2xl"
                            mb={4}
                            fontWeight="bold"
                            fontSize={{ base: "3xl", md: "5xl" }}
                        >
                            What Our Clients Say
                        </Heading>

                        <Text
                            fontSize={{ base: "lg", md: "xl" }}
                            opacity={0.95}
                            maxW="3xl"
                            mx="auto"
                        >
                            Don't just take our word for it. See how we've helped clients transform their business with exceptional technology and service.
                        </Text>
                    </MotionBox>
                </Container>
            </Box>

            {/* Testimonials Grid */}
            <Box bg="gray.50" py={{ base: 12, md: 20 }} pt={{ base: 20, md: 28 }}>
                <Container maxW="7xl">
                    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
                        {testimonials.map((t, idx) => (
                            <MotionBox
                                key={idx}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{
                                    duration: 0.6,
                                    delay: idx * 0.15,
                                    ease: [0.6, -0.05, 0.01, 0.99]
                                }}
                            >
                                <Box
                                    bg="white"
                                    borderRadius="3xl"
                                    boxShadow="lg"
                                    p={8}
                                    h="100%"
                                    position="relative"
                                    overflow="hidden"
                                    border="1px solid"
                                    borderColor="gray.100"
                                    _hover={{
                                        transform: "translateY(-12px) scale(1.02)",
                                        boxShadow: "2xl",
                                        borderColor: "orange.300",
                                    }}
                                    transition="all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)"
                                >
                                    {/* Gradient Top Bar */}
                                    <Box
                                        position="absolute"
                                        top={0}
                                        left={0}
                                        right={0}
                                        h="6px"
                                        bgGradient="linear(to-r, orange.400, orange.500, orange.600)"
                                        opacity={0.8}
                                    />

                                    {/* Decorative Circle Pattern */}
                                    <Box
                                        position="absolute"
                                        top="-40px"
                                        right="-40px"
                                        w="120px"
                                        h="120px"
                                        borderRadius="full"
                                        bgGradient={`linear(135deg, ${t.color}, orange.300)`}
                                        opacity={0.08}
                                    />

                                    {/* Quote Icon Background */}
                                    <Box
                                        position="absolute"
                                        top={8}
                                        left={8}
                                        opacity={0.06}
                                    >
                                        <Icon as={FaQuoteLeft} boxSize={20} color="orange.400" />
                                    </Box>

                                    <VStack spacing={6} align="stretch" h="100%">
                                        {/* Quote Text */}
                                        <Box position="relative" zIndex={1} flex={1}>
                                            <Text
                                                fontSize="lg"
                                                lineHeight="1.8"
                                                color="gray.700"
                                                fontWeight="400"
                                            >
                                                "{t.text}"
                                            </Text>
                                        </Box>

                                        {/* Star Rating */}
                                        <HStack spacing={1} justify="center">
                                            {[...Array(5)].map((_, i) => (
                                                <MotionBox
                                                    key={i}
                                                    as={motion.div}
                                                    initial={{ opacity: 0, scale: 0 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{
                                                        duration: 0.3,
                                                        delay: i * 0.1 + idx * 0.05,
                                                    }}
                                                    whileHover={{ scale: 1.3 }}
                                                >
                                                    <Icon
                                                        as={FaStar}
                                                        color="yellow.400"
                                                        boxSize={5}
                                                        filter="drop-shadow(0 1px 2px rgba(0,0,0,0.1))"
                                                    />
                                                </MotionBox>
                                            ))}
                                        </HStack>

                                        {/* Divider */}
                                        <Divider
                                            borderColor="orange.200"
                                            borderWidth="1px"
                                            opacity={0.4}
                                        />

                                        {/* Author Section */}
                                        <HStack spacing={4} mt="auto">
                                            {/* Avatar with Glow */}
                                            <MotionBox
                                                position="relative"
                                                whileHover={{ scale: 1.1, rotate: 5 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <Box
                                                    position="absolute"
                                                    inset="-4px"
                                                    borderRadius="full"
                                                    bgGradient={`linear(135deg, ${t.color}, orange.300)`}
                                                    opacity={0.2}
                                                    blur="md"
                                                />
                                                <Avatar
                                                    name={t.author}
                                                    src={t.image}
                                                    size="lg"
                                                    border="3px solid white"
                                                    boxShadow="0 4px 12px rgba(0,0,0,0.1)"
                                                />
                                            </MotionBox>

                                            {/* Author Info */}
                                            <VStack align="start" spacing={1} flex={1}>
                                                <Text
                                                    fontWeight="700"
                                                    fontSize="lg"
                                                    color="gray.900"
                                                    letterSpacing="-0.5px"
                                                >
                                                    {t.author}
                                                </Text>
                                                <Text
                                                    fontSize="sm"
                                                    color="orange.600"
                                                    fontWeight="600"
                                                >
                                                    {t.title}
                                                </Text>
                                                <Text
                                                    fontSize="xs"
                                                    color="gray.600"
                                                    fontWeight="500"
                                                >
                                                    {t.company}
                                                </Text>
                                            </VStack>
                                        </HStack>
                                    </VStack>
                                </Box>
                            </MotionBox>
                        ))}
                    </SimpleGrid>
                </Container>
            </Box>

            {/* CTA Section */}
            <Box
                bgGradient="linear(135deg, orange.500, orange.600)"
                py={{ base: 16, md: 20 }}
                position="relative"
                overflow="hidden"
            >
                {/* Background Pattern */}
                <Box
                    position="absolute"
                    top="0"
                    left="0"
                    right="0"
                    bottom="0"
                    opacity={0.1}
                    backgroundImage="radial-gradient(circle at 20% 50%, white 2px, transparent 2px)"
                    backgroundSize="50px 50px"
                />

                <Container maxW="4xl" position="relative" textAlign="center">
                    <MotionBox
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <VStack spacing={6}>
                            <Heading size="xl" color="white">
                                Ready to Join Our Success Stories?
                            </Heading>
                            <Text fontSize="lg" color="whiteAlpha.900" maxW="2xl">
                                Let's work together to transform your business with innovative technology solutions
                            </Text>
                        </VStack>
                    </MotionBox>
                </Container>
            </Box>
        </Box>
    );
}