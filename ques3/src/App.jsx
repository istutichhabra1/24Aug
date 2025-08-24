import { ChakraProvider, Container, Heading } from "@chakra-ui/react";
import NotificationList from "./NotificationList";

function App() {
  return (
    <ChakraProvider>
      <Container maxW="md" py="6">
        <Heading mb="6" textAlign="center">
          Notification System 🔔
        </Heading>
        <NotificationList />
      </Container>
    </ChakraProvider>
  );
}

export default App;
