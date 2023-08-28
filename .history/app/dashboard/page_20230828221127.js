"use client";

import Link from "next/link";

export default function Dashboard() {
    return (
        <main className="py-8 bg-bgColor">
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
                                            class="absolute h-4 text-blue transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                            viewBox="0 0 1792 1792"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M1362 1185q0 153-99.5 263.5t-258.5 136.5v175q0 14-9 23t-23 9h-135q-13 0-22.5-9.5t-9.5-22.5v-175q-66-9-127.5-31t-101.5-44.5-74-48-46.5-37.5-17.5-18q-17-21-2-41l103-135q7-10 23-12 15-2 24 9l2 2q113 99 243 125 37 8 74 8 81 0 142.5-43t61.5-122q0-28-15-53t-33.5-42-58.5-37.5-66-32-80-32.5q-39-16-61.5-25t-61.5-26.5-62.5-31-56.5-35.5-53.5-42.5-43.5-49-35.5-58-21-66.5-8.5-78q0-138 98-242t255-134v-180q0-13 9.5-22.5t22.5-9.5h135q14 0 23 9t9 23v176q57 6 110.5 23t87 33.5 63.5 37.5 39 29 15 14q17 18 5 38l-81 146q-8 15-23 16-14 3-27-7-3-3-14.5-12t-39-26.5-58.5-32-74.5-26-85.5-11.5q-95 0-155 43t-60 111q0 26 8.5 48t29.5 41.5 39.5 33 56 31 60.5 27 70 27.5q53 20 81 31.5t76 35 75.5 42.5 62 50 53 63.5 31.5 76.5 13 94z"></path>
                                        </svg>
                                    </span>
                                </div>
                                <div class=" flex flex-col w-full">
                                    <span class="text-lg font-medium text-gray-600">
                                        Ready for Booking
                                    </span>
                                    <span class="text-xs text-gray-400">
                                        The Agreement is signed and this move is
                                        ready for booking
                                    </span>
                                </div>
                                <button
                                    type="button"
                                    class="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 min-w-fit rounded-full"
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
                                                <span className="relative p-2 m-4 bg-blue-700 rounded-xl"></span>
                                                <div className="flex flex-col">
                                                    <span className="ml-2 font-bold text-black text-md">
                                                        Inventory
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex items-center">
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
                                        <div className="flex items-center ml-12">
                                            <span className="py-2 ml-2 text-xl font-bold text-black">
                                                $3,200
                                            </span>
                                        </div>
                                        <div className="flex items-center ml-12 border-b">
                                            <span className="py-2 ml-2 text-black text-md">
                                                42 Items
                                            </span>
                                        </div>
                                        <div className="flex items-center ml-12">
                                            <span className="py-2 ml-2 text-black text-md">
                                                420 Cubic Feet
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <div className="w-full p-4 bg-white shadow-lg rounded-2xl">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center">
                                                <span className="relative p-2 m-4 bg-yellow-200 rounded-xl"></span>
                                                <div className="flex flex-col">
                                                    <span className="ml-2 font-bold text-black text-md">
                                                        Inventory
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex items-center">
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
                                        <div className="flex items-center ml-12">
                                            <span className="py-2 ml-2 text-xl font-bold text-black">
                                                $3,200
                                            </span>
                                        </div>
                                        <div className="flex items-center ml-12 border-b">
                                            <span className="py-2 ml-2 text-black text-md">
                                                42 Items
                                            </span>
                                        </div>
                                        <div className="flex items-center ml-12">
                                            <span className="py-2 ml-2 text-black text-md">
                                                420 Cubic Feet
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="min-w-full overflow-hidden p-8 bg-white rounded-lg shadow">
                            <div class="flex items-center justify-between mb-4 rounded">
                                <div class="flex items-center justify-between w-full">
                                    <div class="flex flex-col items-start justify-between ml-2 text-sm">
                                        Aggrements 03
                                    </div>
                                    <span class="text-green-400">See All</span>
                                </div>
                            </div>
                            <table class="min-w-full leading-normal">
                                <thead>
                                    <tr>
                                        <th
                                            scope="col"
                                            class="px-5 py-3 text-sm font-normal text-left text-gray-800 bg-white border-b border-gray-200"
                                        >
                                            ID
                                        </th>
                                        <th
                                            scope="col"
                                            class="px-5 py-3 text-sm font-normal text-left text-gray-800 bg-white border-b border-gray-200"
                                        >
                                            Price
                                        </th>
                                        <th
                                            scope="col"
                                            class="px-5 py-3 text-sm font-normal text-left text-gray-800 bg-white border-b border-gray-200"
                                        >
                                            Status
                                        </th>
                                        <th
                                            scope="col"
                                            class="px-5 py-3 text-sm font-normal text-left text-gray-800 bg-white border-b border-gray-200"
                                        >
                                            Consignees
                                        </th>
                                        <th
                                            scope="col"
                                            class="px-5 py-3 text-sm font-normal text-left text-gray-800 bg-white border-b border-gray-200"
                                        ></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="px-5 py-5 text-sm bg-white border-gray-200">
                                            <div class="flex items-center">
                                                <a
                                                    href="#"
                                                    class="relative block text-blue-400"
                                                >
                                                    #28842
                                                </a>
                                            </div>
                                        </td>
                                        <td class="px-5 py-5 text-sm bg-white border-gray-200">
                                            <p class="text-gray-900 whitespace-no-wrap">
                                                $4.090(420CF)
                                            </p>
                                        </td>
                                        <td class="px-5 py-8 flex items-center text-sm bg-white border-gray-200">
                                            <span className="px-2 py-1 text-xs font-semibold text-blue-500 bg-blue-100 rounded-md">
                                                Signed
                                            </span>
                                            <span className="ml-2">Today</span>
                                        </td>
                                        <td class="px-5 py-5 text-sm bg-white border-gray-200">
                                            <div className="flex -space-x-2">
                                                <a href="#" className="">
                                                    <img
                                                        className="inline-block object-cover w-10 h-10 rounded-full ring-2 ring-white"
                                                        src="/images/avatars/olivia.jpg"
                                                        alt="Olivia"
                                                    />
                                                </a>
                                                <a href="#" className="">
                                                    <img
                                                        className="inline-block object-cover w-10 h-10 rounded-full ring-2 ring-white"
                                                        src="/images/avatars/olivia.jpg"
                                                        alt="Olivia"
                                                    />
                                                </a>
                                            </div>
                                        </td>
                                        <td class="px-5 py-5 text-sm bg-white border-gray-200">
                                            <a
                                                href="#"
                                                class="text-indigo-600 hover:text-indigo-900"
                                            >
                                                ...
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="px-5 py-5 text-sm bg-white border-gray-200">
                                            <div class="flex items-center">
                                                <a
                                                    href="#"
                                                    class="relative block text-blue-400"
                                                >
                                                    #28842
                                                </a>
                                            </div>
                                        </td>
                                        <td class="px-5 py-5 text-sm bg-white border-gray-200">
                                            <p class="text-gray-900 whitespace-no-wrap">
                                                $4.090(420CF)
                                            </p>
                                        </td>
                                        <td class="px-5 py-8 flex items-center text-sm bg-white border-gray-200">
                                            <span className="px-2 py-1 text-xs font-semibold text-blue-500 bg-blue-100 rounded-md">
                                                Signed
                                            </span>
                                            <span className="ml-2">Today</span>
                                        </td>
                                        <td class="px-5 py-5 text-sm bg-white border-gray-200">
                                            <div className="flex -space-x-2">
                                                <a href="#" className="">
                                                    <img
                                                        className="inline-block object-cover w-10 h-10 rounded-full ring-2 ring-white"
                                                        src="/images/avatars/olivia.jpg"
                                                        alt="Olivia"
                                                    />
                                                </a>
                                                <a href="#" className="">
                                                    <img
                                                        className="inline-block object-cover w-10 h-10 rounded-full ring-2 ring-white"
                                                        src="/images/avatars/olivia.jpg"
                                                        alt="Olivia"
                                                    />
                                                </a>
                                            </div>
                                        </td>
                                        <td class="px-5 py-5 text-sm bg-white border-gray-200">
                                            <a
                                                href="#"
                                                class="text-indigo-600 hover:text-indigo-900"
                                            >
                                                ...
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="px-5 py-5 text-sm bg-white border-gray-200">
                                            <div class="flex items-center">
                                                <a
                                                    href="#"
                                                    class="relative block text-blue-400"
                                                >
                                                    #28842
                                                </a>
                                            </div>
                                        </td>
                                        <td class="px-5 py-5 text-sm bg-white border-gray-200">
                                            <p class="text-gray-900 whitespace-no-wrap">
                                                $4.090(420CF)
                                            </p>
                                        </td>
                                        <td class="px-5 py-8 flex items-center text-sm bg-white border-gray-200">
                                            <span className="px-2 py-1 text-xs font-semibold text-blue-500 bg-blue-100 rounded-md">
                                                Signed
                                            </span>
                                            <span className="ml-2">Today</span>
                                        </td>
                                        <td class="px-5 py-5 text-sm bg-white border-gray-200">
                                            <div className="flex -space-x-2">
                                                <a href="#" className="">
                                                    <img
                                                        className="inline-block object-cover w-10 h-10 rounded-full ring-2 ring-white"
                                                        src="/images/avatars/olivia.jpg"
                                                        alt="Olivia"
                                                    />
                                                </a>
                                                <a href="#" className="">
                                                    <img
                                                        className="inline-block object-cover w-10 h-10 rounded-full ring-2 ring-white"
                                                        src="/images/avatars/olivia.jpg"
                                                        alt="Olivia"
                                                    />
                                                </a>
                                            </div>
                                        </td>
                                        <td class="px-5 py-5 text-sm bg-white border-gray-200">
                                            <a
                                                href="#"
                                                class="text-indigo-600 hover:text-indigo-900"
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
