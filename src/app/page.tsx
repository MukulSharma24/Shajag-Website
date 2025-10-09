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
} from "@chakra-ui/react";

import StatsSection from "../components/StatsSection";
import ServiceCard from "../components/ServiceCard";
import TestimonialCard from "../components/TestimonialCard";
import Link from "next/link"

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
  },
  {
    text: "The IoT solution implemented by Shajag has revolutionized our patient monitoring system. Real-time data insights have improved our response times dramatically.",
    author: "Dr. Priya Sharma",
    company: "IT Director, HealthFirst Hospitals",
  },
  {
    text: "Their Industry 4.0 solutions have transformed our production line. Predictive maintenance has reduced downtime by 50% and saved us millions in potential losses.",
    author: "Michael Chen",
    company: "Operations Manager, Global Manufacturing Ltd",
  },
  {
  text: "Shajag's expertise in regulatory compliance and data security is exceptional. They helped us achieve 100% compliance while modernizing our entire digital infrastructure.",
    author: "Sarah Johnson",
    company: "Head of Technology, FinanceSecure Bank",
  },
  {
    text: "The e-learning platform developed by Shajag has increased student engagement by 70%. Their team understood our vision perfectly and delivered beyond expectations.",
      author: "Dr. Amit Patel",
      company: "CEO, EduTech Solutions",
    },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Box
        as="section"
        bgGradient="linear(135deg,rgba(230, 154, 131, 0.88) 0%,rgba(200, 94, 41, 0.92) 100%)"
        color="white"
        py={{ base: 16, md: 28 }}
      >
        <Container maxW="7xl" textAlign="center">
          <VStack spacing={6} maxW="3xl" mx="auto">
            <Heading
              as="h1"
              size="2xl"
              lineHeight="short"
              fontWeight="extrabold"
            >
              Transforming Businesses Through Innovative Technology Solutions
            </Heading>

            <Text fontSize={{ base: "md", md: "lg" }} color="whiteAlpha.900">
              Empower your organization with cutting-edge technology that drives
              growth, efficiency, and competitive advantage in the digital era.
              Join 100+ companies who trust us to deliver exceptional results.
            </Text>

            <HStack spacing={4} pt={4}>
            <Button as={Link} href="/about" 
                px={8}
                py={3}
                rounded="full"
                bgGradient="linear(to-r, red.500, orange.500)"
                color="white"
                fontWeight="semibold"
                _hover={{ transform: "scale(1.03)", shadow: "lg" }}
              >
               Explore More
              </Button>

             {/*  <Button
                px={8}
                py={3}
                rounded="full"
                variant="outline"
                borderColor="whiteAlpha.800"
                color="white"
                _hover={{ bg: "whiteAlpha.200" }}
              >
                Explore More
              </Button> */}
            </HStack>
          </VStack>
        </Container>
      </Box>

      {/* Stats Section */}
      <Box as="section" bg="white" py={{ base: 12, md: 20 }}>
        <Container maxW="7xl">
          <SimpleGrid
            columns={{ base: 2, md: 4 }}
            spacing={{ base: 8, md: 12 }}
            textAlign="center"
          >
            {[
              { value: "100+", label: "Happy Clients" },
              { value: "50+", label: "Expert Team" },
              { value: "7", label: "Years Experience" },
              { value: "24/7", label: "Support" },
            ].map((stat) => (
              <VStack key={stat.label} spacing={2}>
                <Heading size="2xl" color="orange.600">
                  {stat.value}
                </Heading>
                <Text fontSize="lg" color="gray.600" fontWeight="medium">
                  {stat.label}
                </Text>
              </VStack>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Services Section */}
      <Box as="section" bg="gray.50" py={{ base: 12, md: 20 }}>
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
        />
      ))}
    </SimpleGrid>

  </Container>
</Box>
      {/* Testimonials Section */}
      <Box
        as="section"
        bgGradient="linear(to-r, orange.600, orange.800)"
        color="white"
        py={{ base: 12, md: 20 }}
      >
        <Container maxW="7xl">
          <VStack spacing={6} textAlign="center" mb={12}>
            <Heading size="xl">What Our Clients Say</Heading>
            <Text fontSize="lg" opacity={0.9} maxW="3xl">
              Don't just take our word for it. See how we've transformed
              businesses and delivered exceptional results.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                text={testimonial.text}
                author={testimonial.author}
                company={testimonial.company}
              />
             
            ))}
          </SimpleGrid>
        </Container>
      </Box>
      
    </>
    
  );
}
