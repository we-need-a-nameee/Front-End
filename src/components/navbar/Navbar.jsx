import React from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import {
  Bars3Icon,
  BellIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import navCSS from "./navbar.module.css";
import { Link, NavLink } from "react-router-dom";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

const navigation = [
  { name: "Home", to: "/home" },
  { name: "Hospital Locator", to: "/hospitallocator" },
  { name: "Hospital Details", to: "/hospitaldetails" },
  { name: "Booking", to: "/appointmentbooking" },
  { name: "Telemedicine", to: "/telemedicine" },
  { name: "About us", to: "/about" },
];

// Utility function to conditionally apply classes
function classNames(...classes) {
  return classes.filter(Boolean).join(" "); // Filter out falsy values
}
export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-c3">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-light hover:bg-p hover:text-light focus:outline-none focus:ring-2 focus:ring-inset focus:ring-light">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block h-6 w-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden h-6 w-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
            <div className="flex flex-shrink-0 items-center">
              <Link
                to="/home"
                className={`${navCSS.logo} bg-gradient-to-r from-p via-p to-light text-transparent bg-clip-text text-4xl font-medium tracking-wide`}
                style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)" }}
              >
                WellNessWay
              </Link>
            </div>
            <div className="hidden w-3/4  sm:mx-6 sm:block">
              <div className="flex justify-evenly capitalize space-x-4">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.to} // use `to` instead of `href`
                    className={({ isActive }) =>
                      // use `isActive` to determine active state
                      classNames(
                        isActive ? "bg-p text-light" : "text-light hover:bg-p",
                        "rounded-md px-3 py-2 text-sm font-medium cursor-pointer"
                      )
                    } // use `isActive` to determine active state
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* search dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton
                  type="button"
                  className="relative rounded-full p-1 text-light hover:bg-p"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View search</span>
                  <MagnifyingGlassIcon aria-hidden="true" className="h-6 w-6" />
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 p-2 top-12 z-50 mt-2 origin-top-right rounded-md bg-lighttext-light shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in bg-light"
              >
                <TextField
                  className="w-[200px]"
                  id="outlined-basic"
                  label="Search"
                  variant="outlined"
                  size="small"
                  
                />
              </MenuItems>
            </Menu>
            {/* notifications dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton
                  type="button"
                  className="relative rounded-full p-1 text-light hover:bg-p"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon aria-hidden="true" className="h-6 w-6" />
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 top-12 z-50 mt-2 w-48 origin-top-right rounded-md bg-lighttext-light py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in bg-light"
              >
                <div className="p-2 font-bold text-center">
                  no notifications
                </div>
              </MenuItems>
            </Menu>

            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex rounded-full bg-gray-800 text-sm">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="h-8 w-8 rounded-full"
                  />
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 top-12 z-50 mt-2 w-48 origin-top-right rounded-md bg-lighttext-light py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in bg-light"
              >
                <MenuItem>
                  <NavLink
                    to="/userprofile"
                    className={({ isActive }) =>
                      classNames(
                        "block px-4 py-2 text-sm text-center hover:bg-c3 hover:text-light transition",
                        isActive && "bg-c3 text-light"
                      )
                    }
                  >
                    Your Profile
                  </NavLink>
                </MenuItem>
                <MenuItem>
                  <NavLink
                    to="/support"
                    className={({ isActive }) =>
                      classNames(
                        "block px-4 py-2 text-sm text-center hover:bg-c3 hover:text-light transition",
                        isActive && "bg-c3 text-light"
                      )
                    }
                  >
                    Support
                  </NavLink>
                </MenuItem>
                <MenuItem>
                  <button className="block w-full px-4 py-2 text-sm text-center hover:bg-c3 hover:text-light transition">
                    Sign out
                  </button>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.current
                  ? "bg-p text-light"
                  : "text-light hover:bg-p hover:text-light",
                "block rounded-md px-3 py-2 text-base font-medium"
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
