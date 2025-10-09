"use client";

import { motion } from "framer-motion";
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  HStack,
  Stack,
  Divider,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import { Users, Target, Award, Lightbulb, Heart, Shield } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We constantly push the boundaries of technology to deliver cutting-edge solutions that drive business transformation.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "Our commitment to quality and attention to detail ensures we deliver exceptional results that exceed expectations.",
    },
    {
      icon: Shield,
      title: "Integrity",
      description:
        "We build trust through transparency, honesty, and ethical business practices in every client interaction.",
    },
    {
      icon: Heart,
      title: "Customer Success",
      description:
        "Your success is our mission. We partner with you to achieve your goals and drive sustainable growth.",
    },
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      bio: "15+ years in technology leadership, previously at Microsoft and Google.",
      image: "/api/placeholder/300/300",
    },
    {
      name: "Michael Chen",
      role: "CTO",
      bio: "Expert in cloud architecture and AI systems, former Amazon Web Services principal engineer.",
      image: "/api/placeholder/300/300",
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Design",
      bio: "Award-winning UX designer with expertise in human-centered design and digital experiences.",
      image: "/api/placeholder/300/300",
    },
    {
      name: "David Kumar",
      role: "VP of Engineering",
      bio: "Full-stack development expert with extensive experience in scalable enterprise solutions.",
      image: "/api/placeholder/300/300",
    },
  ];

  const milestones = [
    {
      year: "2018",
      event: "Company Founded",
      description:
        "Started with a vision to transform businesses through technology",
    },
    {
      year: "2019",
      event: "First Major Client",
      description:
        "Successfully delivered cloud migration for Fortune 500 company",
    },
    {
      year: "2020",
      event: "Team Expansion",
      description:
        "Grew to 25+ certified experts across multiple technologies",
    },
    {
      year: "2021",
      event: "AI Division Launch",
      description:
        "Established dedicated AI and machine learning practice",
    },
    {
      year: "2022",
      event: "100+ Clients",
      description:
        "Reached milestone of serving over 100 satisfied clients",
    },
    {
      year: "2023",
      event: "Global Partnerships",
      description:
        "Formed strategic partnerships with Microsoft, Google, and AWS",
    },
    {
      year: "2024",
      event: "Innovation Hub",
      description:
        "Opened research and development center focused on emerging technologies",
    },
  ];

  // Home stats
  const stats = [
    { label: "Happy Clients", value: "100+" },
    { label: "Expert Team", value: "50+" },
    { label: "Years Experience", value: "7" },
    { label: "Support", value: "24/7" },
  ];

  const heroGradient = "linear(to-r, orange.600, green.400)";

  return (
    <Box pt={{ base: 20, md: 24 }}>
      {/* Hero Section */}
      <Box
        bgGradient={heroGradient}
        color="white"
        py={{ base: 16, md: 24 }}
        mb={0}
      >
        <Container maxW="6xl">
          <SimpleGrid
            columns={{ base: 1, lg: 2 }}
            spacing={12}
            alignItems="center"
          >
            {/* Left: Title, intro, stats */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Heading as="h1" size="2xl" mb={6} fontWeight="bold">
                About Shajag
              </Heading>
              <Text fontSize="xl" mb={8} opacity={0.9}>
                Since 2018, we've been pioneering technology solutions that transform businesses and drive unprecedented growth.
              </Text>
              <SimpleGrid columns={{ base: 2, sm: 2, md: 4 }} spacing={6}>
                {stats.map((stat, i) => (
                  <VStack key={i}>
                    <Text fontSize="3xl" fontWeight="bold" color="yellow.300">
                      {stat.value}
                    </Text>
                    <Text fontSize="sm" color="whiteAlpha.900">{stat.label}</Text>
                  </VStack>
                ))}
              </SimpleGrid>
            </motion.div>
            {/* Right: Mission Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Box
                bg="whiteAlpha.200"
                backdropBlur="md"
                rounded="2xl"
                p={8}
                borderWidth="1px"
                borderColor="whiteAlpha.300"
                color="white"
                textAlign="center"
              >
                <Users size={64} color="#FBBF24" style={{ marginBottom: 24 }} />
                <Heading as="h3" size="xl" mb={4} color="white">
                  Our Mission
                </Heading>
                <Text opacity={0.9}>
                  To empower organizations with cutting-edge technology solutions that drive growth, efficiency, and competitive advantage in the digital era.
                </Text>
              </Box>
            </motion.div>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Vision Section */}
      <Box py={16} bg="white">
        <Container maxW="6xl">
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12} alignItems="center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Box
                bg="gray.50"
                rounded="2xl"
                p={8}
                textAlign="center"
                h="100%"
              >
                <Target size={64} color="#f0911d" style={{ marginBottom: 24 }} />
                <Heading as="h3" size="lg" color="gray.900" mb={4}>
                  Our Vision
                </Heading>
                <Text color="gray.600" fontSize="lg">
                  To be the leading technology partner for businesses worldwide, pioneering innovative solutions that shape the future of digital transformation.
                </Text>
              </Box>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Box>
                <Heading as="h2" size="xl" color="gray.900" mb={6}>
                  Leading the Digital Revolution
                </Heading>
                <Text color="gray.700" fontSize="lg" mb={6}>
                  We believe that technology should be a catalyst for positive change. Our team of certified experts works tirelessly to deliver solutions that not only meet today's challenges but anticipate tomorrow's opportunities.
                </Text>
                <Text color="gray.700" fontSize="lg">
                  From startups to Fortune 500 companies, we've helped organizations across industries harness the power of technology to achieve their most ambitious goals.
                </Text>
              </Box>
            </motion.div>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Values Section */}
      <Box py={16} bg="gray.50">
        <Container maxW="7xl">
          <VStack spacing={6} textAlign="center" mb={12}>
            <Heading size="xl" color="gray.900">Our Values</Heading>
            <Text fontSize="xl" color="gray.600" maxW="4xl" mx="auto">
              Innovation, Excellence, Integrity, and Customer Success drive everything we do. We deliver solutions that create lasting value.
            </Text>
          </VStack>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <VStack
                  bg="white"
                  py={8}
                  px={4}
                  borderRadius="2xl"
                  boxShadow="lg"
                  textAlign="center"
                  spacing={4}
                  h="100%"
                >
                  <Box color="orange.500" mb={2}>{<value.icon size={48} />}</Box>
                  <Heading size="md" color="gray.900">{value.title}</Heading>
                  <Text color="gray.600" fontSize="md">{value.description}</Text>
                </VStack>
              </motion.div>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Timeline Section */}
      <Box py={16} bg="white">
        <Container maxW="6xl">
          <VStack textAlign="center" mb={12} spacing={5}>
            <Heading size="xl" color="gray.900">Our Journey</Heading>
            <Text fontSize="xl" color="gray.600" maxW="4xl" mx="auto">
              From humble beginnings to industry leadership, here's how we've grown and evolved over the years.
            </Text>
          </VStack>
          <Box position="relative">
            {/* Center vertical line for desktop */}
            <Box
              display={{ base: "none", lg: "block" }}
              position="absolute"
              left="50%"
              top={0}
              transform="translateX(-50%)"
              h="100%"
              w="2px"
              bg="orange.200"
              zIndex={0}
            />
            <VStack spacing={10} position="relative">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  style={{ width: "100%" }}
                >
                  <Flex
                    justify={
                      { base: "center", lg: index % 2 === 0 ? "flex-end" : "flex-start" } as any
                    }
                  >
                    <Box
                      bg="white"
                      p={6}
                      borderRadius="2xl"
                      boxShadow="lg"
                      borderLeftWidth={index % 2 === 0 ? "8px" : undefined}
                      borderRightWidth={index % 2 !== 0 ? "8px" : undefined}
                      borderColor="orange.300"
                      minW={{ lg: "40%", base: "100%" }}
                      textAlign="left"
                      mb={0}
                    >
                      <Text color="orange.600" fontWeight="bold" mb={1} fontSize="lg">
                        {milestone.year}
                      </Text>
                      <Heading size="md" mb={2} color="gray.900">
                        {milestone.event}
                      </Heading>
                      <Text color="gray.700">{milestone.description}</Text>
                    </Box>
                  </Flex>
                </motion.div>
              ))}
            </VStack>
          </Box>
        </Container>
      </Box>

      {/* Team Section */}
      {/* <Box py={16} bg="gray.50">
        <Container maxW="7xl">
          <VStack spacing={6} textAlign="center" mb={12}>
            <Heading size="xl" color="gray.900">
              Meet Our Team
            </Heading>
            <Text fontSize="xl" color="gray.600" maxW="4xl" mx="auto">
              Our diverse team of experts brings together decades of experience in technology, design, and business strategy.
            </Text>
          </VStack>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <VStack
                  bg="white"
                  borderRadius="2xl"
                  boxShadow="lg"
                  overflow="hidden"
                  spacing={0}
                  h="100%"
                  align="stretch"
                >
                  <Box h="48" w="100%" bgGradient="linear(to-br, orange.400, green.500)" />
                  <Box p={6} h="100%">
                    <Heading size="md" mb={1} color="gray.900">
                      {member.name}
                    </Heading>
                    <Text color="orange.600" fontWeight="semibold" mb={4}>
                      {member.role}
                    </Text>
                    <Text color="gray.600" fontSize="sm">
                      {member.bio}
                    </Text>
                  </Box>
                </VStack>
              </motion.div>
            ))}
          </SimpleGrid>
        </Container>
      </Box> */}
    </Box>
  );
}
