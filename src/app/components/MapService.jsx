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
