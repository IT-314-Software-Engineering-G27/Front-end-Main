import { Box, Button } from "@mui/material";

const hoverStyle = { color: 'black', fontWeight: 'bold', backgroundColor: 'white', border: 'none', borderRadius: '10px', };
const buttonStyle = {
    mr: { lg: 2, md: 2, sm: 0 },
    borderRadius: '10px',
    border: 'none',
    width: '170px',
    ':hover': hoverStyle,
};
export default function EventSelector({ type, setType }) {
    return (
        <Box sx={{
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,.2)',
            borderRadius: '10px',
            padding: "0.5rem",
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row', md: 'row', lg: 'row' }
        }} >
            <Button sx={{
                ...buttonStyle,
                fontSize: type === "past" ? '16px' : '14px',
                fontWeight: type === "past" ? 'bold' : 'normal',
                backgroundColor: type === "past" ? 'white' : 'transparent',
            }}
                onClick={() => {
                    if (type === "past")
                        setType("");
                    else
                        setType("past");
                }}>
                Past Events
            </Button>
            <Button sx={{
                ...buttonStyle,
                fontSize: type === "current" ? '16px' : '14px',
                fontWeight: type === "current" ? 'bold' : 'normal',
                backgroundColor: type === "current" ? 'white' : 'transparent',
            }}
                onClick={() => {
                    if (type === "current")
                        setType("");
                    else
                        setType("current");
                }}>
                Ongoing Events
            </Button>
            <Button sx={{
                ...buttonStyle,
                fontSize: type === "future" ? '16px' : '14px',
                fontWeight: type === "future" ? 'bold' : 'normal',
                backgroundColor: type === "future" ? 'white' : 'transparent',
            }}
                onClick={() => {
                    if (type === "future")
                        setType("");
                    else
                        setType("future");
                }}>
                Future Events
            </Button>
        </Box>);
};