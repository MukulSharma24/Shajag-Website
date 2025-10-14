"use client";

import {
    Box,
    Container,
    Heading,
    Text,
    SimpleGrid,
    VStack,
    HStack,
    Button,
    Avatar,
    Card,
    CardBody,
    Icon,
    Divider,
} from "@chakra-ui/react";
import { FaStar, FaQuoteLeft, FaUsers, FaUserTie, FaClock, FaHeadset, FaRocket, FaBolt } from "react-icons/fa";

/* import StatsSection from "../components/StatsSection"; */
import ServiceCard from "../components/ServiceCard";
/* import TestimonialCard from "../components/TestimonialCard"; */
import Link from "next/link";

// Use string keys instead of icon components here
const services = [
    {
        iconName: "BarChart3",
        title: "Data Visualization",
        description:
            "Transform complex data into compelling visual narratives that drive business insights and strategic decision-making.",
    },
    {
        iconName: "Cloud",
        title: "Cloud Infrastructure",
        description:
            "Comprehensive cloud infrastructure solutions that ensure scalability, security, and cost-effectiveness for modern enterprises.",
    },
    {
        iconName: "Cpu",
        title: "IoT Solutions",
        description:
            "Connect, monitor, and manage smart devices to optimize operations and enhance user experiences across industries.",
    },
    {
        iconName: "Megaphone",
        title: "Digital Marketing",
        description:
            "Strategic digital marketing campaigns powered by AI and analytics that maximize reach, engagement, and conversion rates.",
    },
    {
        iconName: "Brain",
        title: "AI & Analytics",
        description:
            "Advanced data processing and analytics solutions for real-time business intelligence and predictive insights.",
    },
    {
        iconName: "Settings",
        title: "Custom Solutions",
        description:
            "Deep domain expertise across multiple industries, delivering tailored solutions that address unique sector challenges.",
    },
];

const testimonials = [
    {
        text: "Shajag Systems transformed our data infrastructure completely. Their team's expertise in cloud migration helped us reduce costs by 40% while improving performance significantly.",
        author: "Rajesh Kumar",
        company: "CTO, TechCorp India",
        avatar: "RK",
        color: "orange.500"
    },
    {
        text: "The IoT solution implemented by Shajag has revolutionized our patient monitoring system. Real-time data insights have improved our response times dramatically.",
        author: "Dr. Priya Sharma",
        company: "IT Director, HealthFirst Hospitals",
        avatar: "PS",
        color: "blue.500"
    },
    {
        text: "Their Industry 4.0 solutions have transformed our production line. Predictive maintenance has reduced downtime by 50% and saved us millions in potential losses.",
        author: "Michael Chen",
        company: "Operations Manager, Global Manufacturing Ltd",
        avatar: "MC",
        color: "green.500"
    },
    {
        text: "Shajag's expertise in regulatory compliance and data security is exceptional. They helped us achieve 100% compliance while modernizing our entire digital infrastructure.",
        author: "Sarah Johnson",
        company: "Head of Technology, FinanceSecure Bank",
        avatar: "SJ",
        color: "purple.500"
    },
    {
        text: "The e-learning platform developed by Shajag has increased student engagement by 70%. Their team understood our vision perfectly and delivered beyond expectations.",
        author: "Dr. Amit Patel",
        company: "CEO, EduTech Solutions",
        avatar: "AP",
        color: "teal.500"
    },
];

// Enhanced Stats Card Component
const EnhancedStatsCard = ({ value, label, icon, gradient, delay }) => (
    <Card
        bg="white"
        shadow="2xl"
        rounded="3xl"
        p={8}
        position="relative"
        border="1px solid"
        borderColor="orange.100"
        _hover={{
            transform: "translateY(-12px) scale(1.02)",
            shadow: "3xl",
            borderColor: "orange.300",
        }}
        transition={`all 0.4s ease ${delay}s`}
        overflow="hidden"
        minH="220px"
    >
        {/* Animated gradient background */}
        <Box
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            bgGradient={gradient}
            opacity={0.03}
            _hover={{ opacity: 0.08 }}
            transition="opacity 0.3s ease"
        />

        {/* Floating decorative circles */}
        <Box
            position="absolute"
            top="-20px"
            right="-20px"
            w="80px"
            h="80px"
            borderRadius="full"
            bg="orange.50"
            opacity={0.6}
        />
        <Box
            position="absolute"
            bottom="-10px"
            left="-10px"
            w="40px"
            h="40px"
            borderRadius="full"
            bg="orange.100"
            opacity={0.4}
        />

        <CardBody p={0} position="relative" zIndex={1}>
            <VStack spacing={6} align="center" textAlign="center">
                {/* Icon container */}
                <Box
                    w="70px"
                    h="70px"
                    borderRadius="2xl"
                    bgGradient="linear(135deg, orange.400, red.500)"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    shadow="lg"
                    _hover={{ transform: "rotate(5deg) scale(1.1)" }}
                    transition="transform 0.3s ease"
                >
                    <Icon as={icon} color="white" boxSize={8} />
                </Box>

                {/* Stats number with enhanced styling */}
                <VStack spacing={2}>
                    <Heading
                        size="3xl"
                        bgGradient="linear(135deg, orange.500, red.600)"
                        bgClip="text"
                        fontWeight="900"
                        letterSpacing="-2px"
                    >
                        {value}
                    </Heading>
                    <Text
                        fontSize="lg"
                        color="gray.600"
                        fontWeight="600"
                        textTransform="uppercase"
                        letterSpacing="1px"
                    >
                        {label}
                    </Text>
                </VStack>

                {/* Decorative line */}
                <Box
                    w="60px"
                    h="3px"
                    bgGradient="linear(to-r, orange.400, red.500)"
                    rounded="full"
                />
            </VStack>
        </CardBody>
    </Card>
);

