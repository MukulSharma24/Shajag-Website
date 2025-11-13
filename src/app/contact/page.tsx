"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
    Box,
    Button,
    Container,
    FormControl,
    FormLabel,
    Grid,
    Heading,
    Stack,
    Text,
    Textarea,
    VStack,
    Alert,
    AlertTitle,
    AlertDescription,
    Flex,
    Spinner,
    Input,
    Select,
    SimpleGrid,
    HStack,
    Icon,
} from "@chakra-ui/react";
import { useState, useRef } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Sparkles } from "lucide-react";
import ReCAPTCHA from "react-google-recaptcha";

export default function Contact() {
    const recaptchaRef = useRef<ReCAPTCHA>(null);
    const [captchaValue, setCaptchaValue] = useState<string | null>(null);
    const [captchaError, setCaptchaError] = useState<string | null>(null);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        phone: "",
        service: "",
        message: "",
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleCaptchaChange = (value: string | null) => {
        setCaptchaValue(value);
        if (value) {
            setCaptchaError(null);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!captchaValue) {
            setCaptchaError("Please complete the CAPTCHA");
            return;
        }

        setIsSubmitting(true);

        try {
            const payload = { ...formData, token: captchaValue };
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (res.ok) {
                setIsSubmitted(true);
                setFormData({
                    name: "",
                    email: "",
                    company: "",
                    phone: "",
                    service: "",
                    message: "",
                });
                recaptchaRef.current?.reset();
                setCaptchaValue(null);
                setTimeout(() => setIsSubmitted(false), 5000);
            } else {
                console.error("Failed to submit contact form");
            }
        } catch (error) {
            console.error("Error submitting contact form:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactInfo = [
        {
            icon: Mail,
            title: "Email Us",
            details: "hello@shajag.com",
            link: "mailto:hello@shajag.com",
            color: "orange.500",
            bgGradient: "linear(135deg, orange.50, red.50)",
        },
        {
            icon: Phone,
            title: "Call Us",
            details: "+91 98124 51305",
            link: "tel:+919812451305",
            color: "blue.500",
            bgGradient: "linear(135deg, blue.50, cyan.50)",
        },
        {
            icon: MapPin,
            title: "Visit Us",
            details: "NDM - 1, NSP, New Delhi - 110034\nSpaze Tower, Gurugram",
            link: "#",
            color: "green.500",
            bgGradient: "linear(135deg, green.50, teal.50)",
        },
        {
            icon: Clock,
            title: "Business Hours",
            details: "Mon - Fri: 9:00 AM - 6:00 PM",
            link: "#",
            color: "purple.500",
            bgGradient: "linear(135deg, purple.50, pink.50)",
        },
    ];

    const services = [
        "Data Visualization",
        "Cloud Infrastructure",
        "IoT Solutions",
        "Digital Marketing",
        "AI & Analytics",
        "Custom Solutions",
        "Cybersecurity",
        "Other",
    ];

    const faqs = [
        {
            question: "How long does a typical project take?",
            answer:
                "Project timelines vary based on scope and complexity. Most projects range from 2-6 months, with smaller implementations taking 2-4 weeks.",
        },
        {
            question: "Do you provide ongoing support?",
            answer:
                "Yes, we offer 24/7 support and maintenance services to ensure your systems run smoothly after implementation.",
        },
        {
            question: "What industries do you serve?",
            answer:
                "We serve various industries including healthcare, finance, manufacturing, retail, education, and government sectors.",
        },
        {
            question: "How do you ensure data security?",
            answer:
                "We follow industry-leading security protocols and compliance standards, including ISO 27001, GDPR, HIPAA, and SOX requirements.",
        },
    ];

    return (
        <>
            <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>

            <Box pt={{ base: "75px", md: "85px" }}>
                {/* Enhanced Hero Section */}
                <Box
                    position="relative"
                    bgGradient="linear(135deg, #C85A17 0%, #B8471A 50%, #A63C1A 100%)"
                    color="white"
                    py={{ base: 20, md: 28 }}
                    overflow="hidden"
                >
                    {/* Animated Background */}
                    <Box
                        position="absolute"
                        top={0}
                        left={0}
                        right={0}
                        bottom={0}
                        opacity={0.1}
                        backgroundImage="radial-gradient(circle at 20% 50%, white 2px, transparent 2px)"
                        backgroundSize="50px 50px"
                        animation="shimmer 20s linear infinite"
                    />

                    {/* Floating Shapes */}
                    <Box
                        position="absolute"
                        top="20%"
                        right="10%"
                        w="150px"
                        h="150px"
                        borderRadius="50%"
                        bg="rgba(255, 255, 255, 0.05)"
                        backdropFilter="blur(10px)"
                        animation="float 6s ease-in-out infinite"
                    />

                    <Box
                        position="absolute"
                        bottom="20%"
                        left="5%"
                        w="100px"
                        h="100px"
                        borderRadius="20px"
                        bg="rgba(255, 255, 255, 0.08)"
                        transform="rotate(45deg)"
                        animation="float 8s ease-in-out infinite"
                        style={{ animationDelay: "1s" }}

                    />

                    <Container maxW="6xl" position="relative" zIndex={1}>
                        <VStack spacing={6} textAlign="center">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <HStack
                                    display="inline-flex"
                                    px={5}
                                    py={2}
                                    bg="rgba(255, 255, 255, 0.15)"
                                    backdropFilter="blur(10px)"
                                    borderRadius="full"
                                    border="1px solid rgba(255, 255, 255, 0.2)"
                                    mb={4}
                                >
                                    <Icon as={Sparkles} boxSize={4} />
                                    <Text fontSize="sm" fontWeight="600">
                                        We're Here to Help
                                    </Text>
                                </HStack>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.1 }}
                            >
                                <Heading
                                    as="h1"
                                    fontSize={{ base: "3xl", md: "5xl", lg: "6xl" }}
                                    fontWeight="800"
                                    letterSpacing="-1px"
                                >
                                    Get In Touch
                                </Heading>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <Text
                                    fontSize={{ base: "lg", md: "xl" }}
                                    maxW="3xl"
                                    mx="auto"
                                    opacity={0.95}
                                    lineHeight="tall"
                                >
                                    Ready to transform your business? Let's discuss how we can help
                                    you achieve your digital transformation goals and drive exceptional
                                    results.
                                </Text>
                            </motion.div>
                        </VStack>
                    </Container>
                </Box>

                {/* Contact Form & Info Section */}
                <Box as="section" py={{ base: 16, md: 20 }} bg="gray.50" position="relative">
                    {/* Background Decorations */}
                    <Box
                        position="absolute"
                        top="10%"
                        right="5%"
                        w="300px"
                        h="300px"
                        borderRadius="full"
                        bgGradient="radial(circle, orange.100 0%, transparent 70%)"
                        opacity={0.3}
                    />

                    <Container maxW="7xl" position="relative">
                        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 12, lg: 16 }}>
                            {/* Contact Form */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                            >
                                <Box
                                    bg="white"
                                    borderRadius="3xl"
                                    boxShadow="2xl"
                                    p={{ base: 8, md: 10 }}
                                    border="1px solid"
                                    borderColor="gray.100"
                                    position="relative"
                                    overflow="hidden"
                                >
                                    {/* Decorative gradient */}
                                    <Box
                                        position="absolute"
                                        top="-50px"
                                        right="-50px"
                                        w="200px"
                                        h="200px"
                                        bgGradient="linear(135deg, orange.400, red.400)"
                                        opacity={0.05}
                                        borderRadius="full"
                                    />

                                    <VStack align="stretch" spacing={6} position="relative">
                                        <Box>
                                            <Heading size="lg" color="gray.900" mb={2}>
                                                Send Us a Message
                                            </Heading>
                                            <Text color="gray.600" fontSize="md">
                                                Fill out the form below and we'll get back to you within 24 hours
                                            </Text>
                                        </Box>

                                        <AnimatePresence>
                                            {isSubmitted && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: -20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -20 }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    <Alert
                                                        status="success"
                                                        borderRadius="xl"
                                                        variant="subtle"
                                                        bg="green.50"
                                                        border="1px solid"
                                                        borderColor="green.200"
                                                    >
                                                        <Icon as={CheckCircle} color="green.500" boxSize={5} mr={3} />
                                                        <Box>
                                                            <AlertTitle fontSize="md" color="green.800">
                                                                Message sent successfully!
                                                            </AlertTitle>
                                                            <AlertDescription fontSize="sm" color="green.700">
                                                                We'll get back to you soon.
                                                            </AlertDescription>
                                                        </Box>
                                                    </Alert>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>

                                        <form onSubmit={handleSubmit}>
                                            <VStack spacing={6}>
                                                <Grid
                                                    templateColumns={{ base: "1fr", md: "1fr 1fr" }}
                                                    gap={6}
                                                    w="full"
                                                >
                                                    <FormControl isRequired>
                                                        <FormLabel color="gray.700" fontWeight="600" fontSize="sm">
                                                            Full Name
                                                        </FormLabel>
                                                        <Input
                                                            type="text"
                                                            name="name"
                                                            value={formData.name}
                                                            onChange={handleInputChange}
                                                            placeholder="Your Name"
                                                            size="lg"
                                                            bg="gray.50"
                                                            border="2px solid"
                                                            borderColor="gray.200"
                                                            borderRadius="xl"
                                                            _hover={{ borderColor: "gray.300" }}
                                                            _focus={{
                                                                bg: "white",
                                                                borderColor: "orange.400",
                                                                boxShadow: "0 0 0 1px #C85A17",
                                                            }}
                                                            transition="all 0.2s"
                                                        />
                                                    </FormControl>

                                                    <FormControl isRequired>
                                                        <FormLabel color="gray.700" fontWeight="600" fontSize="sm">
                                                            Email Address
                                                        </FormLabel>
                                                        <Input
                                                            type="email"
                                                            name="email"
                                                            value={formData.email}
                                                            onChange={handleInputChange}
                                                            placeholder="abc@example.com"
                                                            size="lg"
                                                            bg="gray.50"
                                                            border="2px solid"
                                                            borderColor="gray.200"
                                                            borderRadius="xl"
                                                            _hover={{ borderColor: "gray.300" }}
                                                            _focus={{
                                                                bg: "white",
                                                                borderColor: "orange.400",
                                                                boxShadow: "0 0 0 1px #C85A17",
                                                            }}
                                                            transition="all 0.2s"
                                                        />
                                                    </FormControl>
                                                </Grid>

                                                <Grid
                                                    templateColumns={{ base: "1fr", md: "1fr 1fr" }}
                                                    gap={6}
                                                    w="full"
                                                >
                                                    <FormControl>
                                                        <FormLabel color="gray.700" fontWeight="600" fontSize="sm">
                                                            Company
                                                        </FormLabel>
                                                        <Input
                                                            type="text"
                                                            name="company"
                                                            value={formData.company}
                                                            onChange={handleInputChange}
                                                            placeholder="Your Company"
                                                            size="lg"
                                                            bg="gray.50"
                                                            border="2px solid"
                                                            borderColor="gray.200"
                                                            borderRadius="xl"
                                                            _hover={{ borderColor: "gray.300" }}
                                                            _focus={{
                                                                bg: "white",
                                                                borderColor: "orange.400",
                                                                boxShadow: "0 0 0 1px #C85A17",
                                                            }}
                                                            transition="all 0.2s"
                                                        />
                                                    </FormControl>

                                                    <FormControl>
                                                        <FormLabel color="gray.700" fontWeight="600" fontSize="sm">
                                                            Phone Number
                                                        </FormLabel>
                                                        <Input
                                                            type="tel"
                                                            name="phone"
                                                            value={formData.phone}
                                                            onChange={handleInputChange}
                                                            placeholder="Contact Number"
                                                            size="lg"
                                                            bg="gray.50"
                                                            border="2px solid"
                                                            borderColor="gray.200"
                                                            borderRadius="xl"
                                                            _hover={{ borderColor: "gray.300" }}
                                                            _focus={{
                                                                bg: "white",
                                                                borderColor: "orange.400",
                                                                boxShadow: "0 0 0 1px #C85A17",
                                                            }}
                                                            transition="all 0.2s"
                                                        />
                                                    </FormControl>
                                                </Grid>

                                                <FormControl>
                                                    <FormLabel color="gray.700" fontWeight="600" fontSize="sm">
                                                        Service Interest
                                                    </FormLabel>
                                                    <Select
                                                        name="service"
                                                        value={formData.service}
                                                        onChange={handleInputChange}
                                                        size="lg"
                                                        bg="gray.50"
                                                        border="2px solid"
                                                        borderColor="gray.200"
                                                        borderRadius="xl"
                                                        _hover={{ borderColor: "gray.300" }}
                                                        _focus={{
                                                            bg: "white",
                                                            borderColor: "orange.400",
                                                            boxShadow: "0 0 0 1px #C85A17",
                                                        }}
                                                        transition="all 0.2s"
                                                    >
                                                        <option value="">Select a service</option>
                                                        {services.map((service, index) => (
                                                            <option key={index} value={service}>
                                                                {service}
                                                            </option>
                                                        ))}
                                                    </Select>
                                                </FormControl>

                                                <FormControl isRequired>
                                                    <FormLabel color="gray.700" fontWeight="600" fontSize="sm">
                                                        Message
                                                    </FormLabel>
                                                    <Textarea
                                                        name="message"
                                                        value={formData.message}
                                                        onChange={handleInputChange}
                                                        rows={5}
                                                        placeholder="Tell us about your project and requirements..."
                                                        size="lg"
                                                        bg="gray.50"
                                                        border="2px solid"
                                                        borderColor="gray.200"
                                                        borderRadius="xl"
                                                        _hover={{ borderColor: "gray.300" }}
                                                        _focus={{
                                                            bg: "white",
                                                            borderColor: "orange.400",
                                                            boxShadow: "0 0 0 1px #C85A17",
                                                        }}
                                                        transition="all 0.2s"
                                                        resize="vertical"
                                                    />
                                                </FormControl>

                                                {/* ReCAPTCHA */}
                                                <Box w="full">
                                                    <ReCAPTCHA
                                                        ref={recaptchaRef}
                                                        sitekey="6LcHQsIrAAAAAPXS20vuF7pN2JOTD7zPdsZNbRL2"
                                                        onChange={handleCaptchaChange}
                                                    />
                                                    {captchaError && (
                                                        <Text color="red.500" fontSize="sm" mt={2}>
                                                            {captchaError}
                                                        </Text>
                                                    )}
                                                </Box>

                                                <Button
                                                    type="submit"
                                                    size="lg"
                                                    w="full"
                                                    h="56px"
                                                    bgGradient="linear(to-r, #C85A17, #B8471A)"
                                                    color="white"
                                                    fontWeight="700"
                                                    fontSize="md"
                                                    rounded="xl"
                                                    leftIcon={
                                                        isSubmitting ? (
                                                            <Spinner size="sm" />
                                                        ) : (
                                                            <Icon as={Send} boxSize={5} />
                                                        )
                                                    }
                                                    disabled={isSubmitting}
                                                    boxShadow="0 4px 14px rgba(200, 90, 23, 0.3)"
                                                    _hover={{
                                                        bgGradient: "linear(to-r, #B8471A, #A63C1A)",
                                                        transform: "translateY(-2px)",
                                                        boxShadow: "0 6px 20px rgba(200, 90, 23, 0.4)",
                                                    }}
                                                    _active={{
                                                        transform: "translateY(0)",
                                                    }}
                                                    transition="all 0.3s"
                                                >
                                                    {isSubmitting ? "Sending..." : "Send Message"}
                                                </Button>
                                            </VStack>
                                        </form>
                                    </VStack>
                                </Box>
                            </motion.div>

                            {/* Contact Information & Map */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                            >
                                <VStack spacing={8} h="full">
                                    {/* Contact Info Header */}
                                    <Box w="full">
                                        <Heading size="lg" color="gray.900" mb={3}>
                                            Contact Information
                                        </Heading>
                                        <Text color="gray.600" fontSize="md" lineHeight="tall">
                                            We're here to help you transform your business. Reach out through
                                            any channel below, and our team will respond within 24 hours.
                                        </Text>
                                    </Box>

                                    {/* Contact Cards */}
                                    <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={4} w="full">
                                        {contactInfo.map((info, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                                viewport={{ once: true }}
                                            >
                                                <Box
                                                    p={6}
                                                    bg="white"
                                                    borderRadius="2xl"
                                                    boxShadow="lg"
                                                    border="1px solid"
                                                    borderColor="gray.100"
                                                    position="relative"
                                                    overflow="hidden"
                                                    _hover={{
                                                        transform: "translateY(-4px)",
                                                        boxShadow: "xl",
                                                        borderColor: info.color,
                                                    }}
                                                    transition="all 0.3s"
                                                >
                                                    <Box
                                                        position="absolute"
                                                        top="-20px"
                                                        right="-20px"
                                                        w="80px"
                                                        h="80px"
                                                        bgGradient={info.bgGradient}
                                                        borderRadius="full"
                                                        opacity={0.5}
                                                    />

                                                    <VStack align="start" spacing={3} position="relative">
                                                        <Flex
                                                            w="48px"
                                                            h="48px"
                                                            bg={`${info.color.split('.')[0]}.50`}
                                                            borderRadius="xl"
                                                            align="center"
                                                            justify="center"
                                                        >
                                                            <Icon as={info.icon} color={info.color} boxSize={6} />
                                                        </Flex>

                                                        <Box>
                                                            <Text
                                                                fontSize="sm"
                                                                fontWeight="600"
                                                                color="gray.600"
                                                                mb={1}
                                                            >
                                                                {info.title}
                                                            </Text>
                                                            {info.link !== "#" ? (
                                                                <Button
                                                                    as="a"
                                                                    href={info.link}
                                                                    variant="link"
                                                                    color={info.color}
                                                                    fontWeight="600"
                                                                    fontSize="md"
                                                                    p={0}
                                                                    h="auto"
                                                                    minW="auto"
                                                                    _hover={{ textDecoration: "underline" }}
                                                                >
                                                                    {info.details}
                                                                </Button>
                                                            ) : (
                                                                <Text
                                                                    color="gray.700"
                                                                    fontSize="md"
                                                                    fontWeight="500"
                                                                    whiteSpace="pre-line"
                                                                >
                                                                    {info.details}
                                                                </Text>
                                                            )}
                                                        </Box>
                                                    </VStack>
                                                </Box>
                                            </motion.div>
                                        ))}
                                    </SimpleGrid>

                                    {/* Enhanced Map */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.8, delay: 0.3 }}
                                        viewport={{ once: true }}
                                        style={{ width: "100%" }}
                                    >
                                        <Box
                                            bg="white"
                                            borderRadius="2xl"
                                            overflow="hidden"
                                            h="400px"
                                            boxShadow="2xl"
                                            border="1px solid"
                                            borderColor="gray.100"
                                            position="relative"
                                        >
                                            {/* Map Header Overlay */}
                                            <Box
                                                position="absolute"
                                                top={4}
                                                left={4}
                                                right={4}
                                                zIndex={10}
                                                bg="rgba(255, 255, 255, 0.95)"
                                                backdropFilter="blur(10px)"
                                                borderRadius="xl"
                                                px={4}
                                                py={3}
                                                boxShadow="lg"
                                            >
                                                <HStack spacing={3}>
                                                    <Flex
                                                        w="40px"
                                                        h="40px"
                                                        bg="orange.50"
                                                        borderRadius="lg"
                                                        align="center"
                                                        justify="center"
                                                    >
                                                        <Icon as={MapPin} color="orange.500" boxSize={5} />
                                                    </Flex>
                                                    <Box>
                                                        <Text fontSize="sm" fontWeight="600" color="gray.900">
                                                            Our Office
                                                        </Text>
                                                        <Text fontSize="xs" color="gray.600">
                                                            New Delhi, India
                                                        </Text>
                                                    </Box>
                                                </HStack>
                                            </Box>

                                            <iframe
                                                title="Our Office Location"
                                                width="100%"
                                                height="100%"
                                                style={{ border: 0 }}
                                                loading="lazy"
                                                referrerPolicy="no-referrer-when-downgrade"
                                                src="https://www.google.com/maps?q=NDM-1+Building,+NSP,+New+Delhi&output=embed"
                                            />
                                        </Box>
                                    </motion.div>
                                </VStack>
                            </motion.div>
                        </SimpleGrid>
                    </Container>
                </Box>

                {/* Enhanced FAQ Section */}
                <Box as="section" py={{ base: 16, md: 20 }} bg="white" position="relative">
                    {/* Background Pattern */}
                    <Box
                        position="absolute"
                        top={0}
                        left={0}
                        right={0}
                        bottom={0}
                        opacity={0.03}
                        backgroundImage="radial-gradient(circle at 20% 50%, #C85A17 2px, transparent 2px)"
                        backgroundSize="40px 40px"
                    />

                    <Container maxW="7xl" position="relative">
                        <VStack spacing={8} textAlign="center" mb={16}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <Text
                                    fontSize="sm"
                                    fontWeight="bold"
                                    color="orange.600"
                                    textTransform="uppercase"
                                    letterSpacing="wider"
                                    mb={3}
                                >
                                    FAQ
                                </Text>
                                <Heading
                                    size="xl"
                                    color="gray.900"
                                    mb={4}
                                    fontSize={{ base: "3xl", md: "4xl" }}
                                >
                                    Frequently Asked Questions
                                </Heading>
                                <Text fontSize="lg" color="gray.600" maxW="3xl" mx="auto">
                                    Got questions? We have answers. Here are some common questions about
                                    our services and process.
                                </Text>
                            </motion.div>
                        </VStack>

                        <SimpleGrid
                            columns={{ base: 1, md: 2 }}
                            spacing={6}
                            maxW="5xl"
                            mx="auto"
                        >
                            {faqs.map((faq, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <Box
                                        bg="gray.50"
                                        p={8}
                                        borderRadius="2xl"
                                        boxShadow="md"
                                        border="1px solid"
                                        borderColor="gray.100"
                                        h="full"
                                        _hover={{
                                            bg: "white",
                                            transform: "translateY(-4px)",
                                            boxShadow: "xl",
                                            borderColor: "orange.200",
                                        }}
                                        transition="all 0.3s"
                                    >
                                        <Heading size="md" mb={4} color="gray.900">
                                            {faq.question}
                                        </Heading>
                                        <Text color="gray.700" lineHeight="tall">
                                            {faq.answer}
                                        </Text>
                                    </Box>
                                </motion.div>
                            ))}
                        </SimpleGrid>
                    </Container>
                </Box>

                {/* CTA Section */}
                <Box
                    bgGradient="linear(135deg, #C85A17 0%, #B8471A 50%, #A63C1A 100%)"
                    py={{ base: 16, md: 20 }}
                    position="relative"
                    overflow="hidden"
                >
                    <Box
                        position="absolute"
                        top={0}
                        left={0}
                        right={0}
                        bottom={0}
                        opacity={0.1}
                        backgroundImage="radial-gradient(circle at 20% 50%, white 2px, transparent 2px)"
                        backgroundSize="50px 50px"
                    />

                    <Container maxW="5xl" position="relative">
                        <VStack spacing={8} textAlign="center">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <Heading
                                    size="2xl"
                                    color="white"
                                    mb={4}
                                    fontSize={{ base: "3xl", md: "4xl" }}
                                >
                                    Ready to Start Your Project?
                                </Heading>
                                <Text
                                    fontSize="xl"
                                    color="whiteAlpha.900"
                                    maxW="3xl"
                                    mx="auto"
                                    lineHeight="tall"
                                >
                                    Let's build something amazing together. Our team is ready to bring
                                    your vision to life.
                                </Text>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                <HStack spacing={4} flexWrap="wrap" justify="center">
                                    <Button
                                        size="lg"
                                        h="56px"
                                        px={10}
                                        bg="white"
                                        color="orange.600"
                                        fontWeight="bold"
                                        fontSize="lg"
                                        rounded="full"
                                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                                        boxShadow="0 8px 24px rgba(0, 0, 0, 0.2)"
                                        _hover={{
                                            transform: "translateY(-3px)",
                                            boxShadow: "0 12px 32px rgba(0, 0, 0, 0.3)",
                                        }}
                                        transition="all 0.3s"
                                    >
                                        Contact Us Now
                                    </Button>
                                </HStack>
                            </motion.div>
                        </VStack>
                    </Container>
                </Box>
            </Box>
        </>
    );
}