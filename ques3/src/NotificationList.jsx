import { useContext } from "react";
import { NotificationContext } from "./NotificationContext";
import { Box, Button, VStack, Text, Divider } from "@chakra-ui/react";

const NotificationList = () => {
  const { notifications, markAllAsRead, stopNotifications } =
    useContext(NotificationContext);

  return (
    <Box p="4" shadow="md" borderWidth="1px" borderRadius="md" w="100%">
      <Text fontSize="xl" fontWeight="bold" mb="3">
        Notifications
      </Text>
      <VStack align="stretch" spacing={2}>
        {notifications.length === 0 ? (
          <Text>No notifications yet.</Text>
        ) : (
          notifications.map((n) => (
            <Box
              key={n.id}
              p="2"
              borderRadius="md"
              bg={n.read ? "gray.100" : "yellow.100"}
              fontWeight={n.read ? "normal" : "bold"}
            >
              {n.message}
            </Box>
          ))
        )}
      </VStack>
      <Divider my="3" />
      <Button size="sm" mr="2" onClick={markAllAsRead} colorScheme="blue">
        Mark All as Read
      </Button>
      <Button size="sm" onClick={stopNotifications} colorScheme="red">
        Stop Notifications
      </Button>
    </Box>
  );
};

export default NotificationList;
