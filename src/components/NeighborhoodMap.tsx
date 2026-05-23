import { useEffect, useRef, useState } from "react";
import { Star, MapPin, Navigation, Compass, ArrowLeft, Eye, Clock, Phone } from "lucide-react";

// Coordinates of 1001 Nuits Restaurant
const RESTAURANT_COORDS = { lat: 45.4845627, lng: -73.8031443 };
const MAP_RADIUS = 2000; // 2km radius

const ND_MARKER_ICONS_BY_TYPE: Record<string, string> = {
  '_default': 'circle',
  'restaurant': 'restaurant',
  'bar': 'local_bar',
  'park': 'park',
  'gym': 'fitness_center',
  'movie_theater': 'theaters',
  'art_gallery': 'palette',
  'supermarket': 'local_grocery_store',
  'bakery': 'bakery_dining',
  'clothing_store': 'local_mall',
  'department_store': 'local_mall',
  'home_goods_store': 'local_mall',
  'shopping_mall': 'local_mall',
  'primary_school': 'school',
  'secondary_school': 'school',
};

const POIS_INITIAL = [
  { placeId: "ChIJ5f3thO88yUwRUCdg4YTg1Dk" }, // Parc Dollard-des-Ormeaux
  { placeId: "ChIJFXSvRO48yUwRcNsjzcYqcsA" }, // Marché de l'Ouest
  { placeId: "ChIJORFtLV49yUwRy9oGPs5sTQ0" }, // Parc du Centenaire
  { placeId: "ChIJSeeiXe48yUwRViu9OnkG7mg" }, // Cinema Guzzo
  { placeId: "ChIJo0RvDu48yUwRx66_FCiWTC8" }, // CF Fairview Pointe-Claire
  { placeId: "ChIJ4aeZmZs8yUwRm3srhDNauKU" }, // local parks & trails
  { placeId: "ChIJuxMk5_A8yUwRGnQLN9NjFvA" }, // nearby locations
  { placeId: "ChIJpcSMlO88yUwRSjmZ4SOoB9Y" }, // local spots
  { placeId: "ChIJyfNMDOU8yUwRaGByWbmdOG0" },
  { placeId: "ChIJ3YwbL5M8yUwRRDMlHAIX5gI" },
  { placeId: "ChIJg72LyeQ8yUwRjIW1DfaWCMs" },
  { placeId: "ChIJufOQfus8yUwR1fKJ8Jpzq-o" },
  { placeId: "ChIJIbo9sYw8yUwRVR_4D31pmjk" },
  { placeId: "ChIJX8vV55I8yUwR8vcersY5q4M" },
  { placeId: "ChIJGQLHCbA9yUwR9AWLSoBBX5Y" },
  { placeId: "ChIJXzoHk_s8yUwRKdrmt-RDbUU" },
  { placeId: "ChIJp15iNPA8yUwRR6R7kJd3tHE" },
  { placeId: "ChIJWyXxXQA9yUwRj1NhfXa-Yy0" },
  { placeId: "ChIJM1buZZI8yUwRY0-GSQK4ilQ" },
  { placeId: "ChIJYwqnNb88yUwRYegX3YPn-ck" },
  { placeId: "ChIJrwZOmZc8yUwRjNOTvbEzgz0" }
];

