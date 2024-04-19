import { ReactNode } from "react";
import { SkeletonLoader } from "../components";
import { SkeletonListUtilProps } from "../interfaces";

export function getSkeletonLoaderList({ itemsWidth, itemsHeight, itemsBorderRadius, amountOfSkeletonItems }: SkeletonListUtilProps): ReactNode[] {
    return Array.from({ length: amountOfSkeletonItems }, 
        () =>  <SkeletonLoader 
                width={itemsWidth} 
                height={itemsHeight} 
                borderRadius={itemsBorderRadius}
                />
            )
}