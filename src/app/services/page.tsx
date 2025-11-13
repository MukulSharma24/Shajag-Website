"use client";

import { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

import {
    Box,
    Button,
    Container,
    Heading,
    SimpleGrid,
    Text,
    VStack,
    HStack,
    useColorModeValue,
    Icon as ChakraIcon,
} from "@chakra-ui/react";
import {
    BarChart3,
    Cloud,
    Cpu,
    Megaphone,
    Brain,
    Settings,
    Shield,
    Database,
    Smartphone,
    Globe,
    Zap,
    Target,
    Lock,
    ArrowRight,
} from "lucide-react";
import NextLink from "next/link";

import ServiceCard from "../../components/ServiceCard";

// Motion wrapper for Chakra components
const MotionBox = motion(Box);

export default function Services() {
    const borderColor = useColorModeValue("orange.400", "orange.300");
    const cardBg = useColorModeValue("white", "gray.800");

    const services = [
        {
            iconName: "BarChart3",
            icon: BarChart3,
            title: "Data Visualization",
            description:
                "Transform complex data into compelling visual narratives that drive business insights and strategic decision-making. Our advanced analytics platforms help you understand patterns, trends, and opportunities hidden in your data.",
        },
        {
            iconName: "Cloud",
            icon: Cloud,
            title: "Cloud Infrastructure",
            description:
                "Comprehensive cloud infrastructure solutions that ensure scalability, security, and cost-effectiveness for modern enterprises. Migrate to AWS, Azure, or Google Cloud with confidence.",
        },
        {
            iconName: "Cpu",
            icon: Cpu,
            title: "IoT Solutions",
            description:
                "Connect, monitor, and manage smart devices to optimize operations and enhance user experiences across industries. From sensor networks to edge computing, we build complete IoT ecosystems.",
        },
        {
            iconName: "Megaphone",
            icon: Megaphone,
            title: "Digital Marketing",
            description:
                "Strategic digital marketing campaigns powered by AI and analytics that maximize reach, engagement, and conversion rates. Data-driven marketing that delivers measurable results.",
        },
        {
            iconName: "Brain",
            icon: Brain,
            title: "AI & Analytics",
            description:
                "Advanced data processing and analytics solutions for real-time business intelligence and predictive insights. Machine learning models that automate decision-making and optimize processes.",
        },
        {
            iconName: "Settings",
            icon: Settings,
            title: "Custom Solutions",
            description:
                "Deep domain expertise across multiple industries, delivering tailored solutions that address unique sector challenges. From healthcare to finance, we understand your business.",
        },
        {
            iconName: "Shield",
            icon: Shield,
            title: "Cybersecurity",
            description:
                "Comprehensive security solutions to protect your digital assets and ensure compliance with industry standards. 24/7 monitoring and threat detection keeps your business safe.",
        },
        {
            iconName: "Database",
            icon: Database,
            title: "Data Management",
            description:
                "Enterprise-grade data management solutions including data warehousing, ETL processes, and real-time data streaming. Turn your data into your competitive advantage.",
        },
        {
            iconName: "Smartphone",
            icon: Smartphone,
            title: "Mobile Development",
            description:
                "Native and cross-platform mobile applications that deliver exceptional user experiences. From iOS to Android, we build apps that users love and businesses depend on.",
        },
        {
            iconName: "Globe",
            icon: Globe,
            title: "Web Development",
            description:
                "Modern, responsive web applications built with the latest technologies. Fast, secure, and scalable solutions that grow with your business needs.",
        },
        {
            iconName: "Zap",
            icon: Zap,
            title: "Process Automation",
            description:
                "Streamline operations with intelligent automation solutions. Reduce manual work, eliminate errors, and increase efficiency across your organization.",
        },
        {
            iconName: "Target",
            icon: Target,
            title: "Digital Strategy",
            description:
                "Comprehensive digital transformation strategies that align technology with business objectives. From roadmap planning to execution, we guide your journey.",
        },
    ];

    const industries = [
        {
            title: "Healthcare",
            description:
                "Revolutionizing healthcare delivery through innovative technology solutions that improve patient outcomes and operational efficiency.",
            features: [
                "Electronic Health Records",
                "Telemedicine Platforms",
                "Medical IoT Devices",
                "AI Diagnostics",
            ],
            gradient: "linear(135deg, #FF9D5C, #FF8C4D)",
        },
        {
            title: "Finance",
            description:
                "Empowering financial institutions with secure, compliant, and innovative technology solutions.",
            features: [
                "Digital Banking",
                "Blockchain Solutions",
                "Risk Management",
                "Regulatory Compliance",
            ],
            gradient: "linear(135deg, #FFB380, #FF9D5C)",
        },
        {
            title: "Manufacturing",
            description:
                "Transforming manufacturing processes through Industry 4.0 technologies and smart automation.",
            features: [
                "Smart Factories",
                "Predictive Maintenance",
                "Supply Chain Optimization",
                "Quality Control",
            ],
            gradient: "linear(135deg, #FFAB73, #FF8C4D)",
        },
        {
            title: "Retail",
            description:
                "Creating seamless shopping experiences and optimizing retail operations through advanced technology.",
            features: [
                "E-commerce Platforms",
                "Inventory Management",
                "Customer Analytics",
                "Omnichannel Solutions",
            ],
            gradient: "linear(135deg, #FF9D5C, #FF7A3D)",
        },
    ];

    // Animation controls
    const controls = useAnimation();
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, amount: 0.15 });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [inView, controls]);

    return (
        <Box pt={{ base: 20, md: 24 }}>
            {/* Enhanced Hero Section with Wave */}
            <Box
                as="section"
                position="relative"
                overflow="hidden"
            >
                {/* Background with Gradient */}
                <Box
                    bgGradient="linear(135deg, #FF9D5C 0%, #FF8C4D 50%, #FF7A3D 100%)"
                    color="white"
                    py={{ base: 20, md: 28 }}
                    textAlign="center"
                    position="relative"
                >
                    {/* Floating Shapes */}
                    <Box
                        position="absolute"
                        top="10%"
                        right="5%"
                        width="150px"
                        height="150px"
                        borderRadius="50%"
                        bg="rgba(255, 255, 255, 0.05)"
                        filter="blur(40px)"
                    />
                    <Box
                        position="absolute"
                        bottom="20%"
                        left="10%"
                        width="200px"
                        height="200px"
                        borderRadius="50%"
                        bg="rgba(255, 255, 255, 0.08)"
                        filter="blur(60px)"
                    />

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

                    <Container maxW="5xl" position="relative" zIndex={2}>
                        <MotionBox
                            initial={{ opacity: 0, y: 50, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
                        >
                            <Heading
                                as="h1"
                                fontSize={{ base: "3xl", md: "5xl" }}
                                fontWeight="800"
                                mb={6}
                                letterSpacing="-0.02em"
                            >
                                Our Services
                            </Heading>
                            <Text
                                fontSize={{ base: "lg", md: "xl" }}
                                opacity={0.95}
                                maxW="4xl"
                                mx="auto"
                                lineHeight="tall"
                            >
                                Comprehensive technology solutions designed to accelerate your
                                digital transformation journey and drive sustainable growth.
                            </Text>
                        </MotionBox>
                    </Container>
                </Box>

                {/* Bottom Wave */}
                <Box
                    position="absolute"
                    bottom="-1px"
                    left="0"
                    width="100%"
                    overflow="hidden"
                    lineHeight="0"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1440 320"
                        preserveAspectRatio="none"
                        style={{
                            display: 'block',
                            width: '100%',
                            height: '80px'
                        }}
                    >
                        <path
                            fill="#f7fafc"
                            fillOpacity="1"
                            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,101.3C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                        ></path>
                    </svg>
                </Box>
            </Box>

            {/* Enhanced Cyber Risk Management Box */}
            <Box as="section" bg="gray.50" py={{ base: 12, md: 20 }}>
                <Container maxW="7xl">
                    <MotionBox
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        bg="white"
                        borderRadius="3xl"
                        boxShadow="2xl"
                        p={{ base: 8, md: 12 }}
                        border="3px solid"
                        borderColor="orange.400"
                        textAlign="center"
                        mb={16}
                        position="relative"
                        overflow="hidden"
                        _hover={{
                            transform: "translateY(-8px)",
                            boxShadow: "3xl",
                        }}
                    >
                        {/* Gradient Overlay */}
                        <Box
                            position="absolute"
                            top="-50%"
                            left="-50%"
                            width="200%"
                            height="200%"
                            bgGradient="radial(circle, orange.50 0%, transparent 70%)"
                            opacity={0.4}
                        />

                        <VStack spacing={6} position="relative" zIndex={2}>
                            <MotionBox
                                animate={{
                                    scale: [1, 1.1, 1],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                <Box
                                    p={6}
                                    bg="orange.50"
                                    borderRadius="2xl"
                                    display="inline-block"
                                >
                                    <Lock size={56} color="#FF7A3D" strokeWidth={2} />
                                </Box>
                            </MotionBox>

                            <Heading
                                as="h2"
                                fontSize={{ base: "2xl", md: "3xl" }}
                                color="gray.900"
                                fontWeight="800"
                            >
                                Cyber Risk Management Services
                            </Heading>

                            <Text
                                color="gray.600"
                                fontSize="lg"
                                maxW="3xl"
                                lineHeight="tall"
                            >
                                Holistic cybersecurity solutions to assess, protect, monitor, and
                                evolve your digital ecosystem against modern threats.
                            </Text>

                            <MotionBox
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Button
                                    as={NextLink}
                                    href="/services/cyber-risk-management"
                                    size="lg"
                                    h="56px"
                                    px={8}
                                    bg="linear-gradient(135deg, #FF9D5C 0%, #FF7A3D 100%)"
                                    color="white"
                                    fontWeight="bold"
                                    fontSize="lg"
                                    rounded="full"
                                    rightIcon={<ArrowRight size={20} />}
                                    boxShadow="0 8px 24px rgba(255, 122, 61, 0.3)"
                                    _hover={{
                                        boxShadow: "0 12px 32px rgba(255, 122, 61, 0.4)",
                                    }}
                                >
                                    Learn More
                                </Button>
                            </MotionBox>
                        </VStack>
                    </MotionBox>

                    {/* Enhanced Services Grid */}
                    <VStack spacing={6} mb={12} textAlign="center">
                        <MotionBox
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <Heading
                                fontSize={{ base: "2xl", md: "3xl" }}
                                color="gray.900"
                                fontWeight="800"
                            >
                                Complete Technology Solutions
                            </Heading>
                            <Text fontSize="lg" color="gray.600" mt={3}>
                                Everything you need to succeed in the digital age
                            </Text>
                        </MotionBox>
                    </VStack>

                    <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={8}>
                        {services.map((service, index) => (
                            <MotionBox
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                            >
                                <ServiceCard
                                    iconName={service.iconName}
                                    title={service.title}
                                    description={service.description}
                                />
                            </MotionBox>
                        ))}
                    </SimpleGrid>
                </Container>
            </Box>

            {/* Enhanced Industry Solutions */}
            <Box as="section" bg="white" py={{ base: 12, md: 20 }} position="relative">
                {/* Decorative Elements */}
                <Box
                    position="absolute"
                    top="10%"
                    left="0"
                    width="300px"
                    height="300px"
                    bgGradient="radial(circle, orange.100 0%, transparent 70%)"
                    opacity={0.3}
                    filter="blur(60px)"
                />

                <Container maxW="7xl" position="relative">
                    <VStack spacing={8} mb={16} textAlign="center">
                        <MotionBox
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <Text
                                fontSize="sm"
                                fontWeight="bold"
                                color="orange.500"
                                textTransform="uppercase"
                                letterSpacing="wider"
                                mb={4}
                            >
                                Industries We Serve
                            </Text>
                            <Heading
                                fontSize={{ base: "3xl", md: "4xl" }}
                                color="gray.900"
                                fontWeight="800"
                                mb={4}
                            >
                                Industry Solutions
                            </Heading>
                            <Text fontSize="xl" color="gray.600" maxW="3xl" mx="auto">
                                Deep domain expertise across multiple industries, delivering tailored
                                solutions that address unique sector challenges.
                            </Text>
                        </MotionBox>
                    </VStack>

                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
                        {industries.map((industry, index) => (
                            <MotionBox
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ y: -8 }}
                            >
                                <Box
                                    bg="white"
                                    borderRadius="3xl"
                                    boxShadow="xl"
                                    p={8}
                                    h="100%"
                                    position="relative"
                                    overflow="hidden"
                                    border="2px solid"
                                    borderColor="gray.100"
                                    _hover={{
                                        borderColor: "orange.300",
                                        boxShadow: "2xl",
                                    }}
                                    transition="all 0.3s ease"
                                >
                                    {/* Gradient Top Bar */}
                                    <Box
                                        position="absolute"
                                        top={0}
                                        left={0}
                                        right={0}
                                        height="6px"
                                        bgGradient={industry.gradient}
                                    />

                                    {/* Icon Circle */}
                                    <Box
                                        w="60px"
                                        h="60px"
                                        borderRadius="xl"
                                        bgGradient={industry.gradient}
                                        display="flex"
                                        alignItems="center"
                                        justifyContent="center"
                                        mb={6}
                                        boxShadow="0 8px 16px rgba(255, 157, 92, 0.25)"
                                    >
                                        <Text fontSize="2xl" fontWeight="bold" color="white">
                                            {industry.title[0]}
                                        </Text>
                                    </Box>

                                    <Heading
                                        as="h3"
                                        fontSize="2xl"
                                        color="gray.900"
                                        fontWeight="800"
                                        mb={4}
                                    >
                                        {industry.title}
                                    </Heading>

                                    <Text color="gray.600" mb={6} lineHeight="tall">
                                        {industry.description}
                                    </Text>

                                    <VStack align="start" spacing={3}>
                                        {industry.features.map((feature, featureIndex) => (
                                            <HStack key={featureIndex} alignItems="center">
                                                <Box
                                                    w={3}
                                                    h={3}
                                                    bgGradient={industry.gradient}
                                                    borderRadius="full"
                                                />
                                                <Text color="gray.700" fontWeight="500">
                                                    {feature}
                                                </Text>
                                            </HStack>
                                        ))}
                                    </VStack>
                                </Box>
                            </MotionBox>
                        ))}
                    </SimpleGrid>
                </Container>
            </Box>

            {/* Enhanced CTA Section with Wave */}
            <Box
                as="section"
                position="relative"
                overflow="hidden"
            >
                {/* Top Wave */}
                <Box
                    position="absolute"
                    top="-1px"
                    left="0"
                    width="100%"
                    overflow="hidden"
                    lineHeight="0"
                    transform="rotate(180deg)"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1440 320"
                        preserveAspectRatio="none"
                        style={{
                            display: 'block',
                            width: '100%',
                            height: '80px'
                        }}
                    >
                        <path
                            fill="#ffffff"
                            fillOpacity="1"
                            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,101.3C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                        ></path>
                    </svg>
                </Box>

                <Box
                    bgGradient="linear(135deg, #FF9D5C 0%, #FF8C4D 50%, #FF7A3D 100%)"
                    color="white"
                    py={{ base: 20, md: 28 }}
                    textAlign="center"
                    position="relative"
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

                    <Container maxW="6xl" position="relative">
                        <MotionBox
                            initial={{ opacity: 0, y: 50, scale: 0.9 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
                        >
                            <Heading
                                as="h2"
                                fontSize={{ base: "3xl", md: "4xl" }}
                                fontWeight="800"
                                mb={6}
                            >
                                Ready to Transform Your Business?
                            </Heading>
                            <Text
                                fontSize={{ base: "lg", md: "xl" }}
                                opacity={0.95}
                                mb={8}
                                maxW="2xl"
                                mx="auto"
                                lineHeight="tall"
                            >
                                Let's discuss how we can help you achieve your digital transformation
                                goals and drive exceptional business results.
                            </Text>

                            <MotionBox
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Button
                                    as={NextLink}
                                    href="/contact"
                                    size="lg"
                                    h="60px"
                                    px={12}
                                    bg="white"
                                    color="orange.500"
                                    fontWeight="bold"
                                    fontSize="lg"
                                    rounded="full"
                                    rightIcon={<ArrowRight size={20} />}
                                    boxShadow="0 10px 40px rgba(0, 0, 0, 0.2)"
                                    _hover={{
                                        boxShadow: "0 15px 50px rgba(0, 0, 0, 0.3)",
                                    }}
                                >
                                    Get Started Today
                                </Button>
                            </MotionBox>
                        </MotionBox>
                    </Container>
                </Box>
            </Box>
        </Box>
    );
}