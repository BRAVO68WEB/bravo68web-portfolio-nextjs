import "../styles/globals.css";
import CustomCursor from "components/providers/cursor";

function MyPortfolio({ Component, pageProps }) {
  return (
  <>
    <CustomCursor />
    <Component {...pageProps} />
  </>
  )
}

export default MyPortfolio;
