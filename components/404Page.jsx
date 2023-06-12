import { Page404Style } from "./404Page.style";
import Link from "next/link";

function Page404() {
	return (
		<Page404Style>
			<div>
				404 !!
				<div className="backtohome">
					<Link href="/">Back to Home</Link>
				</div>
			</div>
		</Page404Style>
	);
}

export default Page404;
