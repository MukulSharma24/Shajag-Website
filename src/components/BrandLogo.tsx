// In your BrandLogo component:
import { Box } from "@chakra-ui/react";
import Image from "next/image";

export default function BrandLogo() {
    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            // Keep the header short, but allow logo to overflow a bit
            h={{ base: "60px", md: "68px" }}
            w={{ base: "90px", md: "120px" }}
            position="relative"
            overflow="visible"
        >
            <Image
                src="/Shajag.svg"
                alt="Brand logo"
                width={90}
                height={90}
                style={{
                    objectFit: "contain",
                    height: "80px",        // Larger than header height
                    width: "auto",
                    marginTop: "-12px",    // Shift up (optional, for perfect vertical centering)
                }}
                priority
            />
        </Box>
    );
}
