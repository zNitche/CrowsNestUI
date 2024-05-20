import HeaderBar from "@/components/header_bar/header_bar";
import classes from "./index.module.css";
import { useState } from "react";
import ServiceTile from "@/components/service_tile/service_tile";
import useGetServices from "@/hooks/fetch/use_get_services";
import Loader from "@/components/design/loader/loader";
import ServiceData from "@/types/service_data";
import useGetSensorsData from "@/hooks/fetch/use_get_sensors_data";

export default function Home() {
    const [searchQuery, setSearchQuery] = useState("");

    const {
        isLoading: isLoadingServices,
        isError: errorWhileLoadingServices,
        data: services,
    } = useGetServices(searchQuery);

    const { data: sensorsData } = useGetSensorsData();

    return (
        <div className={classes.wrapper}>
            <HeaderBar
                searchValue={searchQuery}
                setSearchValue={setSearchQuery}
                envData={{
                    temperature: sensorsData ? sensorsData.temperature : 0,
                    humidity: sensorsData ? sensorsData.humidity : 0,
                }}
            />
            <div className={classes["content-container"]}>
                {errorWhileLoadingServices && !isLoadingServices && (
                    <div>Error while loading services data</div>
                )}
                {!errorWhileLoadingServices && isLoadingServices && (
                    <div className={classes.loader}>
                        <Loader />
                    </div>
                )}
                {!errorWhileLoadingServices &&
                    !isLoadingServices &&
                    services !== undefined &&
                    services.map((service: ServiceData, index) => {
                        return (
                            <ServiceTile
                                key={index}
                                name={service.name}
                                addedAt={service.added_at}
                                redirectUrl={service.redirect_url}
                                isAvailable={service.is_available}
                            />
                        );
                    })}
            </div>
        </div>
    );
}
