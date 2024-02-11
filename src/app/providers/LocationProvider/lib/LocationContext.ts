import { createContext } from "react";

export enum Location {
	UA = "uk",
	EN = "en",
}

export interface LocationContextProps {
	location?: Location;
	setLocation?: (location: Location) => void; 
}

 export const LocationContext = createContext<LocationContextProps>({})

 export const LOCAL_STORAGE_LOCATION_KEY = "location";