import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  Cog6ToothIcon,
  FolderIcon,
  HomeIcon,
  PaperClipIcon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { useRouter } from "next/router";
import Link from "next/link";

const user = {
  name: "Tom Cook",
  email: "tom@institutobuenviaje.edu.ar",
  rol: "alumno",
  id: "12345678",
};
const navigation = [
  {
    name: "Inicio",
    href: "/",
    current: true,
    icon: <HomeIcon className="w-4 h-4 mr-2 inline-flex align-middle mb-1" />,
  },
  {
    name: "Usuarios",
    href: "/usuarios",
    current: false,
    icon: <UsersIcon className="w-4 h-4 mr-2 inline-flex align-middle mb-1" />,
  },
  {
    name: "Carreras",
    href: "/carreras",
    current: false,
    icon: <FolderIcon className="w-4 h-4 mr-2 inline-flex align-middle mb-1" />,
  },
  {
    name: "Materias",
    href: "/materias",
    current: false,
    icon: <FolderIcon className="w-4 h-4 mr-2 inline-flex align-middle mb-1" />,
  },
  {
    name: "Documentación",
    href: "/documentacion",
    current: false,
    icon: (
      <PaperClipIcon className="w-4 h-4 mr-2 inline-flex align-middle mb-1" />
    ),
  },
];
const userNavigation = [
  { name: "Perfil", href: "/perfil" },
  { name: "Configuración", href: "/configuracion" },
  { name: "Cerrar sesión", href: "/login" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function MainMenu() {
  const router = useRouter();
  const route = router.asPath;

  navigation.map((r) =>
    r.href == route ? (r.current = true) : (r.current = false)
  );

  return (
    <>
      <div className="h-full flex">
        <Disclosure
          as="nav"
          className="bg-gray-800 lg:min-h-screen h-full w-full lg:w-60"
        >
          {({ open }) => (
            <>
              <div className="w-auto px-6 py-4 sm:py-6 lg:py-8">
                <div className="flex flex-col h-full">
                  <div className="flex flex-row lg:flex-col items-center lg:space-y-6">
                    <div className="flex-shrink-0">
                      <img
                        className="h-8 w-8 mx-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                        alt="Your Company"
                      />
                    </div>
                    <Disclosure.Button className="inline-flex lg:hidden ml-auto items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>

                    <div className="hidden lg:block w-full">
                      <Menu
                        as="div"
                        className="relative flex w-full items-center"
                      >
                        <div className="flex pl-3 w-full items-center">
                          <div className="relative">
                            <div className="text-base font-medium leading-none text-white overflow-hidden overflow-ellipsis w-36">
                              {user.name}
                            </div>
                            <div className="text-sm font-medium leading-none text-gray-400 overflow-hidden overflow-ellipsis w-36">
                              {user.email}
                            </div>
                          </div>
                          <Menu.Button
                            type="button"
                            className="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                          >
                            <span className="sr-only">Ver menu de usuario</span>
                            <Cog6ToothIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                            <Transition
                              as={Fragment}
                              enter="transition ease-out duration-100"
                              enterFrom="transform opacity-0 scale-95"
                              enterTo="transform opacity-100 scale-100"
                              leave="transition ease-in duration-75"
                              leaveFrom="transform opacity-100 scale-100"
                              leaveTo="transform opacity-0 scale-95"
                            >
                              <Menu.Items className="absolute right-0 z-10 mt-3 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                {userNavigation.map((item) => (
                                  <Menu.Item key={item.name}>
                                    {({ active }) => (
                                      <a
                                        href={item.href}
                                        className={classNames(
                                          active ? "bg-gray-100" : "",
                                          "block px-4 py-2 text-sm text-gray-700"
                                        )}
                                      >
                                        {item.name}
                                      </a>
                                    )}
                                  </Menu.Item>
                                ))}
                              </Menu.Items>
                            </Transition>
                          </Menu.Button>
                        </div>
                      </Menu>
                    </div>

                    <div className="hidden lg:block w-full">
                      <div className="flex flex-col space-y-2 w-full">
                        {navigation.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? "bg-gray-900 text-white"
                                : "text-gray-300 hover:bg-gray-700 hover:text-white",
                              "px-3 py-2 rounded-md text-sm font-medium block w-full"
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.icon}
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="lg:hidden">
                <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as={Link}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "block px-3 py-2 rounded-md text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.icon}
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="border-t border-gray-700 pt-4 pb-3">
                  <div className="flex items-center px-5">
                    <div>
                      <div className="text-base font-medium leading-none text-white">
                        {user.name}
                      </div>
                      <div className="text-sm font-medium leading-none text-gray-400">
                        {user.email}
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 space-y-1 px-2">
                    {userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as={Link}
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </>
  );
}
