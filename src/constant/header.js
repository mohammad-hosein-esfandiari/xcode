import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
export const header = [
    {
        id:"header-1",
        title:"خانه",
        href:"/",
        icon:<HomeOutlinedIcon/>,
        
    },
    {
        id:"header-2",
        title:"دوره ها",
        href:"/دوره_ها",
        icon:<LibraryBooksOutlinedIcon/>
    },
    {
        id:"header-3",
        title:"اخبار و مقالات",
        href:"/اخبار_و_مقالات?page=1&limit=8",
        icon:<NewspaperOutlinedIcon/>,
        link:"/اخبار_و_مقالات"
    },
    {
        id:"header-4",
        title:"اساتید برتر",
        href:"/اساتید_برتر",
        icon:<SchoolOutlinedIcon/>
    },
    {
        id:"header-5",
        title:"ارتباط با ما",
        href:"/ارتباط_با_ما",
        icon:<CallOutlinedIcon/>
    },
]