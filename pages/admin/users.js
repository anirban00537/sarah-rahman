import {
  Flex,
  Input,
  Text,
  Button,
  Select,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Image,
} from "@chakra-ui/react";

import UserProfile from "../../components/Admin/UserProfile";
const users = () => {
  return (
    <Flex colorScheme="gray.50" flexDirection="column" minHeight="100vh">
      <Flex justifyContent="space-between" width="100%" mt="30px">
        <Text ml="40px" fontSize="25px">
          Users List
        </Text>
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
          <TableCaption>All Available Users Request List</TableCaption>
          <Thead>
            <Tr>
              <Th fontSize="15px" fontWeight="semibold">
                User ID
              </Th>
              <Th fontSize="15px" fontWeight="semibold">
                User Name
              </Th>
              <Th fontSize="15px" fontWeight="semibold">
                Name
              </Th>
              <Th fontSize="15px" fontWeight="semibold">
                Email
              </Th>
              <Th fontSize="15px" fontWeight="semibold">
                Phone Number
              </Th>
              <Th fontSize="15px" fontWeight="semibold">
                Address
              </Th>
              <Th fontSize="15px" fontWeight="semibold">
                Profile
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {/* Another one */}
            <Tr>
              <Td>#jkanskjdn</Td>
              <Td>Anirban00537</Td>
              <Td>Anirban Roy</Td>
              <Td>anirban@gmail.com</Td>
              <Td>0198362873</Td>
              <Td>11 moulovi para khulna road 22 gorib lane</Td>
              <Td color="green.300" fontWeight="bold">
                <UserProfile />
              </Td>
            </Tr>
            {/* Another one */}
          </Tbody>
        </Table>
      </Flex>
      {/* card Body ends */}
    </Flex>
  );
};

export default users;
