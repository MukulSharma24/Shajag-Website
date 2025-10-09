"use client"

import { Box, Container, Heading, Text, SimpleGrid, VStack, HStack, Avatar } from "@chakra-ui/react";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "Shajag transformed our data infrastructure completely. Their team's expertise in cloud migration helped us reduce costs by 40% while improving performance significantly.",
    author: "Sarah Johnson",
    title: "CTO",
    company: "Global Manufacturing Inc.",
    image: "/api/placeholder/300/300",
  },
  {
    text: "The IoT solution implemented by Shajag has revolutionized our patient monitoring system. Real-time data insights have improved our response times dramatically.",
    author: "Dr. Michael Chen",
    title: "Head of Digital Health",
    company: "Healthcare Solutions Ltd.",
    image: "/api/placeholder/300/300",
  },
  {
    text: "Their Industry 4.0 solutions have transformed our production line. Predictive maintenance has reduced downtime by 50% and saved us millions in potential losses.",
    author: "Robert Martinez",
    title: "VP of Operations",
    company: "Advanced Manufacturing Corp.",
    image: "/api/placeholder/300/300",
  }
];

export default function Testimonials() {
  return (
    <Box pt={{ base: 20, md: 24 }} bg="gray.50" minH="100vh">
      <Container maxW="6xl" py={16}>
        <VStack spacing={6} textAlign="center" mb={12}>
          <Heading size="2xl" color="orange.700">What Our Clients Say</Heading>
          <Text fontSize="lg" color="gray.600" maxW="3xl" mx="auto">
            Don&apos;t just take our word for it. See how we&apos;ve helped clients transform their business with exceptional technology and service.
          </Text>
        </VStack>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} width="100%">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <VStack
                bg="white"
                borderRadius="2xl"
                boxShadow="xl"
                p={8}
                spacing={5}
                textAlign="left"
                align="stretch"
                h="100%"
              >
                <Text fontSize="lg" color="gray.700" mb={4}>"{t.text}"</Text>
                <Box mt="auto">
                  <HStack spacing={4}>
                    <Avatar name={t.author} src={t.image} />
                    <VStack align="start" spacing={0}>
                      <Text fontWeight="bold" color="gray.900">{t.author}</Text>
                      <Text fontSize="sm" color="gray.500">{t.title}, {t.company}</Text>
                    </VStack>
                  </HStack>
                </Box>
              </VStack>
            </motion.div>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
