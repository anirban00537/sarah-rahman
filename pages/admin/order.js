import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
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
import { ChevronDownIcon } from "@chakra-ui/icons"
import Head from 'next/head';

import OrderDetails from '../../components/Admin/Modal/OrderDetails'
const order = () => {
  return (
    <>

      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
      </Head>

      <Flex colorScheme="gray.50" flexDirection="column" minHeight="100vh">
        <Flex justifyContent="space-between" width="100%" mt="30px">
          <Text ml="40px" fontSize="25px">
            Orders List
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
            <TableCaption>All Available Order List</TableCaption>
            <Thead>
              <Tr>
                <Th fontSize="15px" fontWeight="semibold">
                  Order ID
                </Th>
                <Th fontSize="15px" fontWeight="semibold">
                  Customer ID
                </Th>
                <Th fontSize="15px" fontWeight="semibold">
                  Customer Name
                </Th>
                <Th fontSize="15px" fontWeight="semibold">
                  Product Name
                </Th>
                <Th fontSize="15px" fontWeight="semibold">
                  Quantity
                </Th>
                <Th fontSize="15px" fontWeight="semibold">
                  Order Status
                </Th>
                <Th fontSize="15px" fontWeight="semibold">
                  Price
                </Th>
                <Th fontSize="15px" fontWeight="semibold">
                  Payment Status
                </Th>
                <Th fontSize="15px" fontWeight="semibold">
                  Action
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {/* Another one */}
              <Tr>
                <Td>#jkanskjdn</Td>
                <Td>#jkanskjdn</Td>
                <Td>Anirban Roy</Td>
                <Td>Candy Floss Bae</Td>
                <Td>01</Td>
                {/* Order status menu */}
                <Td>
                  <Menu>
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                      Actions
                    </MenuButton>
                    <MenuList>
                      <MenuItem>Confirmed</MenuItem>
                      <MenuItem>On the way</MenuItem>
                      <MenuItem>Delivered</MenuItem>
                    </MenuList>
                  </Menu>
                </Td>
                <Td>54,000 BDT</Td>
                <Td>
                  <Menu>
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                      Actions
                    </MenuButton>
                    <MenuList>
                      <MenuItem>Paid</MenuItem>
                      <MenuItem>Un paid</MenuItem>
                    </MenuList>
                  </Menu>
                </Td>
                <Td> <OrderDetails /> </Td>
              </Tr>
              {/* Another one */}
            </Tbody>
          </Table>
        </Flex>
        {/* card Body ends */}
      </Flex>
    </>
  );
};

export default order;


