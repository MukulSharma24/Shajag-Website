"use client";

import NextLink from "next/link";
import {
  Box,
  Container,
  Grid,
  GridItem,
  Text,
  VStack,
  HStack,
  Link,
  Divider,
  Icon,
  Heading,
} from "@chakra-ui/react";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  const serviceLinks = [
    { href: "/services", label: "Data Visualization" },
    { href: "/services", label: "Cloud Infrastructure" },
    { href: "/services", label: "IoT Solutions" },
    { href: "/services", label: "Digital Marketing" },
    { href: "/services", label: "AI & Analytics" },
  ];

  const industryLinks = [
    { href: "/services", label: "Healthcare" },
    { href: "/services", label: "Finance" },
    { href: "/services", label: "Manufacturing" },
    { href: "/services", label: "Retail" },
    { href: "/services", label: "Education" },
  ];

  return (
    <Box as="footer" bg="gray.900" color="white" py={16}>
      <Container maxW="7xl">
        <Grid templateColumns={{ base: "1fr", md: "repeat(2,1fr)", lg: "repeat(4,1fr)" }} gap={10}>
          {/* Company Info */}
          <GridItem>
            <Heading size="lg" mb={4} bgGradient="linear(to-r, #10b981, #f97316)" bgClip="text">
              Shajag Systems And Services
            </Heading>
            <Text color="gray.400" mb={6}>
              Empowering organizations with cutting-edge technology solutions that
              drive growth, efficiency, and competitive advantage in the digital era.
            </Text>
            <HStack spacing={4}>
              {socialLinks.map(({ icon, href, label }) => (
                <Link key={label} href={href} aria-label={label} color="gray.400" _hover={{ color: "white" }}>
                  <Icon as={icon} boxSize={5} />
                </Link>
              ))}
            </HStack>
          </GridItem>

          {/* Services */}
          <GridItem>
            <Heading size="md" mb={4}>
              Services
            </Heading>
            <VStack align="start" spacing={2}>
              {serviceLinks.map((link) => (
                <Link
                  key={link.label}
                  as={NextLink}
                  href={link.href}
                  color="gray.400"
                  _hover={{ color: "white" }}
                >
                  {link.label}
                </Link>
              ))}
            </VStack>
          </GridItem>

          {/* Industries */}
          <GridItem>
            <Heading size="md" mb={4}>
              Industries
            </Heading>
            <VStack align="start" spacing={2}>
              {industryLinks.map((link) => (
                <Link
                  key={link.label}
                  as={NextLink}
                  href={link.href}
                  color="gray.400"
                  _hover={{ color: "white" }}
                >
                  {link.label}
                </Link>
              ))}
            </VStack>
          </GridItem>

          {/* Contact */}
          <GridItem>
            <Heading size="md" mb={4}>
              Contact
            </Heading>
            <VStack align="start" spacing={3}>
              <HStack align="center" spacing={3}>
                <Icon as={Mail} boxSize={5} color="gray.400" />
                <Link
                  href="mailto:hello@shajag.com"
                  color="gray.400"
                  _hover={{ color: "white" }}
                >
                  hello@shajag.com
                </Link>
              </HStack>
              <HStack align="center" spacing={3}>
                <Icon as={Phone} boxSize={5} color="gray.400" />
                <Link
                  href="tel:+919812451305"
                  color="gray.400"
                  _hover={{ color: "white" }}
                >
                  +91 98124 51305
                </Link>
              </HStack>
              <HStack align="flex-start" spacing={3}>
                <Icon as={MapPin} boxSize={5} color="gray.400" mt={1} />
                <Text color="gray.400">
                NDM - 1, NSP, New Delhi - 110034
          <br />
          Spaze Tower, Gurugram
                </Text>
              </HStack>
            </VStack>
          </GridItem>
        </Grid>

        {/* Bottom Bar */}
        <Divider borderColor="gray.700" my={10} />
        <Text textAlign="center" color="gray.400">
          &copy; {new Date().getFullYear()} Shajag Systems And Services. All rights reserved.
        </Text>
      </Container>
    </Box>
  );
};

export default Footer;
