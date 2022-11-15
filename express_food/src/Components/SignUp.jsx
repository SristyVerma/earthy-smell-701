import React, { useState, useEffect } from "react";
import "../Styles/SignUp.css";
import { Link } from "react-router-dom";
import {
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
  Button,
  Flex,
  Heading,
  useMediaQuery,
  useToast,
  Spinner,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
function SignUp() {
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
  });
  const { SignUp } = useContext(AuthContext);
  const toast = useToast();
  const Navigate = useNavigate();
  const [isLargerThan992] = useMediaQuery("(min-width: 992px)");

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);
  const onChangeInput = (e) => {
    const { id, value } = e.target;
    setUserData({ ...userData, [id]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      userData.email === "" ||
      userData.firstName === "" ||
      userData.lastName === "" ||
      userData.password === ""
    )
      return toast({
        title: "Fill all the details !!!",
        status: "error",
        duration: 1500,
        isClosable: true,
        position: "top",
      });
    SignUp(userData);
    setTimeout(() => {
      Navigate("/signin");
    }, 2000);
    setUserData({
      email: "",
      firstName: "",
      lastName: "",
      password: "",
    });
    toast({
      title: "Signup Successfull !!!",
      status: "success",
      duration: 1500,
      isClosable: true,
      position: "top",
    });
  };
  return (
    <>
      <div className="main-div">
        <div className="left-div">
          <div
            style={{ backgroundColor: "#f8f8f8", paddingBottom: "50px" }}
            className="logoa"
          >
            <img src="https://www.kindmeal.my/images/join_normal.png" alt="" />
            <Link className="link-here" to="/signup">
              Food Lover Sign Up
            </Link>
          </div>
          <div className="logoa">
            <img src="https://www.kindmeal.my/images/join_shop.png" alt="" />
            <Link className="link-here" to="/#">
              Restaurant Sign Up
            </Link>
          </div>
          <div style={{ width: "200px", maxWidth: "200px" }} className="logoa">
            <p style={{ fontSize: "22px" }}>Why KindMeal?</p>
            <ul>
              <li>
                <span>Exclusive meat-free deals</span>
              </li>
              <li>
                <span>Share yummy food moments</span>
              </li>
              <li>
                <span>Meet friendly food lovers</span>
              </li>
              <li>
                <span>Discover cool restaurants</span>
              </li>
              <li>
                <span>Email updates on tasty deals</span>
              </li>
              <li>
                <span>Instant coupons & dining</span>
              </li>
              <li>
                <span>No upfront payment, booking or printing</span>
              </li>
            </ul>
            <Link href="/#" className="link-here">
              More about KindMeal »
            </Link>
          </div>
        </div>
        <div className="right-div">
          <h1 style={{ fontWeight: "500" }}>
            Food Lover? Sign Up Now or
            <Link to="/#" className="blue">
              <h1 style={{ fontWeight: "500", display: "inline" }}>
                Login With Facebook
              </h1>
            </Link>
          </h1>
          <p style={{ marginTtop: "10px" }}>
            Discover tasty meat-free meals and dine instantly — no coupon
            payment, booking or printing is required.
          </p>
          <p style={{ marginTop: "10px" }}>
            KindMeal is a fun, exciting and cool new way for you to show your
            compassion towards animals. We collaborate with kind restaurants and
            cafes across the nation to bring you delicious meat-free foods that
            will not only help save precious animal lives, but improve your
            health and save your money at the same time!
          </p>
          <td>
            <div
              id="ww_join_form_msg"
              className="ww_error_text"
              style={{ fontWeight: "bold" }}
            ></div>
            <br />
            {isLoading ? (
              <Flex justify="center" mt={"5"}>
                <Spinner
                  thickness="5px"
                  speed="0.65s"
                  emptyColor="gray.200"
                  color="#3182ce"
                  size="lg"
                />
              </Flex>
            ) : (
              <Flex
                justify="center"
                align="center"
                direction="column"
                textAlign="center"
                pb={10}
                boxShadow="base"
              >
                <Heading mt="10" as="h2" size="lg">
                  Sign Up
                </Heading>
                <FormControl
                  w={isLargerThan992 ? "30%" : "70%"}
                  borderRadius="lg"
                  p={"3"}
                  cursor="pointer"
                  mt={5}
                >
                  <FormLabel htmlFor="firstName">First Name</FormLabel>
                  <Input
                    className="inputa"
                    mb={4}
                    value={userData.firstName}
                    type="text"
                    id="firstName"
                    onChange={(e) => {
                      onChangeInput(e);
                    }}
                    placeholder="Enter a first name"
                  />
                  <FormLabel htmlFor="lastName" style={{ width: "400px" }}>
                    Last Name
                  </FormLabel>
                  <Input
                    className="inputa"
                    mb={4}
                    value={userData.lastName}
                    type="text"
                    id="lastName"
                    onChange={(e) => {
                      onChangeInput(e);
                    }}
                    placeholder="enter lastname"
                  />
                  <FormLabel htmlFor="email">Email address</FormLabel>
                  <Input
                    className="inputa"
                    value={userData.email}
                    type="email"
                    id="email"
                    onChange={(e) => {
                      onChangeInput(e);
                    }}
                    placeholder="enter email"
                  />
                  <FormHelperText id="texta">
                    We'll never share your email.
                  </FormHelperText>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <Input
                    className="inputa"
                    value={userData.password}
                    id="password"
                    onChange={(e) => {
                      onChangeInput(e);
                    }}
                    type="password"
                    placeholder="enter password"
                  />
                  <Button
                    w="100%"
                    mt={4}
                    colorScheme="blue"
                    type="submit"
                    onClick={(e) => {
                      handleSubmit(e);
                    }}
                  >
                    Submit
                  </Button>
                </FormControl>
              </Flex>
            )}
          </td>
        </div>
      </div>
      <div
        className="above-footer"
        style={{
          backgroundColor: "#e0e0e0",
          display: "flex",
          justifyContent: "center",
          paddingTop: "20px",
        }}
      >
        <img
          src="https://www.kindmeal.my/images/how_kindmeal_works.png"
          alt=""
        />
      </div>
    </>
  );
}

export default SignUp;
