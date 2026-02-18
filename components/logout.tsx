import {Button} from "@heroui/button";
import {HeartFilledIcon} from "@/components/icons";
import {NavbarItem} from "@heroui/navbar";
import {router} from "next/client";

export const Logout = () => {

    const handleLogout = () => {
        localStorage.removeItem('token')
        router.push('/login')
    }

    return (
        <NavbarItem className="hidden md:flex">
            <Button
                className="text-sm font-normal text-default-600 bg-default-100"
                startContent={<HeartFilledIcon className="text-danger" />}
                variant="flat"
                onPress={handleLogout}
            >
                Logout
            </Button>
        </NavbarItem>
    )
};