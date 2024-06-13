import React from "react";
import { Search, Mail, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function page() {
    return (
        <div className="flex justify-center">
            <div className="w-[1000px]">
                <div className="flex items-center border-[2px] border-gray-400 rounded-lg focus:shadow-outline px-3">
                    <Search size="24" color="#9ca3af" />
                    <input type="text" className="w-full h-10 px-3 text-base placeholder-gray-600 border-none outline-none" placeholder="Search integrations..." />
                </div>
                <div className="mt-10 flex flex-col gap-3">
                    <div className="border-[2px] border-gray-300 flex items-center px-3 py-5 rounded-lg gap-5">
                        <div className="">
                            <Mail size={60} color="black" />
                        </div>
                        <div className="">
                            <div className="flex items-center gap-2">
                                <h1>Email</h1>
                                <div className="flex items-center gap-1 bg-green-100 text-green-500 w-[100px] rounded-full justify-center">
                                    Active <Check />{" "}
                                </div>
                            </div>
                            <p>Recive an email every time a user submit their answer</p>
                        </div>
                    </div>
                    <div className=" border-[2px] border-gray-300 flex items-center px-3 py-5 rounded-lg gap-5">
                        <div className="w-[50px]">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 242423 333333"
                                shape-rendering="geometricPrecision"
                                text-rendering="geometricPrecision"
                                image-rendering="optimizeQuality"
                                fill-rule="evenodd"
                                clip-rule="evenodd">
                                <defs>
                                    <mask id="c">
                                        <linearGradient id="a" gradientUnits="userSpaceOnUse" x1="200294" y1="91174.8" x2="200294" y2="176113">
                                            <stop offset="0" stop-opacity=".02" stop-color="#fff" />
                                            <stop offset="1" stop-opacity=".2" stop-color="#fff" />
                                        </linearGradient>
                                        <path fill="url(#a)" d="M158015 84111h84558v99065h-84558z" />
                                    </mask>
                                    <mask id="e">
                                        <radialGradient id="b" gradientUnits="userSpaceOnUse" cx="0" cy="0" r="0" fx="0" fy="0">
                                            <stop offset="0" stop-opacity="0" stop-color="#fff" />
                                            <stop offset="1" stop-opacity=".098" stop-color="#fff" />
                                        </radialGradient>
                                        <path fill="url(#b)" d="M-150-150h242723v333633H-150z" />
                                    </mask>
                                    <radialGradient id="f" gradientUnits="userSpaceOnUse" cx="9696.85" cy="10000.4" r="166667" fx="9696.85" fy="10000.4">
                                        <stop offset="0" stop-color="#fff" />
                                        <stop offset="1" stop-color="#fff" />
                                    </radialGradient>
                                    <linearGradient id="d" gradientUnits="userSpaceOnUse" x1="200294" y1="95125.2" x2="200294" y2="172162">
                                        <stop offset="0" stop-color="#263138" />
                                        <stop offset="1" stop-color="#263138" />
                                    </linearGradient>
                                </defs>
                                <g fill-rule="nonzero">
                                    <path
                                        d="M151513 0H22729C10227 0 1 10227 1 22728v287877c0 12505 10227 22728 22728 22728h196966c12505 0 22728-10224 22728-22728V90911l-53028-37880L151513 0z"
                                        fill="#0f9c57"
                                    />
                                    <path
                                        d="M60606 162880v109853h121216V162880H60606zm53032 94698H75757v-18938h37881v18938zm0-30301H75757v-18946h37881v18946zm0-30310H75757v-18936h37881v18936zm53030 60611h-37884v-18938h37884v18938zm0-30301h-37884v-18946h37884v18946zm0-30310h-37884v-18936h37884v18936z"
                                        fill="#f0f0f0"
                                    />
                                    <path mask="url(#c)" fill="url(#d)" d="M158165 84261l84258 84245V90911z" />
                                    <path d="M151513 0v68184c0 12557 10173 22727 22727 22727h68183L151513 0z" fill="#87cdac" />
                                    <path d="M22728 0C10226 0 0 10227 0 22729v1893C0 12123 10227 1894 22728 1894h128784V1H22728z" fill="#fff" fill-opacity=".2" />
                                    <path
                                        d="M219694 331443H22728C10226 331443 0 321213 0 308715v1890c0 12505 10227 22728 22728 22728h196966c12505 0 22728-10224 22728-22728v-1890c0 12499-10224 22728-22728 22728z"
                                        fill="#263138"
                                        fill-opacity=".2"
                                    />
                                    <path d="M174239 90911c-12554 0-22727-10170-22727-22727v1893c0 12557 10173 22727 22727 22727h68183v-1893h-68183z" fill="#263138" fill-opacity=".102" />
                                    <path
                                        d="M151513 0H22729C10227 0 1 10227 1 22729v287876c0 12505 10227 22728 22728 22728h196966c12505 0 22728-10224 22728-22728V90911L151513 0z"
                                        mask="url(#e)"
                                        fill="url(#f)"
                                    />
                                </g>
                            </svg>
                        </div>
                        <div className="flex justify-between items-center w-full">
                            <div className="">
                                <h1>Google Sheets</h1>
                                <p>Send your data staight to Google Sheet. Automatically syncs as result come in.</p>
                            </div>
                            <div className="">
                                <Button>Connect</Button>
                            </div>
                        </div>
                    </div>
                    <div className=" border-[2px] border-gray-300 flex items-center px-3 py-5 rounded-lg gap-5">
                        <div className="">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="70" height="70" viewBox="0 0 48 48">
                                <rect width="16" height="9" x="28" y="15" fill="#21a366"></rect>
                                <path fill="#185c37" d="M44,24H12v16c0,1.105,0.895,2,2,2h28c1.105,0,2-0.895,2-2V24z"></path>
                                <rect width="16" height="9" x="28" y="24" fill="#107c42"></rect>
                                <rect width="16" height="9" x="12" y="15" fill="#3fa071"></rect>
                                <path fill="#33c481" d="M42,6H28v9h16V8C44,6.895,43.105,6,42,6z"></path>
                                <path fill="#21a366" d="M14,6h14v9H12V8C12,6.895,12.895,6,14,6z"></path>
                                <path d="M22.319,13H12v24h10.319C24.352,37,26,35.352,26,33.319V16.681C26,14.648,24.352,13,22.319,13z" opacity=".05"></path>
                                <path d="M22.213,36H12V13.333h10.213c1.724,0,3.121,1.397,3.121,3.121v16.425	C25.333,34.603,23.936,36,22.213,36z" opacity=".07"></path>
                                <path d="M22.106,35H12V13.667h10.106c1.414,0,2.56,1.146,2.56,2.56V32.44C24.667,33.854,23.52,35,22.106,35z" opacity=".09"></path>
                                <linearGradient id="flEJnwg7q~uKUdkX0KCyBa_UECmBSgBOvPT_gr1" x1="4.725" x2="23.055" y1="14.725" y2="33.055" gradientUnits="userSpaceOnUse">
                                    <stop offset="0" stop-color="#18884f"></stop>
                                    <stop offset="1" stop-color="#0b6731"></stop>
                                </linearGradient>
                                <path
                                    fill="url(#flEJnwg7q~uKUdkX0KCyBa_UECmBSgBOvPT_gr1)"
                                    d="M22,34H6c-1.105,0-2-0.895-2-2V16c0-1.105,0.895-2,2-2h16c1.105,0,2,0.895,2,2v16	C24,33.105,23.105,34,22,34z"></path>
                                <path fill="#fff" d="M9.807,19h2.386l1.936,3.754L16.175,19h2.229l-3.071,5l3.141,5h-2.351l-2.11-3.93L11.912,29H9.526	l3.193-5.018L9.807,19z"></path>
                            </svg>
                        </div>
                        <div className="flex justify-between items-center w-full">
                            <div className="">
                                <h1>Excel</h1>
                                <p>Send your typeform responses to Excel Online. Turn feedback into graphs, support quries into workflows, and much more.</p>
                            </div>
                            <div className="">
                                <Button>Connect</Button>
                            </div>
                        </div>
                    </div>
                    <div className=""></div>
                </div>
            </div>
        </div>
    );
}
