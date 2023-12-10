import { MotorcycleDetailsResponse } from "../../../../interfaces";
import { InformationBox } from "../information-box";

export function MotorcycleInfo({ motorcycle }: { motorcycle: MotorcycleDetailsResponse }) {
    return <>
            <InformationBox title="Year" content={motorcycle?.year} />
            <InformationBox title="Km" content={motorcycle?.km} />
            <InformationBox title="Color" content={motorcycle?.color} />
    </>
}