// Enhanced Testimonial Card Component
const EnhancedTestimonialCard = ({ text, author, company, avatar, color }) => (
    <Card
        bg="white"
        shadow="2xl"
        rounded="3xl"
        p={8}
        position="relative"
        border="1px solid"
        borderColor="gray.100"
        _hover={{
            transform: "translateY(-8px)",
            shadow: "3xl",
            borderColor: color,
        }}
        transition="all 0.3s ease"
        overflow="hidden"
    >
        {/* Decorative gradient top border */}
        <Box
            position="absolute"
            top={0}
            left={0}
            right={0}
            h="4px"
            bgGradient={`linear(to-r, ${color}, orange.400)`}
        />

        {/* Quote icon */}
        <Box position="absolute" top={6} right={6}>
            <Icon as={FaQuoteLeft} color="gray.200" boxSize={8} />
        </Box>

        <CardBody p={0}>
            <VStack spacing={6} align="stretch">
                {/* Testimonial text */}
                <Text
                    fontSize="lg"
                    lineHeight="1.8"
                    color="gray.700"
                    fontStyle="italic"
                    position="relative"
                    zIndex={1}
                >
                    "{text}"
                </Text>

                <Divider borderColor="gray.200" />

                {/* Author section */}
                <HStack spacing={4}>
                    <Avatar
                        name={author}
                        bg={color}
                        color="white"
                        size="lg"
                        fontWeight="bold"
                        fontSize="lg"


                    />

                    <VStack align="start" spacing={1} flex={1}>
                        <Text fontWeight="bold" fontSize="lg" color="gray.900">
                            {author}
                        </Text>
                        <Text fontSize="sm" color="gray.600">
                            {company}
                        </Text>

                        {/* 5-star rating */}
                        <HStack spacing={1} pt={1}>
                            {[...Array(5)].map((_, i) => (
                                <Icon
                                    key={i}
                                    as={FaStar}
                                    color="yellow.400"
                                    boxSize={4}
                                />
                            ))}
                        </HStack>
                    </VStack>
                </HStack>
            </VStack>
        </CardBody>
    </Card>
);

