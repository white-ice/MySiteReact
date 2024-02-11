import { FC, useMemo, useState, ReactNode } from "react";
import { Location, LocationContext, LOCAL_STORAGE_LOCATION_KEY } from "../lib/LocationContext";

interface LocalProviderProps {
	children: ReactNode;
}

const defaultLocation = localStorage.getItem(LOCAL_STORAGE_LOCATION_KEY) as Location || Location.EN;

const LocalProvider: FC<LocalProviderProps> = ({ children }) => {
	const [location, setLocation] = useState<Location>(defaultLocation);

	const defaultProps = useMemo(() => (
		{
			location,
			setLocation,
		}
	), [location])

	return (
		<LocationContext.Provider value={defaultProps}>
			{children}
		</LocationContext.Provider>
	)
}

export { LocalProvider, LocalProviderProps }