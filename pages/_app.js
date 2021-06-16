import "../styles/globals.css";
import { useRouter } from "next/router";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/Admin/Layout";
import store from "../app/store";
import { Provider } from "react-redux";
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  var pathUrl = router.pathname.split("/");
  var status = pathUrl.includes("admin");
  console.log(status);
  return status ? (
    <ChakraProvider>
      <Layout>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Layout>
    </ChakraProvider>
  ) : (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
