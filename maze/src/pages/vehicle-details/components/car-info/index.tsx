import { CarDetailsResponse } from '../../../../interfaces'
import { InformationBox } from '../information-box'
import { getTransmissionTranslated } from '../../utils'

export function CarInfo({ car }: { car: CarDetailsResponse }) {
    return <>
        <InformationBox title="Year" content={car?.year} />
        <InformationBox title="Km" content={car?.km} />
        <InformationBox title="Transmission" content={getTransmissionTranslated(car?.tranmission)} />
        <InformationBox title="Color" content={car?.color} />
        <InformationBox title="Fuel" content={car?.fuel} />
    </>
}