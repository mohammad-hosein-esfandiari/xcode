import AuthBtn from "./AuthBtn";
import DrawerMenu from "./DrawerMenu";

const RightBtn = () => {
    return (
        <ul className="flex items-center justify-between h-full">
            <DrawerMenu/>
            <AuthBtn/>
        </ul>
    );
}

export default RightBtn;