import { styled } from '@mui/system';
import { Typography, Link } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';

const CustomTypography = styled(Typography)({
  fontWeight: 'bold', // Make the text bold
  textAlign: 'left', // Align the text to the left
});

const AccountPage = () => {
    const handleLogout = () => {
        // Add logout logic here
    };

    return (
        <div className='bg-black flex h-screen flex-col gap-10 justify-start items-left text-white'>
            <div className="mt-6 ml-9 mb-6 font-bold text-white">
                <div className="flex items-center">
                    <a className="mr-5 font-bold hover:text-gray-900">SHOP</a>
                    <a className="mr-5 font-bold hover:text-gray-900">NEW IN</a>
                    <a className="mr-5 font-bold hover:text-gray-900">ACCESSORIES</a>
                    <nav className="ml-auto flex items-center gap-5 text-base justify-center">
                        <SearchIcon className='hover:text-gray-900' fontSize="large" style={{ paddingRight: '6px' }} />
                        <ShoppingCartOutlinedIcon className='hover:text-gray-900' fontSize="large" style={{ paddingRight: '6px' }} />
                    </nav>
                </div>
            </div>
            <div className='flex flex-col items-start mt-3 ml-9 mb-6 font-bold text-white'>
                <CustomTypography variant="h5" gutterBottom style={{ fontSize: '4rem' }}>
                    Account
                </CustomTypography>
                <div className="flex items-center">
                    <PermIdentityOutlinedIcon className="text-[#877474]" fontSize="large" style={{ fontWeight: 'thin', paddingRight: '4px', paddingTop: '8px', paddingBottom: '8px' }} />
                    <button onClick={handleLogout} className="text-[#877474] hover:text-black font-thin px-4 py-2">Logout</button>
                </div>
                <CustomTypography variant="h6" gutterBottom style={{ fontSize: '2rem', paddingRight: '8px' }}>
                    Order history
                </CustomTypography>
                <Typography className="text-[#877474]" variant="body1" gutterBottom style={{  marginTop: '16px', marginBottom: '16px', fontWeight: 'thin' }}>
                    You haven't placed any orders yet.
                </Typography>
                <CustomTypography variant="h6" gutterBottom style={{ fontSize: '2rem' }}>
                    Account details
                </CustomTypography>
                <div>
                    <Typography className="text-[#877474]" variant="body1" gutterBottom style={{  fontWeight: 'thin' }}>
                        Name
                    </Typography>
                    <Typography className="text-[#877474]" variant="body1" gutterBottom style={{  fontWeight: 'thin' }}>
                        Location
                    </Typography>
                    <Typography className="text-[#877474]" variant="body1" gutterBottom style={{  fontWeight: 'thin' }}>
                        <Link href="#" underline="hover" style={{ color: 'white' }}>
                            View Address
                        </Link>
                    </Typography>
                </div>
            </div>
        </div>
    );
}

export default AccountPage;
















