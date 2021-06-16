import { Button } from "@chakra-ui/button";
import { FormLabel } from "@chakra-ui/form-control";
import { useDisclosure } from "@chakra-ui/hooks";
import { Box, Stack } from "@chakra-ui/layout";
import { AddIcon } from "@chakra-ui/icons"

import {
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
} from "@chakra-ui/modal";
import {
    Checkbox,
    Flex,
    Text,
    Input,
    InputGroup,
    InputLeftAddon,
    InputRightAddon,
    Select,
    Grid,
    Textarea,
} from "@chakra-ui/react";
import { useRef } from "react";
const AddProduct = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const firstField = useRef();
    return (
        <>
            {/* <Button leftIcon={<AddIcon />} colorScheme="teal" onClick={onOpen}>
        Create user
      </Button> */}
            <Button
                colorScheme="blue"
                leftIcon={<AddIcon />}
                onClick={onOpen}
                mr="40px"
            >
                Add Product
            </Button>
            <Drawer
                isOpen={isOpen}
                placement="right"
                initialFocusRef={firstField}
                onClose={onClose}
                size="xl"
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader borderBottomWidth="1px">
                        Create a new Product
                    </DrawerHeader>

                    <DrawerBody>
                        <Grid templateColumns="repeat(2, 50%)">
                            <Stack spacing="24px" m="10px">
                                <Text>Please enter full information below</Text>
                                <Box>
                                    <Input placeholder="Name*" variant="filled" />
                                </Box>

                                <Box>
                                    <Input placeholder="Price*" variant="filled" />
                                </Box>

                                <Box>
                                    <Input placeholder="Discount*" variant="filled" />
                                </Box>

                                <Box>
                                    <Input placeholder="Quantity" variant="filled" />
                                </Box>

                                <Box>
                                    <Select variant="filled" placeholder="Category*" >
                                        <option value="option1">Option 1</option>
                                        <option value="option2">Option 2</option>
                                        <option value="option3">Option 3</option>
                                    </Select>
                                </Box>

                                <Box>
                                    <Select variant="filled" placeholder="SubCategory*" >
                                        <option value="option1">Option 1</option>
                                        <option value="option2">Option 2</option>
                                        <option value="option3">Option 3</option>
                                    </Select>
                                </Box>

                                <Flex justifyContent="space-between">
                                    <Box>
                                        <FormLabel htmlFor="desc">Image</FormLabel>
                                        <input
                                            type="file"
                                            class="form-control"
                                            id="basic-url"
                                            aria-describedby="basic-addon3"
                                        />
                                    </Box>

                                    <Box>
                                        <FormLabel htmlFor="desc">Size Chart</FormLabel>
                                        <input
                                            type="file"
                                            class="form-control"
                                            id="basic-url"
                                            aria-describedby="basic-addon3"
                                        />
                                    </Box>
                                </Flex>

                            </Stack>
                            <Stack spacing="24px" m="10px">
                                <Box>
                                    <Text>Size Chart</Text>
                                    <Box borderRadius="5px" padding="10px" marginTop="10px" border="1px solid">
                                        <Flex justifyContent="space-between">
                                            <Text>Size</Text>
                                            <Text marginRight="35px">Quantity</Text>
                                        </Flex>
                                        <Flex marginTop="5px" justifyContent="space-between">
                                            <Checkbox marginTop="5px" defaultIsChecked>S</Checkbox>
                                            <Input width="100px" type="number" />
                                        </Flex>
                                        <Flex marginTop="5px" justifyContent="space-between">
                                            <Checkbox marginTop="5px" defaultIsChecked>M</Checkbox>
                                            <Input width="100px" type="number" />
                                        </Flex>
                                        <Flex marginTop="5px" justifyContent="space-between">
                                            <Checkbox marginTop="5px" defaultIsChecked>L</Checkbox>
                                            <Input width="100px" type="number" />
                                        </Flex>
                                        <Flex marginTop="5px" justifyContent="space-between">
                                            <Checkbox marginTop="5px" defaultIsChecked>XL</Checkbox>
                                            <Input width="100px" type="number" />
                                        </Flex>
                                        <Flex marginTop="5px" justifyContent="space-between">
                                            <Checkbox marginTop="5px" defaultIsChecked>XXL</Checkbox>
                                            <Input width="100px" type="number" />
                                        </Flex>
                                        <Flex marginTop="5px" justifyContent="space-between">
                                            <Checkbox marginTop="5px" defaultIsChecked>XXXL</Checkbox>
                                            <Input width="100px" type="number" />
                                        </Flex>
                                    </Box>
                                </Box>

                                <Box>
                                    <FormLabel>Description</FormLabel>
                                    <Textarea variant="filled" />
                                </Box>
                            </Stack>
                        </Grid>
                    </DrawerBody>

                    <DrawerFooter borderTopWidth="1px">
                        <Button variant="outline" mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme="blue">Submit</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    );
};

export default AddProduct;