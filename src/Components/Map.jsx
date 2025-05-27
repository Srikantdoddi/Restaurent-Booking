import React, { useRef } from 'react';

const Map = () => {
  const locations = [
    {
      name: "Restaurant 1",
      description: "Located in the heart of the city with easy access to public transport.",
      address: "123 Downtown St, Cityville, Country",
      video: "https://videos.pexels.com/video-files/31735803/13521770_2560_1440_30fps.mp4",
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2420.95321603479!2d-73.9777044842057!3d40.75165497932776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259b7c60c4d2f%3A0xf57b4fdd8d1e8be8!2s123%20Downtown%20St%2C%20Cityville%2C%20Country!5e0!3m2!1sen!2sus!4v1651131343481!5m2!1sen!2sus",
    },
    {
      name: "Restaurant 2",
      description: "A cozy place away from the hustle and bustle, perfect for a quiet meal.",
      address: "456 Suburban Rd, Townville, Country",
      video: "https://videos.pexels.com/video-files/31801553/13548657_640_360_24fps.mp4",
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2435.8927292345!2d-73.879754123458!3d40.73679891750083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a073b40c87%3A0xd52f84e1987e8a7!2s456%20Suburban%20Rd%2C%20Townville%2C%20Country!5e0!3m2!1sen!2sus!4v1651131480045!5m2!1sen!2sus",
    },
    {
      name: "Restaurant 3",
      description: "A relaxing spot with a view of the ocean, perfect for dining by the sea.",
      address: "789 Ocean Blvd, Beachcity, Country",
      video: "https://videos.pexels.com/video-files/2620043/2620043-uhd_2560_1440_25fps.mp4",
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2523.1237981234!2d-75.2876231204059!3d36.98763529215472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3f45fcd6b21fb%3A0x5f5c5f6df67c6a3e!2s789%20Ocean%20Blvd%2C%20Beachcity%2C%20Country!5e0!3m2!1sen!2sus!4v1651131610457!5m2!1sen!2sus",
    },
  ];

  // Create refs dynamically
  const videoRefs = useRef([]);

  const handleVideoClick = (index) => {
    const video = videoRefs.current[index];
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) { /* Safari */
      video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) { /* IE11 */
      video.msRequestFullscreen();
    }
    video.play();
  };

  return (
    <div className="py-20 px-20 bg-gray-100">
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-red-700">Our Restaurant Locations</h2>
        <p className="mt-4 text-lg text-red-600">Choose a location to view more details and the map for directions.</p>
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {locations.map((location, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              src={location.video}
              onClick={() => handleVideoClick(index)}
              className="w-full h-48 object-cover cursor-pointer"
              muted
            >
              Your browser does not support the video tag.
            </video>

            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800">{location.name}</h3>
              <p className="mt-2 text-gray-600">{location.description}</p>
              <p className="mt-2 text-gray-600 italic">{location.address}</p>

              <div className="mt-4">
                <iframe
                  src={location.mapSrc}
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title={`Map of ${location.name}`}
                ></iframe>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Map;
