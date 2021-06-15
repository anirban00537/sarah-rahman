import "../styles/globals.css";
import { useRouter } from "next/router";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/Admin/Layout";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  var pathUrl = router.pathname.split("/");
  var status = pathUrl.includes("admin");
  console.log(status);
  return status ? (
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  ) : (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
