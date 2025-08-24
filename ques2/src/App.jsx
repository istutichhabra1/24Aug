import {
  ChakraProvider,
  Box,
  Flex,
  Grid,
  Button,
  Text,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { ThemeContext } from "./ThemeContext";

function App() {
  const { isLoggedIn, toggleAuth } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  // theme colors
  const bg = theme === "light" ? "gray.100" : "gray.900";
  const textColor = theme === "light" ? "black" : "white";
  const cardBg = theme === "light" ? "white" : "gray.700";
  const footerBg = theme === "light" ? "gray.200" : "gray.800";

  return (
    <ChakraProvider>
      <Flex direction="column" minH="100vh" bg={bg} color={textColor}>
        {}
        <Flex
          as="nav"
          p="4"
          justify="space-between"
          align="center"
          bg={theme === "light" ? "blue.100" : "blue.800"}
        >
          <Text fontWeight="bold">
            Status: {isLoggedIn ? "Logged In ✅" : "Logged Out ❌"}
          </Text>
          <HStack spacing={3}>
            <Button size="sm" onClick={toggleAuth}>
              {isLoggedIn ? "Logout" : "Login"}
            </Button>
            <Button size="sm" onClick={toggleTheme}>
              Switch to {theme === "light" ? "Dark" : "Light"} Mode
            </Button>
          </HStack>
        </Flex>

        {}
        <Flex flex="1">
          {}
          <Box
            as="aside"
            w={{ base: "0", md: "250px" }}
            p="4"
            display={{ base: "none", md: "block" }}
            bg={theme === "light" ? "gray.200" : "gray.700"}
          >
            {isLoggedIn ? (
              <Text>👋 Welcome back, User!</Text>
            ) : (
              <Text>Please log in to continue.</Text>
            )}
          </Box>

          {}
          <Box flex="1" p="4">
            <Grid
              templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }}
              gap="4"
            >
              {["Product A", "Product B", "Product C", "Product D", "Product E"].map(
                (prod, idx) => (
                  <Box
                    key={idx}
                    p="6"
                    shadow="md"
                    borderRadius="md"
                    bg={cardBg}
                  >
                    <Text fontWeight="bold">{prod}</Text>
                  </Box>
                )
              )}
            </Grid>
          </Box>
        </Flex>

        {}
        <Box
          as="footer"
          p="4"
          bg={footerBg}
          textAlign="center"
          mt="auto"
        >
          <Text>© 2025 My Dashboard | Theme: {theme}</Text>
        </Box>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
