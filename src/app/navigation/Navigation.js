import React from "react";
import {
  HomeModernIcon,
  MusicalNoteIcon,
  PencilIcon,
  ShoppingBagIcon,
  CalendarIcon
} from "@heroicons/react/24/solid";

export const Navigation = ({}) => {
  return (
    <nav className="bg-zinc-800 text-white font-sans ">
      <ul className="flex flex-row justify-evenly h-full w-full items-center">
        <li className="hover:bg-zinc-400 p-6 hover:pointer">
          <a href="/">
            <div className="flex flex-row items-center">
              <HomeModernIcon className="h-8 w-8" />
              <span className="sr-only">home</span>
            </div>
          </a>
        </li>
        <li className="hover:bg-zinc-400 p-6 hover:pointer">
          <a href="/music">
            <div className="flex flex-row items-center">
              <MusicalNoteIcon className="h-8 w-8" />
              <span className="sr-only">music</span>
            </div>
          </a>
        </li>
        <li className="hover:bg-zinc-400 p-6 hover:pointer">
          <a href="/shows">
            <div className="flex flex-row items-center">
              <CalendarIcon className="h-8 w-8" />
              <span className="sr-only">shows</span>
            </div>
          </a>
        </li>
        <li className="hover:bg-zinc-400 p-6 hover:pointer">
          <a href="/lyrics">
            <div className="flex flex-row items-center">
              <PencilIcon className="h-8 w-8" />
              <span className="sr-only">lyrics</span>
            </div>
          </a>
        </li>
        <li className="hover:bg-zinc-400 p-6 hover:pointer">
          <a href="/merch">
            <div className="flex flex-row items-center">
              <ShoppingBagIcon className="h-8 w-8" />
              <span className="sr-only">merch</span>
            </div>
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
