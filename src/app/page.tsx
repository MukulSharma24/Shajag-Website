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
import { FaStar, FaQuoteLeft, FaUsers, FaUserTie, FaClock, FaHeadset } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";
import EnhancedHeroCarousel from "../components/Enhancedherocarousel";
import ServiceCarousel from "../components/Servicecarousel";

const testimonials = [
    {
        text: "Shajag Systems transformed our data infrastructure completely. Their team's expertise in cloud migration helped us reduce costs by 40% while improving performance significantly.",
        author: "Rajesh Kumar",
        company: "CTO, TechCorp India",
        avatar: "RK",
        color: "orange.400"
    },
    {
        text: "The IoT solution implemented by Shajag has revolutionized our patient monitoring system. Real-time data insights have improved our response times dramatically.",
        author: "Dr. Priya Sharma",
        company: "IT Director, HealthFirst Hospitals",
        avatar: "PS",
        color: "orange.500"
    },
    {
        text: "Their Industry 4.0 solutions have transformed our production line. Predictive maintenance has reduced downtime by 50% and saved us millions in potential losses.",
        author: "Vikram",
        company: "Operations Manager, Global Manufacturing Ltd",
        avatar: "V",
        color: "orange.300"
    },
    {
        text: "Shajag's expertise in regulatory compliance and data security is exceptional. They helped us achieve 100% compliance while modernizing our entire digital infrastructure.",
        author: "Sarah Hussain",
        company: "Head of Technology, FinanceSecure Bank",
        avatar: "SH",
        color: "orange.600"
    },
    {
        text: "The e-learning platform developed by Shajag has increased student engagement by 70%. Their team understood our vision perfectly and delivered beyond expectations.",
        author: "Dr. Amit Patel",
        company: "CEO, EduTech Solutions",
        avatar: "AP",
        color: "orange.400"
    },
    {
        text: "Working with Shajag on our digital transformation was a game-changer. Their innovative approach and dedicated support helped us scale our operations efficiently across multiple regions.",
        author: "Charan Singh Kaur",
        company: "VP Operations, RetailTech Solutions",
        avatar: "CK",
        color: "orange.500"
    },
];

// Enhanced Stats Card
interface EnhancedStatsCardProps {
    value: number | string;
    label: string;
    icon: React.ElementType;
    gradient: string;
}

const EnhancedStatsCard: React.FC<EnhancedStatsCardProps> = ({ value, label, icon, gradient }) => (
    <Card
        bg="white"
        shadow="xl"
        rounded="2xl"
        p={8}
        position="relative"
        overflow="hidden"
        border="1px solid"
        borderColor="gray.100"
        _hover={{
            transform: "translateY(-8px)",
            shadow: "2xl",
            borderColor: "orange.200"
        }}
        transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
    >
        <Box
            position="absolute"
            top={0}
            right={0}
            w="120px"
            h="120px"
            bgGradient={gradient}
            opacity={0.05}
            borderRadius="full"
            transform="translate(30%, -30%)"
        />

        <CardBody p={0} position="relative">
            <VStack spacing={5} align="center">
                <Box
                    w="60px"
                    h="60px"
                    borderRadius="xl"
                    bgGradient="linear(135deg, #FF9D5C, #FF8C4D)"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    boxShadow="0 8px 16px rgba(255, 157, 92, 0.25)"
                >
                    <Icon as={icon} color="white" boxSize={7} />
                </Box>

                <VStack spacing={2}>
                    <Heading
                        size="2xl"
                        bgGradient="linear(135deg, #FF9D5C, #FF7A3D)"
                        bgClip="text"
                        fontWeight="800"
                    >
                        {value}
                    </Heading>
                    <Text
                        fontSize="md"
                        color="gray.600"
                        fontWeight="600"
                        textTransform="uppercase"
                        letterSpacing="wider"
                    >
                        {label}
                    </Text>
                </VStack>
            </VStack>
        </CardBody>
    </Card>
);

// Enhanced Testimonial Card with Animations
interface EnhancedTestimonialCardProps {
    text: string;
    author: string;
    company: string;
    avatar: string;
    color: string;
}

