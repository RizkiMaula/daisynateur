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
      <div className="flex flex-col drawer-content">
        {/* Navbar */}
        <div className="w-full navbar bg-base-300">
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
          <div className="flex-1 px-2 mx-2">
            <Link
              legacyBehavior
              href={'/'}
            >
              <a>Daisynateur</a>
            </Link>
          </div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal ">
              {/* Navbar menu content here */}
              <li className="">
                <details>
                  <summary>About</summary>
                  <ul className="p-2 rounded-t-none bg-base-100">
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
        <ul className="min-h-full p-4 menu bg-base-200 w-80">
          {/* Sidebar content here */}
          <li className="mb-10">
            <h1 className="text-2xl">Menu</h1>
          </li>
          <li className="">
            <details>
              <summary>About</summary>
              <ul className="p-2 rounded-t-none bg-base-100">
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
