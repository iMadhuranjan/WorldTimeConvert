const ResponsiveIframe = ({ url }) => {
    if (!url) {
      return <p className="text-center text-gray-500">Map is not available.</p>;
    }
  
    return (
      <div
        style={{ position: "relative", paddingTop: "56.25%", height: 0 }}
        className="my-5"
      >
        <iframe
          src={url}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: "0",
          }}
          allowFullScreen
          loading="lazy"
          title="Embedded Map"
        ></iframe>
      </div>
    );
  };
  
  export default ResponsiveIframe;
  