'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function Navbar({ children }) {
  return (
    <div className="drawer">
      <input
        id="my-drawer-3"
        type="checkbox"
        className="drawer-toggle"
      />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="navbar bg-base-300 w-full">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <FontAwesomeIcon
                className="text-2xl"
                icon={faBars}
              />
            </label>
          </div>
          <div className="mx-2 flex-1 px-2">
            <Link
              legacyBehavior
              href={'/'}
            >
              <a>Daisynateur</a>
            </Link>
          </div>
          <div className="hidden flex-none lg:block">
            <ul className="menu menu-horizontal  ">
              {/* Navbar menu content here */}
              <li className="">
                <details>
                  <summary>About</summary>
                  <ul className="bg-base-100  rounded-t-none p-2">
                    <li>
                      <Link
                        legacyBehavior
                        href={'/about-idol'}
                      >
                        Idol
                      </Link>
                    </li>
                    <li>
                      <Link
                        legacyBehavior
                        href={'/about-fandom'}
                      >
                        Fandom
                      </Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li className="">
                <Link href={'/jadwal-pertunjukan'}>Jadwal Pertunjukan</Link>
              </li>
              <li className="">
                <Link href={'/gallery'}>Gallery</Link>
              </li>
              <li className="">
                <Link href={'/game'}>Mini Game</Link>
              </li>
            </ul>
          </div>
        </div>
        {/* Page content here */}
        {children}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 min-h-full w-80 p-4">
          {/* Sidebar content here */}
          <li className="mb-10">
            <h1 className="text-2xl">Navbar Title</h1>
          </li>
          <li className="">
            <details>
              <summary>About</summary>
              <ul className="bg-base-100  rounded-t-none p-2">
                <li>
                  <Link
                    legacyBehavior
                    href={'/about-idol'}
                  >
                    Idol
                  </Link>
                </li>
                <li>
                  <Link
                    legacyBehavior
                    href={'/about-fandom'}
                  >
                    Fandom
                  </Link>
                </li>
              </ul>
            </details>
          </li>
          <li className="">
            <Link
              legacyBehavior
              href={'/jadwal-pertunjukan'}
            >
              Jadwal Pertunjukan
            </Link>
          </li>
          <li className="">
            <Link
              legacyBehavior
              href={'/gallery'}
            >
              Gallery
            </Link>
          </li>
          <li className="">
            <Link
              legacyBehavior
              href={'/game'}
            >
              Mini Game
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
