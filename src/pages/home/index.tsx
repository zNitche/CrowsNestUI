import HeaderBar from "@/components/header_bar/header_bar";
import classes from "./index.module.css";
import { useState } from "react";
import ServiceTile from "@/components/service_tile/service_tile";

export default function Home() {
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <div className={classes.wrapper}>
            <HeaderBar
                searchValue={searchQuery}
                setSearchValue={setSearchQuery}
                envData={{ temperature: 24, humidity: 65 }}
            />
            <div className={classes["content-container"]}>
                <ServiceTile
                    name={"ao3"}
                    addedAt={new Date().toISOString()}
                    redirectUrl={"#"}
                    isAvailable={true}
                />
            </div>
        </div>
    );
}