const EnhancedTestimonialCard = ({ text, author, company, avatar, color }: EnhancedTestimonialCardProps) => (
    <Card
        bg="white"
        shadow="xl"
        rounded="2xl"
        p={8}
        position="relative"
        overflow="hidden"
        border="1px solid"
        borderColor="gray.100"
        _hover={{
            transform: "translateY(-10px) scale(1.02)",
            shadow: "2xl",
            borderColor: "orange.300"
        }}
        transition="all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)"
    >
        {/* Animated Top Border */}
        <Box
            position="absolute"
            top={0}
            left={0}
            right={0}
            h="4px"
            bgGradient={`linear(to-r, ${color}, orange.300)`}
            sx={{
                '&::after': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: '-100%',
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)',
                    animation: 'shimmer 3s infinite',
                }
            }}
        />

        {/* Quote Icon with Pulse */}
        <Box
            position="absolute"
            top={6}
            right={6}
            opacity={0.1}
            sx={{
                animation: 'pulse 3s ease-in-out infinite'
            }}
        >
            <Icon as={FaQuoteLeft} boxSize={12} color="gray.400" />
        </Box>

        <CardBody p={0}>
            <VStack spacing={6} align="stretch">
                <Text
                    fontSize="lg"
                    lineHeight="tall"
                    color="gray.700"
                    fontStyle="italic"
                    position="relative"
                >
                    "{text}"
                </Text>

                <Divider borderColor="gray.200" />

                <HStack spacing={4}>
                    <Box
                        as={motion.div}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        style={{ transitionDuration: "0.3s" }}
                    >
                        <Avatar
                            name={author}
                            bg={color}
                            color="white"
                            size="lg"
                            fontWeight="bold"
                        />
                    </Box>


                    <VStack align="start" spacing={1} flex={1}>
                        <Text fontWeight="bold" fontSize="lg" color="gray.900">
                            {author}
                        </Text>
                        <Text fontSize="sm" color="gray.600">
                            {company}
                        </Text>

                        <HStack spacing={1} pt={1}>
                            {[...Array(5)].map((_, i) => (
                                <Box
                                    key={i}
                                    as={motion.div}
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    style={{ transition: `0.3s ${i * 0.1}s` }}
                                    whileHover={{ scale: 1.3 }}
                                >
                                    <Icon
                                        as={FaStar}
                                        color="yellow.400"
                                        boxSize={4}
                                    />
                                </Box>
                            ))}
                        </HStack>

                    </VStack>
                </HStack>
            </VStack>
        </CardBody>

        <style jsx global>{`
            @keyframes shimmer {
                0% {
                    left: -100%;
                }
                100% {
                    left: 100%;
                }
            }
            
            @keyframes pulse {
                0%, 100% {
                    opacity: 0.1;
                }
                50% {
                    opacity: 0.15;
                }
            }
        `}</style>
    </Card>
);

// Motion Box wrapper component
const MotionBox = motion(Box);

