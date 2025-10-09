"use client";

import Link from "next/link";
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  HStack,
  Image,
  Card,
  CardBody,
  Badge,
  Button,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const partners = [
  {
    name: "Microsoft",
    logo: "/partner/microsoft-logo.svg",
    description:
      "Certified Azure partner specializing in cloud migration, Office 365 deployment, and Power Platform solutions.",
    category: "Cloud & Productivity",
    services: [
      "Azure Cloud Services",
      "Office 365 Migration",
      "Power BI Implementation",
      "Microsoft Teams Setup",
    ],
    color: "blue.500",
  },
  {
    name: "Google Cloud",
    logo: "/partner/google-cloud-logo.svg",
    description:
      "Trusted Google Cloud partner providing GCP solutions, Workspace implementation, and AI/ML services.",
    category: "Cloud & AI",
    services: [
      "Google Cloud Platform",
      "Google Workspace",
      "AI/ML Services",
      "Data Analytics",
    ],
    color: "green.500",
  },
  {
    name: "Lenovo",
    logo: "/partner/lenovo-logo.svg",
    description:
      "Authorized Lenovo partner for enterprise hardware solutions, ThinkSystem servers, and IT infrastructure.",
    category: "Hardware",
    services: [
      "Server Solutions",
      "Workstation Deployment",
      "Infrastructure Design",
      "Hardware Support",
    ],
    color: "red.500",
  },
  {
    name: "HP",
    logo: "/partner/hp-logo.svg",
    description:
      "HP Enterprise partner delivering server solutions, networking equipment, and enterprise IT infrastructure.",
    category: "Enterprise",
    services: [
      "HP Servers",
      "Networking Solutions",
      "Storage Systems",
      "Enterprise Support",
    ],
    color: "blue.600",
  },
  {
    name: "AWS",
    logo: "/partner/aws-logo.svg",
    description:
      "Amazon Web Services partner providing cloud migration, serverless solutions, and DevOps services.",
    category: "Cloud",
    services: [
      "AWS Cloud Migration",
      "Serverless Architecture",
      "DevOps Implementation",
      "Security Solutions",
    ],
    color: "orange.500",
  },
  {
    name: "Apple",
    logo: "/partner/apple-logo.svg",
    description:
      "Certified Apple partner specializing in enterprise mobility solutions, device management, and creative workflows.",
    category: "Mobile & Creative",
    services: [
      "MacBook Services",
      "Custom Solutions for MDM",
      "iOS Enterprise Deployment",
      "Apple Business Manager",
      "Creative Workflow Solutions",
    ],
    color: "gray.700",
  },
];

export default function Partners() {
  return (
    <Box pt={{ base: 20, md: 24 }}>
      {/* Hero Section */}
      <Box
        bgGradient="linear(to-r, green.500, orange.500)"
        color="white"
        py={{ base: 16, md: 20 }}
        textAlign="center"
      >
        <Container maxW="5xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Heading as="h1" size="2xl" fontWeight="bold" mb={4}>
              Our Technology Partners
            </Heading>
            <Text fontSize={{ base: "lg", md: "xl" }} opacity={0.9} maxW="4xl" mx="auto">
              We collaborate with industry-leading technology partners to deliver cutting-edge solutions and enterprise-grade reliability.
            </Text>
          </motion.div>
        </Container>
      </Box>

      {/* Partners Grid */}
      <Box as="section" py={{ base: 12, md: 20 }} bg="gray.50">
        <Container maxW="7xl">
          <VStack spacing={6} textAlign="center" mb={12}>
            <Heading size="xl" color="gray.900">
              Trusted Partnership Network
            </Heading>
            <Text fontSize="lg" color="gray.600" maxW="3xl" mx="auto">
              Our strategic partnerships enable us to provide comprehensive technology solutions backed by world-class support and expertise.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  h="100%"
                  bg="white"
                  borderRadius="xl"
                  boxShadow="lg"
                  overflow="hidden"
                  _hover={{ transform: "translateY(-4px)", boxShadow: "xl" }}
                  transition="all 0.3s ease"
                >
                  <CardBody p={8}>
                    <VStack align="stretch" spacing={4} h="100%">
                      {/* Partner Logo Only */}
                      <Box
                        w="80px"
                        h="80px"
                        bg="gray.100"
                        borderRadius="xl"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        p={3}
                        mb={4}
                      >
                        <Image
                          src={partner.logo}
                          alt={`${partner.name} Logo`}
                          maxW="100%"
                          maxH="100%"
                          objectFit="contain"
                          fallback={
                            <Text fontSize="sm" color="gray.500" textAlign="center">
                              {partner.name}
                            </Text>
                          }
                        />
                      </Box>

                      {/* Partner Info */}
                      <VStack align="start" spacing={3} flex={1}>
                        <Heading size="md" color="gray.900">
                          {partner.name}
                        </Heading>

                        <Badge variant="outline" colorScheme="gray">
                          {partner.category}
                        </Badge>

                        <Text color="gray.600" fontSize="sm">
                          {partner.description}
                        </Text>

                        {/* Services List */}
                        <VStack align="start" spacing={1} w="100%">
                          <Text fontSize="sm" fontWeight="semibold" color="gray.700">
                            Key Services:
                          </Text>
                          {partner.services.map((service, serviceIndex) => (
                            <HStack key={serviceIndex} spacing={2}>
                              <Box w={1} h={1} bg={partner.color} borderRadius="full" />
                              <Text fontSize="xs" color="gray.600">
                                {service}
                              </Text>
                            </HStack>
                          ))}
                        </VStack>
                      </VStack>
                    </VStack>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box as="section" py={{ base: 12, md: 16 }} bg="white">
        <Container maxW="6xl" textAlign="center">
          <VStack spacing={6}>
            <Heading size="lg" color="gray.900">
              Interested in Partnership?
            </Heading>
            <Text fontSize="lg" color="gray.600" maxW="2xl" mx="auto">
              Join our growing network of technology partners and help us deliver exceptional solutions to clients worldwide.
            </Text>
            <Button as={Link} href="/contact" colorScheme="green" size="lg" px={8} py={6}>
              Become a Partner
            </Button>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
}
