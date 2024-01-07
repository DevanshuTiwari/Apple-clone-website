import { Box, Typography,styled } from "@mui/material";

const Component = styled(Box)({
    backgroundColor : '#fff',
    display :'flex',
    justifyContent :'center',
    '& > p': {
        fontSize : 14,
        padding : '12px 0',
        color : '#ldldlf'
    }

})
const Info = () => {
    return (

        <Component>
            <Typography>
            Save up to ₹8000.00 instantly on eligible products with 
            HDFC Bank Credit Cards.* <span style = {{color : '#2997ff'}}>Shop now &gt;</span>
            </Typography>
        </Component>

    );
}

export default Info;