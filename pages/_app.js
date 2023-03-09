import "../styles/globals.css";
// import CustomCursor from "components/providers/cursor";
import ErrorBoundary from '../components/errorBoundary'



function MyPortfolio({ Component, pageProps }) {
  return (
    <>
      {/* <CustomCursor /> */}
      <ErrorBoundary>
        <Component {...pageProps} />
      </ErrorBoundary>
    </>
  );
}

export default MyPortfolio;
