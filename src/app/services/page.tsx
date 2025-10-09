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
} from "lucide-react";
import NextLink from "next/link";

import ServiceCard from "../../components/ServiceCard";

export default function Services() {
  const borderColor = useColorModeValue("orange.400", "orange.300");
  const cardBg = useColorModeValue("white", "gray.800");
  const heroGradient = "linear(to-r, orange.600, orange.400)";
  const ctaGradient = "linear(to-r, orange.400, green.400)";

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
      {/* Hero Section */}
      <Box
        as="section"
        bgGradient={heroGradient}
        color="white"
        py={{ base: 16, md: 20 }}
        textAlign="center"
      >
        <Container maxW="5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Heading as="h1" size="2xl" fontWeight="bold" mb={4}>
              Our Services
            </Heading>
            <Text
              fontSize={{ base: "md", md: "lg" }}
              opacity={0.9}
              maxW="4xl"
              mx="auto"
            >
              Comprehensive technology solutions designed to accelerate your
              digital transformation journey and drive sustainable growth.
            </Text>
          </motion.div>
        </Container>
      </Box>

      {/* Cyber Risk Management Service Box (Top-Wide) */}
      <Box as="section" bg="gray.50" py={{ base: 12, md: 20 }}>
        <Container maxW="7xl">
          <Box
            bg={cardBg}
            borderRadius="2xl"
            boxShadow="lg"
            p={8}
            border="2px solid"
            borderColor={borderColor}
            textAlign="center"
            mb={10}
          >
            <VStack spacing={4}>
              <Lock size={48} color="#dd6b20" />
              <Heading as="h2" size="lg" color="gray.900">
                Cyber Risk Management Services
              </Heading>
              <Text color="gray.600" maxW="3xl">
                Holistic cybersecurity solutions to assess, protect, monitor, and
                evolve your digital ecosystem against modern threats.
              </Text>
              <Button
                as={NextLink}
                href="/services/cyber-risk-management"
                colorScheme="orange"
                variant="solid"
              >
                Learn More
              </Button>
            </VStack>
          </Box>

          {/* Services Grid */}
          <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={8}>
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                iconName={service.iconName}
                title={service.title}
                description={service.description}
              />
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Industry Solutions */}
      <Box as="section" py={{ base: 12, md: 20 }}>
        <Container maxW="7xl">
          <VStack spacing={8} mb={12} textAlign="center">
            <Heading size="xl" color="gray.900">
              Industry Solutions
            </Heading>
            <Text fontSize="lg" color="gray.600" maxW="3xl" mx="auto">
              Deep domain expertise across multiple industries, delivering tailored
              solutions that address unique sector challenges.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Box
                  bg={cardBg}
                  borderRadius="2xl"
                  boxShadow="lg"
                  p={8}
                  borderLeft="4px solid"
                  borderColor={borderColor}
                  h="100%"
                >
                  <Heading as="h3" size="lg" color="gray.900" mb={4}>
                    {industry.title}
                  </Heading>
                  <Text color="gray.600" mb={6}>
                    {industry.description}
                  </Text>
                  <VStack align="start" spacing={3}>
                    {industry.features.map((feature, featureIndex) => (
                      <HStack key={featureIndex} alignItems="center">
                        <Box w={2} h={2} bg="orange.500" borderRadius="full" />
                        <Text color="gray.700">{feature}</Text>
                      </HStack>
                    ))}
                  </VStack>
                </Box>
              </motion.div>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        as="section"
        bgGradient={ctaGradient}
        color="white"
        py={{ base: 12, md: 20 }}
        textAlign="center"
      >
        <Container maxW="6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Heading as="h2" size="xl" fontWeight="bold" mb={6}>
              Ready to Transform Your Business?
            </Heading>
            <Text fontSize="xl" opacity={0.9} mb={8} maxW="2xl" mx="auto">
              Let's discuss how we can help you achieve your digital transformation
              goals and drive exceptional business results.
            </Text>
            <Button
              as={NextLink}
              href="/contact"
              size="lg"
              colorScheme="orange"
              px={8}
              py={6}
              fontWeight="bold"
              _hover={{ bg: "whiteAlpha.200" }}
            >
              Get Started Today
            </Button>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
}
