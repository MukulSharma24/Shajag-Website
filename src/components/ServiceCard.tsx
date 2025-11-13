"use client";

import { motion } from "framer-motion";
import {
    Box,
    Text,
    Heading,
    HStack,
    useColorModeValue,
    Link as ChakraLink,
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
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import NextLink from "next/link";

interface ServiceCardProps {
    iconName: string;
    title: string;
    description: string;
    link?: string;
}

const iconMap: Record<string, LucideIcon> = {
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
};

const MotionBox = motion(Box);

const ServiceCard = ({ iconName, title, description, link }: ServiceCardProps) => {
    const Icon = iconMap[iconName];
    const iconBg = useColorModeValue("orange.50", "orange.900");
    const iconColor = useColorModeValue("orange.500", "orange.300");
    const cardBg = useColorModeValue("white", "gray.800");

    return (
        <MotionBox
            bg={cardBg}
            borderRadius="2xl"
            boxShadow="md"
            p={8}
            whileHover={{ y: -6, scale: 1.04, boxShadow: "xl" }}
            transition={{ duration: 0.25 }}
            borderTop="4px solid"
            borderColor="orange.400"
            display="flex"
            flexDirection="column"
            alignItems="center"
            minH="400px"
            justifyContent="flex-start"
            textAlign="center"
        >
            {/* Icon */}
            <HStack justify="center" mb={6}>
                <Box
                    boxSize={{ base: "72px", md: "84px" }}
                    bg={iconBg}
                    borderRadius="full"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    color={iconColor}
                >
                    {Icon && <Icon size={48} />}
                </Box>
            </HStack>

            {/* Title */}
            <Heading size="lg" color="gray.900" mb={4}>
                {title}
            </Heading>

            {/* Description */}
            <Text color="gray.600" fontSize="md" mb={6} flex={1} lineHeight="tall">
                {description}
            </Text>

            {/* Learn More link */}
            <ChakraLink
                as={NextLink}
                href={link || "/services"}
                color="orange.600"
                fontWeight="semibold"
                fontSize="md"
                _hover={{ color: "orange.700", textDecoration: "underline" }}
                mt="auto"
            >
                Learn More →
            </ChakraLink>
        </MotionBox>
    );
};

export default ServiceCard;