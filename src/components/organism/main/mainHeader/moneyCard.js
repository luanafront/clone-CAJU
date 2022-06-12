import HomeIcon from '@mui/icons-material/Home'
import RestaurantIcon from '@mui/icons-material/Restaurant';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

const moneyCards = [
    {
        Icon: HomeIcon,
        price: 120,
        value: "HOME OFFICE",
        color: "#3a60ff",
        path: "/home-office"
    },
    {
        Icon: RestaurantIcon,
        price: 798,
        value: "ALIMENTAÇÂO",
        color: "#ef6a29",
        path: "/alimentacao"
    },
    {
        Icon: DeliveryDiningIcon,
        price: 1200,
        value: "MOBILIDADE",
        color: "#efce29",
        path: "/mobilidade"
    },
    {
        Icon: MenuBookIcon,
        price: 110,
        value: "CULTURA",
        color: "#29ceee",
        path: "/cultura"
    },
    {
        Icon: LocalHospitalIcon,
        price: 300,
        value: "SAÚDE",
        color: "#29ef8d",
        path: "/saude"
    }

]

export default moneyCards