import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Text,
    Grid,
    Flex,
    Box,
    Badge,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

const ProductDetails = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Text onClick={onOpen} marginRight="15px" color="blue.300" as="p"><i class="fas fa-eye"></i></Text>

            <Modal isOpen={isOpen} onClose={onClose} size="5xl">
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Product Details</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Grid templateColumns="3fr 1fr">
                            <Grid
                                templateColumns="1fr 5fr"
                                p="20px"
                                borderWidth="1px"
                                mr="10px"
                            >
                                <Box>
                                    <Image
                                        boxSize="100px"
                                        objectFit="cover"
                                        src="https://i1.wp.com/saharrahman.online/wp-content/uploads/2020/12/IMG_2725-1.jpg?resize=600%2C729&ssl=1"
                                        alt="Segun Adebayo"
                                    />
                                </Box>
                                <Flex
                                    justifyContent="flex-start"
                                    alignItems="flex-start"
                                    flexDirection="column"
                                >
                                    <Text fontSize="x-large" mb="10px">
                                        Candy Floss Bae
                                    </Text>
                                    <Badge colorScheme="green">Available</Badge>
                                    <Box mt="10px">
                                        <Text fontWeight="bold">Category</Text>
                                        <Text>Groom</Text>
                                    </Box>
                                    <Box mt="10px">
                                        <Text fontWeight="bold">SubCategory</Text>
                                        <Text>Groom Courture</Text>
                                    </Box>
                                    <Box mt="10px">
                                        <Text fontWeight="bold">Price</Text>
                                        <Text>1300Tk</Text>
                                    </Box>
                                    <Box mt="10px">
                                        <Text fontWeight="bold">Product Details</Text>
                                        <Text>
                                            Lorem Ipsum has been the industry's standard dummy text
                                            ever since the 1500s when an unknown printer took a galley
                                            of type and scrambled it to make a type specimen book.
                                        </Text>
                                    </Box>
                                </Flex>
                            </Grid>
                            <Flex
                                justifyContent="flex-start"
                                alignItems="flex-start"
                                flexDirection="column"
                                p="20px"
                                borderWidth="1px"
                            >
                                <Text fontSize="x-large" mb="10px">
                                    Others Info
                                </Text>

                                <Box mt="10px">
                                    <Text fontWeight="bold">Ouantity</Text>
                                    <Text>10</Text>
                                </Box>
                                <Box mt="10px">
                                    <Text fontWeight="bold">Discount Amount</Text>
                                    <Text>4tk</Text>
                                </Box>
                            </Flex>
                        </Grid>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default ProductDetails;