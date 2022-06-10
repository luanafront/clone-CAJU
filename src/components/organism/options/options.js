import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';


const options = [
    {
        icon: HomeOutlinedIcon,
        label: "Início",
        path: "/"
    },
    {
        icon: CreditCardIcon,
        label: "Cartões",
        path: "/card/"
    },
    {
        icon: ShoppingBagOutlinedIcon,
        label: "Feirinha",
        path: "/market/"
    },
    {
        icon: PermIdentityOutlinedIcon,
        label: "Perfil",
        path: "/profile/"
    }
]

export default options