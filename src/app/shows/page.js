import Image from "next/image";
import {
  CurrencyDollarIcon,
  ClockIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";

export const Shows = () => {
  return (
    <>
      <h1 className="text-zinc-800 text-6xl">shows</h1>

      <div className="flex flex-col">
        <div className="p-8 my-4 bg-teal-50 shadow w-full flex flex-col lg:flex-row items-start">
          <div className="w-full lg:w-2/3">
            <h2 className="text-xl font-bold lowercase">
              Friday, September 22, 2023
            </h2>
            <h3 className="text-2xl font-sans lowercase mt-4">
              <div className="flex flex-row items-center">
                <a
                  href="https://goo.gl/maps/H9bxvpf3Tz1FZBna6"
                  target="_blank"
                  rel="noreferer nofollow"
                >
                  <MapPinIcon className="h-8 w-8 text-red-600 mr-4" />
                </a>
                <a
                  href="http://nobbysfl.weebly.com/"
                  target="_blank"
                  rel="noreferer nofollow"
                >
                  Shanghai Nobbys
                </a>
              </div>
            </h3>
            <h4 className="text-base lowercas flex flex-col items-start justify-start mt-4">
              <div className="flex flex-row items-center">
                <CurrencyDollarIcon className="text-green-600 h-8 w-8 mr-4" />
                <span className="text-xl">8</span>
              </div>
              <div className="flex flex-row items-center mt-4">
                <ClockIcon className="text-gray-500 h-8 w-8 mr-4" />
                <span className="text-xl">10 p.m.</span>
              </div>
            </h4>
            <p className="lowercase mt-4">
              Succulents man bun ethical 8-bit plaid bushwick, fashion axe
              biodiesel DSA whatever franzen. Post-ironic thundercats semiotics
              umami, swag prism trust fund vexillologist pinterest subway.
            </p>
          </div>
          <div className="mt-8 w-full lg:ml-8 lg:w-1/3">
            <Image
              src="/sample-flyer.jpg"
              width={300}
              height={300}
              alt="sterling and danny live"
            />
          </div>
        </div>
        <div className="p-8 my-4 bg-teal-50 shadow w-full flex flex-col lg:flex-row items-start">
          <div className="w-full lg:w-2/3">
            <h2 className="text-xl font-bold lowercase">
              Friday, September 22, 2023
            </h2>
            <h3 className="text-2xl font-sans lowercase mt-4">
              <div className="flex flex-row items-center">
                <a
                  href="https://goo.gl/maps/H9bxvpf3Tz1FZBna6"
                  target="_blank"
                  rel="noreferer nofollow"
                >
                  <MapPinIcon className="h-8 w-8 text-red-600 mr-4" />
                </a>
                <a
                  href="http://nobbysfl.weebly.com/"
                  target="_blank"
                  rel="noreferer nofollow"
                >
                  Shanghai Nobbys
                </a>
              </div>
            </h3>
            <h4 className="text-base lowercas flex flex-col items-start justify-start mt-4">
              <div className="flex flex-row items-center">
                <CurrencyDollarIcon className="text-green-600 h-8 w-8 mr-4" />
                <span className="text-xl">8</span>
              </div>
              <div className="flex flex-row items-center mt-4">
                <ClockIcon className="text-gray-500 h-8 w-8 mr-4" />
                <span className="text-xl">10 p.m.</span>
              </div>
            </h4>
            <p className="lowercase mt-4">
              Succulents man bun ethical 8-bit plaid bushwick, fashion axe
              biodiesel DSA whatever franzen. Post-ironic thundercats semiotics
              umami, swag prism trust fund vexillologist pinterest subway tile
              occupy selvage VHS live-edge. +1 deep v normcore fixie actually
              PBR&B chambray health goth aesthetic hot chicken bushwick
              typewriter glossier. Organic poutine gastropub kinfolk neutra
              forage. Keytar blackbird spyplane etsy green juice pabst portland.
            </p>
          </div>
          <div className="mt-8 w-full lg:ml-8 lg:w-1/3">
            <Image
              src="/sample-flyer.jpg"
              width={300}
              height={300}
              alt="sterling and danny live"
            />
          </div>
        </div>

      </div>
    </>
  );
};

export default Shows;
