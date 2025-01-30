export default function GoogleMap() {
  const mapUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.3203588589834!2d73.8496336!3d18.5145647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c3d7368268b7%3A0x5c9ccb8e98272aa2!2sMetatech%20Industries!5e0!3m2!1sen!2sin!4v1706619191767!5m2!1sen!2sin";

  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-lg">

        <iframe
          src={mapUrl}
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}




// 'use client';
// // Map Integration
// import React, { useEffect, useState } from "react";

// const MapPage = () => {
//   const [isClient, setIsClient] = useState(false); // Track client-side rendering

//   useEffect(() => {
//     setIsClient(true); // Once the component is mounted, set it to true
//   }, []);

//   useEffect(() => {
//     if (isClient) {
//       // Dynamically add the script tag for TomTom SDK only on the client side
//       const script = document.createElement("script");
//       script.src = "https://api.tomtom.com/maps-sdk-for-web/cdn/6.x/6.25.1/maps/maps-web.min.js";
//       script.async = true;
//       script.onload = () => {
//         const tt = window.tt; // Access TomTom SDK from window object

//         const latitude = 18.5146578;
//         const longitude = 73.8520407;

//         const isMobileOrTablet = () => {
//           return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
//         };

//         // Initialize the map
//         const map = tt.map({
//           key: "S8mRLDvFcGV8ktp2Wz6gffmG6JjULKQ3",
//           container: "map",
//           center: [longitude, latitude],
//           zoom: 14,
//           dragPan: !isMobileOrTablet(),
//         });

//         map.addControl(new tt.FullscreenControl());
//         map.addControl(new tt.NavigationControl());

//         // Reverse Geocoding to get the location name based on the latitude and longitude
//         const reverseGeocode = async () => {
//           const reverseGeocodeUrl = `https://api.tomtom.com/search/2/reverseGeocode/${latitude},${longitude}.json?key=S8mRLDvFcGV8ktp2Wz6gffmG6JjULKQ3`;

//           try {
//             const response = await fetch(reverseGeocodeUrl);
//             const data = await response.json();
//             if (data && data.addresses && data.addresses.length > 0) {
//               const address = data.addresses[0].address.freeformAddress;
//               console.log("Location:", address);
//               // You can add a marker or display the address on the map
//               const popup = new tt.Popup().setHTML(address);
//               new tt.Marker()
//                 .setLngLat([longitude, latitude])
//                 .setPopup(popup) // Add popup to the marker
//                 .addTo(map);
//             }
//           } catch (error) {
//             console.error("Error fetching location:", error);
//           }
//         };

//         reverseGeocode();
//       };

//       document.body.appendChild(script);

//       // Cleanup the script on component unmount
//       return () => {
//         document.body.removeChild(script);
//       };
//     }
//   }, [isClient]);

//   if (!isClient) {
//     return null; // Prevent rendering map on the server side
//   }

//   return (
//     <div className="rounded-lg">
//       <div className="rounded-lg">
//         <link
//           rel="stylesheet"
//           href="https://api.tomtom.com/maps-sdk-for-web/cdn/6.x/6.25.1/maps/maps.css"
//         />
//         <meta
//           name="viewport"
//           content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
//         />
//       </div>
//       <div
//         id="map"
//         className="map"
//         style={{ height: "380px", width: "" }}
//       ></div>
//     </div>
//   );
// };

// export default MapPage;