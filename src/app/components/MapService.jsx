'use client';
// Map Integration
import React, { useEffect, useState } from "react";

const MapPage = () => {
  const [isClient, setIsClient] = useState(false); // Track client-side rendering

  useEffect(() => {
    setIsClient(true); // Once the component is mounted, set it to true
  }, []);

  useEffect(() => {
    if (isClient) {
      // Dynamically add the script tag for TomTom SDK only on the client side
      const script = document.createElement("script");
      script.src = "https://api.tomtom.com/maps-sdk-for-web/cdn/6.x/6.25.1/maps/maps-web.min.js";
      script.async = true;
      script.onload = () => {
        const tt = window.tt; // Access TomTom SDK from window object

        const latitude = 18.514443;
        const longitude = 73.852251;

        const isMobileOrTablet = () => {
          return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        };

        // Initialize the map
        const map = tt.map({
          key: "S8mRLDvFcGV8ktp2Wz6gffmG6JjULKQ3",
          container: "map",
          center: [longitude, latitude],
          zoom: 14,
          dragPan: !isMobileOrTablet(),
        });

        map.addControl(new tt.FullscreenControl());
        map.addControl(new tt.NavigationControl());

        // Reverse Geocoding to get the location name based on the latitude and longitude
        const reverseGeocode = async () => {
          const reverseGeocodeUrl = `https://api.tomtom.com/search/2/reverseGeocode/${latitude},${longitude}.json?key=S8mRLDvFcGV8ktp2Wz6gffmG6JjULKQ3`;

          try {
            const response = await fetch(reverseGeocodeUrl);
            const data = await response.json();
            if (data && data.addresses && data.addresses.length > 0) {
              const address = data.addresses[0].address.freeformAddress;
              console.log("Location:", address);
              // You can add a marker or display the address on the map
              const popup = new tt.Popup().setHTML(address);
              new tt.Marker()
                .setLngLat([longitude, latitude])
                .setPopup(popup) // Add popup to the marker
                .addTo(map);
            }
          } catch (error) {
            console.error("Error fetching location:", error);
          }
        };

        reverseGeocode();
      };

      document.body.appendChild(script);

      // Cleanup the script on component unmount
      return () => {
        document.body.removeChild(script);
      };
    }
  }, [isClient]);

  if (!isClient) {
    return null; // Prevent rendering map on the server side
  }

  return (
    <div className="rounded-lg">
      <div className="rounded-lg">
        <link
          rel="stylesheet"
          href="https://api.tomtom.com/maps-sdk-for-web/cdn/6.x/6.25.1/maps/maps.css"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
      </div>
      <div
        id="map"
        className="map"
        style={{ height: "380px", width: "" }}
      ></div>
    </div>
  );
};

export default MapPage;