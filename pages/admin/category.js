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
import AddSubCatagory from "../../components/Admin/AddSubCatagory";
import AddCatagory from "../../components/Admin/AddCatagory";

const catagory = () => {
  return (
    <div>
      <Flex colorScheme="gray.50" flexDirection="column" minHeight="100vh">
        <Flex
          mt="40px"
          m="40px"
          borderWidth="1px"
          p="20px"
          borderRadius="10px"
          flexDirection="column"
        >
          <Flex justifyContent="space-between" width="100%" mb="20px">
            <Text fontSize="25px">Catagory List</Text>
          </Flex>
          <Flex justifyContent="space-between">
            <Input variant="filled" width="200px" placeholder="Search" />
            <Flex>
              <AddCatagory />
            </Flex>
          </Flex>

          <Flex>
            <Table mt="30px" variant="striped" colorScheme="gray">
              <TableCaption>All Available Catagory List</TableCaption>
              <Thead>
                <Tr>
                  <Th>Title</Th>
                  <Th>Action</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Men</Td>
                  <Td color="red">Delete</Td>
                </Tr>
              </Tbody>
            </Table>
          </Flex>
        </Flex>

        <Flex
          mt="40px"
          m="40px"
          borderWidth="1px"
          p="20px"
          borderRadius="10px"
          flexDirection="column"
        >
          <Flex justifyContent="space-between" width="100%" mb="20px">
            <Text fontSize="25px">Sub Catagory List</Text>
          </Flex>
          <Flex justifyContent="space-between">
            <Input variant="filled" width="200px" placeholder="Search" />
            <Flex>
              <AddSubCatagory />
            </Flex>
          </Flex>
          {/* list Search and filter ends */}
          {/* List starts here */}
          <Flex>
            <Table mt="30px" variant="striped" colorScheme="gray">
              <TableCaption>All Available Sub Catagory List</TableCaption>
              <Thead>
                <Tr>
                  <Th>Title</Th>
                  <Th>Action</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Panjabi</Td>
                  <Td color="red">Delete</Td>
                </Tr>
                <Tr>
                  <Td>Saaree</Td>
                  <Td color="red">Delete</Td>
                </Tr>
                <Tr>
                  <Td>Saloar</Td>
                  <Td color="red">Delete</Td>
                </Tr>
              </Tbody>
            </Table>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
};

export default catagory;
