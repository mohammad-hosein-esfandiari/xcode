import { usePathname } from "next/navigation";
export const useUrlArray = () => {
    const path = usePathname()
    const pathname = path.split('/')
    return {path , pathname}
}

