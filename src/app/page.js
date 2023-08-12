import Image from "next/image";
import { HeartIcon } from "@heroicons/react/24/solid";

export const Home = ({}) => {
  return (
    <main className="flex flex-col items-center justify-between p-8 lg:p-24 lg:mx-48">
      <section className="w-full">
        <h1 className="text-zinc-800 text-6xl">
          home <HeartIcon className="text-rose-600 w-8 h-8 inline" />
        </h1>

        <div className="font-sans text-base bg-rose-600 text-white p-8 mt-8">
          <div className="flex flex-row items-baseline justify-between">
            <h2 className="text-2xl">Post Title</h2>
            <span className="text-sm text-neutral-100 ml-2 border-b-2 border-dotted border-white">
              August 2, 2023
            </span>
          </div>
        </div>
        <div className="border border-dashed border-t-0 border-black px-8">
          <p className="py-4">
            Kogi mixtape franzen, truffaut authentic JOMO shaman intelligentsia
            pitchfork twee subway tile tumblr pickled chicharrones tote bag.
            Tofu slow-carb cupping, DIY shabby chic taxidermy bodega boys master
            cleanse tote bag meditation viral. Truffaut pop-up pickled
            vexillologist skateboard. Polaroid yr four loko chambray messenger
            bag. Asymmetrical Brooklyn offal cold-pressed chicharrones. Seitan
            farm-to-table cronut lo-fi knausgaard. Pinterest listicle swag,
            neutra cloud bread praxis jianbing man braid XOXO.
          </p>
          <p className="py-4">
            Pop-up intelligentsia echo park ramps flexitarian migas YOLO marxism
            chambray grailed. Skateboard narwhal artisan organic locavore paleo
            vice truffaut migas direct trade. Butcher narwhal vape cornhole
            slow-carb. Bicycle rights wolf etsy taiyaki, lo-fi cray live-edge
            church-key cronut. Pug yr before they sold out coloring book.
            Mumblecore 3 wolf moon affogato snackwave, +1 keffiyeh marfa
            polaroid freegan raw denim. Same crucifix meh farm-to-table portland
            DSA copper mug hella. Gatekeep 3 wolf moon keytar mustache iceland
            shaman food truck heirloom truffaut palo santo put a bird on it yes
            plz swag skateboard neutra. Disrupt aesthetic yuccie echo park
            jianbing marxism banjo art party taxidermy direct trade cronut
            shoreditch mukbang.
          </p>
          <p className="py-4 text-sm text-slate-800 w-full text-right">
            jc kirwan
          </p>
        </div>
        <div className="font-sans text-base bg-rose-600 text-white p-8 mt-8">
          <div className="flex flex-row items-baseline justify-between">
            <h2 className="text-2xl">Post Title</h2>
            <span className="text-sm text-neutral-100 ml-2 border-b-2 border-dotted border-white">
              August 2, 2023
            </span>
          </div>
        </div>
        <div className="border border-dashed border-t-0 border-black px-8">
          <p className="py-4">
            Kogi mixtape franzen, truffaut authentic JOMO shaman intelligentsia
            pitchfork twee subway tile tumblr pickled chicharrones tote bag.
            Tofu slow-carb cupping, DIY shabby chic taxidermy bodega boys master
            cleanse tote bag meditation viral. Truffaut pop-up pickled
            vexillologist skateboard. Polaroid yr four loko chambray messenger
            bag. Asymmetrical Brooklyn offal cold-pressed chicharrones. Seitan
            farm-to-table cronut lo-fi knausgaard. Pinterest listicle swag,
            neutra cloud bread praxis jianbing man braid XOXO.
          </p>
          <p className="py-4">
            Pop-up intelligentsia echo park ramps flexitarian migas YOLO marxism
            chambray grailed. Skateboard narwhal artisan organic locavore paleo
            vice truffaut migas direct trade. Butcher narwhal vape cornhole
            slow-carb. Bicycle rights wolf etsy taiyaki, lo-fi cray live-edge
            church-key cronut. Pug yr before they sold out coloring book.
            Mumblecore 3 wolf moon affogato snackwave, +1 keffiyeh marfa
            polaroid freegan raw denim. Same crucifix meh farm-to-table portland
            DSA copper mug hella. Gatekeep 3 wolf moon keytar mustache iceland
            shaman food truck heirloom truffaut palo santo put a bird on it yes
            plz swag skateboard neutra. Disrupt aesthetic yuccie echo park
            jianbing marxism banjo art party taxidermy direct trade cronut
            shoreditch mukbang.
          </p>
          <p className="py-4 text-sm text-slate-800 w-full text-right">
            jc kirwan
          </p>
        </div>
        
      </section>
    </main>
  );
};
export default Home;
