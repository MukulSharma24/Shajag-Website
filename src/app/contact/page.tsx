"use client";

import { motion } from "framer-motion";
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
} from "@chakra-ui/react";
import { useState, useRef } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";
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
  const [isSubmitting, setIsSubmitting] = useState(false); // Added loading state

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

    setIsSubmitting(true); // Start loading before submission

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
        setTimeout(() => setIsSubmitted(false), 3000);
      } else {
        console.error("Failed to submit contact form");
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
    } finally {
      setIsSubmitting(false); // Stop loading after submission attempt
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "hello@shajag.com",
      link: "mailto:hello@shajag.com",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+91 98124 51305",
      link: "tel:+919812451305",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: (
        <>
          NDM - 1, NSP, New Delhi - 110034
          <br />
          Spaze Tower, Gurugram
        </>
      ),
      link: "#",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon - Fri: 9:00 AM - 6:00 PM",
      link: "#",
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
    <Box pt={{ base: 20, md: 24 }}>
      {/* Hero Section */}
      <Box
        bgGradient="linear(to-r, orange.600, green.500)"
        color="white"
        py={{ base: 16, md: 20 }}
        textAlign="center"
      >
        <Container maxW="5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Heading as="h1" size="2xl" fontWeight="bold" mb={4}>
              Get In Touch
            </Heading>
            <Text
              fontSize={{ base: "lg", md: "2xl" }}
              mx="auto"
              maxW="4xl"
              opacity={0.9}
            >
              Ready to transform your business? Let's discuss how we can help
              you achieve your digital transformation goals and drive exceptional
              results.
            </Text>
          </motion.div>
        </Container>
      </Box>

      {/* Contact Form & Info Section */}
      <Box as="section" py={{ base: 12, md: 16 }} bg="gray.50">
        <Container maxW="7xl">
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={16}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Box
                bg="white"
                borderRadius="2xl"
                boxShadow="xl"
                p={{ base: 6, md: 10 }}
                mb={{ base: 8, lg: 0 }}
              >
                <Heading size="lg" color="gray.900" mb={6}>
                  Send Us a Message
                </Heading>

                {isSubmitted && (
                  <Alert
                    status="success"
                    borderRadius="md"
                    mb={6}
                    variant="left-accent"
                    alignItems="center"
                  >
                    <CheckCircle size={20} color="#48BB78" />
                    <AlertTitle ml={2}>Message sent successfully!</AlertTitle>
                    <AlertDescription>We'll get back to you soon.</AlertDescription>
                  </Alert>
                )}

                <form onSubmit={handleSubmit}>
                  <Grid
                    templateColumns={{ base: "1fr", md: "1fr 1fr" }}
                    gap={6}
                    mb={6}
                  >
                    <FormControl isRequired>
                      <FormLabel color="gray.700">Full Name</FormLabel>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        variant="filled"
                        bg="gray.100"
                        _focus={{ bg: "white" }}
                      />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel color="gray.700">Email Address</FormLabel>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        variant="filled"
                        bg="gray.100"
                        _focus={{ bg: "white" }}
                      />
                    </FormControl>
                  </Grid>

                  <Grid
                    templateColumns={{ base: "1fr", md: "1fr 1fr" }}
                    gap={6}
                    mb={6}
                  >
                    <FormControl>
                      <FormLabel color="gray.700">Company</FormLabel>
                      <Input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your company name"
                        variant="filled"
                        bg="gray.100"
                        _focus={{ bg: "white" }}
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel color="gray.700">Phone Number</FormLabel>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Your phone number"
                        variant="filled"
                        bg="gray.100"
                        _focus={{ bg: "white" }}
                      />
                    </FormControl>
                  </Grid>

                  <FormControl mb={6}>
                    <FormLabel color="gray.700">Service Interest</FormLabel>
                    <Select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      variant="filled"
                      bg="gray.100"
                      _focus={{ bg: "white" }}
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </Select>
                  </FormControl>

                  <FormControl mb={6} isRequired>
                    <FormLabel color="gray.700">Message</FormLabel>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      placeholder="Tell us about your project and requirements..."
                      variant="filled"
                      bg="gray.100"
                      _focus={{ bg: "white" }}
                      border="2px solid"
                      borderColor="gray.300"
                      borderRadius="md"
                      fontSize="md"
                      px={4}
                      py={3}
                      _focusVisible={{
                        borderColor: "orange.400",
                        boxShadow: "0 0 0 3px rgba(251, 146, 60, 0.4)",
                        bg: "white",
                      }}
                      transition="border-color 0.3s ease, box-shadow 0.3s ease"
                    />
                  </FormControl>

                  {/* Google ReCAPTCHA Checkbox */}
                  <Box mb={6}>
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey="6LcHQsIrAAAAAPXS20vuF7pN2JOTD7zPdsZNbRL2" // your actual captcha site key here
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
                    colorScheme="orange"
                    size="lg"
                    w="full"
                    leftIcon={isSubmitting ? <Spinner size="sm" /> : <Send size={20} />}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Box>
            </motion.div>

            {/* Contact Information & Map */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <VStack spacing={10} align="stretch" h="100%">
                {/* Contact Info Cards */}
                <Box>
                  <Heading size="lg" color="gray.900" mb={5}>
                    Contact Information
                  </Heading>
                  <Text color="gray.600" fontSize="lg" mb={8}>
                    We're here to help you transform your business. Reach out to us
                    through any of the channels below, and our team will get back to
                    you within 24 hours.
                  </Text>
                  <Stack spacing={6}>
                    {contactInfo.map((info, index) => (
                      <Flex
                        key={index}
                        align="center"
                        p={5}
                        bg="white"
                        borderRadius="xl"
                        boxShadow="md"
                        gap={4}
                      >
                        <Box color="orange.500">
                          <info.icon size={28} />
                        </Box>
                        <Box>
                          <Text fontWeight="semibold">{info.title}</Text>
                          {info.link !== "#" ? (
                            <Button
                              as="a"
                              href={info.link}
                              variant="link"
                              color="orange.700"
                              fontWeight="medium"
                              fontSize="lg"
                            >
                              {info.details}
                            </Button>
                          ) : (
                            <Text color="gray.700" fontSize="md">
                              {info.details}
                            </Text>
                          )}
                        </Box>
                      </Flex>
                    ))}
                  </Stack>
                </Box>

                {/* Embedded Google Map */}
                <Box
                  bg="gray.200"
                  borderRadius="xl"
                  overflow="hidden"
                  h={{ base: "300px", md: "360px" }}
                  boxShadow="md"
                  mt={4}
                  w="100%"
                  display="flex"
                  flexDir="column"
                  alignItems="center"
                  justifyContent="center"
                >
                  <iframe
                    title="Our Office Location"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps?q=NDM-1+Building,+NSP,+New+Delhi&output=embed"
                  ></iframe>
                </Box>
              </VStack>
            </motion.div>
          </SimpleGrid>
        </Container>
      </Box>

      {/* FAQ Section */}
      <Box as="section" py={{ base: 12, md: 20 }} bg="white">
        <Container maxW="6xl">
          <VStack spacing={6} textAlign="center" mb={12}>
            <Heading size="xl" color="gray.900">
              Frequently Asked Questions
            </Heading>
            <Text fontSize="xl" color="gray.600" maxW="3xl" mx="auto">
              Got questions? We have answers. Here are some common questions about
              our services and process.
            </Text>
          </VStack>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} maxW="4xl" mx="auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Box bg="gray.50" p={6} borderRadius="xl" boxShadow="md" h="100%">
                  <Heading size="md" mb={3} color="gray.900">
                    {faq.question}
                  </Heading>
                  <Text color="gray.700">{faq.answer}</Text>
                </Box>
              </motion.div>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  );
}
