"use client";

import React from "react";
import {
    Box,
    Container,
    Heading,
    Text,
    VStack,
    HStack,
    SimpleGrid,
    Flex,
    Icon,
    Button,
    Divider,
    Badge,
} from "@chakra-ui/react";
import {
    MdSecurity,
    MdCheckCircle,
    MdAssessment,
    MdVisibility,
    MdIntegrationInstructions,
    MdVerifiedUser,
    MdTrendingUp,
    MdSpeed,
} from "react-icons/md";
import { Shield, Lock, Eye, CheckCircle2 } from "lucide-react";
import NextLink from "next/link";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

export default function CyberRiskManagement() {
    const coreServices = [
        {
            icon: MdSecurity,
            title: "Cybersecurity Risk Assessments",
            points: [
                "Comprehensive evaluation of security posture",
                "Identify threats across networks & cloud",
                "Risk scoring & prioritization",
                "Actionable insights & roadmap",
            ],
            benefit:
                "Enables proactive defense and strategic investment in cybersecurity.",
            color: "orange.500",
            gradient: "linear(135deg, orange.400, orange.600)",
        },
        {
            icon: MdAssessment,
            title: "Compliance Readiness",
            points: [
                "Gap analysis: ISO27001, HIPAA, GDPR, PCI-DSS, SOC 2",
                "Policy & procedure development",
                "Mock audits & readiness checks",
                "Continuous monitoring & reporting",
            ],
            benefit:
                "Ensures smooth audits, avoids penalties, and builds stakeholder trust.",
            color: "red.500",
            gradient: "linear(135deg, red.400, red.600)",
        },
        {
            icon: MdVisibility,
            title: "IT Audit",
            points: [
                "Review IT governance, policies, controls",
                "Assess data integrity & infrastructure",
                "Evaluate access controls & security",
                "Performance improvement recommendations",
            ],
            benefit:
                "Enhances IT reliability and ensures alignment with business goals.",
            color: "blue.500",
            gradient: "linear(135deg, blue.400, blue.600)",
        },
        {
            icon: MdIntegrationInstructions,
            title: "AI Risk Management",
            points: [
                "Identify AI system & automation risks",
                "Address bias, transparency & accountability",
                "Secure AI/ML pipelines",
                "Comply with AI governance frameworks",
            ],
            benefit:
                "Builds trustworthy AI systems that are safe, fair, and compliant.",
            color: "purple.500",
            gradient: "linear(135deg, purple.400, purple.600)",
        },
    ];

    const benefits = [
        {
            icon: MdVerifiedUser,
            title: "Certified Experts",
            desc: "CISSP, CISA, CEH professionals",
        },
        {
            icon: MdCheckCircle,
            title: "Proven Frameworks",
            desc: "Industry-standard methodologies",
        },
        {
            icon: MdTrendingUp,
            title: "End-to-End Solutions",
            desc: "Complete risk management",
        },
        {
            icon: MdSpeed,
            title: "Tailored Strategies",
            desc: "Industry-specific approaches",
        },
    ];

    return (
        <Box bg="white" pt={{ base: 20, md: 24 }}>
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
                    background: "white",
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

                {/* Shield Icon Background */}
                <Box
                    position="absolute"
                    top="50%"
                    right="10%"
                    transform="translateY(-50%)"
                    opacity={0.1}
                >
                    <Shield size={300} />
                </Box>

                <Container maxW="6xl" position="relative" zIndex={1}>
                    <MotionBox
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        textAlign="center"
                    >
                        <HStack justify="center" mb={4}>
                            <Icon as={Shield} boxSize={12} />
                            <Icon as={Lock} boxSize={10} />
                            <Icon as={Eye} boxSize={12} />
                        </HStack>

                        <Heading
                            fontSize={{ base: "3xl", md: "5xl" }}
                            mb={4}
                            fontWeight="bold"
                            lineHeight="shorter"
                        >
                            Cyber Risk Management Services
                        </Heading>

                        <Text
                            fontSize={{ base: "lg", md: "xl" }}
                            opacity={0.95}
                            maxW="3xl"
                            mx="auto"
                            lineHeight="tall"
                        >
                            Protecting your digital assets with comprehensive risk assessment and compliance solutions
                        </Text>
                    </MotionBox>
                </Container>
            </Box>

            {/* Why Choose Section */}
            <Container maxW="6xl" py={{ base: 12, md: 20 }}>
                <MotionBox
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <VStack spacing={4} textAlign="center" mb={8}>
                        <Badge
                            colorScheme="orange"
                            fontSize="sm"
                            px={3}
                            py={1}
                            rounded="full"
                            textTransform="uppercase"
                        >
                            Why Choose Us
                        </Badge>
                        <Heading size="xl">
                            Why Choose Shajag Systems and Services?
                        </Heading>
                    </VStack>

                    <Box
                        bg="gray.50"
                        p={{ base: 6, md: 10 }}
                        rounded="3xl"
                        boxShadow="xl"
                        border="1px solid"
                        borderColor="gray.100"
                        position="relative"
                        overflow="hidden"
                    >
                        {/* Decorative Element */}
                        <Box
                            position="absolute"
                            top="-50px"
                            right="-50px"
                            w="150px"
                            h="150px"
                            bg="orange.500"
                            opacity={0.05}
                            rounded="full"
                        />

                        <Text
                            color="gray.700"
                            fontSize={{ base: "md", md: "lg" }}
                            lineHeight="tall"
                            textAlign="center"
                            maxW="4xl"
                            mx="auto"
                        >
                            In today's hyper-connected digital environment, cyber threats evolve
                            daily, putting organizations at constant risk. At{" "}
                            <Text as="span" fontWeight="bold" color="orange.600">
                                Shajag Systems and Services
                            </Text>
                            , we go beyond conventional security by offering a holistic,
                            risk-based approach. Our team combines global cybersecurity
                            expertise, advanced technologies, and regulatory knowledge to
                            safeguard your business while ensuring compliance with industry
                            standards.
                        </Text>
                    </Box>
                </MotionBox>
            </Container>

            {/* Core Services */}
            <Box bg="gray.50" py={{ base: 12, md: 20 }}>
                <Container maxW="7xl">
                    <MotionBox
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <VStack spacing={4} textAlign="center" mb={12}>
                            <Badge
                                colorScheme="orange"
                                fontSize="sm"
                                px={3}
                                py={1}
                                rounded="full"
                                textTransform="uppercase"
                            >
                                Our Services
                            </Badge>
                            <Heading size="xl">
                                Core Service Areas
                            </Heading>
                            <Text fontSize="lg" color="gray.600" maxW="3xl">
                                Comprehensive solutions to protect and secure your digital infrastructure
                            </Text>
                        </VStack>
                    </MotionBox>

                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
                        {coreServices.map((svc, index) => (
                            <MotionBox
                                key={svc.title}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -8, scale: 1.02 }}
                            >
                                <Box
                                    bg="white"
                                    p={8}
                                    rounded="3xl"
                                    boxShadow="lg"
                                    border="1px solid"
                                    borderColor="gray.100"
                                    h="100%"
                                    position="relative"
                                    overflow="hidden"
                                    _hover={{
                                        boxShadow: "2xl",
                                        borderColor: "orange.300",
                                    }}
                                    transition="all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)"
                                >
                                    {/* Top Gradient Bar */}
                                    <Box
                                        position="absolute"
                                        top={0}
                                        left={0}
                                        right={0}
                                        h="4px"
                                        bgGradient={svc.gradient}
                                    />

                                    {/* Icon with Background */}
                                    <MotionFlex
                                        align="center"
                                        mb={6}
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Box
                                            bgGradient={svc.gradient}
                                            p={4}
                                            rounded="xl"
                                            mr={4}
                                            boxShadow="md"
                                        >
                                            <Icon as={svc.icon} boxSize={8} color="white" />
                                        </Box>
                                        <Heading size="md" color="gray.900">
                                            {svc.title}
                                        </Heading>
                                    </MotionFlex>

                                    {/* Points List */}
                                    <VStack align="start" spacing={3} mb={6}>
                                        {svc.points.map((point, idx) => (
                                            <HStack key={idx} align="start" spacing={3}>
                                                <Icon
                                                    as={CheckCircle2}
                                                    boxSize={5}
                                                    color={svc.color}
                                                    mt={0.5}
                                                    flexShrink={0}
                                                />
                                                <Text color="gray.700" fontSize="sm" lineHeight="tall">
                                                    {point}
                                                </Text>
                                            </HStack>
                                        ))}
                                    </VStack>

                                    {/* Benefit Box */}
                                    <Box
                                        bg="orange.50"
                                        p={4}
                                        rounded="xl"
                                        borderLeft="4px solid"
                                        borderColor="orange.500"
                                    >
                                        <HStack spacing={2} mb={2}>
                                            <Icon as={MdCheckCircle} color="orange.600" boxSize={5} />
                                            <Text fontWeight="bold" color="orange.700" fontSize="sm">
                                                KEY BENEFIT
                                            </Text>
                                        </HStack>
                                        <Text color="gray.700" fontSize="sm" lineHeight="tall">
                                            {svc.benefit}
                                        </Text>
                                    </Box>
                                </Box>
                            </MotionBox>
                        ))}
                    </SimpleGrid>
                </Container>
            </Box>

            {/* Approach Section */}
            <Container maxW="6xl" py={{ base: 12, md: 20 }}>
                <MotionBox
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <Box
                        bg="white"
                        p={10}
                        rounded="3xl"
                        boxShadow="xl"
                        border="1px solid"
                        borderColor="gray.100"
                        position="relative"
                        overflow="hidden"
                    >
                        {/* Background Pattern */}
                        <Box
                            position="absolute"
                            top="0"
                            right="0"
                            w="200px"
                            h="200px"
                            bgGradient="radial-gradient(circle, orange.100, transparent)"
                            opacity={0.3}
                        />

                        <VStack spacing={8} align="stretch" position="relative">
                            <Box textAlign="center">
                                <Badge
                                    colorScheme="orange"
                                    fontSize="sm"
                                    px={3}
                                    py={1}
                                    rounded="full"
                                    textTransform="uppercase"
                                    mb={4}
                                >
                                    Our Methodology
                                </Badge>
                                <Heading size="xl" mb={4}>
                                    Our Approach
                                </Heading>

                                {/* Process Steps */}
                                <HStack
                                    justify="center"
                                    spacing={2}
                                    flexWrap="wrap"
                                    mt={6}
                                >
                                    {["Assess", "Protect", "Monitor", "Evolve"].map((step, idx) => (
                                        <React.Fragment key={step}>
                                            <MotionBox
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.4, delay: idx * 0.1 }}
                                                whileHover={{ scale: 1.1 }}
                                            >
                                                <Box
                                                    bg="orange.500"
                                                    color="white"
                                                    px={6}
                                                    py={3}
                                                    rounded="full"
                                                    fontWeight="bold"
                                                    fontSize="lg"
                                                    boxShadow="md"
                                                >
                                                    {step}
                                                </Box>
                                            </MotionBox>
                                            {idx < 3 && (
                                                <Icon
                                                    as={MdTrendingUp}
                                                    boxSize={6}
                                                    color="orange.400"
                                                />
                                            )}
                                        </React.Fragment>
                                    ))}
                                </HStack>
                            </Box>

                            <Divider borderColor="gray.200" />

                            {/* Benefits Grid */}
                            <Box>
                                <Heading size="lg" mb={6} textAlign="center">
                                    Why Partner with Us?
                                </Heading>
                                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                                    {benefits.map((benefit, index) => (
                                        <MotionBox
                                            key={benefit.title}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: index * 0.1 }}
                                            whileHover={{ x: 8 }}
                                        >
                                            <HStack
                                                spacing={4}
                                                p={5}
                                                bg="gray.50"
                                                rounded="xl"
                                                border="1px solid"
                                                borderColor="gray.100"
                                                _hover={{
                                                    bg: "orange.50",
                                                    borderColor: "orange.300",
                                                }}
                                                transition="all 0.3s"
                                            >
                                                <Box
                                                    bg="orange.500"
                                                    p={3}
                                                    rounded="lg"
                                                    flexShrink={0}
                                                >
                                                    <Icon as={benefit.icon} boxSize={6} color="white" />
                                                </Box>
                                                <Box>
                                                    <Text fontWeight="bold" fontSize="lg" color="gray.900">
                                                        {benefit.title}
                                                    </Text>
                                                    <Text fontSize="sm" color="gray.600">
                                                        {benefit.desc}
                                                    </Text>
                                                </Box>
                                            </HStack>
                                        </MotionBox>
                                    ))}
                                </SimpleGrid>
                            </Box>
                        </VStack>
                    </Box>
                </MotionBox>
            </Container>

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
                                Ready to Secure Your Business?
                            </Heading>
                            <Text fontSize="lg" color="whiteAlpha.900" maxW="2xl">
                                Let's discuss how our cyber risk management services can protect your organization
                            </Text>
                            <MotionBox
                                whileHover={{ scale: 1.05, y: -5 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Button
                                    as={NextLink}
                                    href="/contact"
                                    size="lg"
                                    h="60px"
                                    px={12}
                                    bg="white"
                                    color="orange.500"
                                    rounded="full"
                                    fontSize="lg"
                                    fontWeight="bold"
                                    boxShadow="0 8px 24px rgba(0, 0, 0, 0.2)"
                                    _hover={{
                                        boxShadow: "0 12px 32px rgba(0, 0, 0, 0.3)",
                                    }}
                                    transition="all 0.3s"
                                >
                                    Get in Touch
                                </Button>
                            </MotionBox>
                        </VStack>
                    </MotionBox>
                </Container>
            </Box>
        </Box>
    );
}