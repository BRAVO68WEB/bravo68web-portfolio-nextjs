import useMediaQuery from "@mui/material/useMediaQuery";
import Dialog from "@mui/material/Dialog";
import { useTheme } from "@mui/material/styles";

function ArtModel({ children, open, onClose }) {
	const theme = useTheme();
	const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

	return (
		<Dialog
			open={open}
			onClose={onClose}
			fullScreen={fullScreen}
			aria-labelledby="responsive-dialog-title"
		>
			{children}
		</Dialog>
	);
}

export default ArtModel;