// Luxury dark mode theme matching 1001 Nuits gold & charcoal palette
const GOLD_CHARCOAL_MAP_STYLE = [
  { "elementType": "geometry", "stylers": [{ "color": "#0a0b0a" }] },
  { "elementType": "labels.text.stroke", "stylers": [{ "color": "#0a0b0a" }] },
  { "elementType": "labels.text.fill", "stylers": [{ "color": "#efe7d2" }] },
  { "featureType": "administrative", "elementType": "geometry", "stylers": [{ "visibility": "off" }] },
  { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#111211" }] },
  { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#1a1c19" }] },
  { "featureType": "poi", "elementType": "labels.text.fill", "stylers": [{ "color": "#cfbe91" }] },
  { "featureType": "road", "elementType": "geometry.fill", "stylers": [{ "color": "#1c1e1c" }] },
  { "featureType": "road", "elementType": "geometry.stroke", "stylers": [{ "color": "#2a2d2a" }] },
  { "featureType": "road", "elementType": "labels.text.fill", "stylers": [{ "color": "#8a7a4a" }] },
  { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#cfbe91" }, { "lightness": -40 }] },
  { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#cfbe91" }, { "lightness": -60 }] },
  { "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#050605" }] }
];

interface PlaceDetail {
  placeId: string;
  name?: string;
  type?: string;
  coords?: any;
  address?: string;
  photos?: { urlSmall: string; urlLarge: string; attrs: string[] }[];
  icon?: string;
  url?: string;
  duration?: { text: string; value: number };
  marker?: any;
  directions?: any;
}

export default function NeighborhoodMap({ lang }: { lang: "en" | "fr" }) {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<any>(null);
  const [places, setPlaces] = useState<PlaceDetail[]>(POIS_INITIAL);
  const [loadedCount, setLoadedCount] = useState<number>(5);
  const [selectedPlace, setSelectedPlace] = useState<PlaceDetail | null>(null);
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [apiError, setApiError] = useState<string | null>(null);
  const [isScriptLoaded, setIsScriptLoaded] = useState<boolean>(false);

  const directionsRendererRef = useRef<any>(null);
  const placesServiceRef = useRef<any>(null);
  const distanceMatrixServiceRef = useRef<any>(null);
  const directionsServiceRef = useRef<any>(null);
  const markersRef = useRef<any[]>([]);

  // Dynamically load Google Maps script
  useEffect(() => {
    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || "";
    if (!apiKey) {
      setIsLoading(false);
      setApiError(lang === "fr" ? "Clé API Google Maps manquante." : "Google Maps API Key missing.");
      return;
    }

    const scriptId = "google-maps-script";
    const existingScript = document.getElementById(scriptId);

    const initMapInstance = () => {
      setIsScriptLoaded(true);
    };

    (window as any).initGoogleMapsNDx = initMapInstance;

    if (!existingScript) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initGoogleMapsNDx&libraries=places,geometry`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    } else if ((window as any).google && (window as any).google.maps) {
      initMapInstance();
    }

    return () => {
      // Clean up callback reference
      delete (window as any).initGoogleMapsNDx;
    };
  }, [lang]);

  // Initialize Map and services once script loads
  useEffect(() => {
    if (!isScriptLoaded || !mapContainerRef.current) return;

    try {
      const google = (window as any).google;
      const mapOptions = {
        center: RESTAURANT_COORDS,
        zoom: 15,
        maxZoom: 20,
        minZoom: 12,
        fullscreenControl: false,
        mapTypeControl: false,
        streetViewControl: false,
        zoomControl: true,
        styles: GOLD_CHARCOAL_MAP_STYLE,
      };

      const mapBounds = new google.maps.Circle({
        center: RESTAURANT_COORDS,
        radius: MAP_RADIUS
      }).getBounds();

      // Bind map limits to specified radius
      const mapInstance = new google.maps.Map(mapContainerRef.current, {
        ...mapOptions,
        restriction: { latLngBounds: mapBounds }
      });

      setMap(mapInstance);

      // Initialize Google Services
      placesServiceRef.current = new google.maps.places.PlacesService(mapInstance);
      distanceMatrixServiceRef.current = new google.maps.DistanceMatrixService();
      directionsServiceRef.current = new google.maps.DirectionsService();
      directionsRendererRef.current = new google.maps.DirectionsRenderer({
        suppressMarkers: true,
        preserveViewport: true,
        polylineOptions: {
          strokeColor: "#cfbe91",
          strokeWeight: 5,
          strokeOpacity: 0.8
        }
      });
      directionsRendererRef.current.setMap(mapInstance);

      // Add main marker for 1001 Nuits Restaurant
      const restMarker = new google.maps.Marker({
        position: RESTAURANT_COORDS,
        map: mapInstance,
        title: "1001 Nuits Restaurant",
        icon: {
          path: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z",
          fillColor: "#cfbe91",
          fillOpacity: 1,
          strokeColor: "#0a0b0a",
          strokeWeight: 1.5,
          scale: 1.5,
          anchor: new google.maps.Point(12, 22),
        }
      });

      const infoWindow = new google.maps.InfoWindow({
        content: `
          <div style="color:#1a1c19; font-family:sans-serif; padding:5px;">
            <strong style="display:block; font-family:serif; font-size:14px; margin-bottom:2px;">1001 Nuits</strong>
            <span style="font-size:11px;">Dollard-des-Ormeaux, Montreal</span>
          </div>
        `
      });

      restMarker.addListener("click", () => {
        infoWindow.open(mapInstance, restMarker);
      });

      setIsLoading(false);
    } catch (err) {
      console.error(err);
      setApiError(lang === "fr" ? "Erreur de chargement de la carte." : "Failed to load maps interface.");
      setIsLoading(false);
    }
  }, [isScriptLoaded]);

  // Load details for visible places
  useEffect(() => {
    if (!map || !placesServiceRef.current) return;

    const visiblePois = places.slice(0, loadedCount);
    let pendingCount = visiblePois.filter(p => !p.name).length;

    if (pendingCount === 0) return;

    const updatedPlaces = [...places];

    visiblePois.forEach((poi, index) => {
      if (poi.name) return; // Already fetched

      const request = {
        placeId: poi.placeId,
        fields: ["name", "types", "geometry", "formatted_address", "photos", "url"]
      };

      placesServiceRef.current.getDetails(request, (result: any, status: any) => {
        if (status === (window as any).google.maps.places.PlacesServiceStatus.OK && result) {
          const google = (window as any).google;

          // Parse photos
          const photos = result.photos
            ? result.photos.slice(0, 6).map((photo: any) => ({
                urlSmall: photo.getUrl({ maxWidth: 200, maxHeight: 200 }),
                urlLarge: photo.getUrl({ maxWidth: 800, maxHeight: 800 }),
                attrs: photo.html_attributions || []
              }))
            : [];

          // Determine type and icon
          let type = result.types ? result.types[0].replace(/_/g, " ") : "Location";
          let iconChar = "circle";
          if (result.types) {
            for (let t of result.types) {
              if (t in ND_MARKER_ICONS_BY_TYPE) {
                type = t.charAt(0).toUpperCase() + t.slice(1).replace(/_/g, " ");
                iconChar = ND_MARKER_ICONS_BY_TYPE[t];
                break;
              }
            }
          }

          // Create Map Marker
          const marker = new google.maps.Marker({
            position: result.geometry.location,
            map: map,
            title: result.name,
            icon: {
              path: google.maps.SymbolPath.CIRCLE,
              fillColor: "#8a7a4a",
              fillOpacity: 0.9,
              strokeColor: "#cfbe91",
              strokeWeight: 1,
              scale: 8
            }
          });

          marker.addListener("click", () => {
            handleSelectPlace(poi.placeId);
          });

          markersRef.current.push(marker);

          updatedPlaces[index] = {
            ...poi,
            name: result.name,
            type: type,
            coords: result.geometry.location,
            address: result.formatted_address,
            photos: photos,
            icon: iconChar,
            url: result.url,
            marker: marker
          };
        }

        pendingCount--;
        if (pendingCount === 0) {
          setPlaces(updatedPlaces);
        }
      });
    });
  }, [map, loadedCount]);

  // Zoom map to fit all visible markers
  useEffect(() => {
    if (!map) return;
    const google = (window as any).google;
    const bounds = new google.maps.LatLngBounds();
    bounds.extend(RESTAURANT_COORDS);

    places.slice(0, loadedCount).forEach(poi => {
      if (poi.coords) {
        bounds.extend(poi.coords);
      }
    });

    map.fitBounds(bounds, 50);
  }, [places, loadedCount, map]);

  // Handle select place from list or marker click
  const handleSelectPlace = (placeId: string) => {
    const selected = places.find(p => p.placeId === placeId);
    if (!selected) return;

    // Pan map to selected place
    if (selected.coords && map) {
      map.panTo(selected.coords);
      map.setZoom(15);
    }

    setSelectedPlace(selected);

    // Fetch distance / driving duration dynamically
    if (selected.coords && distanceMatrixServiceRef.current && !selected.duration) {
      const google = (window as any).google;
      distanceMatrixServiceRef.current.getDistanceMatrix(
        {
          origins: [RESTAURANT_COORDS],
          destinations: [selected.coords],
          travelMode: google.maps.TravelMode.DRIVING
        },
        (response: any, status: any) => {
          if (status === google.maps.DistanceMatrixStatus.OK && response) {
            const element = response.rows[0].elements[0];
            if (element.status === google.maps.DistanceMatrixElementStatus.OK) {
              setPlaces(prev =>
                prev.map(p =>
                  p.placeId === placeId ? { ...p, duration: element.duration } : p
                )
              );
              setSelectedPlace(prev =>
                prev && prev.placeId === placeId ? { ...prev, duration: element.duration } : prev
              );
            }
          }
        }
      );
    }

    // Render route from 1001 Nuits to place
    if (selected.coords && directionsServiceRef.current && directionsRendererRef.current) {
      const google = (window as any).google;
      directionsServiceRef.current.route(
        {
          origin: RESTAURANT_COORDS,
          destination: selected.coords,
          travelMode: google.maps.TravelMode.DRIVING
        },
        (result: any, status: any) => {
          if (status === google.maps.DirectionsStatus.OK) {
            directionsRendererRef.current.setDirections(result);
            directionsRendererRef.current.setMap(map);
          }
        }
      );
    }
  };

  const handleBackToList = () => {
    setSelectedPlace(null);
    if (directionsRendererRef.current) {
      directionsRendererRef.current.setMap(null);
    }
    if (map) {
      map.setZoom(14);
      map.panTo(RESTAURANT_COORDS);
    }
  };

  const handleShowMore = () => {
    setLoadedCount(prev => Math.min(prev + 5, places.length));
  };

  if (isLoading) {
    return (
      <div className="w-full h-[400px] flex items-center justify-center bg-[#0a0b0a] rounded-3xl border border-[#333330]">
        <div className="text-center">
          <div className="w-10 h-10 border-4 border-[#cfbe91] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-[#efe7d2] font-medium tracking-widest text-sm uppercase">
            {lang === "fr" ? "Chargement de la découverte..." : "Loading Map Explorer..."}
          </p>
        </div>
      </div>
    );
  }

  if (apiError) {
    return (
      <div className="w-full h-[400px] flex items-center justify-center bg-[#0a0b0a] rounded-3xl border border-[#efe7d2]/10 p-6">
        <div className="text-center max-w-sm">
          <Compass className="w-12 h-12 text-[#cfbe91] mx-auto mb-4 stroke-1 opacity-70" />
          <h4 className="font-serif text-[#efe7d2] text-lg uppercase tracking-wider mb-2">
            {lang === "fr" ? "Découverte des Voisins" : "Explore the Neighborhood"}
          </h4>
          <p className="text-[#efe7d2]/60 text-xs leading-relaxed mb-6">
            {lang === "fr" 
              ? "Découvrez les parcs locaux, les centres commerciaux et les cinémas à proximité de 1001 Nuits."
              : "Discover local parks, shopping centers, and cinemas nearby 1001 Nuits."}
          </p>
          <a
            href="https://maps.google.com/?q=45.4845627,-73.8031443"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#cfbe91] text-[#0a0b0a] font-bold text-xs tracking-wider uppercase px-5 py-3 rounded-xl hover:bg-[#d7c683] transition-colors"
          >
            <MapPin size={14} />
            {lang === "fr" ? "Ouvrir Google Maps" : "Open Google Maps"}
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#141514] border border-[#333330] rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row h-[500px] shadow-2xl relative">
      {/* Side Panel */}
      <div className="w-full md:w-[320px] lg:w-[360px] bg-[#0a0b0a]/90 backdrop-blur-xl border-r border-[#333330] flex flex-col h-1/2 md:h-full relative z-10">
        {!selectedPlace ? (
          // Places List Panel
          <div className="flex-1 flex flex-col overflow-hidden">
            <div className="p-5 border-b border-[#333330]">
              <span className="text-[#cfbe91] text-[10px] tracking-[0.2em] font-bold uppercase block mb-1">
                {lang === "fr" ? "À Proximité" : "Around Us"}
              </span>
              <h4 className="font-serif text-[#efe7d2] text-xl tracking-wide uppercase">
                {lang === "fr" ? "Découvrez le Quartier" : "Explore Neighborhood"}
              </h4>
            </div>

            <div className="flex-1 overflow-y-auto custom-scrollbar p-3 space-y-2">
              {places.slice(0, loadedCount).map((poi) => (
                <button
                  key={poi.placeId}
                  onClick={() => handleSelectPlace(poi.placeId)}
                  className="w-full text-left p-3 rounded-2xl border border-transparent hover:border-[#cfbe91]/30 hover:bg-[#1a1c19]/50 transition-all flex items-start gap-3 group"
                >
                  <div className="w-8 h-8 rounded-xl bg-[#cfbe91]/10 flex items-center justify-center shrink-0 group-hover:bg-[#cfbe91]/25 transition-colors">
                    <Compass size={14} className="text-[#cfbe91]" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[#efe7d2] font-semibold text-xs tracking-wide truncate group-hover:text-[#cfbe91] transition-colors">
                      {poi.name || (lang === "fr" ? "Chargement..." : "Loading...")}
                    </p>
                    {poi.type && (
                      <p className="text-[#efe7d2]/40 text-[10px] mt-0.5 capitalize">
                        {poi.type}
                      </p>
                    )}
                  </div>
                </button>
              ))}
            </div>

            {loadedCount < places.length && (
              <div className="p-4 border-t border-[#333330] bg-[#0a0b0a]/90">
                <button
                  onClick={handleShowMore}
                  className="w-full py-2.5 border border-[#cfbe91]/30 rounded-xl text-center text-[10px] text-[#cfbe91] font-bold tracking-widest uppercase hover:border-[#cfbe91] hover:bg-white/5 transition-all"
                >
                  {lang === "fr" ? "Afficher Plus" : "Show More"}
                </button>
              </div>
            )}
          </div>
        ) : (
          // Place Details Panel
          <div className="flex-1 flex flex-col overflow-hidden">
            <div className="p-4 border-b border-[#333330] flex items-center justify-between">
              <button
                onClick={handleBackToList}
                className="flex items-center gap-1.5 text-[#cfbe91] hover:text-[#efe7d2] text-[10px] font-bold uppercase tracking-widest transition-colors"
              >
                <ArrowLeft size={14} />
                {lang === "fr" ? "Retour" : "Back"}
              </button>
            </div>

            <div className="flex-1 overflow-y-auto custom-scrollbar p-5 space-y-6">
              <div>
                <span className="text-[#cfbe91] text-[9px] tracking-[0.2em] font-bold uppercase block mb-1">
                  {selectedPlace.type}
                </span>
                <h4 className="font-serif text-[#efe7d2] text-xl tracking-wide uppercase leading-tight mb-2">
                  {selectedPlace.name}
                </h4>
                <a
                  href={selectedPlace.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-bold text-[#cfbe91] hover:underline"
                >
                  <Eye size={12} />
                  {lang === "fr" ? "Voir sur Google Maps" : "See on Google Maps"}
                </a>
              </div>

              {selectedPlace.duration && (
                <div className="flex items-center gap-2 p-3 bg-[#cfbe91]/15 border border-[#cfbe91]/20 rounded-2xl text-[11px] text-[#cfbe91] font-bold tracking-wider uppercase">
                  <Clock size={14} />
                  <span>
                    {lang === "fr" 
                      ? `${selectedPlace.duration.text} en voiture` 
                      : `${selectedPlace.duration.text} driving distance`}
                  </span>
                </div>
              )}

              {selectedPlace.address && (
                <div className="space-y-1">
                  <span className="text-[#efe7d2]/40 text-[9px] uppercase tracking-wider font-bold block">
                    {lang === "fr" ? "Adresse" : "Address"}
                  </span>
                  <p className="text-[#efe7d2]/80 text-xs leading-relaxed font-sans font-medium">
                    {selectedPlace.address}
                  </p>
                </div>
              )}

              {selectedPlace.photos && selectedPlace.photos.length > 0 && (
                <div className="space-y-2">
                  <span className="text-[#efe7d2]/40 text-[9px] uppercase tracking-wider font-bold block">
                    {lang === "fr" ? "Photos du Voisinage" : "Photos of Location"}
                  </span>
                  <div className="grid grid-cols-3 gap-2">
                    {selectedPlace.photos.map((photo, i) => (
                      <button
                        key={i}
                        onClick={() => setActivePhotoIndex(i)}
                        className="aspect-square rounded-lg overflow-hidden border border-[#333330] hover:border-[#cfbe91] transition-colors relative group"
                      >
                        <img
                          src={photo.urlSmall}
                          alt="Place photo preview"
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Map Area */}
      <div className="flex-1 h-1/2 md:h-full relative">
        <div ref={mapContainerRef} className="w-full h-full" />
      </div>

      {/* Photo Modal Lightbox */}
      {activePhotoIndex !== null && selectedPlace && selectedPlace.photos && (
        <div className="fixed inset-0 z-[300] bg-black/95 flex items-center justify-center p-4">
          <button
            onClick={() => setActivePhotoIndex(null)}
            className="absolute top-6 right-6 p-3 border border-white/10 rounded-full hover:bg-white/10 text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5 rotate-90 md:rotate-0" />
          </button>
          
          <div className="max-w-4xl w-full max-h-[80vh] flex flex-col items-center">
            <img
              src={selectedPlace.photos[activePhotoIndex].urlLarge}
              alt="Neighborhood location photo full view"
              className="max-h-[70vh] object-contain rounded-xl shadow-2xl border border-white/5"
            />
            <div className="mt-4 text-center">
              <p className="text-white font-serif text-lg tracking-wide uppercase">
                {selectedPlace.name}
              </p>
              {selectedPlace.photos[activePhotoIndex].attrs.length > 0 && (
                <p 
                  className="text-white/40 text-[10px] mt-1 italic font-sans"
                  dangerouslySetInnerHTML={{ __html: `Photo by ${selectedPlace.photos[activePhotoIndex].attrs[0]}` }}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
