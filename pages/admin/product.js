import {
    Flex,
    Input,
    Text,
    Button,
    Select,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
} from "@chakra-ui/react";
import Head from 'next/head'
import AddProduct from "../../components/Admin/Modal/AddProduct";
import ProductDetails from "../../components/Admin/Modal/ProductDetails"

const List = () => {
    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
            </Head>
            <Flex colorScheme="gray.50" flexDirection="column" minHeight="100vh">
                <Flex justifyContent="space-between" width="100%" mt="30px">
                    <Text ml="40px" fontSize="25px">
                        Product List
                    </Text>
                    <AddProduct />
                </Flex>
                {/* card Body */}
                <Flex
                    mt="40px"
                    m="40px"
                    borderWidth="1px"
                    p="20px"
                    borderRadius="10px"
                    flexDirection="column"
                >
                    {/* list Search and filter */}
                    <Flex justifyContent="space-between">
                        <Input variant="filled" width="200px" placeholder="Search" />
                        <Flex>
                            <Select placeholder="Filter">
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </Select>
                            <Select placeholder="Row">
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </Select>
                        </Flex>
                    </Flex>
                    {/* list Search and filter ends */}
                    {/* List starts here */}
                    <Table mt="30px" variant="striped" colorScheme="gray">
                        <TableCaption>All Available Craft List</TableCaption>
                        <Thead>
                            <Tr>
                                <Th>Product Name</Th>
                                <Th>Price</Th>
                                <Th>Discount</Th>
                                <Th>Quantity</Th>
                                <Th>Category</Th>
                                <Th>SubCategory</Th>
                                <Th>Action</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>Candy Floss Bae</Td>
                                <Td>54,000 BDT</Td>
                                <Td>500 BDT</Td>
                                <Td>1 Pcs</Td>
                                <Td>Groom</Td>
                                <Td>Groom Courture </Td>
                                <Td fontWeight="bold">
                                    <Flex>
                                        <ProductDetails />
                                        <Text marginRight="15px" color="green.300" as="p"><i class="fas fa-edit"></i></Text>
                                        <Text color="red.300" as="p"><i class="fas fa-trash"></i></Text>
                                    </Flex>
                                </Td>

                                <Td color="blue.300" fontWeight="bold">
                                    {/* <ProductDetailsModel /> */}
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </Flex>
                {/* card Body ends */}
            </Flex>
        </>
    );
};

export default List;
