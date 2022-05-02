import { Page500Style } from "./500Page.style";

function Page500() {
  return (
    <Page500Style>
      <div className="container">
      <img src="/images/500-cone.png" />

      <h1>
        <span>500</span> <br />
        Internal server error
      </h1>
      <p>I might be currently trying to fix the problem.</p>
      <p className="info">
        Maybe try again in a few minutes ...
      </p>
    </div>
    </Page500Style>
  );
}

export default Page500;
