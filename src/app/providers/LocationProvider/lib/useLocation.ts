import { useContext } from 'react';
import {
  LOCAL_STORAGE_LOCATION_KEY,
  Location,
  LocationContext,
} from './LocationContext';

interface UseLocationResult {
  toggleLocation: () => void;
  location: Location;
}

export function useLocation(): UseLocationResult {
  const { location } = useContext(LocationContext);

  const toggleLocation = () => {
    const newLocation = location === Location.EN ? Location.EN : Location.UA;
    console.log({ newLocation });
    // setLocation(newLocation)
    localStorage.setItem(LOCAL_STORAGE_LOCATION_KEY, newLocation);
  };

  return {
    location,
    toggleLocation,
  };
}
