import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Box,
  Text,
  Flex,
  Image,
  Grid,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Badge,
} from "@chakra-ui/react";
const UserProfile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Text onClick={onOpen}>View</Text>

      <Modal isOpen={isOpen} size="3xl" onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>User Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex
              alignItems="flex-start"
              justifyContent="flex-start"
              width="100%"
              padding="10px"
              borderRadius="10px"
            >
              <Box mr="20px">
                <Image
                  borderRadius="full"
                  boxSize="80px"
                  src="https://i.pinimg.com/736x/eb/5b/11/eb5b117ad5e5c2f88fd4440d0ae250d8.jpg"
                  alt="Segun Adebayo"
                  ml="5px"
                />
              </Box>

              <Table variant="simple">
                <Tbody>
                  <Tr>
                    <Td>User Name</Td>
                    <Td>Nabila@gmail.com</Td>
                  </Tr>
                  <Tr>
                    <Td>Name</Td>
                    <Td>Nabila</Td>
                  </Tr>
                  <Tr>
                    <Td>Gender</Td>
                    <Td>Male</Td>
                  </Tr>

                  <Tr>
                    <Td>Email</Td>
                    <Td>Nabila@gmail.com</Td>
                  </Tr>
                  <Tr>
                    <Td>Phone</Td>
                    <Td>01977735647</Td>
                  </Tr>
                  <Tr>
                    <Td>Address</Td>
                    <Td>11 moulovi para khulna</Td>
                  </Tr>
                  <Tr>
                    <Td>Last Ordered</Td>
                    <Td>11 june 2021</Td>
                  </Tr>
                  <Tr>
                    <Td>Total Completed Order</Td>
                    <Td>20</Td>
                  </Tr>
                </Tbody>
              </Table>
            </Flex>

            {/* <Flex p="20px" justifyContent="space-around" borderWidth="1px">
              <Text fontSize="3xl" ml="30px">
                User ID: #I3sdf5rt
              </Text>
              <Box>
                <Text>Payment Method</Text>
                <Badge fontSize="medium">Bkash</Badge>
                <Text>Bkash Number</Text>
                <Badge fontSize="medium">0162746473883</Badge>
              </Box>
              <Box>
                <Text>User Location</Text>
                <Badge>Hamzarbag,Dhaka,1205</Badge>
                <Text>Map Location</Text>
                <Badge>0162746473883</Badge>
              </Box>
            </Flex> */}
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default UserProfile;
