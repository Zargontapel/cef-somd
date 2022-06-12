import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  HStack,
  IconButton,
  List,
  ListIcon,
  ListItem,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useColorMode,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import {
  MdDarkMode,
  MdExpandLess,
  MdExpandMore,
  MdLightMode,
  MdMenu,
} from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import exploreRouterMenu from "./const/menuConfig";

function AppHeader() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  const navigate = useNavigate();
  const [isMobile] = useMediaQuery("(max-width: 768px)") 

  const navigateToDiscover = (type: any) => {
    navigate(`/${type}`);
    if (isOpen) onClose();
  };

  return (
    <>
      <Box
        // bg={useColorModeValue("brand.100", "gray.600")}
        px={4}
        position={"sticky"}
        top={0}
        boxShadow={"md"}
        height={"fit-content"}
        width={"100%"}
        >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack alignItems={"center"} spacing={4}>
            <IconButton
              size={"sm"}
              variant={"ghost"}
              icon={
                <MdMenu
                  style={{
                    transform: "translateX(65%)",
                  }}
                />
              }
              display={{
                md: "none",
              }}
              aria-label={"Open Menu"}
              onClick={isOpen ? onClose : onOpen}
            />
            <Heading as={Link} to={"/"} fontWeight={"bold"} size={"lg"}>
              {isMobile ? 'CEF-SOMD' : 'Child Evangelism Fellowship of Southern Maryland'}
            </Heading>
            <Box display={{ base: "none", md: "block" }}>
              {exploreRouterMenu.map((menu) => (
                <Menu key={menu.sectionId}>
                  <MenuButton
                    as={Button}
                    size={"sm"}
                    ml={2}
                    rightIcon={<MdExpandMore />}>
                    {menu.sectionLabel}
                  </MenuButton>
                  <MenuList maxW={"fit-content"}>
                    {menu.sectionItems.map((menuItem) => {
                      const { label, path, Icon } = menuItem;
                      return (
                        <MenuItem
                          key={label}
                          onClick={() =>
                            navigateToDiscover(path)
                          }
                          >
                          <Icon
                            size={"1.25em"}
                            style={{ marginRight: "1rem" }}
                          />
                          {label}
                        </MenuItem>
                      );
                    })}
                  </MenuList>
                </Menu>
              ))}
            </Box>
          </HStack>
          <Flex h={16} justifyContent={"flex-end"}>
          <HStack alignItems={"center"} spacing={2}>
            <Button size={"sm"}>Give Now</Button>
            <IconButton
              size={"sm"}
              icon={colorMode === "light" ? <MdDarkMode /> : <MdLightMode />}
              aria-label={"Change Color Theme"}
              onClick={toggleColorMode}
            />
          </HStack>
          </Flex>
        </Flex>
      </Box>
      <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader
            borderBottomWidth={"1px"}
            display={"flex"}
            alignItems={"center"}>
            <Heading size={"sm"} as={Link} to={"/"} onClick={onClose}>
              CEF-SOMD
            </Heading>
            <DrawerCloseButton />
          </DrawerHeader>
          <DrawerBody p={0}>
            <Accordion allowMultiple>
              {exploreRouterMenu.map((menu) => (
                <AccordionItem key={menu.sectionId}>
                  {({ isExpanded }) => (
                    <>
                      <AccordionButton
                        display={"flex"}
                        justifyContent={"space-between"}
                        alignItems={"center"}>
                        <Text m={0} fontWeight={"bold"}>
                          {menu.sectionLabel}
                        </Text>
                        {isExpanded ? <MdExpandLess /> : <MdExpandMore />}
                      </AccordionButton>
                      <AccordionPanel p={0}>
                        <List>
                          {menu.sectionItems.map((menuItem) => {
                            const { label, path, Icon } =
                              menuItem;
                            return (
                              <ListItem
                                as={Button}
                                variant={"ghost"}
                                w={"full"}
                                borderRadius={"0"}
                                display={"flex"}
                                justifyContent={"start"}
                                p={3}
                                key={label}
                                onClick={() => navigateToDiscover(path)}
                                >
                                <ListIcon
                                  as={() =>
                                    Icon({
                                      size: "1.25em",
                                      style: { marginRight: "0.75rem" },
                                    })
                                  }
                                />
                                <Text mt={-1}>{label}</Text>
                              </ListItem>
                            );
                          })}
                        </List>
                      </AccordionPanel>
                    </>
                  )}
                </AccordionItem>
              ))}
            </Accordion>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default AppHeader;