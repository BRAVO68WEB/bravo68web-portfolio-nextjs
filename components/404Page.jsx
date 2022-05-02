import { Page404Style } from "./404Page.style";

function Page404() {
  return (
    <Page404Style>
      <div>
        404 !!
        <div className="backtohome">
          <a href="/">Back to Home</a>
        </div>
      </div>
    </Page404Style>
  );
}

export default Page404;
