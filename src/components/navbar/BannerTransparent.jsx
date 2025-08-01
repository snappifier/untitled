import {ExitIcon} from "../animations/ExitIcon";
import logo from "../../assets/logo.png";
import {motion} from "motion/react";
import {Link} from "react-router-dom";
import {DropdownMobile} from "./DropdownMobile";
import {DropdownPC} from "./DropdownPC";
import {LogoLetters} from "../LogoLetters";


export const BannerTransparent = () => {


    return (
        <>
            <div className="absolute top-0 w-full h-40 items-center justify-around  bg-gradient-to-b from-black/90 to-transparent hidden lg:flex z-60">
                <Link to={'/'} className="z-[60]">
                    <LogoLetters />
                </Link>

                <DropdownPC />
            </div>



        </>
    );
}