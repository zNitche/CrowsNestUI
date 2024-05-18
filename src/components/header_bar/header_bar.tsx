import SearchBar from "@/components/search_bar/search_bar";
import classes from "./header_bar.module.css";
import {
    Dispatch,
    SetStateAction,
    useEffect,
    useMemo,
    useRef,
    useState,
} from "react";
import TemperatureIcon from "@/icons/temperature";
import HumidityIcon from "@/icons/humidity";
import EnvSensorsData from "@/types/env_sensors_data";

interface HeaderBarProps {
    searchValue: string;
    setSearchValue: Dispatch<SetStateAction<string>>;
    envData: EnvSensorsData;
}

export default function HeaderBar({
    searchValue,
    setSearchValue,
    envData,
}: HeaderBarProps) {
    const [currentTime, setCurrentTime] = useState<Date>(new Date());
    const clockIntervalRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        clockIntervalRef.current = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(clockIntervalRef.current || 0);
    }, []);

    const formattedTime = useMemo(() => {
        return currentTime.toTimeString().split(" ")[0];
    }, [currentTime]);

    return (
        <div className={classes["header-wrapper"]}>
            <div className={classes["env-data-wrapper"]}>
                <div>{formattedTime}</div>
                <div className={classes["weather-data-wrapper"]}>
                    <div className={classes["sensor-row"]}>
                        <TemperatureIcon />
                        {envData.temperature}°C
                    </div>
                    <div className={classes["sensor-row"]}>
                        <HumidityIcon />
                        {envData.humidity}%
                    </div>
                </div>
            </div>
            <SearchBar
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />
        </div>
    );
}
