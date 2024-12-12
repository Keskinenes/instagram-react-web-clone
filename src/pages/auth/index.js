import { Outlet } from "react-router-dom";

export default function AutLayout() {
    return (
        <div className="h-full w-full flex flex-wrap overflow-auto gap-x-8 items-center justify-center">
            <Outlet /> 
        </div>
    )
}
