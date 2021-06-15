import { useState } from "react";
import {
  Button,
  Drawer,
  useDisclosure,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import {
  ChevronDownIcon,
  HamburgerIcon,
  SunIcon,
  MoonIcon,
} from "@chakra-ui/icons";
import Link from "next/link";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement] = useState("left");
  const { colorMode, toggleColorMode } = useColorMode();

  const [vendor, setVendor] = useState(false);
  const [deliveryBoy, setDeliveryBoy] = useState(false);
  const [craftMan, setCraftMan] = useState(false);
  const [mackupArtist, setMackupArtist] = useState(false);
  const [review, setReview] = useState(false);
  const handleDropDown = (menu) => {
    if (menu === "Vendor") {
      setVendor(true);
      setDeliveryBoy(false);
      setCraftMan(false);
      setMackupArtist(false);
      setReview(false);
    }
    if (menu === "deliveryBoy") {
      setDeliveryBoy(true);
      setVendor(false);
      setCraftMan(false);
      setMackupArtist(false);
      setReview(false);
    }
    if (menu === "craftMan") {
      setCraftMan(true);
      setDeliveryBoy(false);
      setVendor(false);
      setMackupArtist(false);
      setReview(false);
    }
    if (menu === "mackupArtist") {
      setMackupArtist(true);
      setCraftMan(false);
      setDeliveryBoy(false);
      setVendor(false);
      setReview(false);
    }
    if (menu === "review") {
      setReview(true);
      setMackupArtist(false);
      setCraftMan(false);
      setDeliveryBoy(false);
      setVendor(false);
    }
  };
  return (
    <Flex
      alignItems="center"
      height="80px"
      borderBottomWidth="1px"
      borderColor="gray.350"
      justifyContent="space-between"
    >
      <Flex alignItems="center" justifyContent="center">
        <HamburgerIcon fontSize="32px" ml="10px" mr="10px" onClick={onOpen} />
        <Text fontSize="2xl">Sarah Rahman</Text>
      </Flex>

      <Menu>
        <MenuButton as={Button} mr="20px" rightIcon={<ChevronDownIcon />}>
          Rakib Islam
        </MenuButton>
        <MenuList>
          <MenuItem>Logout</MenuItem>
          <MenuItem>
            <Button onClick={toggleColorMode}>
              Toggle to Change Theme
              {colorMode === "light" ? (
                <MoonIcon ml="6px" />
              ) : (
                <SunIcon ml="6px" />
              )}
            </Button>
          </MenuItem>
        </MenuList>
      </Menu>

      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">
            Admin Panel Navigation
          </DrawerHeader>
          <DrawerBody>
            <p>helo</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default Navbar;
