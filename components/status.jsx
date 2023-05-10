import React, { useEffect, useState } from "react";
import axios from "handlers/axios";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

export default function Status() {
    const [status, setStatus] = useState({});
    const [loading, setLoading] = useState(true);
    
    async function requestStatus() {
        await axios.get("/health/health").then((res) => {
            setStatus(res.data);
            setLoading(false);
        });
    }
    
    useEffect(() => {
        requestStatus();
    }, [loading]);
    
    if (loading) {
        return (
        <Box sx={{ width: "60%" }}>
            <LinearProgress />
            Requesting Live API data...
        </Box>
        );
    } else {
        return (
            <div> 
                {(status.status)}
            </div>    
        );
    }
}