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
  useColorModeValue,
  Divider,
} from "@chakra-ui/react";
import {
  MdSecurity,
  MdCheckCircle,
  MdAssessment,
  MdVisibility,
  MdIntegrationInstructions,
} from "react-icons/md";
import NextLink from "next/link";

export default function CyberRiskManagement() {
  const bg = useColorModeValue("gray.50", "gray.900");
  const cardBg = useColorModeValue("orange.50", "gray.800"); // 🔥 changed from white → orange.50
  const textColor = useColorModeValue("gray.700", "gray.300");

  const coreServices = [
    {
      icon: MdSecurity,
      title: "Cybersecurity Risk Assessments",
      points: [
        "➥ Comprehensive evaluation of security posture",
        "➥ Identify threats across networks & cloud",
        "➥ Risk scoring & prioritization",
        "➥ Actionable insights & roadmap",
      ],
      benefit:
        "Enables proactive defense and strategic investment in cybersecurity.",
    },
    {
      icon: MdAssessment,
      title: "Compliance Readiness",
      points: [
        "➥ Gap analysis: ISO27001, HIPAA, GDPR, PCI-DSS, SOC 2",
        "➥ Policy & procedure development",
        "➥ Mock audits & readiness checks",
        "➥ Continuous monitoring & reporting",
      ],
      benefit:
        "Ensures smooth audits, avoids penalties, and builds stakeholder trust.",
    },
    {
      icon: MdVisibility,
      title: "IT Audit",
      points: [
        "➥ Review IT governance, policies, controls",
        "➥ Assess data integrity & infrastructure",
        "➥ Evaluate access controls & security",
        "➥ Performance improvement recommendations",
      ],
      benefit:
        "Enhances IT reliability and ensures alignment with business goals.",
    },
    {
      icon: MdIntegrationInstructions,
      title: "AI Risk Management",
      points: [
        "➥ Identify AI system & automation risks",
        "➥ Address bias, transparency & accountability",
        "➥ Secure AI/ML pipelines",
        "➥ Comply with AI governance frameworks",
      ],
      benefit:
        "Builds trustworthy AI systems that are safe, fair, and compliant.",
    },
  ];

  return (
    <Box bg={bg} pt={{ base: 12, md: 24 }} pb={16}>
      {/* Hero Section */}
      <Box
        bgGradient="linear(to-r, orange.600, orange.400)"
        color="white"
        py={12}
      >
        <Container maxW="5xl" textAlign="center">
          <Heading fontSize={{ base: "3xl", md: "4xl" }} mb={4}>
            🔐 Cyber Risk Management Services 
          </Heading>
        </Container>
      </Box>

      {/* Why Choose Section */}
      <Container maxW="5xl" py={8}>
        <Box
          bg={cardBg}
          p={8}
          rounded="xl"
          boxShadow="md"
          textAlign="center"
        >
          <Heading size="lg" mb={4}>
            Why Choose Shajag Systems and Services?
          </Heading>
          <Text
            color={textColor}
            fontSize={{ base: "md", md: "lg" }}
            maxW="3xl"
            mx="auto"
          >
            In today’s hyper-connected digital environment, cyber threats evolve
            daily, putting organizations at constant risk. At Shajag Systems and
            Services, we go beyond conventional security by offering a holistic,
            risk-based approach. Our team combines global cybersecurity
            expertise, advanced technologies, and regulatory knowledge to
            safeguard your business while ensuring compliance with industry
            standards.
          </Text>
        </Box>
      </Container>

      {/* Divider */}
      <Divider my={8} />

      {/* Core Services */}
      <Container maxW="6xl" py={8}>
        <Heading size="lg" mb={6} textAlign="center">
          Our Core Service Areas
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          {coreServices.map((svc) => (
            <Box
              key={svc.title}
              bg={cardBg}
              p={6}
              rounded="xl"
              boxShadow="md"
              _hover={{ boxShadow: "xl", transform: "translateY(-4px)" }}
              transition="all 0.3s"
            >
              <Flex align="center" mb={4}>
                <Box bg="orange.100" p={2} rounded="md" mr={3}>
                  <Icon as={svc.icon} boxSize={6} color="orange.500" />
                </Box>
                <Heading size="md">{svc.title}</Heading>
              </Flex>
              <VStack align="start" spacing={1} mb={4}>
                {svc.points.map((point, index) => (
                  <Text key={index} color={textColor} fontSize="sm">
                    {point}
                  </Text>
                ))}
              </VStack>
              <Text fontWeight="semibold" color="orange.600">
                ✅ Benefit: {svc.benefit}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>

      {/* Divider */}
      <Divider my={8} />

      {/* Approach + Why Partner Section */}
      <Container maxW="5xl" py={8}>
        <Box
          bg={cardBg}
          p={8}
          rounded="xl"
          boxShadow="md"
        >
          <VStack spacing={8} align="stretch">
            <Box textAlign="center">
              <Heading size="lg">Our Approach</Heading>
              <Text fontWeight="bold" color="orange.500" fontSize="lg" mt={2}>
                Assess → Protect → Monitor → Evolve
              </Text>
            </Box>

            <Divider />

            <Box>
              <Heading size="lg" mb={4}>
                Why Partner with Us?
              </Heading>
              <VStack align="start" spacing={3}>
                <HStack>
                  <Text fontSize="lg" mr={2} color="orange.500">
                    ✓
                  </Text>
                  <Text>Certified Experts (CISSP, CISA, CEH)</Text>
                </HStack>
                <HStack>
                  <Text fontSize="lg" mr={2} color="orange.500">
                    ✓
                  </Text>
                  <Text>Proven Frameworks & Methodologies</Text>
                </HStack>
                <HStack>
                  <Text fontSize="lg" mr={2} color="orange.500">
                    ✓
                  </Text>
                  <Text>End-to-End Risk Management Solutions</Text>
                </HStack>
                <HStack>
                  <Text fontSize="lg" mr={2} color="orange.500">
                    ✓
                  </Text>
                  <Text>Tailored Strategies for Your Industry</Text>
                </HStack>
              </VStack>
            </Box>
          </VStack>
        </Box>
      </Container>

      {/* Call to action */}
      <Container maxW="4xl" py={8} textAlign="center">
        <Button
          as={NextLink}
          href="/contact"
          size="lg"
          colorScheme="orange"
          rounded="xl"
          px={10}
        >
          Get in Touch
        </Button>
      </Container>
    </Box>
  );
}
