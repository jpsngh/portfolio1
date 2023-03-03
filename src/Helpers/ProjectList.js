
import imag1 from "../assets/airbnb.png"
import POS1 from "../assets/POS1.png"
import POS2 from "../assets/POS2.png"
import POS3 from "../assets/POS3.png"
import PD1 from "../assets/PD1.png"
import PD2 from "../assets/PD2.png"
import PD3 from "../assets/PD3.png"
import JP1 from "../assets/JP1.png"
import JP2 from "../assets/JP2.png"
import JP3 from "../assets/JP3.png"
import Todo1 from "../assets/Todo1.png"
import Todo2 from "../assets/Todo2.png"
import Todo3 from "../assets/Todo3.png"
import Chat1 from "../assets/Chat1.png"
import Chat2 from "../assets/Chat2.png"
import Chat3 from "../assets/Chat3.png"



import StarsIcon from '@mui/icons-material/Stars';
import JavascriptIcon from '@mui/icons-material/Javascript';

export const ProjectList = [{
 name: "POS Mern Application",
 image: POS1,
 image2: POS2,
 image3: POS3,
 
 desc: "Point of Sale (POS) MERN (MongoDB, Express.js, React.js, Node.js) application that allows users to manage their inventory and create transactions. The application fetches food items from a database and allows users to add them to a cart, where they can view and edit the items they have selected,Users can create transactions to complete sales, and the application generates invoices for each transaction. Additionally, users can manage their inventory by editing or deleting food items from the database." ,

 tech:["ReactJS","NodeJS","EXpress","MongoDB Atlas"],
 icon : <JavascriptIcon></JavascriptIcon>,
 align:"left",
 github:"https://github.com/jpsngh/Mern-POS",
 deployed:"https://lazy-puce-turtle-sock.cyclic.app"
},
{
    name: "Personal Diary",
    image: PD1,
    image2: PD2,
 image3: PD3,
    desc: "I built a personal diary site using the MERN stack with JWT authentication and CRUD operations. The site allows users to create an account, log in, and create, read, update, and delete diary entries. It also includes features such as password hashing for secure authentication and authorization, validation for form inputs, and error handling.In the future, I plan to add features such as similar tags functionality which lets user search similar thoughts by other users by keeping privacy and the ability to upload images to diary entries. I also plan to continue improving the user interface and making the site more user-friendly",
   
    tech:["ReactJS","NodeJS","EXpress","MongoDb","ContextAPI","BootStrap"],
    icon: <StarsIcon></StarsIcon>,
    align:"right",
    github:"https://github.com/jpsngh/personaldiary",
    deployed:"https://real-foal-tiara.cyclic.app "
},
{
    name: "Job Portal",
   
    image: JP1,
    image2: JP2,
 image3: JP3,
    desc: "Developed a responsive and mobile-friendly job portal using React, following the Google Material Design guidelines for a modern and intuitive user interface. Implemented dynamic features such as job search, job filtering, and job recommendation using React components and state management.Planning to expand the job portal to a full-fledged job search platform, including the ability to add jobs and advanced user profiles.",
   
    tech:["ReactJS","HTML","CSS","Responsive Design",],
    icon: <StarsIcon></StarsIcon>,
    align:"left",
    github:"https://jpsngh.github.io/jobportal",
    deployed:"https://jpsngh.github.io/Jobportal/"
},{
    name: "Clan Chat",
    image: Chat3,
    image2: Chat2,
 image3: Chat1,
    desc: " A chat application using React and Firebase that allows users to join or create rooms and chat in real-time. The app features Google authentication, ensuring user security and privacy. I designed and implemented the user interface and integrated real-time database functionality using Firebase. This project showcases my expertise in React and demonstrates my ability to create dynamic and interactive web applications.",
   
    tech:["ReactJS","Firebase","BootStrap","AntDesign"],
    icon: <StarsIcon></StarsIcon>,
    align:"right",
    github:"https://github.com/jpsngh/Clanchat",
    deployed:"https://clanchat.netlify.app"
},
    {
        name: "TO DO LIST",
        image: Todo1,
        image2: Todo2,
     image3: Todo3,
        desc: "Application built in Nodejs using Express and HTML that lets users add notes and delete from database,MongoDb is used for the stoarge solutions.",
       
        tech:["Node Js","Express","HTML","CSS"],
        icon: <StarsIcon></StarsIcon>,
        align:"left",
        github:"https://github.com/jpsngh/todolist",
        deployed:"https://brainy-fatigues-hen.cyclic.app"
    },
    {
        name: "Ecommerce Frotend",
        image: "",
        image2: "",
     image3: "",
        desc: "An Amazon like store clone in React Js with the functionality of cart using Context API,make use Of Axios to f3etch data from online API.",
       
        tech:["ReactJS","Axios","HTML","CSS"],
        icon: <StarsIcon></StarsIcon>,
        align:"right",
        github:"https://github.com/jpsngh/estore",
        deployed:""
    }

]