export default function Home() {
    const statsData = [
        {
            value: "100+",
            label: "Happy Clients",
            icon: FaUsers,
            gradient: "linear(135deg, orange.400, red.500)",
            delay: 0
        },
        {
            value: "50+",
            label: "Expert Team",
            icon: FaUserTie,
            gradient: "linear(135deg, red.400, pink.500)",
            delay: 0.1
        },
        {
            value: "7",
            label: "Years Experience",
            icon: FaClock,
            gradient: "linear(135deg, orange.500, yellow.500)",
            delay: 0.2
        },
        {
            value: "24/7",
            label: "Support",
            icon: FaHeadset,
            gradient: "linear(135deg, red.500, orange.600)",
            delay: 0.3
        },
    ];

    return (
        <>
            {/* Enhanced Hero Section */}
            <Box
                as="section"
                position="relative"
                bgGradient="linear(135deg,rgba(230, 154, 131, 0.88) 0%,rgba(200, 94, 41, 0.92) 100%)"
                color="white"
                py={{ base: 20, md: 32 }}
                overflow="hidden"
            >
                {/* Floating geometric shapes */}
                <Box
                    position="absolute"
                    top="10%"
                    right="15%"
                    w="120px"
                    h="120px"
                    borderRadius="full"
                    bg="whiteAlpha.100"
                    animation="float 6s ease-in-out infinite"
                />
                <Box
                    position="absolute"
                    top="60%"
                    left="10%"
                    w="80px"
                    h="80px"
                    borderRadius="20px"
                    bg="whiteAlpha.80"
                    transform="rotate(45deg)"
                    animation="float 4s ease-in-out infinite reverse"
                />
                <Box
                    position="absolute"
                    bottom="20%"
                    right="20%"
                    w="60px"
                    h="60px"
                    borderRadius="full"
                    bg="whiteAlpha.60"
                    animation="float 5s ease-in-out infinite"
                />

                {/* Animated background pattern */}
                <Box
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    opacity={0.1}
                    backgroundImage="radial-gradient(circle at 20% 50%, white 2px, transparent 2px), radial-gradient(circle at 80% 50%, white 2px, transparent 2px)"
                    backgroundSize="100px 100px"
                    animation="drift 20s linear infinite"
                />

                <Container maxW="7xl" textAlign="center" position="relative" zIndex={1}>
                    <VStack spacing={8} maxW="4xl" mx="auto">
                        {/* Animated badge */}
                        <HStack
                            bg="whiteAlpha.200"
                            px={6}
                            py={3}
                            rounded="full"
                            backdropFilter="blur(10px)"
                            border="1px solid"
                            borderColor="whiteAlpha.300"
                            _hover={{ transform: "scale(1.05)" }}
                            transition="transform 0.3s ease"
                        >
                            <Icon as={FaRocket} color="white" boxSize={4} />
                            <Text fontSize="sm" fontWeight="semibold" color="white">
                                 Trusted by 100+ Companies
                            </Text>
                            <Icon as={FaBolt} color="yellow.300" boxSize={4} />
                        </HStack>

                        {/* Enhanced main heading */}
                        <Heading
                            as="h1"
                            fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
                            lineHeight="shorter"
                            fontWeight="900"
                            letterSpacing="-2px"
                            position="relative"
                        >
                            <Text
                                as="span"
                                position="relative"
                                _before={{
                                    content: '""',
                                    position: "absolute",
                                    top: "50%",
                                    left: "-10px",
                                    right: "-10px",
                                    height: "30%",
                                    bg: "whiteAlpha.200",
                                    transform: "translateY(-50%) skew(-12deg)",
                                    zIndex: -1,
                                }}
                            >
                                Transforming
                            </Text>{" "}
                            <Text as="span" color="yellow.200">
                                Businesses
                            </Text>
                            <br />
                            Through{" "}
                            <Text
                                as="span"
                                bgGradient="linear(to-r, yellow.200, orange.200)"
                                bgClip="text"
                            >
                                Innovative Technology
                            </Text>
                            <br />
                            Solutions
                        </Heading>

                        {/* Enhanced description */}
                        <Text
                            fontSize={{ base: "lg", md: "xl" }}
                            color="whiteAlpha.900"
                            maxW="3xl"
                            lineHeight="1.8"
                            fontWeight="400"
                        >
                            Empower your organization with cutting-edge technology that drives
                            growth, efficiency, and competitive advantage in the digital era.
                            Join 100+ companies who trust us to deliver exceptional results.
                        </Text>

                        {/* Enhanced CTA section */}
                        <VStack spacing={6} pt={4}>
                            <HStack spacing={6} flexWrap="wrap" justify="center">
                                <Button
                                    as={Link}
                                    href="/about"
                                    size="lg"
                                    px={10}
                                    py={4}
                                    rounded="full"
                                    bg="white"
                                    color="orange.600"
                                    fontWeight="bold"
                                    fontSize="lg"
                                    shadow="2xl"
                                    _hover={{
                                        transform: "translateY(-3px) scale(1.05)",
                                        shadow: "3xl",
                                        bg: "gray.50"
                                    }}
                                    transition="all 0.3s ease"
                                    leftIcon={<Icon as={FaRocket} />}
                                >
                                    Explore More
                                </Button>

                                <Button
                                    as={Link}
                                    href="/contact"
                                    size="lg"
                                    px={10}
                                    py={4}
                                    rounded="full"
                                    variant="outline"
                                    borderColor="whiteAlpha.400"
                                    color="white"
                                    fontWeight="bold"
                                    fontSize="lg"
                                    backdropFilter="blur(10px)"
                                    _hover={{
                                        bg: "whiteAlpha.200",
                                        borderColor: "whiteAlpha.600",
                                        transform: "translateY(-3px) scale(1.05)"
                                    }}
                                    transition="all 0.3s ease"
                                >
                                    Request Demo
                                </Button>
                            </HStack>

                            {/* Trust indicators */}
                            <HStack spacing={8} pt={4} opacity={0.8}>
                                <VStack spacing={1}>
                                    <Text fontSize="2xl" fontWeight="bold">200+</Text>
                                    <Text fontSize="xs" textTransform="uppercase" letterSpacing="wider">Projects</Text>
                                </VStack>
                                <Box w="1px" h="40px" bg="whiteAlpha.400" />
                                <VStack spacing={1}>
                                    <Text fontSize="2xl" fontWeight="bold">98%</Text>
                                    <Text fontSize="xs" textTransform="uppercase" letterSpacing="wider">Success Rate</Text>
                                </VStack>
                                <Box w="1px" h="40px" bg="whiteAlpha.400" />
                                <VStack spacing={1}>
                                    <Text fontSize="2xl" fontWeight="bold">10+</Text>
                                    <Text fontSize="xs" textTransform="uppercase" letterSpacing="wider">Countries</Text>
                                </VStack>
                            </HStack>
                        </VStack>
                    </VStack>
                </Container>

                {/* CSS animations */}
                <style jsx>{`
                    @keyframes float {
                        0%, 100% { transform: translateY(0px); }
                        50% { transform: translateY(-20px); }
                    }
                    @keyframes drift {
                        0% { transform: translateX(0px); }
                        100% { transform: translateX(-100px); }
                    }
                `}</style>
            </Box>

            {/* Enhanced Stats Section */}
            <Box
                as="section"
                bg="gray.50"
                py={{ base: 16, md: 24 }}
                position="relative"
                overflow="hidden"
            >
                {/* Background decorative elements */}
                <Box
                    position="absolute"
                    top="10%"
                    right="10%"
                    w="300px"
                    h="300px"
                    borderRadius="full"
                    bgGradient="radial(circle, orange.100 0%, transparent 70%)"
                    opacity={0.4}
                />
                <Box
                    position="absolute"
                    bottom="10%"
                    left="5%"
                    w="200px"
                    h="200px"
                    borderRadius="full"
                    bgGradient="radial(circle, red.100 0%, transparent 70%)"
                    opacity={0.3}
                />

                <Container maxW="7xl" position="relative">
                    {/* Section header */}
                    <VStack spacing={4} textAlign="center" mb={16}>
                        <Heading
                            size="xl"
                            bgGradient="linear(135deg, orange.600, red.600)"
                            bgClip="text"
                            fontWeight="bold"
                        >
                            Our Track Record
                        </Heading>
                        <Text fontSize="lg" color="gray.600" maxW="2xl">
                            Numbers that speak to our commitment to excellence and client satisfaction
                        </Text>
                    </VStack>

                    <SimpleGrid
                        columns={{ base: 1, sm: 2, lg: 4 }}
                        spacing={8}
                        maxW="6xl"
                        mx="auto"
                    >
                        {statsData.map((stat, index) => (
                            <EnhancedStatsCard
                                key={stat.label}
                                value={stat.value}
                                label={stat.label}
                                icon={stat.icon}
                                gradient={stat.gradient}
                                delay={stat.delay}
                            />
                        ))}
                    </SimpleGrid>
                </Container>
            </Box>

            {/* Services Section */}
            <Box as="section" bg="white" py={{ base: 12, md: 20 }}>
                <Container maxW="7xl">
                    <VStack spacing={6} textAlign="center" mb={12}>
                        <Heading size="xl">Our Services</Heading>
                        <Text fontSize="lg" color="gray.600" maxW="3xl">
                            From data visualization to cloud infrastructure, we deliver
                            end-to-end technology solutions tailored to your business needs.
                        </Text>
                    </VStack>

                    <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={8} py={8}>
                        {services.map((service, i) => (
                            <ServiceCard
                                key={i}
                                iconName={service.iconName}
                                title={service.title}
                                description={service.description}
                                link="/services"
                            />
                        ))}
                    </SimpleGrid>
                </Container>
            </Box>

            {/* Enhanced Testimonials Section */}
            <Box
                as="section"
                bg="gray.50"
                py={{ base: 16, md: 24 }}
                position="relative"
            >
                {/* Background decoration */}
                <Box
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    bgGradient="radial(circle at 30% 50%, orange.50 0%, transparent 50%)"
                    opacity={0.6}
                />

                <Container maxW="7xl" position="relative">
                    <VStack spacing={6} textAlign="center" mb={16}>
                        <Heading size="2xl" color="gray.900">
                            What Our Clients Say
                        </Heading>
                        <Text fontSize="xl" color="gray.600" maxW="4xl" lineHeight="1.8">
                            Don't just take our word for it. See how we've transformed
                            businesses and delivered exceptional results.
                        </Text>
                    </VStack>

                    <SimpleGrid
                        columns={{ base: 1, lg: 2 }}
                        spacing={10}
                        maxW="6xl"
                        mx="auto"
                    >
                        {testimonials.map((testimonial, index) => (
                            <EnhancedTestimonialCard
                                key={index}
                                text={testimonial.text}
                                author={testimonial.author}
                                company={testimonial.company}
                                avatar={testimonial.avatar}
                                color={testimonial.color}
                            />
                        ))}
                    </SimpleGrid>
                </Container>
            </Box>
        </>
    );
}
