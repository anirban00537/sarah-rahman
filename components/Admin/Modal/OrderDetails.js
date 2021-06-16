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

const OrderDetails = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Text onClick={onOpen} marginRight="15px" color="blue.300" as="p"><i class="fas fa-eye"></i></Text>

            <Modal isOpen={isOpen} size="5xl" onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        <Flex
                            flexDirection="row"
                            justifyContent='space-between'
                            alignItems='center'
                        >
                            <Text color="red.300" fontSize="3xl">#adase</Text>
                            <Text marginRight="25px">Wednesday,5th April 2021 ,6:30 PM</Text>
                        </Flex>
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Grid
                            templateColumns="repeat(3, 1fr)"
                            borderWidth="1px"
                            p="20px"
                            borderRadius="10px"
                        >
                            <Flex
                                flexDirection="column"
                                alignItems="flex-start"
                                justifyContent="flex-start"
                            >
                                <Text fontSize="2xl" fontWeight="bold">
                                    Customer Details
                                </Text>

                                <Badge colorScheme="purple"> #ajkasndjand</Badge>
                                <Text fontSize="medium" pt="7px">
                                    Tahsin Tamanna
                                </Text>
                                <Text fontSize="medium" pt="7px">
                                    Tahsin@gmail.com
                                </Text>
                                <Text fontSize="medium" pt="7px">
                                    0173859673764
                                </Text>
                                <Box>
                                    <Text fontSize="medium" pt="7px" fontWeight="bold">
                                        Address
                                    </Text>
                                    <Text fontSize="medium" pt="7px">
                                        Mohammad pur dhaka
                                    </Text>
                                </Box>
                                <Box>
                                    <Text fontSize="medium" pt="7px" fontWeight="bold">
                                        Order Note
                                    </Text>
                                    <Text fontSize="medium" pt="7px">
                                        Mohammad pur dhaka
                                    </Text>
                                </Box>
                            </Flex>
                            <Flex
                                flexDirection="column"
                                alignItems="flex-start"
                                justifyContent="flex-start"
                            >
                                <Text fontSize="2xl" fontWeight="bold">
                                    Delivered to a different
                                </Text>
                                <Text fontSize="medium" pt="7px">
                                    Tahsin Tamanna
                                </Text>
                                <Text fontSize="medium" pt="7px">
                                    Tahsin@gmail.com
                                </Text>
                                <Text fontSize="medium" pt="7px">
                                    0173859673764
                                </Text>
                                <Box>
                                    <Text fontSize="medium" pt="7px" fontWeight="bold">
                                        Address
                                    </Text>
                                    <Text fontSize="medium" pt="7px">
                                        Mohammad pur dhaka
                                    </Text>
                                </Box>
                            </Flex>
                            <Flex
                                mt="10px"
                                ml="20px"
                                flexDirection="column"
                                borderWidth="1px"
                                p="10px"
                                mt="10px"
                                borderRadius="10px"
                            >
                                <Box>
                                    <Text fontSize="medium" pt="7px" fontWeight="bold">
                                        Payment Method{" "}
                                    </Text>
                                    <Text fontSize="medium" pt="7px">
                                        Bkash{" "}
                                    </Text>
                                </Box>
                                <Box>
                                    <Text fontSize="medium" pt="7px" fontWeight="bold">
                                        Payment Details{" "}
                                    </Text>
                                    <Text fontSize="medium" pt="7px">
                                        01962454844{" "}
                                    </Text>
                                </Box>
                            </Flex>
                        </Grid>
                        <Grid templateColumns="">
                            <Flex
                                flexDirection="column"
                                borderWidth="1px"
                                p="10px"
                                mt="10px"
                                borderRadius="10px"
                            >
                                <Table mt="10px" variant="striped" colorScheme="gray">
                                    <Thead>
                                        <Tr>
                                            <Th>Image</Th>
                                            <Th>Product Name</Th>
                                            <Th>Category</Th>
                                            <Th>SubCategory</Th>
                                            <Th>Size</Th>
                                            <Th>Quantity</Th>
                                            <Th>Unit Price</Th>
                                            <Th>Total</Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        <Tr>
                                            <Td>
                                                <Image
                                                    boxSize="100px"
                                                    objectFit="cover"
                                                    src="https://i1.wp.com/saharrahman.online/wp-content/uploads/2020/12/IMG_2725-1.jpg?resize=600%2C729&ssl=1"
                                                    alt="Segun Adebayo"
                                                />
                                            </Td>
                                            <Td>Candy Floss Bae</Td>
                                            <Td>Groom</Td>
                                            <Td>Groom Courture</Td>
                                            <Td>M</Td>
                                            <Td>02</Td>
                                            <Td>52, 000 BDT</Td>
                                            <Td>52, 000 BDT</Td>
                                        </Tr>
                                    </Tbody>
                                </Table>
                                <Flex mt="10px" flexDirection="column">
                                    <Flex justifyContent="space-between">
                                        <Td ml="30px">Sub Total</Td>
                                        <Td mr="35px">100tk</Td>
                                    </Flex>
                                    <Flex justifyContent="space-between">
                                        <Td ml="30px">Discount</Td>
                                        <Td mr="35px">10 Tk</Td>
                                    </Flex>
                                    <Flex justifyContent="space-between" borderBottomWidth="2px">
                                        <Td ml="30px">Delivery Charge</Td>
                                        <Td mr="35px">10 Tk</Td>
                                    </Flex>
                                    <Flex justifyContent="space-between">
                                        <Td ml="30px">Grand Total</Td>
                                        <Td mr="35px">130 Tk</Td>
                                    </Flex>
                                </Flex>
                            </Flex>
                        </Grid>
                    </ModalBody>

                    <ModalFooter></ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default OrderDetails;