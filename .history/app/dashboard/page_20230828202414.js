"use client";

import Link from "next/link";

export default function Dashboard() {
    return (
        <main className="h-screen py-8 bg-bgColor">
            <div className="h-full mx-auto bg-gray-100 max-w-7xl">
                <div className="flex items-start justify-between h-full">
                    <div className="w-full h-full p-8 bg-white md:w-1/3">
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center">
                                <span className="flex items-center px-2 py-1 text-xs font-semibold text-blue-500 bg-blue-100 rounded-md">
                                    Signed
                                </span>
                                <div className="flex flex-col">
                                    <span className="ml-2 font-bold text-black text-md">
                                        Google
                                    </span>
                                    <span className="ml-2 text-sm text-gray-500">
                                        Google Inc.
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <button className="p-1 border border-gray-200 rounded-full">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        className="w-4 h-4 text-yellow-500"
                                        fill="currentColor"
                                        viewBox="0 0 1792 1792"
                                    >
                                        <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path>
                                    </svg>
                                </button>
                                <button className="text-gray-200">
                                    <svg
                                        width="25"
                                        height="25"
                                        fill="currentColor"
                                        viewBox="0 0 1792 1792"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M1088 1248v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div class="mx-auto">
                            <div>
                                <div class="p-4">
                                    <div class="mb-4 text-center opacity-90">
                                        <a href="#" class="relative block">
                                            <img
                                                alt="profil"
                                                src="/images/avatars/olivia.jpg"
                                                class="mx-auto object-cover rounded-full h-30 w-30 "
                                            />
                                        </a>
                                    </div>
                                    <div class="text-center">
                                        <p class="text-2xl text-gray-800">
                                            Olivia Evans
                                        </p>
                                        <Link
                                            href="/#"
                                            className="text-xl font-light text-blue-500"
                                        >
                                            #224
                                        </Link>
                                    </div>
                                    <div class="flex items-center justify-between pt-8 mx-auto w-44">
                                        <span class="relative p-5 bg-yellow-100 rounded-full">
                                            <svg
                                                width="40"
                                                fill="currentColor"
                                                height="40"
                                                class="absolute h-5 text-yellow-500 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                                viewBox="0 0 1792 1792"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M1362 1185q0 153-99.5 263.5t-258.5 136.5v175q0 14-9 23t-23 9h-135q-13 0-22.5-9.5t-9.5-22.5v-175q-66-9-127.5-31t-101.5-44.5-74-48-46.5-37.5-17.5-18q-17-21-2-41l103-135q7-10 23-12 15-2 24 9l2 2q113 99 243 125 37 8 74 8 81 0 142.5-43t61.5-122q0-28-15-53t-33.5-42-58.5-37.5-66-32-80-32.5q-39-16-61.5-25t-61.5-26.5-62.5-31-56.5-35.5-53.5-42.5-43.5-49-35.5-58-21-66.5-8.5-78q0-138 98-242t255-134v-180q0-13 9.5-22.5t22.5-9.5h135q14 0 23 9t9 23v176q57 6 110.5 23t87 33.5 63.5 37.5 39 29 15 14q17 18 5 38l-81 146q-8 15-23 16-14 3-27-7-3-3-14.5-12t-39-26.5-58.5-32-74.5-26-85.5-11.5q-95 0-155 43t-60 111q0 26 8.5 48t29.5 41.5 39.5 33 56 31 60.5 27 70 27.5q53 20 81 31.5t76 35 75.5 42.5 62 50 53 63.5 31.5 76.5 13 94z"></path>
                                            </svg>
                                        </span>
                                        <span class="relative p-5 bg-yellow-100 rounded-full">
                                            <svg
                                                width="40"
                                                fill="currentColor"
                                                height="40"
                                                class="absolute h-5 text-yellow-500 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                                viewBox="0 0 1792 1792"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M1362 1185q0 153-99.5 263.5t-258.5 136.5v175q0 14-9 23t-23 9h-135q-13 0-22.5-9.5t-9.5-22.5v-175q-66-9-127.5-31t-101.5-44.5-74-48-46.5-37.5-17.5-18q-17-21-2-41l103-135q7-10 23-12 15-2 24 9l2 2q113 99 243 125 37 8 74 8 81 0 142.5-43t61.5-122q0-28-15-53t-33.5-42-58.5-37.5-66-32-80-32.5q-39-16-61.5-25t-61.5-26.5-62.5-31-56.5-35.5-53.5-42.5-43.5-49-35.5-58-21-66.5-8.5-78q0-138 98-242t255-134v-180q0-13 9.5-22.5t22.5-9.5h135q14 0 23 9t9 23v176q57 6 110.5 23t87 33.5 63.5 37.5 39 29 15 14q17 18 5 38l-81 146q-8 15-23 16-14 3-27-7-3-3-14.5-12t-39-26.5-58.5-32-74.5-26-85.5-11.5q-95 0-155 43t-60 111q0 26 8.5 48t29.5 41.5 39.5 33 56 31 60.5 27 70 27.5q53 20 81 31.5t76 35 75.5 42.5 62 50 53 63.5 31.5 76.5 13 94z"></path>
                                            </svg>
                                        </span>
                                        <span class="relative p-5 bg-yellow-100 rounded-full">
                                            <svg
                                                width="40"
                                                fill="currentColor"
                                                height="40"
                                                class="absolute h-5 text-yellow-500 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                                viewBox="0 0 1792 1792"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M1362 1185q0 153-99.5 263.5t-258.5 136.5v175q0 14-9 23t-23 9h-135q-13 0-22.5-9.5t-9.5-22.5v-175q-66-9-127.5-31t-101.5-44.5-74-48-46.5-37.5-17.5-18q-17-21-2-41l103-135q7-10 23-12 15-2 24 9l2 2q113 99 243 125 37 8 74 8 81 0 142.5-43t61.5-122q0-28-15-53t-33.5-42-58.5-37.5-66-32-80-32.5q-39-16-61.5-25t-61.5-26.5-62.5-31-56.5-35.5-53.5-42.5-43.5-49-35.5-58-21-66.5-8.5-78q0-138 98-242t255-134v-180q0-13 9.5-22.5t22.5-9.5h135q14 0 23 9t9 23v176q57 6 110.5 23t87 33.5 63.5 37.5 39 29 15 14q17 18 5 38l-81 146q-8 15-23 16-14 3-27-7-3-3-14.5-12t-39-26.5-58.5-32-74.5-26-85.5-11.5q-95 0-155 43t-60 111q0 26 8.5 48t29.5 41.5 39.5 33 56 31 60.5 27 70 27.5q53 20 81 31.5t76 35 75.5 42.5 62 50 53 63.5 31.5 76.5 13 94z"></path>
                                            </svg>
                                        </span>
                                    </div>
                                    <div class="mt-6 text-lg font-bold text-black border-b border-gray-200 md:mt-0">
                                        2/5
                                        <span class="ml-2 font-normal text-gray-400">
                                            Followups
                                        </span>
                                    </div>
                                    <div class="w-full h-2 bg-blue-200 rounded-full">
                                        <div class="w-2/5 h-full text-xs text-center text-white bg-blue-600 rounded-full"></div>
                                    </div>
                                    <div class="container flex flex-col items-center justify-center w-full mx-auto">
                                        <ul class="flex flex-col divide-y divide">
                                            <li class="flex flex-row">
                                                <div class="flex items-center flex-1 p-4 cursor-pointer select-none">
                                                    <div class="flex flex-col items-center justify-center w-10 h-10 mr-4">
                                                        <span class="relative p-4 bg-purple-200 rounded-xl">
                                                            <svg
                                                                width="40"
                                                                fill="currentColor"
                                                                height="40"
                                                                class="absolute h-4 text-purple-500 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                                                viewBox="0 0 1792 1792"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path d="M1362 1185q0 153-99.5 263.5t-258.5 136.5v175q0 14-9 23t-23 9h-135q-13 0-22.5-9.5t-9.5-22.5v-175q-66-9-127.5-31t-101.5-44.5-74-48-46.5-37.5-17.5-18q-17-21-2-41l103-135q7-10 23-12 15-2 24 9l2 2q113 99 243 125 37 8 74 8 81 0 142.5-43t61.5-122q0-28-15-53t-33.5-42-58.5-37.5-66-32-80-32.5q-39-16-61.5-25t-61.5-26.5-62.5-31-56.5-35.5-53.5-42.5-43.5-49-35.5-58-21-66.5-8.5-78q0-138 98-242t255-134v-180q0-13 9.5-22.5t22.5-9.5h135q14 0 23 9t9 23v176q57 6 110.5 23t87 33.5 63.5 37.5 39 29 15 14q17 18 5 38l-81 146q-8 15-23 16-14 3-27-7-3-3-14.5-12t-39-26.5-58.5-32-74.5-26-85.5-11.5q-95 0-155 43t-60 111q0 26 8.5 48t29.5 41.5 39.5 33 56 31 60.5 27 70 27.5q53 20 81 31.5t76 35 75.5 42.5 62 50 53 63.5 31.5 76.5 13 94z"></path>
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
                                                <div class="flex items-center flex-1 p-4 cursor-pointer select-none">
                                                    <div class="flex flex-col items-center justify-center w-10 h-10 mr-4">
                                                        <span class="relative p-4 bg-purple-200 rounded-xl">
                                                            <svg
                                                                width="40"
                                                                fill="currentColor"
                                                                height="40"
                                                                class="absolute h-4 text-purple-500 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                                                viewBox="0 0 1792 1792"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path d="M1362 1185q0 153-99.5 263.5t-258.5 136.5v175q0 14-9 23t-23 9h-135q-13 0-22.5-9.5t-9.5-22.5v-175q-66-9-127.5-31t-101.5-44.5-74-48-46.5-37.5-17.5-18q-17-21-2-41l103-135q7-10 23-12 15-2 24 9l2 2q113 99 243 125 37 8 74 8 81 0 142.5-43t61.5-122q0-28-15-53t-33.5-42-58.5-37.5-66-32-80-32.5q-39-16-61.5-25t-61.5-26.5-62.5-31-56.5-35.5-53.5-42.5-43.5-49-35.5-58-21-66.5-8.5-78q0-138 98-242t255-134v-180q0-13 9.5-22.5t22.5-9.5h135q14 0 23 9t9 23v176q57 6 110.5 23t87 33.5 63.5 37.5 39 29 15 14q17 18 5 38l-81 146q-8 15-23 16-14 3-27-7-3-3-14.5-12t-39-26.5-58.5-32-74.5-26-85.5-11.5q-95 0-155 43t-60 111q0 26 8.5 48t29.5 41.5 39.5 33 56 31 60.5 27 70 27.5q53 20 81 31.5t76 35 75.5 42.5 62 50 53 63.5 31.5 76.5 13 94z"></path>
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
                                    <div class="flex items-center my-2 text-gray-500">
                                        <svg
                                            width="10"
                                            height="10"
                                            fill="currentColor"
                                            class="mr-2"
                                            viewBox="0 0 1792 1792"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M1664 960q-152-236-381-353 61 104 61 225 0 185-131.5 316.5t-316.5 131.5-316.5-131.5-131.5-316.5q0-121 61-225-229 117-381 353 133 205 333.5 326.5t434.5 121.5 434.5-121.5 333.5-326.5zm-720-384q0-20-14-34t-34-14q-125 0-214.5 89.5t-89.5 214.5q0 20 14 34t34 14 34-14 14-34q0-86 61-147t147-61q20 0 34-14t14-34zm848 384q0 34-20 69-140 230-376.5 368.5t-499.5 138.5-499.5-139-376.5-368q-20-35-20-69t20-69q140-229 376.5-368t499.5-139 499.5 139 376.5 368q20 35 20 69z"></path>
                                        </svg>
                                        Details
                                    </div>

                                    <div class="relative w-full p-4 overflow-hidden rounded-xl md:w-80">
                                        <div class="flex items-center justify-between mb-6 rounded">
                                            <div class="flex items-center justify-between w-full">
                                                <div class="flex flex-col items-start justify-between ml-2 text-sm">
                                                    Company
                                                </div>
                                                <span class="text-green-400">
                                                    East Coast Movers
                                                </span>
                                            </div>
                                        </div>
                                        <div class="flex items-center justify-between mb-6 rounded">
                                            <div class="flex items-center justify-between w-full">
                                                <div class="flex flex-col items-start justify-between ml-2 text-sm">
                                                    Assign to
                                                </div>
                                                <div class="flex items-center">
                                                    <span class="rounded-lg mr-2">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="40"
                                                            height="40"
                                                            class="rounded"
                                                            viewBox="0 0 192.756 192.756"
                                                        >
                                                            <g
                                                                fill-rule="evenodd"
                                                                clip-rule="evenodd"
                                                            >
                                                                <path
                                                                    fill="#fff"
                                                                    d="M0 0h192.756v192.756H0V0z"
                                                                ></path>
                                                                <path
                                                                    d="M189.922 50.809c0-8.986-4.67-13.444-13.729-13.444H16.562c-4.528 0-7.854 1.203-10.048 3.679-2.476 2.477-3.68 5.661-3.68 9.765v91.138c0 4.104 1.204 7.217 3.68 9.764 2.548 2.477 5.803 3.68 10.048 3.68h159.631c9.059 0 13.729-4.527 13.729-13.443V50.809zm-13.729-11.321c7.5 0 11.322 3.821 11.322 11.321v91.138c0 7.57-3.822 11.32-11.322 11.32H16.562c-3.609 0-6.368-1.061-8.42-3.184-2.123-2.053-3.184-4.883-3.184-8.137V50.809c0-7.5 3.75-11.321 11.604-11.321h159.631z"
                                                                    fill="#315881"
                                                                ></path>
                                                                <path
                                                                    d="M17.835 44.724c-3.042 0-4.953.495-6.014 1.557-.92 1.203-1.344 3.184-1.344 6.085v19.741h171.802V52.366c0-5.165-2.549-7.642-7.643-7.642H17.835z"
                                                                    fill="#315881"
                                                                ></path>
                                                                <path
                                                                    d="M10.477 140.107c0 5.234 2.476 7.924 7.358 7.924h156.801c5.094 0 7.643-2.689 7.643-7.924v-19.742H10.477v19.742z"
                                                                    fill="#dfa43b"
                                                                ></path>
                                                                <path
                                                                    d="M67.367 80.528c0 .92-.142 1.627-.495 2.123l-12.383 21.582-.779-26.323H33.898l6.651 3.184c1.91 1.203 2.901 2.759 2.901 4.741l1.839 27.951h9.694l23.21-35.876H66.306c.707.637 1.061 1.627 1.061 2.618zM147.467 78.971l.777-1.062h-12.1c.424.424.566.637.566.778-.143.565-.426.92-.566 1.344l-17.619 32.124c-.424.566-.85 1.062-1.344 1.629h9.977l-.496-1.062c0-.92.496-2.617 1.557-5.023l2.123-3.963h10.26c.426 3.326.709 6.086.85 8.139l-.85 1.91h12.383l-1.84-2.689-3.678-32.125zm-7.36 19.742h-7.359l6.297-12.1 1.062 12.1zM109.539 76.07c-3.82 0-7.076 1.062-9.977 3.184-3.185 1.84-4.741 4.175-4.741 7.077 0 3.326 1.132 6.227 3.396 8.42l6.865 4.74c2.477 1.77 3.68 3.326 3.68 4.742 0 1.344-.639 2.547-1.84 3.467-1.203.92-2.549 1.344-4.246 1.344-2.477 0-6.722-1.768-12.595-5.023v6.58c4.599 2.76 9.058 4.176 13.373 4.176 4.105 0 7.572-1.133 10.545-3.68 3.184-2.336 4.74-5.094 4.74-8.137 0-2.549-1.133-4.883-3.68-7.36l-6.582-4.741c-2.191-1.769-3.395-3.326-3.395-4.528 0-2.759 1.627-4.175 4.953-4.175 2.264 0 5.59 1.274 10.047 3.963l1.346-6.864c-3.752-2.124-7.643-3.185-11.889-3.185zM83.217 113.785c-.142-1.486-.425-2.83-.567-4.246l8.987-29.011 2.123-2.618H80.811c.142.637.283 1.486.425 2.123 0 .637 0 1.416-.142 2.123l-8.986 28.728-1.84 2.902h12.949v-.001z"
                                                                    fill="#315881"
                                                                ></path>
                                                            </g>
                                                        </svg>
                                                    </span>
                                                    <span class="text-green-400">
                                                        Alex Just
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex items-center justify-between p-3 mb-2 bg-blue-100 rounded-lg">
                                        <div class="flex flex-col items-center justify-center w-10 h-10 mr-4">
                                            <span class="relative p-4 bg-purple-200 rounded-xl">
                                                <svg
                                                    width="40"
                                                    fill="currentColor"
                                                    height="40"
                                                    class="absolute h-4 text-purple-500 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                                    viewBox="0 0 1792 1792"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M1362 1185q0 153-99.5 263.5t-258.5 136.5v175q0 14-9 23t-23 9h-135q-13 0-22.5-9.5t-9.5-22.5v-175q-66-9-127.5-31t-101.5-44.5-74-48-46.5-37.5-17.5-18q-17-21-2-41l103-135q7-10 23-12 15-2 24 9l2 2q113 99 243 125 37 8 74 8 81 0 142.5-43t61.5-122q0-28-15-53t-33.5-42-58.5-37.5-66-32-80-32.5q-39-16-61.5-25t-61.5-26.5-62.5-31-56.5-35.5-53.5-42.5-43.5-49-35.5-58-21-66.5-8.5-78q0-138 98-242t255-134v-180q0-13 9.5-22.5t22.5-9.5h135q14 0 23 9t9 23v176q57 6 110.5 23t87 33.5 63.5 37.5 39 29 15 14q17 18 5 38l-81 146q-8 15-23 16-14 3-27-7-3-3-14.5-12t-39-26.5-58.5-32-74.5-26-85.5-11.5q-95 0-155 43t-60 111q0 26 8.5 48t29.5 41.5 39.5 33 56 31 60.5 27 70 27.5q53 20 81 31.5t76 35 75.5 42.5 62 50 53 63.5 31.5 76.5 13 94z"></path>
                                                </svg>
                                            </span>
                                        </div>
                                        <div class="flex-1 pl-1">
                                            <div class="font-xs">
                                                Next Appointment
                                            </div>
                                            <div class="text-medium text-gray-600">
                                                Today 3pm
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
                                        class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 "
                                    >
                                        Home
                                    </a>
                                </li>
                                <li class="mr-2">
                                    <a
                                        href="#"
                                        class="inline-block p-4 text-purple-600 border-b-2 border-purple-600 rounded-t-lg active "
                                        aria-current="page"
                                    >
                                        Calendar
                                    </a>
                                </li>
                                <li class="mr-2">
                                    <a
                                        href="#"
                                        class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 "
                                    >
                                        Results
                                    </a>
                                </li>
                                <li class="mr-2">
                                    <a
                                        href="#"
                                        class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 "
                                    >
                                        Live
                                    </a>
                                </li>
                            </ul>
                            <span class="relative bg-blue-500 rounded-full p-5 mb-3">
                                <svg
                                    width="40"
                                    fill="currentColor"
                                    height="40"
                                    class="absolute h-4 text-white transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                    viewBox="0 0 1792 1792"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M1362 1185q0 153-99.5 263.5t-258.5 136.5v175q0 14-9 23t-23 9h-135q-13 0-22.5-9.5t-9.5-22.5v-175q-66-9-127.5-31t-101.5-44.5-74-48-46.5-37.5-17.5-18q-17-21-2-41l103-135q7-10 23-12 15-2 24 9l2 2q113 99 243 125 37 8 74 8 81 0 142.5-43t61.5-122q0-28-15-53t-33.5-42-58.5-37.5-66-32-80-32.5q-39-16-61.5-25t-61.5-26.5-62.5-31-56.5-35.5-53.5-42.5-43.5-49-35.5-58-21-66.5-8.5-78q0-138 98-242t255-134v-180q0-13 9.5-22.5t22.5-9.5h135q14 0 23 9t9 23v176q57 6 110.5 23t87 33.5 63.5 37.5 39 29 15 14q17 18 5 38l-81 146q-8 15-23 16-14 3-27-7-3-3-14.5-12t-39-26.5-58.5-32-74.5-26-85.5-11.5q-95 0-155 43t-60 111q0 26 8.5 48t29.5 41.5 39.5 33 56 31 60.5 27 70 27.5q53 20 81 31.5t76 35 75.5 42.5 62 50 53 63.5 31.5 76.5 13 94z"></path>
                                </svg>
                            </span>
                        </header>
                        <div class="shadow-lg rounded-2xl bg-white p-4">
                            <div class="flex-row gap-4 flex justify-center items-center">
                                <div class="flex-shrink-0">
                                    <span class="relative p-5">
                                        <svg
                                            width="40"
                                            fill="currentColor"
                                            height="40"
                                            class="absolute h-4 text-white transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                            viewBox="0 0 1792 1792"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M1362 1185q0 153-99.5 263.5t-258.5 136.5v175q0 14-9 23t-23 9h-135q-13 0-22.5-9.5t-9.5-22.5v-175q-66-9-127.5-31t-101.5-44.5-74-48-46.5-37.5-17.5-18q-17-21-2-41l103-135q7-10 23-12 15-2 24 9l2 2q113 99 243 125 37 8 74 8 81 0 142.5-43t61.5-122q0-28-15-53t-33.5-42-58.5-37.5-66-32-80-32.5q-39-16-61.5-25t-61.5-26.5-62.5-31-56.5-35.5-53.5-42.5-43.5-49-35.5-58-21-66.5-8.5-78q0-138 98-242t255-134v-180q0-13 9.5-22.5t22.5-9.5h135q14 0 23 9t9 23v176q57 6 110.5 23t87 33.5 63.5 37.5 39 29 15 14q17 18 5 38l-81 146q-8 15-23 16-14 3-27-7-3-3-14.5-12t-39-26.5-58.5-32-74.5-26-85.5-11.5q-95 0-155 43t-60 111q0 26 8.5 48t29.5 41.5 39.5 33 56 31 60.5 27 70 27.5q53 20 81 31.5t76 35 75.5 42.5 62 50 53 63.5 31.5 76.5 13 94z"></path>
                                        </svg>
                                    </span>
                                </div>
                                <div class=" flex flex-col">
                                    <span class="text-lg font-medium text-gray-600">
                                        Charlie
                                    </span>
                                    <span class="text-xs text-gray-400">
                                        CTO
                                    </span>
                                </div>
                                <button
                                    type="button"
                                    class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                                >
                                    Add
                                </button>
                            </div>
                        </div>
                        {/* <div className="h-screen pt-2 pb-24 pl-2 pr-2 overflow-auto md:pt-0 md:pr-0 md:pl-0">
                            <div className="flex flex-col flex-wrap sm:flex-row ">
                                <div className="w-full sm:w-1/2 xl:w-1/3">
                                    <div className="mb-4">
                                        <div className="w-full p-4 bg-white shadow-lg rounded-2xl dark:bg-gray-700">
                                            <div className="flex items-center justify-between mb-6">
                                                <div className="flex items-center">
                                                    <span className="relative p-2 bg-blue-100 rounded-xl">
                                                        <svg
                                                            width="25"
                                                            height="25"
                                                            viewBox="0 0 256 262"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            preserveAspectRatio="xMidYMid"
                                                        >
                                                            <path
                                                                d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                                                                fill="#4285F4"
                                                            ></path>
                                                            <path
                                                                d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                                                                fill="#34A853"
                                                            ></path>
                                                            <path
                                                                d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                                                                fill="#FBBC05"
                                                            ></path>
                                                            <path
                                                                d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                                                                fill="#EB4335"
                                                            ></path>
                                                        </svg>
                                                    </span>
                                                    <div className="flex flex-col">
                                                        <span className="ml-2 font-bold text-black text-md">
                                                            Google
                                                        </span>
                                                        <span className="ml-2 text-sm text-gray-500">
                                                            Google Inc.
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="flex items-center">
                                                    <button className="p-1 border border-gray-200 rounded-full">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="20"
                                                            height="20"
                                                            className="w-4 h-4 text-yellow-500"
                                                            fill="currentColor"
                                                            viewBox="0 0 1792 1792"
                                                        >
                                                            <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path>
                                                        </svg>
                                                    </button>
                                                    <button className="text-gray-200">
                                                        <svg
                                                            width="25"
                                                            height="25"
                                                            fill="currentColor"
                                                            viewBox="0 0 1792 1792"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M1088 1248v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68z"></path>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between mb-4 space-x-12">
                                                <span className="flex items-center px-2 py-1 text-xs font-semibold text-gray-500 bg-gray-200 rounded-md">
                                                    PROGRESS
                                                </span>
                                                <span className="flex items-center px-2 py-1 text-xs font-semibold text-red-400 bg-white border border-red-400 rounded-md">
                                                    HIGH PRIORITY
                                                </span>
                                            </div>
                                            <div className="block m-auto">
                                                <div>
                                                    <span className="inline-block text-sm text-gray-500 dark:text-gray-100">
                                                        Task done :
                                                        <span className="font-bold text-gray-700">
                                                            25
                                                        </span>
                                                        /50
                                                    </span>
                                                </div>
                                                <div className="w-full h-2 mt-2 bg-gray-200 rounded-full">
                                                    <div className="w-1/2 h-full text-xs text-center text-white bg-purple-500 rounded-full"></div>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-start my-4 space-x-4">
                                                <span className="flex items-center px-2 py-1 text-xs font-semibold text-green-500 rounded-md bg-green-50">
                                                    IOS APP
                                                </span>
                                                <span className="flex items-center px-2 py-1 text-xs font-semibold text-blue-500 bg-blue-100 rounded-md">
                                                    UI/UX
                                                </span>
                                            </div>
                                            <div className="flex -space-x-2">
                                                <a href="#" className="">
                                                    <img
                                                        className="inline-block object-cover w-10 h-10 rounded-full ring-2 ring-white"
                                                        src="/images/person/1.jpg"
                                                        alt="Guy"
                                                    />
                                                </a>
                                                <a href="#" className="">
                                                    <img
                                                        className="inline-block object-cover w-10 h-10 rounded-full ring-2 ring-white"
                                                        src="/images/person/2.jpeg"
                                                        alt="Max"
                                                    />
                                                </a>
                                                <a href="#" className="">
                                                    <img
                                                        className="inline-block object-cover w-10 h-10 rounded-full ring-2 ring-white"
                                                        src="/images/person/3.jpg"
                                                        alt="Charles"
                                                    />
                                                </a>
                                                <a href="#" className="">
                                                    <img
                                                        className="inline-block object-cover w-10 h-10 rounded-full ring-2 ring-white"
                                                        src="/images/person/4.jpg"
                                                        alt="Jade"
                                                    />
                                                </a>
                                            </div>
                                            <span className="flex items-center px-2 py-1 mt-4 text-xs font-semibold text-yellow-500 bg-yellow-100 rounded-md w-36">
                                                DUE DATE : 18 JUN
                                            </span>
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <div className="w-full p-4 bg-white shadow-lg rounded-2xl dark:bg-gray-700">
                                            <div className="flex items-center justify-between mb-6">
                                                <div className="flex items-center">
                                                    <span className="relative p-2 bg-blue-100 rounded-xl">
                                                        <svg
                                                            width="25"
                                                            height="25"
                                                            viewBox="0 0 2447.6 2452.5"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <g
                                                                clip-rule="evenodd"
                                                                fill-rule="evenodd"
                                                            >
                                                                <path
                                                                    d="m897.4 0c-135.3.1-244.8 109.9-244.7 245.2-.1 135.3 109.5 245.1 244.8 245.2h244.8v-245.1c.1-135.3-109.5-245.1-244.9-245.3.1 0 .1 0 0 0m0 654h-652.6c-135.3.1-244.9 109.9-244.8 245.2-.2 135.3 109.4 245.1 244.7 245.3h652.7c135.3-.1 244.9-109.9 244.8-245.2.1-135.4-109.5-245.2-244.8-245.3z"
                                                                    fill="#36c5f0"
                                                                ></path>
                                                                <path
                                                                    d="m2447.6 899.2c.1-135.3-109.5-245.1-244.8-245.2-135.3.1-244.9 109.9-244.8 245.2v245.3h244.8c135.3-.1 244.9-109.9 244.8-245.3zm-652.7 0v-654c.1-135.2-109.4-245-244.7-245.2-135.3.1-244.9 109.9-244.8 245.2v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.3z"
                                                                    fill="#2eb67d"
                                                                ></path>
                                                                <path
                                                                    d="m1550.1 2452.5c135.3-.1 244.9-109.9 244.8-245.2.1-135.3-109.5-245.1-244.8-245.2h-244.8v245.2c-.1 135.2 109.5 245 244.8 245.2zm0-654.1h652.7c135.3-.1 244.9-109.9 244.8-245.2.2-135.3-109.4-245.1-244.7-245.3h-652.7c-135.3.1-244.9 109.9-244.8 245.2-.1 135.4 109.4 245.2 244.7 245.3z"
                                                                    fill="#ecb22e"
                                                                ></path>
                                                                <path
                                                                    d="m0 1553.2c-.1 135.3 109.5 245.1 244.8 245.2 135.3-.1 244.9-109.9 244.8-245.2v-245.2h-244.8c-135.3.1-244.9 109.9-244.8 245.2zm652.7 0v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.2v-653.9c.2-135.3-109.4-245.1-244.7-245.3-135.4 0-244.9 109.8-244.8 245.1 0 0 0 .1 0 0"
                                                                    fill="#e01e5a"
                                                                ></path>
                                                            </g>
                                                        </svg>
                                                    </span>
                                                    <div className="flex flex-col">
                                                        <span className="ml-2 font-bold text-black text-md">
                                                            Slack
                                                        </span>
                                                        <span className="ml-2 text-sm text-gray-500">
                                                            Slack corporation
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="flex items-center">
                                                    <button className="p-1 border border-gray-200 rounded-full">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="20"
                                                            height="20"
                                                            className="w-4 h-4 text-yellow-500"
                                                            fill="currentColor"
                                                            viewBox="0 0 1792 1792"
                                                        >
                                                            <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path>
                                                        </svg>
                                                    </button>
                                                    <button className="text-gray-200">
                                                        <svg
                                                            width="25"
                                                            height="25"
                                                            fill="currentColor"
                                                            viewBox="0 0 1792 1792"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M1088 1248v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68z"></path>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between mb-4 space-x-12">
                                                <span className="flex items-center px-2 py-1 text-xs font-semibold text-green-700 rounded-md bg-green-50">
                                                    COMPLETED
                                                </span>
                                                <span className="flex items-center px-2 py-1 text-xs font-semibold text-green-600 bg-white border border-green-600 rounded-md">
                                                    MEDIUM PRIORITY
                                                </span>
                                            </div>
                                            <div className="block m-auto">
                                                <div>
                                                    <span className="inline-block text-sm text-gray-500 dark:text-gray-100">
                                                        Task done :
                                                        <span className="font-bold text-gray-700">
                                                            50
                                                        </span>
                                                        /50
                                                    </span>
                                                </div>
                                                <div className="w-full h-2 mt-2 bg-gray-200 rounded-full">
                                                    <div className="w-full h-full text-xs text-center text-white bg-pink-400 rounded-full"></div>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-start my-4 space-x-4">
                                                <span className="flex items-center px-2 py-1 text-xs font-semibold text-green-500 rounded-md bg-green-50">
                                                    IOS APP
                                                </span>
                                                <span className="flex items-center px-2 py-1 text-xs font-semibold text-yellow-600 bg-yellow-200 rounded-md">
                                                    ANDROID
                                                </span>
                                            </div>
                                            <div className="flex -space-x-2">
                                                <a href="#" className="">
                                                    <img
                                                        className="inline-block object-cover w-10 h-10 rounded-full ring-2 ring-white"
                                                        src="/images/person/1.jpg"
                                                        alt="Guy"
                                                    />
                                                </a>
                                                <a href="#" className="">
                                                    <img
                                                        className="inline-block object-cover w-10 h-10 rounded-full ring-2 ring-white"
                                                        src="/images/person/2.jpeg"
                                                        alt="Max"
                                                    />
                                                </a>
                                                <a href="#" className="">
                                                    <img
                                                        className="inline-block object-cover w-10 h-10 rounded-full ring-2 ring-white"
                                                        src="/images/person/3.jpg"
                                                        alt="Charles"
                                                    />
                                                </a>
                                                <a href="#" className="">
                                                    <img
                                                        className="inline-block object-cover w-10 h-10 rounded-full ring-2 ring-white"
                                                        src="/images/person/4.jpg"
                                                        alt="Jade"
                                                    />
                                                </a>
                                            </div>
                                            <span className="flex items-center px-2 py-1 mt-4 text-xs font-semibold text-yellow-500 bg-yellow-100 rounded-md w-36">
                                                DUE DATE : 18 JUN
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full sm:w-1/2 xl:w-1/3">
                                    <div className="mx-0 mb-4 sm:ml-4 xl:mr-4">
                                        <div className="w-full bg-white shadow-lg rounded-2xl dark:bg-gray-700">
                                            <p className="p-4 font-bold text-black text-md">
                                                My Tasks
                                                <span className="ml-2 text-sm text-gray-500 dark:text-gray-300">
                                                    (05)
                                                </span>
                                            </p>
                                            <ul>
                                                <li className="flex items-center justify-between py-3 text-gray-600 border-b-2 border-gray-100 dark:border-gray-800">
                                                    <div className="flex items-center justify-start text-sm">
                                                        <span className="mx-4">
                                                            01
                                                        </span>
                                                        <span>
                                                            Create wireframe
                                                        </span>
                                                    </div>
                                                    <svg
                                                        width="20"
                                                        height="20"
                                                        fill="currentColor"
                                                        className="mx-4 text-gray-400 dark:text-gray-300"
                                                        viewBox="0 0 1024 1024"
                                                    >
                                                        <path
                                                            d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"
                                                            fill="currentColor"
                                                        ></path>
                                                        <path
                                                            d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z"
                                                            fill="currentColor"
                                                        ></path>
                                                    </svg>
                                                </li>
                                                <li className="flex items-center justify-between py-3 text-gray-600 border-b-2 border-gray-100 dark:border-gray-800">
                                                    <div className="flex items-center justify-start text-sm">
                                                        <span className="mx-4">
                                                            02
                                                        </span>
                                                        <span>
                                                            Dashboard design
                                                        </span>
                                                        <span className="flex items-center ml-2 text-gray-400 lg:ml-6 dark:text-gray-300">
                                                            3
                                                            <svg
                                                                width="15"
                                                                height="15"
                                                                fill="currentColor"
                                                                className="ml-1"
                                                                viewBox="0 0 512 512"
                                                            >
                                                                <path
                                                                    d="M256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 368c-26.7 0-53.1-4.1-78.4-12.1l-22.7-7.2l-19.5 13.8c-14.3 10.1-33.9 21.4-57.5 29c7.3-12.1 14.4-25.7 19.9-40.2l10.6-28.1l-20.6-21.8C69.7 314.1 48 282.2 48 240c0-88.2 93.3-160 208-160s208 71.8 208 160s-93.3 160-208 160z"
                                                                    fill="currentColor"
                                                                ></path>
                                                            </svg>
                                                        </span>
                                                        <span className="flex items-center mx-4 text-gray-400 dark:text-gray-300">
                                                            3
                                                            <svg
                                                                width="15"
                                                                height="15"
                                                                className="ml-1"
                                                                fill="currentColor"
                                                                viewBox="0 0 384 512"
                                                            >
                                                                <path
                                                                    d="M384 144c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 36.4 24.3 67.1 57.5 76.8c-.6 16.1-4.2 28.5-11 36.9c-15.4 19.2-49.3 22.4-85.2 25.7c-28.2 2.6-57.4 5.4-81.3 16.9v-144c32.5-10.2 56-40.5 56-76.3c0-44.2-35.8-80-80-80S0 35.8 0 80c0 35.8 23.5 66.1 56 76.3v199.3C23.5 365.9 0 396.2 0 432c0 44.2 35.8 80 80 80s80-35.8 80-80c0-34-21.2-63.1-51.2-74.6c3.1-5.2 7.8-9.8 14.9-13.4c16.2-8.2 40.4-10.4 66.1-12.8c42.2-3.9 90-8.4 118.2-43.4c14-17.4 21.1-39.8 21.6-67.9c31.6-10.8 54.4-40.7 54.4-75.9zM80 64c8.8 0 16 7.2 16 16s-7.2 16-16 16s-16-7.2-16-16s7.2-16 16-16zm0 384c-8.8 0-16-7.2-16-16s7.2-16 16-16s16 7.2 16 16s-7.2 16-16 16zm224-320c8.8 0 16 7.2 16 16s-7.2 16-16 16s-16-7.2-16-16s7.2-16 16-16z"
                                                                    fill="currentColor"
                                                                ></path>
                                                            </svg>
                                                        </span>
                                                    </div>
                                                    <svg
                                                        width="20"
                                                        height="20"
                                                        fill="currentColor"
                                                        className="mx-4 text-gray-400 dark:text-gray-300"
                                                        viewBox="0 0 1024 1024"
                                                    >
                                                        <path
                                                            d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"
                                                            fill="currentColor"
                                                        ></path>
                                                        <path
                                                            d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z"
                                                            fill="currentColor"
                                                        ></path>
                                                    </svg>
                                                </li>
                                                <li className="flex items-center justify-between py-3 text-gray-600 border-b-2 border-gray-100 dark:border-gray-800">
                                                    <div className="flex items-center justify-start text-sm">
                                                        <span className="mx-4">
                                                            03
                                                        </span>
                                                        <span>
                                                            Components card
                                                        </span>
                                                        <span className="flex items-center ml-2 text-gray-400 lg:ml-6 dark:text-gray-300">
                                                            3
                                                            <svg
                                                                width="15"
                                                                height="15"
                                                                fill="currentColor"
                                                                className="ml-1"
                                                                viewBox="0 0 512 512"
                                                            >
                                                                <path
                                                                    d="M256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 368c-26.7 0-53.1-4.1-78.4-12.1l-22.7-7.2l-19.5 13.8c-14.3 10.1-33.9 21.4-57.5 29c7.3-12.1 14.4-25.7 19.9-40.2l10.6-28.1l-20.6-21.8C69.7 314.1 48 282.2 48 240c0-88.2 93.3-160 208-160s208 71.8 208 160s-93.3 160-208 160z"
                                                                    fill="currentColor"
                                                                ></path>
                                                            </svg>
                                                        </span>
                                                    </div>
                                                    <svg
                                                        width="20"
                                                        height="20"
                                                        fill="currentColor"
                                                        className="mx-4 text-gray-400 dark:text-gray-300"
                                                        viewBox="0 0 1024 1024"
                                                    >
                                                        <path
                                                            d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"
                                                            fill="currentColor"
                                                        ></path>
                                                        <path
                                                            d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z"
                                                            fill="currentColor"
                                                        ></path>
                                                    </svg>
                                                </li>
                                                <li className="flex items-center justify-between py-3 text-gray-400 border-b-2 border-gray-100 dark:border-gray-800">
                                                    <div className="flex items-center justify-start text-sm">
                                                        <span className="mx-4">
                                                            04
                                                        </span>
                                                        <span className="line-through">
                                                            Google logo design
                                                        </span>
                                                    </div>
                                                    <svg
                                                        width="20"
                                                        height="20"
                                                        fill="currentColor"
                                                        viewBox="0 0 1024 1024"
                                                        className="mx-4 text-green-500"
                                                    >
                                                        <path
                                                            d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8l157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"
                                                            fill="currentColor"
                                                        ></path>
                                                    </svg>
                                                </li>
                                                <li className="flex items-center justify-between py-3 text-gray-400 border-b-2 border-gray-100 dark:border-gray-800">
                                                    <div className="flex items-center justify-start text-sm">
                                                        <span className="mx-4">
                                                            05
                                                        </span>
                                                        <span className="line-through">
                                                            Header navigation
                                                        </span>
                                                    </div>
                                                    <svg
                                                        width="20"
                                                        height="20"
                                                        fill="currentColor"
                                                        viewBox="0 0 1024 1024"
                                                        className="mx-4 text-green-500"
                                                    >
                                                        <path
                                                            d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8l157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"
                                                            fill="currentColor"
                                                        ></path>
                                                    </svg>
                                                </li>
                                                <li className="flex items-center justify-between py-3 text-gray-600 border-b-2 border-gray-100 dark:border-gray-800">
                                                    <div className="flex items-center justify-start text-sm">
                                                        <span className="mx-4">
                                                            06
                                                        </span>
                                                        <span>
                                                            International
                                                        </span>
                                                        <span className="flex items-center ml-2 text-gray-400 lg:ml-6 dark:text-gray-300">
                                                            3
                                                            <svg
                                                                width="15"
                                                                height="15"
                                                                fill="currentColor"
                                                                className="ml-1"
                                                                viewBox="0 0 512 512"
                                                            >
                                                                <path
                                                                    d="M256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 368c-26.7 0-53.1-4.1-78.4-12.1l-22.7-7.2l-19.5 13.8c-14.3 10.1-33.9 21.4-57.5 29c7.3-12.1 14.4-25.7 19.9-40.2l10.6-28.1l-20.6-21.8C69.7 314.1 48 282.2 48 240c0-88.2 93.3-160 208-160s208 71.8 208 160s-93.3 160-208 160z"
                                                                    fill="currentColor"
                                                                ></path>
                                                            </svg>
                                                        </span>
                                                        <span className="flex items-center mx-4 text-gray-400 dark:text-gray-300">
                                                            3
                                                            <svg
                                                                width="15"
                                                                height="15"
                                                                className="ml-1"
                                                                fill="currentColor"
                                                                viewBox="0 0 384 512"
                                                            >
                                                                <path
                                                                    d="M384 144c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 36.4 24.3 67.1 57.5 76.8c-.6 16.1-4.2 28.5-11 36.9c-15.4 19.2-49.3 22.4-85.2 25.7c-28.2 2.6-57.4 5.4-81.3 16.9v-144c32.5-10.2 56-40.5 56-76.3c0-44.2-35.8-80-80-80S0 35.8 0 80c0 35.8 23.5 66.1 56 76.3v199.3C23.5 365.9 0 396.2 0 432c0 44.2 35.8 80 80 80s80-35.8 80-80c0-34-21.2-63.1-51.2-74.6c3.1-5.2 7.8-9.8 14.9-13.4c16.2-8.2 40.4-10.4 66.1-12.8c42.2-3.9 90-8.4 118.2-43.4c14-17.4 21.1-39.8 21.6-67.9c31.6-10.8 54.4-40.7 54.4-75.9zM80 64c8.8 0 16 7.2 16 16s-7.2 16-16 16s-16-7.2-16-16s7.2-16 16-16zm0 384c-8.8 0-16-7.2-16-16s7.2-16 16-16s16 7.2 16 16s-7.2 16-16 16zm224-320c8.8 0 16 7.2 16 16s-7.2 16-16 16s-16-7.2-16-16s7.2-16 16-16z"
                                                                    fill="currentColor"
                                                                ></path>
                                                            </svg>
                                                        </span>
                                                    </div>
                                                    <svg
                                                        width="20"
                                                        height="20"
                                                        fill="currentColor"
                                                        className="mx-4 text-gray-400 dark:text-gray-300"
                                                        viewBox="0 0 1024 1024"
                                                    >
                                                        <path
                                                            d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"
                                                            fill="currentColor"
                                                        ></path>
                                                        <path
                                                            d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z"
                                                            fill="currentColor"
                                                        ></path>
                                                    </svg>
                                                </li>
                                                <li className="flex items-center justify-between py-3 text-gray-600">
                                                    <div className="flex items-center justify-start text-sm">
                                                        <span className="mx-4">
                                                            07
                                                        </span>
                                                        <span>
                                                            Production data
                                                        </span>
                                                    </div>
                                                    <svg
                                                        width="20"
                                                        height="20"
                                                        fill="currentColor"
                                                        className="mx-4 text-gray-400 dark:text-gray-300"
                                                        viewBox="0 0 1024 1024"
                                                    >
                                                        <path
                                                            d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"
                                                            fill="currentColor"
                                                        ></path>
                                                        <path
                                                            d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z"
                                                            fill="currentColor"
                                                        ></path>
                                                    </svg>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="mb-4 sm:ml-4 xl:mr-4">
                                        <div className="w-full bg-white shadow-lg rounded-2xl dark:bg-gray-700">
                                            <div className="flex items-center justify-between p-4">
                                                <p className="font-bold text-black text-md">
                                                    Google
                                                </p>
                                                <button className="p-1 mr-4 text-sm text-gray-400 border border-gray-400 rounded">
                                                    <svg
                                                        width="15"
                                                        height="15"
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <g fill="none">
                                                            <path
                                                                d="M17.222 8.685a1.5 1.5 0 0 1 0 2.628l-10 5.498A1.5 1.5 0 0 1 5 15.496V4.502a1.5 1.5 0 0 1 2.223-1.314l10 5.497z"
                                                                fill="currentColor"
                                                            ></path>
                                                        </g>
                                                    </svg>
                                                </button>
                                            </div>
                                            <div className="flex items-center justify-between px-4 py-2 text-gray-600 bg-blue-100 border-l-4 border-blue-500 dark:bg-gray-800">
                                                <p className="flex items-center text-xs">
                                                    <svg
                                                        width="20"
                                                        height="20"
                                                        fill="currentColor"
                                                        className="mr-2 text-blue-500"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <g fill="none">
                                                            <path
                                                                d="M12 5a8.5 8.5 0 1 1 0 17a8.5 8.5 0 0 1 0-17zm0 3a.75.75 0 0 0-.743.648l-.007.102v4.5l.007.102a.75.75 0 0 0 1.486 0l.007-.102v-4.5l-.007-.102A.75.75 0 0 0 12 8zm7.17-2.877l.082.061l1.149 1a.75.75 0 0 1-.904 1.193l-.081-.061l-1.149-1a.75.75 0 0 1 .903-1.193zM14.25 2.5a.75.75 0 0 1 .102 1.493L14.25 4h-4.5a.75.75 0 0 1-.102-1.493L9.75 2.5h4.5z"
                                                                fill="currentColor"
                                                            ></path>
                                                        </g>
                                                    </svg>
                                                    Create wireframe
                                                </p>
                                                <div className="flex items-center">
                                                    <span className="ml-2 mr-2 text-xs font-bold md:ml-4">
                                                        25 min 20s
                                                    </span>
                                                    <button className="p-1 mr-4 text-sm text-gray-400 bg-blue-500 border rounded">
                                                        <svg
                                                            width="17"
                                                            height="17"
                                                            fill="currentColor"
                                                            viewBox="0 0 24 24"
                                                            className="text-white"
                                                        >
                                                            <g fill="none">
                                                                <path
                                                                    d="M9 6a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1zm6 0a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1z"
                                                                    fill="currentColor"
                                                                ></path>
                                                            </g>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between p-4 border-b-2 border-gray-100">
                                                <p className="font-bold text-black text-md">
                                                    Slack
                                                </p>
                                                <button className="p-1 mr-4 text-sm text-gray-400 border border-gray-400 rounded">
                                                    <svg
                                                        width="15"
                                                        height="15"
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <g fill="none">
                                                            <path
                                                                d="M17.222 8.685a1.5 1.5 0 0 1 0 2.628l-10 5.498A1.5 1.5 0 0 1 5 15.496V4.502a1.5 1.5 0 0 1 2.223-1.314l10 5.497z"
                                                                fill="currentColor"
                                                            ></path>
                                                        </g>
                                                    </svg>
                                                </button>
                                            </div>
                                            <div className="flex items-center justify-between px-4 py-2 text-gray-600 border-b-2 border-gray-100">
                                                <p className="flex items-center text-xs">
                                                    <svg
                                                        width="20"
                                                        height="20"
                                                        fill="currentColor"
                                                        className="mr-2"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <g fill="none">
                                                            <path
                                                                d="M12 5a8.5 8.5 0 1 1 0 17a8.5 8.5 0 0 1 0-17zm0 3a.75.75 0 0 0-.743.648l-.007.102v4.5l.007.102a.75.75 0 0 0 1.486 0l.007-.102v-4.5l-.007-.102A.75.75 0 0 0 12 8zm7.17-2.877l.082.061l1.149 1a.75.75 0 0 1-.904 1.193l-.081-.061l-1.149-1a.75.75 0 0 1 .903-1.193zM14.25 2.5a.75.75 0 0 1 .102 1.493L14.25 4h-4.5a.75.75 0 0 1-.102-1.493L9.75 2.5h4.5z"
                                                                fill="currentColor"
                                                            ></path>
                                                        </g>
                                                    </svg>
                                                    International
                                                </p>
                                                <div className="flex items-center">
                                                    <span className="ml-2 mr-2 text-xs text-gray-400 md:ml-4">
                                                        30 min
                                                    </span>
                                                    <button className="p-1 mr-4 text-sm text-gray-400 border border-gray-400 rounded">
                                                        <svg
                                                            width="15"
                                                            height="15"
                                                            fill="currentColor"
                                                            viewBox="0 0 20 20"
                                                        >
                                                            <g fill="none">
                                                                <path
                                                                    d="M17.222 8.685a1.5 1.5 0 0 1 0 2.628l-10 5.498A1.5 1.5 0 0 1 5 15.496V4.502a1.5 1.5 0 0 1 2.223-1.314l10 5.497z"
                                                                    fill="currentColor"
                                                                ></path>
                                                            </g>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between px-4 py-2 text-gray-600 border-b-2 border-gray-100">
                                                <p className="flex items-center text-xs">
                                                    <svg
                                                        width="20"
                                                        height="20"
                                                        fill="currentColor"
                                                        className="mr-2"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <g fill="none">
                                                            <path
                                                                d="M12 5a8.5 8.5 0 1 1 0 17a8.5 8.5 0 0 1 0-17zm0 3a.75.75 0 0 0-.743.648l-.007.102v4.5l.007.102a.75.75 0 0 0 1.486 0l.007-.102v-4.5l-.007-.102A.75.75 0 0 0 12 8zm7.17-2.877l.082.061l1.149 1a.75.75 0 0 1-.904 1.193l-.081-.061l-1.149-1a.75.75 0 0 1 .903-1.193zM14.25 2.5a.75.75 0 0 1 .102 1.493L14.25 4h-4.5a.75.75 0 0 1-.102-1.493L9.75 2.5h4.5z"
                                                                fill="currentColor"
                                                            ></path>
                                                        </g>
                                                    </svg>
                                                    Slack logo design
                                                </p>
                                                <div className="flex items-center">
                                                    <span className="ml-2 mr-2 text-xs text-gray-400 md:ml-4">
                                                        30 min
                                                    </span>
                                                    <button className="p-1 mr-4 text-sm text-gray-400 border border-gray-400 rounded">
                                                        <svg
                                                            width="15"
                                                            height="15"
                                                            fill="currentColor"
                                                            viewBox="0 0 20 20"
                                                        >
                                                            <g fill="none">
                                                                <path
                                                                    d="M17.222 8.685a1.5 1.5 0 0 1 0 2.628l-10 5.498A1.5 1.5 0 0 1 5 15.496V4.502a1.5 1.5 0 0 1 2.223-1.314l10 5.497z"
                                                                    fill="currentColor"
                                                                ></path>
                                                            </g>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between px-4 py-2 text-gray-600">
                                                <p className="flex items-center text-xs">
                                                    <svg
                                                        width="20"
                                                        height="20"
                                                        fill="currentColor"
                                                        className="mr-2"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <g fill="none">
                                                            <path
                                                                d="M12 5a8.5 8.5 0 1 1 0 17a8.5 8.5 0 0 1 0-17zm0 3a.75.75 0 0 0-.743.648l-.007.102v4.5l.007.102a.75.75 0 0 0 1.486 0l.007-.102v-4.5l-.007-.102A.75.75 0 0 0 12 8zm7.17-2.877l.082.061l1.149 1a.75.75 0 0 1-.904 1.193l-.081-.061l-1.149-1a.75.75 0 0 1 .903-1.193zM14.25 2.5a.75.75 0 0 1 .102 1.493L14.25 4h-4.5a.75.75 0 0 1-.102-1.493L9.75 2.5h4.5z"
                                                                fill="currentColor"
                                                            ></path>
                                                        </g>
                                                    </svg>
                                                    Dahboard template
                                                </p>
                                                <div className="flex items-center">
                                                    <span className="ml-2 mr-2 text-xs text-gray-400 md:ml-4">
                                                        30 min
                                                    </span>
                                                    <button className="p-1 mr-4 text-sm text-gray-400 border border-gray-400 rounded">
                                                        <svg
                                                            width="15"
                                                            height="15"
                                                            fill="currentColor"
                                                            viewBox="0 0 20 20"
                                                        >
                                                            <g fill="none">
                                                                <path
                                                                    d="M17.222 8.685a1.5 1.5 0 0 1 0 2.628l-10 5.498A1.5 1.5 0 0 1 5 15.496V4.502a1.5 1.5 0 0 1 2.223-1.314l10 5.497z"
                                                                    fill="currentColor"
                                                                ></path>
                                                            </g>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full sm:w-1/2 xl:w-1/3">
                                    <div className="mb-4">
                                        <div className="p-4 bg-white shadow-lg rounded-2xl dark:bg-gray-700">
                                            <div className="flex flex-wrap overflow-hidden">
                                                <div className="w-full rounded shadow-sm">
                                                    <div className="flex items-center justify-between mb-4">
                                                        <div className="text-xl font-bold text-left text-black">
                                                            Dec 2021
                                                        </div>
                                                        <div className="flex space-x-4">
                                                            <button className="p-2 text-white bg-blue-500 rounded-full">
                                                                <svg
                                                                    width="15"
                                                                    height="15"
                                                                    fill="currentColor"
                                                                    viewBox="0 0 24 24"
                                                                >
                                                                    <path
                                                                        fill="currentColor"
                                                                        d="M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64z"
                                                                    ></path>
                                                                </svg>
                                                            </button>
                                                            <button className="p-2 text-white bg-blue-500 rounded-full">
                                                                <svg
                                                                    width="15"
                                                                    height="15"
                                                                    fill="currentColor"
                                                                    viewBox="0 0 24 24"
                                                                >
                                                                    <path
                                                                        fill="currentColor"
                                                                        d="M10 19a1 1 0 0 1-.64-.23a1 1 0 0 1-.13-1.41L13.71 12L9.39 6.63a1 1 0 0 1 .15-1.41a1 1 0 0 1 1.46.15l4.83 6a1 1 0 0 1 0 1.27l-5 6A1 1 0 0 1 10 19z"
                                                                    ></path>
                                                                </svg>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="-mx-2">
                                                        <table className="w-full">
                                                            <tr>
                                                                <th className="px-2 py-3 md:px-3 ">
                                                                    S
                                                                </th>
                                                                <th className="px-2 py-3 md:px-3 ">
                                                                    M
                                                                </th>
                                                                <th className="px-2 py-3 md:px-3 ">
                                                                    T
                                                                </th>
                                                                <th className="px-2 py-3 md:px-3 ">
                                                                    W
                                                                </th>
                                                                <th className="px-2 py-3 md:px-3 ">
                                                                    T
                                                                </th>
                                                                <th className="px-2 py-3 md:px-3 ">
                                                                    F
                                                                </th>
                                                                <th className="px-2 py-3 md:px-3 ">
                                                                    S
                                                                </th>
                                                            </tr>
                                                            <tr className="text-gray-400 dark:text-gray-500">
                                                                <td className="px-2 py-3 text-center text-gray-300 md:px-3 dark:text-gray-500">
                                                                    25
                                                                </td>
                                                                <td className="px-2 py-3 text-center text-gray-300 md:px-3 dark:text-gray-500">
                                                                    26
                                                                </td>
                                                                <td className="px-2 py-3 text-center text-gray-300 md:px-3 dark:text-gray-500">
                                                                    27
                                                                </td>
                                                                <td className="px-2 py-3 text-center text-gray-300 md:px-3 dark:text-gray-500">
                                                                    28
                                                                </td>
                                                                <td className="px-2 py-3 text-center text-gray-300 md:px-3 dark:text-gray-500">
                                                                    29
                                                                </td>
                                                                <td className="px-2 py-3 text-center text-gray-300 md:px-3 dark:text-gray-500">
                                                                    30
                                                                </td>
                                                                <td className="px-2 py-3 text-center text-gray-800 cursor-pointer md:px-3 hover:text-blue-500">
                                                                    1
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                                                                    2
                                                                </td>
                                                                <td className="relative px-1 py-3 text-center cursor-pointer hover:text-blue-500">
                                                                    3
                                                                    <span className="absolute bottom-0 w-2 h-2 transform -translate-x-1/2 bg-blue-500 rounded-full left-1/2"></span>
                                                                </td>
                                                                <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                                                                    4
                                                                </td>
                                                                <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                                                                    5
                                                                </td>
                                                                <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                                                                    6
                                                                </td>
                                                                <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                                                                    7
                                                                </td>
                                                                <td className="relative px-2 py-3 text-center cursor-pointer md:px-3 lg:px-3 hover:text-blue-500">
                                                                    8
                                                                    <span className="absolute bottom-0 w-2 h-2 transform -translate-x-1/2 bg-yellow-500 rounded-full left-1/2"></span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                                                                    9
                                                                </td>
                                                                <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                                                                    10
                                                                </td>
                                                                <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                                                                    11
                                                                </td>
                                                                <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                                                                    12
                                                                </td>
                                                                <td className="px-2 py-3 text-center text-white cursor-pointer md:px-3">
                                                                    <span className="p-2 bg-blue-500 rounded-full">
                                                                        13
                                                                    </span>
                                                                </td>
                                                                <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                                                                    14
                                                                </td>
                                                                <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                                                                    15
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                                                                    16
                                                                </td>
                                                                <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                                                                    17
                                                                </td>
                                                                <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                                                                    18
                                                                </td>
                                                                <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                                                                    19
                                                                </td>
                                                                <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                                                                    20
                                                                </td>
                                                                <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                                                                    21
                                                                </td>
                                                                <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                                                                    22
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                                                                    23
                                                                </td>
                                                                <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                                                                    24
                                                                </td>
                                                                <td className="relative px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                                                                    25
                                                                    <span className="absolute bottom-0 w-2 h-2 transform -translate-x-1/2 bg-red-500 rounded-full left-1/2"></span>
                                                                </td>
                                                                <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                                                                    26
                                                                </td>
                                                                <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                                                                    27
                                                                </td>
                                                                <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                                                                    28
                                                                </td>
                                                                <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                                                                    29
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                                                                    30
                                                                </td>
                                                                <td className="px-2 py-3 text-center cursor-pointer md:px-3 hover:text-blue-500">
                                                                    31
                                                                </td>
                                                                <td></td>
                                                                <td></td>
                                                                <td></td>
                                                                <td></td>
                                                                <td></td>
                                                            </tr>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <div className="w-full p-4 bg-white shadow-lg rounded-2xl dark:bg-gray-700">
                                            <p className="font-bold text-black text-md">
                                                Messages
                                            </p>
                                            <ul>
                                                <li className="flex items-center my-6 space-x-2">
                                                    <a
                                                        href="#"
                                                        className="relative block"
                                                    >
                                                        <img
                                                            alt="profil"
                                                            src="/images/person/1.jpg"
                                                            className="object-cover w-10 h-10 mx-auto rounded-full "
                                                        />
                                                    </a>
                                                    <div className="flex flex-col">
                                                        <span className="ml-2 text-sm font-semibold text-gray-900">
                                                            Charlie Rabiller
                                                        </span>
                                                        <span className="ml-2 text-sm text-gray-400 dark:text-gray-300">
                                                            Hey John ! Do you
                                                            read the NextJS doc
                                                            ?
                                                        </span>
                                                    </div>
                                                </li>
                                                <li className="flex items-center my-6 space-x-2">
                                                    <a
                                                        href="#"
                                                        className="relative block"
                                                    >
                                                        <img
                                                            alt="profil"
                                                            src="/images/person/5.jpg"
                                                            className="object-cover w-10 h-10 mx-auto rounded-full "
                                                        />
                                                    </a>
                                                    <div className="flex flex-col">
                                                        <span className="ml-2 text-sm font-semibold text-gray-900">
                                                            Marie Lou
                                                        </span>
                                                        <span className="ml-2 text-sm text-gray-400 dark:text-gray-300">
                                                            No I think the dog
                                                            is better...
                                                        </span>
                                                    </div>
                                                </li>
                                                <li className="flex items-center my-6 space-x-2">
                                                    <a
                                                        href="#"
                                                        className="relative block"
                                                    >
                                                        <img
                                                            alt="profil"
                                                            src="/images/person/6.jpg"
                                                            className="object-cover w-10 h-10 mx-auto rounded-full "
                                                        />
                                                    </a>
                                                    <div className="flex flex-col">
                                                        <span className="ml-2 text-sm font-semibold text-gray-900">
                                                            Ivan Buck
                                                        </span>
                                                        <span className="ml-2 text-sm text-gray-400 dark:text-gray-300">
                                                            Seriously ? haha Bob
                                                            is not a child !
                                                        </span>
                                                    </div>
                                                </li>
                                                <li className="flex items-center my-6 space-x-2">
                                                    <a
                                                        href="#"
                                                        className="relative block"
                                                    >
                                                        <img
                                                            alt="profil"
                                                            src="/images/person/7.jpg"
                                                            className="object-cover w-10 h-10 mx-auto rounded-full "
                                                        />
                                                    </a>
                                                    <div className="flex flex-col">
                                                        <span className="ml-2 text-sm font-semibold text-gray-900">
                                                            Marina Farga
                                                        </span>
                                                        <span className="ml-2 text-sm text-gray-400 dark:text-gray-300">
                                                            Do you need that
                                                            design ?
                                                        </span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </main>
    );
}
