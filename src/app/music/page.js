import Image from "next/image";

export const Music = () => {
  return (
    <>
      <h1 className="text-zinc-800 text-6xl">music</h1>
      <div className="flex flex-col lg:flex-row items-center w-full justify-between">
        <div className="m-8 lg:ml-0">
          <div className="border border-gray-200">
            <Image
              src="/octopus-art.jpg"
              width={500}
              height={500}
              alt="Gasoline EP art"
            />
          </div>
          <div className="flex flex-row justify-between items-start mt-4">
            <div className="flex flex-col justify-center items-baseline">
              <h2 className="text-2xl">gasoline ep</h2>
              <span className="ml-4">june 2023</span>
            </div>
            <div className="mt-4 flex flex-row justify-center gap-8">
              <a
                href="https://smalldisasters.bandcamp.com/album/gasoline"
                target="_blank"
                rel="noreferrer nofollow"
              >
                <Image
                  src="/bandcamp-button-circle-128.png"
                  width={32}
                  height={32}
                  alt="Bandcamp Logo"
                />
              </a>
              <a
                href="https://open.spotify.com/album/2KU6t4urrhs08ZuA2y4fXM?si=QmYIHvuPQ5eKTPYe4IwQNw"
                target="_blank"
                rel="noreferrer nofollow"
              >
                <Image
                  src="/spotify-transparent-icon.png"
                  width={32}
                  height={32}
                  alt="Spotify Logo"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="m-8 ">
          <Image
            src="/hummingbird-art.jpg"
            width={500}
            height={500}
            alt="demo ep art"
          />
          <div className="flex flex-row justify-between items-start mt-4">
            <div className="flex flex-col justify-center items-baseline ">
              <h2 className="text-2xl">demo ep</h2>
              <span className="ml-4">october 2021</span>
            </div>
            <div className="mt-4 flex flex-row justify-center gap-8">
              <a
                href="https://smalldisasters.bandcamp.com/album/small-disasters"
                target="_blank"
                rel="noreferrer nofollow"
              >
                <Image
                  src="/bandcamp-button-circle-128.png"
                  width={32}
                  height={32}
                  alt="Bandcamp Logo"
                />
              </a>
              <a
                href="https://open.spotify.com/album/1I7tNxiKBd7G9dSPuRpypB?si=1hqsnqElQHmbh6CwT4foxA"
                target="_blank"
                rel="noreferrer nofollow"
              >
                <Image
                  src="/spotify-transparent-icon.png"
                  width={32}
                  height={32}
                  alt="Spotify Logo"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Music;
