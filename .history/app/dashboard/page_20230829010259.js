"use client";

import Link from "next/link";

export default function Dashboard() {
    return (
        <main className="py-8 bg-bgColor">
            <div className="h-full mx-auto bg-gray-100 max-w-7xl">
                <div className="flex items-start justify-between h-full">
                    <div className="w-full h-full p-8 bg-white md:w-1/3">
                        <div className="flex items-center justify-between mb-6">
                            <span className="flex items-center px-2 py-1 text-xs font-semibold text-blue-500 bg-blue-100 rounded-md">
                                Signed
                            </span>
                            <div className="flex items-center">
                                <button className="p-1">
                                    <svg
                                        stroke="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="24px"
                                        height="24px"
                                    >
                                        <path d="M 4 4 C 2.9057453 4 2 4.9057453 2 6 L 2 18 C 2 19.094255 2.9057453 20 4 20 L 20 20 C 21.094255 20 22 19.094255 22 18 L 22 8 C 22 6.9057453 21.094255 6 20 6 L 12 6 L 10 4 L 4 4 z M 4 6 L 9.171875 6 L 11.171875 8 L 20 8 L 20 18 L 4 18 L 4 6 z" />
                                    </svg>
                                </button>
                                <button className="text-gray-100">
                                    <svg
                                        stroke="currentColor"
                                        height="24px"
                                        viewBox="0 0 48 48"
                                        width="24px"
                                    >
                                        <g>
                                            <circle cx="5.5" cy="24" r="5.5" />
                                            <circle
                                                cx="42.499"
                                                cy="24"
                                                r="5.5"
                                            />
                                            <circle cx="24" cy="24" r="5.5" />
                                        </g>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div class="mx-auto">
                            <div>
                                <div class="p-4">
                                    <div class="mb-4 text-center w-fit opacity-90 mx-auto">
                                        <a href="#" class="relative">
                                            <img
                                                alt="profil"
                                                src="/images/avatars/olivia.jpg"
                                                class="object-cover rounded-full h-20 w-20 "
                                            />
                                            <span className="absolute top-0 right-0 p-1 bg-yellow-600 rounded-full"></span>
                                        </a>
                                    </div>
                                    <div class="text-center">
                                        <p class="text-2xl font-bold text-gray-800">
                                            Olivia Evans
                                        </p>
                                        <Link
                                            href="/#"
                                            className="text-blue-600 text-md"
                                        >
                                            #224
                                        </Link>
                                    </div>
                                    <div class="flex items-center justify-between pt-8 mx-auto w-44">
                                        <span class="relative p-5 bg-green-100 rounded-full">
                                            <svg
                                                enable-background="new 0 0 50 50"
                                                height="50px"
                                                version="1.1"
                                                viewBox="0 0 50 50"
                                                width="50px"
                                                fill="currentColor"
                                                class="absolute h-5 text-green-500 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <rect
                                                    fill="none"
                                                    height="50"
                                                    width="50"
                                                />
                                                <path
                                                    d="M30.217,35.252c0,0,4.049-2.318,5.109-2.875  c1.057-0.559,2.152-0.7,2.817-0.294c1.007,0.616,9.463,6.241,10.175,6.739c0.712,0.499,1.055,1.924,0.076,3.32  c-0.975,1.396-5.473,6.916-7.379,6.857c-1.909-0.062-9.846-0.236-24.813-15.207C1.238,18.826,1.061,10.887,1,8.978  C0.939,7.07,6.459,2.571,7.855,1.595c1.398-0.975,2.825-0.608,3.321,0.078c0.564,0.781,6.124,9.21,6.736,10.176  c0.419,0.66,0.265,1.761-0.294,2.819c-0.556,1.06-2.874,5.109-2.874,5.109s1.634,2.787,7.16,8.312  C27.431,33.615,30.217,35.252,30.217,35.252z"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    stroke-miterlimit="10"
                                                    stroke-width="2"
                                                />
                                            </svg>
                                        </span>
                                        <span class="relative p-5 bg-yellow-100 rounded-full">
                                            <svg
                                                enable-background="new 0 0 64 64"
                                                height="64px"
                                                version="1.1"
                                                viewBox="0 0 64 64"
                                                width="64px"
                                                fill="currentColor"
                                                class="absolute h-5 text-yellow-500 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <style type="text/css"></style>
                                                <g>
                                                    <g
                                                        id="Icon-Envelope"
                                                        transform="translate(78.000000, 232.000000)"
                                                    >
                                                        <path
                                                            class="st0"
                                                            d="M-22.5-213.2l-1.9-1.9l-17.6,17.6c-2.2,2.2-5.9,2.2-8.1,0L-67.7-215l-1.9,1.9l13.1,13.1     l-13.1,13.1l1.9,1.9l13.1-13.1l2.6,2.6c1.6,1.6,3.7,2.5,5.9,2.5s4.3-0.9,5.9-2.5l2.6-2.6l13.1,13.1l1.9-1.9l-13.1-13.1     L-22.5-213.2"
                                                            id="Fill-3"
                                                        />
                                                        <path
                                                            class="st0"
                                                            d="M-26.2-181.6h-39.5c-2.3,0-4.2-1.9-4.2-4.2v-28.2c0-2.3,1.9-4.2,4.2-4.2h39.5     c2.3,0,4.2,1.9,4.2,4.2v28.2C-22-183.5-23.9-181.6-26.2-181.6L-26.2-181.6z M-65.8-215.5c-0.8,0-1.4,0.6-1.4,1.4v28.2     c0,0.8,0.6,1.4,1.4,1.4h39.5c0.8,0,1.4-0.6,1.4-1.4v-28.2c0-0.8-0.6-1.4-1.4-1.4H-65.8L-65.8-215.5z"
                                                            id="Fill-4"
                                                        />
                                                    </g>
                                                </g>
                                            </svg>
                                        </span>
                                        <span class="relative p-5 bg-blue-100 rounded-full">
                                            <svg
                                                class="absolute h-5 text-blue-500 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                                fill="none"
                                                height="24"
                                                stroke="currentColor"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                viewBox="0 0 24 24"
                                                width="24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                            </svg>
                                        </span>
                                    </div>
                                    <div class="mt-8 text-lg font-bold text-black border-b border-gray-200">
                                        2/5
                                        <span class="ml-2 font-normal text-gray-400">
                                            Followups
                                        </span>
                                    </div>
                                    <div class="w-full mb-8 h-2 bg-blue-200 rounded-full">
                                        <div class="w-2/5 h-full text-xs text-center text-white bg-blue-600 rounded-full"></div>
                                    </div>
                                    <div class="container flex flex-col items-center justify-center w-full">
                                        <ul class="flex flex-col divide-y divide w-full">
                                            <li class="flex flex-row">
                                                <div class="flex items-center flex-1 py-4 cursor-pointer select-none">
                                                    <div class="flex flex-col items-center justify-center w-10 h-10 mr-4">
                                                        <span class="relative p-4 bg-blue-200 rounded-xl">
                                                            <svg
                                                                height="128px"
                                                                version="1.1"
                                                                viewBox="0 0 128 128"
                                                                width="128px"
                                                                class="absolute h-4 text-blue-500 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <g>
                                                                    <g>
                                                                        <line
                                                                            style={{
                                                                                fill: "none",
                                                                                stroke: "#0000aa",
                                                                                strokeWidth:
                                                                                    "12",
                                                                                strokeLinecap:
                                                                                    "square",
                                                                                strokeMiterlimit: 10,
                                                                            }}
                                                                            x1="24.666"
                                                                            x2="64"
                                                                            y1="57.12"
                                                                            y2="17.787"
                                                                        />
                                                                        <line
                                                                            style={{
                                                                                fill: "none",
                                                                                stroke: "#0000aa",
                                                                                strokeWidth:
                                                                                    "12",
                                                                                strokeLinecap:
                                                                                    "square",
                                                                                strokeMiterlimit: 10,
                                                                            }}
                                                                            x1="64"
                                                                            x2="103.334"
                                                                            y1="17.787"
                                                                            y2="57.12"
                                                                        />
                                                                    </g>
                                                                    <line
                                                                        style={{
                                                                            fill: "none",
                                                                            stroke: "#0000aa",
                                                                            strokeWidth:
                                                                                "12",
                                                                            strokeMiterlimit:
                                                                                "10",
                                                                        }}
                                                                        x1="64"
                                                                        x2="64"
                                                                        y1="17.787"
                                                                        y2="118.213"
                                                                    />
                                                                </g>
                                                            </svg>
                                                        </span>
                                                    </div>
                                                    <div class="flex-1 pl-1">
                                                        <div class="font-medium">
                                                            03/06/18
                                                        </div>
                                                        <div class="text-xs text-gray-600">
                                                            123 Apt 2, New York,
                                                            NY 10001
                                                        </div>
                                                    </div>
                                                    <button class="flex ml-2 justify-end text-right">
                                                        <svg
                                                            width="20"
                                                            fill="currentColor"
                                                            height="20"
                                                            class="text-gray-500 hover:text-gray-800 dark:hover:text-white"
                                                            viewBox="0 0 1792 1792"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </li>
                                            <li class="flex flex-row">
                                                <div class="flex items-center flex-1 py-4 cursor-pointer select-none">
                                                    <div class="flex flex-col items-center justify-center w-10 h-10 mr-4">
                                                        <span class="relative p-4 bg-blue-200 rounded-xl">
                                                            <svg
                                                                height="128px"
                                                                version="1.1"
                                                                viewBox="0 0 128 128"
                                                                width="128px"
                                                                class="absolute h-4 text-blue-500 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <g>
                                                                    <g>
                                                                        <line
                                                                            style={{
                                                                                fill: "none",
                                                                                stroke: "#0000aa",
                                                                                strokeWidth:
                                                                                    "12",
                                                                                strokeLinecap:
                                                                                    "square",
                                                                                strokeMiterlimit: 10,
                                                                            }}
                                                                            x1="103.334"
                                                                            x2="64"
                                                                            y1="70.88"
                                                                            y2="110.213"
                                                                        />
                                                                        <line
                                                                            style={{
                                                                                fill: "none",
                                                                                stroke: "#0000aa",
                                                                                strokeWidth:
                                                                                    "12",
                                                                                strokeLinecap:
                                                                                    "square",
                                                                                strokeMiterlimit: 10,
                                                                            }}
                                                                            x1="64"
                                                                            x2="24.666"
                                                                            y1="110.213"
                                                                            y2="70.88"
                                                                        />
                                                                    </g>
                                                                    <line
                                                                        style={{
                                                                            fill: "none",
                                                                            stroke: "#0000aa",
                                                                            strokeWidth:
                                                                                "12",
                                                                            strokeMiterlimit: 10,
                                                                        }}
                                                                        x1="64"
                                                                        x2="64"
                                                                        y1="110.213"
                                                                        y2="9.787"
                                                                    />
                                                                </g>
                                                            </svg>
                                                        </span>
                                                    </div>
                                                    <div class="flex-1 pl-1">
                                                        <div class="font-medium">
                                                            03/06/18
                                                        </div>
                                                        <div class="text-xs text-gray-600">
                                                            123 Apt 2, Alamo, NY
                                                            10001
                                                        </div>
                                                    </div>
                                                    <button class="flex ml-2 justify-end text-right">
                                                        <svg
                                                            width="20"
                                                            fill="currentColor"
                                                            height="20"
                                                            class="text-gray-500 hover:text-gray-800 dark:hover:text-white"
                                                            viewBox="0 0 1792 1792"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="flex items-center mt-6 pb-2 text-gray-500 border-b">
                                        <svg
                                            fill="none"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            className="mr-4"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M2.75 17.9997H15.25C15.6642 17.9997 16 18.3355 16 18.7497C16 19.1294 15.7178 19.4432 15.3518 19.4928L15.25 19.4997H2.75C2.33579 19.4997 2 19.1639 2 18.7497C2 18.37 2.28215 18.0562 2.64823 18.0065L2.75 17.9997H15.25H2.75ZM2.75 11.4997H21.25C21.6642 11.4997 22 11.8355 22 12.2497C22 12.6294 21.7178 12.9432 21.3518 12.9928L21.25 12.9997H2.75C2.33579 12.9997 2 12.6639 2 12.2497C2 11.87 2.28215 11.5562 2.64823 11.5065L2.75 11.4997H21.25H2.75ZM2.75 5.00293H18.25C18.6642 5.00293 19 5.33872 19 5.75293C19 6.13263 18.7178 6.44642 18.3518 6.49608L18.25 6.50293H2.75C2.33579 6.50293 2 6.16714 2 5.75293C2 5.37323 2.28215 5.05944 2.64823 5.00978L2.75 5.00293H18.25H2.75Z"
                                                fill="#212121"
                                            />
                                        </svg>
                                        Details
                                    </div>

                                    <div class="relative w-full py-4 overflow-hidden rounded-xl md:w-80">
                                        <div class="flex items-center justify-between mb-6 rounded">
                                            <div class="flex items-center justify-between w-full text-sm">
                                                <div class="flex flex-col items-start justify-between ml-2">
                                                    Company
                                                </div>
                                                <span class="text-blue-400">
                                                    East Coast Movers
                                                </span>
                                            </div>
                                        </div>
                                        <div class="flex items-center justify-between mb-6 rounded text-sm">
                                            <div class="flex items-center justify-between w-full">
                                                <div class="flex flex-col items-start justify-between ml-2">
                                                    Assign to
                                                </div>
                                                <div class="flex items-center">
                                                    <span class="rounded-lg mr-2">
                                                        <img
                                                            className="inline-block w-5 h-5 rounded-full"
                                                            src="/images/avatars/olivia.jpg"
                                                            alt="Olivia"
                                                        />
                                                    </span>
                                                    <span className="text-bold">
                                                        Alex Just
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex items-center justify-between p-4 mb-2 bg-blue-100 rounded-lg">
                                        <div class="flex flex-col items-center justify-center w-10 h-10 mr-4">
                                            <span class="relative p-4 rounded-xl">
                                                <svg
                                                    class="feather feather-calendar text-blue-500"
                                                    fill="none"
                                                    height="24"
                                                    stroke="currentColor"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    viewBox="0 0 24 24"
                                                    width="24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <rect
                                                        height="18"
                                                        rx="2"
                                                        ry="2"
                                                        width="18"
                                                        x="3"
                                                        y="4"
                                                    />
                                                    <line
                                                        x1="16"
                                                        x2="16"
                                                        y1="2"
                                                        y2="6"
                                                    />
                                                    <line
                                                        x1="8"
                                                        x2="8"
                                                        y1="2"
                                                        y2="6"
                                                    />
                                                    <line
                                                        x1="3"
                                                        x2="21"
                                                        y1="10"
                                                        y2="10"
                                                    />
                                                </svg>
                                            </span>
                                        </div>
                                        <div class="flex-1 pl-1">
                                            <div class="font-xs text-xs text-gray-600">
                                                Next Appointment
                                            </div>
                                            <div class="text-medium font-bold">
                                                Today 3pm
                                            </div>
                                        </div>
                                        <button class="flex ml-2 justify-end text-right">
                                            <svg
                                                fill="currentColor"
                                                height="20"
                                                class="text-blue-500"
                                                viewBox="0 0 32 32"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <title />
                                                <g
                                                    data-name="Layer 2"
                                                    id="Layer_2"
                                                >
                                                    <path d="M22,9a1,1,0,0,0,0,1.42l4.6,4.6H3.06a1,1,0,1,0,0,2H26.58L22,21.59A1,1,0,0,0,22,23a1,1,0,0,0,1.41,0l6.36-6.36a.88.88,0,0,0,0-1.27L23.42,9A1,1,0,0,0,22,9Z" />
                                                </g>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-full pl-0 xl:w-2/3 md:p-4 md:space-y-4">
                        <header class="text-sm flex justify-between font-medium text-center text-gray-500 border-b border-gray-200 ">
                            <ul class="flex flex-wrap -mb-px">
                                <li class="mr-2">
                                    <a
                                        href="#"
                                        class="inline-block p-4 border-b-2 border-purple-600 text-purple-600 rounded-t-lg"
                                    >
                                        Overview
                                    </a>
                                </li>
                                <li class="mr-2">
                                    <a
                                        href="#"
                                        class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-purple-600 hover:border-purple-600 "
                                        aria-current="page"
                                    >
                                        Inventory
                                    </a>
                                </li>
                                <li class="mr-2">
                                    <a
                                        href="#"
                                        class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-purple-600 hover:border-purple-600"
                                    >
                                        Services
                                    </a>
                                </li>
                                <li class="mr-2">
                                    <a
                                        href="#"
                                        class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-purple-600 hover:border-purple-600 "
                                    >
                                        Contractors
                                    </a>
                                </li>
                            </ul>
                            <span class="relative bg-blue-500 rounded-full p-5 mb-3">
                                <svg
                                    enable-background="new 0 0 48 48"
                                    height="48px"
                                    viewBox="0 0 48 48"
                                    width="48px"
                                    fill="currentColor"
                                    class="absolute h-4 text-white transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        clip-rule="evenodd"
                                        d="M37,47H11c-2.209,0-4-1.791-4-4V5c0-2.209,1.791-4,4-4h18.973  c0.002,0,0.005,0,0.007,0h0.02H30c0.32,0,0.593,0.161,0.776,0.395l9.829,9.829C40.84,11.407,41,11.68,41,12l0,0v0.021  c0,0.002,0,0.003,0,0.005V43C41,45.209,39.209,47,37,47z M31,4.381V11h6.619L31,4.381z M39,13h-9c-0.553,0-1-0.448-1-1V3H11  C9.896,3,9,3.896,9,5v38c0,1.104,0.896,2,2,2h26c1.104,0,2-0.896,2-2V13z M33,39H15c-0.553,0-1-0.447-1-1c0-0.552,0.447-1,1-1h18  c0.553,0,1,0.448,1,1C34,38.553,33.553,39,33,39z M33,31H15c-0.553,0-1-0.447-1-1c0-0.552,0.447-1,1-1h18c0.553,0,1,0.448,1,1  C34,30.553,33.553,31,33,31z M33,23H15c-0.553,0-1-0.447-1-1c0-0.552,0.447-1,1-1h18c0.553,0,1,0.448,1,1C34,22.553,33.553,23,33,23  z"
                                        fill-rule="evenodd"
                                    />
                                </svg>
                            </span>
                        </header>
                        <div class="shadow-lg rounded-2xl bg-white p-4">
                            <div class="flex-row gap-4 flex justify-center items-center">
                                <div class="flex-shrink-0">
                                    <span class="relative p-5">
                                        <svg
                                            height="20px"
                                            version="1.1"
                                            viewBox="0 0 20 20"
                                            width="20px"
                                            fill="currentColor"
                                            class="absolute h-4 text-green-500 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <title />
                                            <desc />
                                            <defs />
                                            <g
                                                fill="none"
                                                fill-rule="evenodd"
                                                id="Page-1"
                                                stroke="none"
                                                stroke-width="1"
                                            >
                                                <g
                                                    fill="currentColor"
                                                    id="Core"
                                                    transform="translate(-128.000000, -86.000000)"
                                                >
                                                    <g
                                                        id="check-circle-outline"
                                                        transform="translate(128.000000, 86.000000)"
                                                    >
                                                        <path
                                                            d="M5.9,8.1 L4.5,9.5 L9,14 L19,4 L17.6,2.6 L9,11.2 L5.9,8.1 L5.9,8.1 Z M18,10 C18,14.4 14.4,18 10,18 C5.6,18 2,14.4 2,10 C2,5.6 5.6,2 10,2 C10.8,2 11.5,2.1 12.2,2.3 L13.8,0.7 C12.6,0.3 11.3,0 10,0 C4.5,0 0,4.5 0,10 C0,15.5 4.5,20 10,20 C15.5,20 20,15.5 20,10 L18,10 L18,10 Z"
                                                            id="Shape"
                                                        />
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                    </span>
                                </div>
                                <div class=" flex flex-col w-full">
                                    <span class="text-lg font-bold">
                                        Ready for Booking
                                    </span>
                                    <span class="text-xs text-gray-400">
                                        The Agreement is signed and this move is
                                        ready for booking
                                    </span>
                                </div>
                                <button
                                    type="button"
                                    class="py-2 px-4 bg-blue-500 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 min-w-fit rounded-full"
                                >
                                    Book Move
                                </button>
                            </div>
                        </div>
                        <div className="pt-2 pl-2 pr-2 overflow-auto md:pt-0 md:pr-0 md:pl-0">
                            <div className="grid grid-cols-1 gap-4 my-4 sm:grid-cols-1 md:grid-cols-2">
                                <div className="mb-4">
                                    <div className="w-full p-4 bg-white shadow-lg rounded-2xl">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center">
                                                <span className="relative p-1 m-4 bg-blue-500 rounded-xl"></span>
                                                <div className="flex flex-col">
                                                    <span className="ml-2 font-bold text-black text-md">
                                                        Inventory
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex items-center">
                                                <button className="text-gray-500">
                                                    <svg
                                                        fill="currentColor"
                                                        height="20"
                                                        viewBox="0 0 32 32"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <title />
                                                        <g
                                                            data-name="Layer 2"
                                                            id="Layer_2"
                                                        >
                                                            <path d="M22,9a1,1,0,0,0,0,1.42l4.6,4.6H3.06a1,1,0,1,0,0,2H26.58L22,21.59A1,1,0,0,0,22,23a1,1,0,0,0,1.41,0l6.36-6.36a.88.88,0,0,0,0-1.27L23.42,9A1,1,0,0,0,22,9Z" />
                                                        </g>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="flex items-center ml-10">
                                            <span className="py-4 ml-2 text-3xl font-bold text-black">
                                                $3,200
                                            </span>
                                        </div>
                                        <div className="flex items-center ml-10 text-sm border-b">
                                            <span className="py-3 ml-2 text-black text-md">
                                                42 Items
                                            </span>
                                        </div>
                                        <div className="flex items-center ml-10 text-sm">
                                            <span className="py-3 ml-2 text-black text-md">
                                                420 Cubic Feet
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <div className="w-full p-4 bg-white shadow-lg rounded-2xl">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center">
                                                <span className="relative p-1 m-4 bg-yellow-500 rounded-xl"></span>
                                                <div className="flex flex-col">
                                                    <span className="ml-2 font-bold text-black text-md">
                                                        Inventory
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex items-center">
                                                <button className="text-gray-500">
                                                    <svg
                                                        fill="currentColor"
                                                        height="20"
                                                        viewBox="0 0 32 32"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <title />
                                                        <g
                                                            data-name="Layer 2"
                                                            id="Layer_2"
                                                        >
                                                            <path d="M22,9a1,1,0,0,0,0,1.42l4.6,4.6H3.06a1,1,0,1,0,0,2H26.58L22,21.59A1,1,0,0,0,22,23a1,1,0,0,0,1.41,0l6.36-6.36a.88.88,0,0,0,0-1.27L23.42,9A1,1,0,0,0,22,9Z" />
                                                        </g>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="flex items-center ml-10">
                                            <span className="py-4 ml-2 text-3xl font-bold text-black">
                                                $3,200
                                            </span>
                                        </div>
                                        <div className="flex items-center ml-10 text-sm border-b">
                                            <span className="py-3 ml-2 text-black text-md">
                                                42 Items
                                            </span>
                                        </div>
                                        <div className="flex items-center ml-10 text-sm">
                                            <span className="py-3 ml-2 text-black text-md">
                                                420 Cubic Feet
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="min-w-full overflow-hidden py-8 px-16 bg-white rounded-lg shadow">
                            <div class="flex items-center justify-between my-4 rounded">
                                <div class="flex items-center justify-between font-bold">
                                    Aggrements
                                    <span className="ml-2 text-gray-500">
                                        03
                                    </span>
                                </div>
                                <span class="text-blue-500 text-sm font-bold">
                                    See All
                                </span>
                            </div>
                            <table class="min-w-full leading-normal mt-4">
                                <thead>
                                    <tr>
                                        <th
                                            scope="col"
                                            class="pt-8 pb-2 text-xs font-normal text-left text-gray-500 bg-white border-b border-gray-200"
                                        >
                                            ID
                                        </th>
                                        <th
                                            scope="col"
                                            class="pt-8 pb-2 text-xs font-normal text-left text-gray-500 bg-white border-b border-gray-200"
                                        >
                                            Price
                                        </th>
                                        <th
                                            scope="col"
                                            class="pt-8 pb-2 text-xs font-normal text-left text-gray-500 bg-white border-b border-gray-200"
                                        >
                                            Status
                                        </th>
                                        <th
                                            scope="col"
                                            class="pt-8 pb-2 text-xs font-normal text-left text-gray-500 bg-white border-b border-gray-200"
                                        >
                                            Consignees
                                        </th>
                                        <th
                                            scope="col"
                                            class="pt-8 pb-2 text-xs font-normal text-left text-gray-500 bg-white border-b border-gray-200"
                                        ></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="my-3 pt-3 text-sm bg-white border-gray-200">
                                            <div class="flex items-center">
                                                <a
                                                    href="#"
                                                    class="relative block text-blue-500 font-bold"
                                                >
                                                    #28842
                                                </a>
                                            </div>
                                        </td>
                                        <td class="my-3 pt-3 text-sm bg-white border-gray-200">
                                            <p class="whitespace-no-wrap">
                                                $4.090
                                                <span className="ml-2 text-gray-500">
                                                    (420CF)
                                                </span>
                                            </p>
                                        </td>
                                        <td class="my-3 pt-3 flex items-center text-sm bg-white border-gray-200">
                                            <span className="w-20 px-2 py-1 text-xs font-semibold text-center text-blue-500 bg-blue-100 rounded-md">
                                                Signed
                                            </span>
                                            <span className="ml-2">Today</span>
                                        </td>
                                        <td class="my-3 pt-3 text-sm bg-white border-gray-200">
                                            <div className="flex -space-x-2">
                                                <a href="#" className="">
                                                    <img
                                                        className="inline-block object-cover rounded-full w-7 h-7 ring-2 ring-white"
                                                        src="/images/avatars/olivia.jpg"
                                                        alt="Olivia"
                                                    />
                                                </a>
                                                <a href="#" className="">
                                                    <img
                                                        className="inline-block object-cover rounded-full w-7 h-7 ring-2 ring-white"
                                                        src="/images/avatars/olivia.jpg"
                                                        alt="Olivia"
                                                    />
                                                </a>
                                            </div>
                                        </td>
                                        <td class="my-3 pt-3 text-sm bg-white border-gray-200">
                                            <a
                                                href="#"
                                                class="text-blue-600 hover:text-blue-900"
                                            >
                                                ...
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="my-3 text-sm bg-white border-gray-200">
                                            <div class="flex items-center">
                                                <a
                                                    href="#"
                                                    class="relative block text-blue-500 font-bold"
                                                >
                                                    #28842
                                                </a>
                                            </div>
                                        </td>
                                        <td class="my-3 text-sm bg-white border-gray-200">
                                            <p class="whitespace-no-wrap">
                                                $4.090
                                                <span className="ml-2 text-gray-500">
                                                    (420CF)
                                                </span>
                                            </p>
                                        </td>
                                        <td class="my-3 flex items-center text-sm bg-white border-gray-200">
                                            <span className="w-20 px-2 py-1 text-xs font-semibold text-center text-gray-500 bg-gray-100 rounded-md">
                                                Canceled
                                            </span>
                                            <span className="ml-2">Jan 12</span>
                                        </td>
                                        <td class="my-3 text-sm bg-white border-gray-200">
                                            <div className="flex -space-x-2">
                                                <a href="#" className="">
                                                    <img
                                                        className="inline-block object-cover rounded-full w-7 h-7 ring-2 ring-white"
                                                        src="/images/avatars/olivia.jpg"
                                                        alt="Olivia"
                                                    />
                                                </a>
                                                <a href="#" className="">
                                                    <img
                                                        className="inline-block object-cover rounded-full w-7 h-7 ring-2 ring-white"
                                                        src="/images/avatars/olivia.jpg"
                                                        alt="Olivia"
                                                    />
                                                </a>
                                            </div>
                                        </td>
                                        <td class="my-3 text-sm bg-white border-gray-200">
                                            <a
                                                href="#"
                                                class="text-blue-600 hover:text-blue-900"
                                            >
                                                ...
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="my-3 text-sm bg-white border-gray-200">
                                            <div class="flex items-center">
                                                <a
                                                    href="#"
                                                    class="relative block text-blue-500 font-bold"
                                                >
                                                    #28842
                                                </a>
                                            </div>
                                        </td>
                                        <td class="my-3 text-sm bg-white border-gray-200">
                                            <p class="whitespace-no-wrap">
                                                $4.090
                                                <span className="ml-2 text-gray-500">
                                                    (420CF)
                                                </span>
                                            </p>
                                        </td>
                                        <td class="my-3 flex items-center text-sm bg-white border-gray-200">
                                            <span className="w-20 px-2 py-1 text-xs font-semibold text-center text-gray-500 bg-gray-100 rounded-md">
                                                Canceled
                                            </span>
                                            <span className="ml-2">Jan 12</span>
                                        </td>
                                        <td class="my-3 text-sm bg-white border-gray-200">
                                            <div className="flex -space-x-2">
                                                <a href="#" className="">
                                                    <img
                                                        className="inline-block object-cover rounded-full w-7 h-7 ring-2 ring-white"
                                                        src="/images/avatars/olivia.jpg"
                                                        alt="Olivia"
                                                    />
                                                </a>
                                            </div>
                                        </td>
                                        <td class="my-3 text-sm bg-white border-gray-200">
                                            <a
                                                href="#"
                                                class="text-blue-600 hover:text-blue-900"
                                            >
                                                ...
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