export default function Home() {
    const statsData = [
        {
            value: "100+",
            label: "Happy Clients",
            icon: FaUsers,
            gradient: "linear(135deg, orange.300, orange.500)",
        },
        {
            value: "50+",
            label: "Expert Team",
            icon: FaUserTie,
            gradient: "linear(135deg, orange.400, orange.600)",
        },
        {
            value: "7",
            label: "Years Experience",
            icon: FaClock,
            gradient: "linear(135deg, orange.300, orange.500)",
        },
        {
            value: "24/7",
            label: "Support",
            icon: FaHeadset,
            gradient: "linear(135deg, orange.400, orange.600)",
        },
    ];

    return (
        <>
            {/* Enhanced Hero Carousel Section */}
            <EnhancedHeroCarousel />

            {/* Stats Section */}
            <Box
                as="section"
                bg="gray.50"
                py={{ base: 16, md: 20 }}
                position="relative"
            >
                <Container maxW="7xl">
                    <VStack spacing={4} textAlign="center" mb={12}>
                        <Text
                            fontSize="sm"
                            fontWeight="bold"
                            color="orange.500"
                            textTransform="uppercase"
                            letterSpacing="wider"
                        >
                            Our Track Record
                        </Text>
                        <Heading
                            size="xl"
                            color="gray.900"
                            maxW="2xl"
                        >
                            Numbers That Speak for Themselves
                        </Heading>
                        <Text fontSize="lg" color="gray.600" maxW="2xl">
                            Proven excellence in delivering technology solutions that drive real business results
                        </Text>
                    </VStack>

                    <SimpleGrid
                        columns={{ base: 1, sm: 2, lg: 4 }}
                        spacing={6}
                        maxW="6xl"
                        mx="auto"
                    >
                        {statsData.map((stat) => (
                            <EnhancedStatsCard
                                key={stat.label}
                                value={stat.value}
                                label={stat.label}
                                icon={stat.icon}
                                gradient={stat.gradient}
                            />
                        ))}
                    </SimpleGrid>
                </Container>
            </Box>

            {/* Service Carousel Section - NEW */}
            <ServiceCarousel />

            {/* Testimonials Section */}
            <Box
                as="section"
                bg="gray.50"
                py={{ base: 16, md: 20 }}
                position="relative"
            >
                <Container maxW="7xl">
                    <VStack spacing={4} textAlign="center" mb={12}>
                        <Text
                            fontSize="sm"
                            fontWeight="bold"
                            color="orange.500"
                            textTransform="uppercase"
                            letterSpacing="wider"
                        >
                            Client Stories
                        </Text>
                        <Heading size="xl" color="gray.900">
                            What Our Clients Say
                        </Heading>
                        <Text fontSize="lg" color="gray.600" maxW="3xl">
                            Don't just take our word for it. See how we've transformed
                            businesses and delivered exceptional results
                        </Text>
                    </VStack>

                    <SimpleGrid
                        columns={{ base: 1, lg: 2 }}
                        spacing={8}
                        maxW="6xl"
                        mx="auto"
                    >
                        {testimonials.map((testimonial, index) => (
                            <MotionBox
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.15,
                                    ease: [0.6, -0.05, 0.01, 0.99]
                                }}
                            >
                                <EnhancedTestimonialCard
                                    text={testimonial.text}
                                    author={testimonial.author}
                                    company={testimonial.company}
                                    avatar={testimonial.avatar}
                                    color={testimonial.color}
                                />
                            </MotionBox>
                        ))}
                    </SimpleGrid>
                </Container>
            </Box>

            {/* CTA Section with Wave Effects & Staggered Animations */}
            <Box
                as="section"
                position="relative"
                overflow="hidden"
            >
                {/* Top Wave Divider */}
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
                            fill="#f3f4f6"
                            fillOpacity="1"
                            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,101.3C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                        ></path>
                    </svg>
                </Box>

                {/* CTA Content */}
                <Box
                    bgGradient="linear(135deg, #FF9D5C 0%, #FF8C4D 50%, #FF7A3D 100%)"
                    py={{ base: 20, md: 28 }}
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

                    <Container maxW="5xl" position="relative">
                        <VStack spacing={8} textAlign="center">
                            {/* Animated Heading with Scale & Fade */}
                            <MotionBox
                                initial={{ opacity: 0, y: 60, scale: 0.8 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{
                                    duration: 0.8,
                                    ease: [0.6, -0.05, 0.01, 0.99],
                                    delay: 0.2
                                }}
                            >
                                <Heading
                                    size="2xl"
                                    color="white"
                                    lineHeight="shorter"
                                >
                                    Ready to Transform Your Business?
                                </Heading>
                            </MotionBox>

                            {/* Animated Description */}
                            <MotionBox
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{
                                    duration: 0.7,
                                    ease: [0.6, -0.05, 0.01, 0.99],
                                    delay: 0.4
                                }}
                            >
                                <Text
                                    fontSize="xl"
                                    color="whiteAlpha.900"
                                    maxW="3xl"
                                    lineHeight="tall"
                                >
                                    Join 100+ companies who have already transformed their operations
                                    with our innovative technology solutions
                                </Text>
                            </MotionBox>

                            {/* Animated Buttons Container */}
                            <MotionBox
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{
                                    duration: 0.6,
                                    ease: [0.6, -0.05, 0.01, 0.99],
                                    delay: 0.6
                                }}
                            >
                                <HStack spacing={4} pt={4} flexWrap="wrap" justify="center">
                                    <MotionBox
                                        whileHover={{ scale: 1.08, y: -5 }}
                                        whileTap={{ scale: 0.95 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Button
                                            as={Link}
                                            href="/contact"
                                            size="lg"
                                            h="56px"
                                            px={10}
                                            bg="white"
                                            color="orange.500"
                                            fontWeight="bold"
                                            fontSize="lg"
                                            rounded="full"
                                            boxShadow="0 8px 24px rgba(0, 0, 0, 0.2)"
                                            _hover={{
                                                boxShadow: "0 12px 32px rgba(0, 0, 0, 0.3)"
                                            }}
                                            transition="all 0.3s ease"
                                        >
                                            Get Started Today
                                        </Button>
                                    </MotionBox>

                                    <MotionBox
                                        whileHover={{ scale: 1.08, y: -5 }}
                                        whileTap={{ scale: 0.95 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Button
                                            as={Link}
                                            href="/services"
                                            size="lg"
                                            h="56px"
                                            px={10}
                                            variant="outline"
                                            borderColor="whiteAlpha.500"
                                            borderWidth="2px"
                                            color="white"
                                            fontWeight="bold"
                                            fontSize="lg"
                                            rounded="full"
                                            _hover={{
                                                bg: "whiteAlpha.200",
                                                borderColor: "whiteAlpha.700"
                                            }}
                                            transition="all 0.3s ease"
                                        >
                                            View Our Services
                                        </Button>
                                    </MotionBox>
                                </HStack>
                            </MotionBox>
                        </VStack>
                    </Container>
                </Box>
            </Box>
        </>
    );
}