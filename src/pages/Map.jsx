const Map = () => {
  return (
    <div className="mapWrap">
      {/* <h2 className="homeTitle">Map</h2> */}

      <iframe
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1865739.8370029374!2d30.4739993854588!3d49.7726467673758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1suk!2sua!4v1693768201167!5m2!1suk!2sua"
        width="563"
        height="740"
        style={{border:0}}
        border="none"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
