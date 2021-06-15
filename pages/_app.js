import "../styles/globals.css";
import { useRouter } from "next/router";
import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  var pathUrl = router.pathname.split("/");
  var status = pathUrl.includes("admin");
  console.log(status);
  return status ? (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  ) : (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
