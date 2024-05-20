import { formatDateToNormal } from "@/utils/date";
import classes from "./service_tile.module.css";
import { useMemo } from "react";
import { getInitials } from "@/utils/common";

interface ServiceTileProps {
    name: string;
    addedAt: string;
    redirectUrl: string;
    isAvailable: boolean;
}

export default function ServiceTile({
    name,
    addedAt,
    redirectUrl,
    isAvailable,
}: ServiceTileProps) {
    const addedAtDate = useMemo(() => {
        return formatDateToNormal(new Date(addedAt));
    }, [addedAt]);

    const initials = useMemo(() => {
        return getInitials(name);
    }, [name]);

    return (
        <div className={classes["service-tile"]}>
            <a
                onClick={(e) => {
                    if (!isAvailable) {
                        e.preventDefault();
                    }
                }}
                target="_blank"
                href={redirectUrl}
                rel="noreferrer"
            >
                <div className={classes.content}>
                    <div className={classes["short-name"]}>{initials}</div>
                    <div className={classes.name}>{name}</div>
                    <div className={classes.date}>{addedAtDate}</div>
                </div>
            </a>
            {isAvailable && <div className={classes["alive-indicator"]}></div>}
        </div>
    );
}
