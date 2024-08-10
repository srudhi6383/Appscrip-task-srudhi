import React from 'react'

const Header = () => {
    return (
        <header className='w-full border-b-[1px] border-slate-400'>
            <div className='grayStrip h-[32px] flex items-center justify-evenly text-red-500 bg-gray-900'>
                <span className='hidden md:block'>Lorem ipsum dolor</span>
                <span>Lorem ipsum dolor</span>
                <span className='hidden md:block'>Lorem ipsum dolor</span>
            </div>
            <div className='py-5 px-3 md:p-10 max-w-[95rem] mx-auto flex justify-between items-center'>
                <div className='flex items-center gap-1'>
                    <svg className='icon md:hidden' xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M24 18v1h-24v-1h24zm0-6v1h-24v-1h24zm0-6v1h-24v-1h24z" fill="#1040e2" /><path d="M24 19h-24v-1h24v1zm0-6h-24v-1h24v1zm0-6h-24v-1h24v1z" /></svg>
                    <svg width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M-248 -480C-248 -481.105 -247.105 -482 -246 -482H4812C4813.1 -482 4814 -481.105 4814 -480V4433C4814 4434.1 4813.1 4435 4812 4435H-246C-247.104 4435 -248 4434.1 -248 4433V-480Z" fill="#282828" />
                        <path d="M-246 -481H4812V-483H-246V-481ZM4813 -480V4433H4815V-480H4813ZM4812 4434H-246V4436H4812V4434ZM-247 4433V-480H-249V4433H-247ZM-246 4434C-246.552 4434 -247 4433.55 -247 4433H-249C-249 4434.66 -247.657 4436 -246 4436V4434ZM4813 4433C4813 4433.55 4812.55 4434 4812 4434V4436C4813.66 4436 4815 4434.66 4815 4433H4813ZM4812 -481C4812.55 -481 4813 -480.552 4813 -480H4815C4815 -481.657 4813.66 -483 4812 -483V-481ZM-246 -483C-247.657 -483 -249 -481.657 -249 -480H-247C-247 -480.552 -246.552 -481 -246 -481V-483Z" fill="black" fillOpacity="0.1" />
                        <rect width="1440" height="4373" transform="translate(-96 -72)" fill="white" />
                        <mask id="path-3-inside-1_0_1" fill="white">
                            <path d="M-96 -40H1344V148H-96V-40Z" />
                        </mask>
                        <path d="M-96 -40H1344V148H-96V-40Z" fill="white" />
                        <path d="M1344 147H-96V149H1344V147Z" fill="#E5E5E5" mask="url(#path-3-inside-1_0_1)" />
                        <path d="M1.54286 28.8C0.257146 31.6714 0.0857196 34.2 0.0857196 35.1857C0.0857196 35.4429 0.300006 35.6143 0.514291 35.6143C1.75715 35.5286 5.44287 35.1428 8.70002 33.1286C9.2143 32.7857 9.72859 32.4857 10.1572 32.1429C15.8572 28.0286 17.0143 21.7286 17.1857 20.1429C17.3572 20.0143 17.4429 19.9286 17.5714 19.8H17.9572C18.1286 19.9286 18.2143 20.0143 18.3857 20.1857C18.5143 21.6 19.3286 26.7 24.0429 30.9857C24.1715 31.1143 24.3429 31.1143 24.5143 31.0714C24.7286 30.9857 24.9429 30.8571 25.2 30.6857C25.4572 30.5571 25.4572 30.2143 25.2429 30.0429C20.6143 25.9714 19.9714 20.2714 19.9286 20.0143C28.0286 21.1714 31.2857 27.0857 31.2857 27C31.8857 27.8571 31.9715 28.1571 32.1429 28.5C32.1429 28.5 33.3857 30.5571 33.8572 33.4714C33.9 33.7286 33.6857 33.9857 33.3857 33.9428C32.0572 33.7286 30.8572 33.3429 29.9572 33C29.8286 32.9571 29.6572 32.9571 29.5715 33.0429C29.3572 33.2143 29.1429 33.3857 28.9286 33.5143C28.6715 33.6857 28.7143 34.1143 29.0143 34.2C30.4715 34.8428 32.6572 35.4857 35.1858 35.5714C35.4429 35.5714 35.6143 35.3571 35.6143 35.1429C35.4 30.4286 33.1286 26.9571 33.1286 26.9571C32.8715 26.4857 32.5286 26.0143 32.1429 25.5C32.1429 25.5 28.1572 19.4571 20.1857 18.4286C19.9715 18.3857 19.8429 18.2143 19.8429 18.0429C19.8429 17.8286 19.8429 17.6571 19.8429 17.5286C19.8429 17.4 20.0572 17.3143 20.1429 17.2714C25.9715 16.4571 29.6143 13.2 31.2 11.4C31.3286 11.2714 31.3286 11.0571 31.2429 10.9286C31.1143 10.7143 30.9857 10.4571 30.8572 10.2429C30.7286 9.98571 30.3857 9.98571 30.1715 10.2C28.6715 12.0429 25.4143 14.9571 19.9286 15.7286C19.9714 15.4286 20.7857 8.48571 26.8715 4.41428C27.4286 4.07142 27.9429 3.72857 28.4143 3.47142C28.4143 3.47142 30.5572 2.22857 33.3857 1.8C33.6429 1.75714 33.9 2.01428 33.8572 2.27142C33.6429 3.68571 33.2143 4.88571 32.8715 5.78571C32.8286 5.91429 32.8286 6.08571 32.9143 6.17143C33.0858 6.38571 33.2572 6.64286 33.3857 6.85714C33.5572 7.11428 33.9858 7.07142 34.1143 6.77142C35.3572 3.94285 35.5286 1.45714 35.5286 0.471425C35.5286 0.214282 35.3143 0.0428532 35.1 0.0428532C33.8572 0.128567 30.1715 0.514283 26.9143 2.52857C26.3572 2.87143 25.8 3.21428 25.4572 3.51428C19.7572 7.62857 18.6 13.9286 18.4286 15.5143C18.2572 15.6428 18.1714 15.7286 18.0429 15.8571H17.6572C17.4857 15.7286 17.4 15.6429 17.2286 15.4714C17.1 14.0571 16.2857 9 11.5714 4.67143C11.4429 4.54285 11.2714 4.54285 11.1 4.62857C10.8857 4.75714 10.6286 4.88571 10.4143 5.01428C10.1572 5.14286 10.1572 5.48571 10.3714 5.65714C15 9.72857 15.6429 15.4286 15.6857 15.6857C7.58572 14.5714 4.45715 8.74286 4.37144 8.65714C4.07144 8.18571 3.77143 7.71428 3.47143 7.15714C3.47143 7.15714 2.27143 5.14285 1.75715 2.18571C1.97143 1.97142 2.01429 1.92857 2.22858 1.71429C3.55715 1.92857 4.75715 2.31428 5.65715 2.65714C5.78573 2.7 5.95715 2.7 6.04287 2.57143C6.25715 2.4 6.47144 2.22857 6.68572 2.1C6.94287 1.92857 6.9 1.5 6.6 1.37143C5.14286 0.72857 2.95715 0.0857143 0.428572 0C0.171429 0 0 0.214286 0 0.428571C0.214286 5.14286 2.48572 8.61428 2.48572 8.61428C2.74287 9.08571 3.08572 9.51428 3.47143 10.0714C3.47143 10.0714 7.45715 16.1143 15.4286 17.1429C15.6429 17.1857 15.7715 17.3571 15.7715 17.5286C15.7715 17.7 15.7715 17.8714 15.7715 18C15.7715 18.1714 15.6 18.3 15.5143 18.3C9.68573 19.0714 6.04286 22.3714 4.45714 24.1714C4.37143 24.3 4.32858 24.4286 4.37144 24.6C4.45715 24.8571 4.62858 25.1143 4.75715 25.3714C4.88572 25.6286 5.22858 25.6286 5.40001 25.4143C6.90001 23.6143 10.1572 20.6143 15.6857 19.8428C15.6429 20.1428 14.8286 27.0857 8.74286 31.1571C8.52858 31.3286 8.27144 31.4571 8.05716 31.6286C7.80002 31.8 5.10001 33.3 2.22858 33.7714C1.97144 33.8143 1.71429 33.5571 1.75715 33.3C1.97143 31.8428 2.4 30.6 2.78572 29.7429C2.82857 29.6143 2.82857 29.4429 2.74286 29.3571C2.57143 29.1429 2.40001 28.8857 2.27144 28.6714C2.05715 28.4571 1.67143 28.5 1.54286 28.8ZM3.47143 28.4143C4.28572 29.4857 5.3143 30.4714 6.12859 31.2C6.25716 31.3286 6.47143 31.3286 6.6 31.2429C6.81429 31.1143 7.07144 30.9857 7.28572 30.8571C7.50001 30.7286 7.54287 30.3857 7.32858 30.2143C5.61429 28.7571 4.4143 26.9571 4.4143 26.9571C4.1143 26.5286 3.81429 26.0143 3.51429 25.4571C2.01429 22.5429 1.62858 19.8857 1.58572 18.0857C1.58572 17.3143 1.62857 16.5857 1.71429 15.9428C1.75714 15.8143 1.75715 15.7286 1.75715 15.7286C1.97143 14.1 2.35714 12.7714 2.74286 11.8286C2.78571 11.7 2.78572 11.5286 2.70001 11.4429C2.52858 11.2714 2.40001 11.0143 2.22858 10.8C2.05715 10.5429 1.62857 10.5857 1.5 10.8857C1.02857 12.0857 0.471429 13.7143 0.214286 15.7286C0.214286 15.7286 -0.814287 21.2143 2.57143 26.9143C2.82857 27.5143 3.17143 28.0286 3.47143 28.4143ZM32.1 7.19999C31.2857 6.12857 30.2572 5.14285 29.4429 4.41428C29.3143 4.28571 29.1429 4.28571 28.9715 4.37143C28.7572 4.5 28.5 4.62857 28.2857 4.75714C28.0715 4.88571 28.0286 5.22857 28.2429 5.4C29.9572 6.85714 31.1572 8.65714 31.1572 8.65714C31.4572 9.04285 31.7572 9.55714 32.0572 10.1571C33.5572 13.0714 33.9429 15.7286 33.9858 17.5286C33.9858 18.3 33.9429 19.0286 33.8572 19.6714C33.8143 19.8 33.8143 19.8857 33.8143 19.8857C33.6 21.5571 33.2143 22.8857 32.8286 23.8286C32.7857 23.9571 32.7858 24.1286 32.9143 24.2571C33.0858 24.4714 33.2572 24.6857 33.3857 24.9C33.5572 25.1571 33.9858 25.1143 34.1143 24.8143C34.5858 23.6143 35.1429 21.9429 35.4 19.9286C35.4 19.9286 36.4286 14.4429 33.0429 8.74285C32.7857 8.18571 32.4429 7.67142 32.1 7.19999ZM10.0714 3.55714C10.2429 3.47142 10.5 3.3 10.6714 3.21429C16.5 0.471428 21.5572 1.8 23.9572 2.78571C24.0857 2.82857 24.2572 2.82857 24.3429 2.74285C24.5572 2.57143 24.7715 2.4 25.0286 2.22857C25.2857 2.05714 25.2429 1.62857 24.9429 1.5C21.5143 0 17.9572 0 17.7429 0C17.4857 0 12.6857 -5.31333e-06 8.6143 2.48571C8.14287 2.78571 7.71429 3.08571 7.24286 3.42857C7.24286 3.42857 5.87144 4.45714 4.58572 5.78571C4.45715 5.91429 4.45715 6.08571 4.54286 6.25714C4.67144 6.51428 4.8 6.77142 4.92858 6.98571C5.05715 7.24285 5.40001 7.24286 5.57143 7.07143C6.34286 6.21428 7.4143 5.18571 8.65716 4.37143C9.12859 4.07143 9.60001 3.81428 10.0714 3.55714ZM28.2857 32.1857C28.2857 32.1857 29.6143 31.1571 30.9429 29.8286C31.0715 29.7 31.0715 29.5286 31.0286 29.3571C30.9 29.1 30.7715 28.8857 30.6429 28.6286C30.5143 28.3714 30.1715 28.3714 30 28.5857C29.2715 29.4 28.4572 30.2571 27.2572 31.0714C26.8715 31.3714 26.1429 31.8429 25.5 32.1857C19.4143 35.3143 14.1429 33.9 11.6572 32.9143C11.5286 32.8714 11.3572 32.8714 11.2714 32.9571C11.0572 33.1286 10.8 33.3 10.5857 33.4286C10.3286 33.6 10.3714 34.0286 10.6714 34.1571C14.1 35.6571 17.6572 35.6571 17.8715 35.6571C18.1286 35.6571 22.9286 35.6571 27 33.1714C27.3857 32.8286 27.8572 32.5286 28.2857 32.1857ZM17.7857 17.4C17.9572 17.5714 18.0429 17.6571 18.2143 17.8286C18.0429 18 17.9572 18.0857 17.7857 18.2143C17.5714 18.2143 17.3572 18.0429 17.3572 17.7857C17.5286 17.6571 17.6143 17.5714 17.7857 17.4Z" fill="black" />
                    </svg>
                </div>
                <span className='md:ml-20 lg:ml-40 text-3xl md:text-4xl font-bold'>LOGO</span>
                <div className='flex items-center gap-2 md:gap-4'>
                    {/* search  */}
                    <svg className='icon' xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5z" /></svg>
                    {/* like */}
                    <svg className='icon' xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181" /></svg>
                    {/* bag */}
                    <svg className='icon' xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M16 4h8v19h-24v-19h8v-2c0-.552.448-1 1-1h6c.552 0 1 .448 1 1v2zm7 1h-22v17h22v-17zm-3 4v1h-16v-1h16zm-5-6.5c0-.133-.053-.26-.146-.354-.094-.093-.221-.146-.354-.146h-5c-.133 0-.26.053-.354.146-.093.094-.146.221-.146.354v1.5h6v-1.5z" /></svg>
                    {/* person  */}
                    <svg className='icon hidden md:block' xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm8.127 19.41c-.282-.401-.772-.654-1.624-.85-3.848-.906-4.097-1.501-4.352-2.059-.259-.565-.19-1.23.205-1.977 1.726-3.257 2.09-6.024 1.027-7.79-.674-1.119-1.875-1.734-3.383-1.734-1.521 0-2.732.626-3.409 1.763-1.066 1.789-.693 4.544 1.049 7.757.402.742.476 1.406.22 1.974-.265.586-.611 1.19-4.365 2.066-.852.196-1.342.449-1.623.848 2.012 2.207 4.91 3.592 8.128 3.592s6.115-1.385 8.127-3.59zm.65-.782c1.395-1.844 2.223-4.14 2.223-6.628 0-6.071-4.929-11-11-11s-11 4.929-11 11c0 2.487.827 4.783 2.222 6.626.409-.452 1.049-.81 2.049-1.041 2.025-.462 3.376-.836 3.678-1.502.122-.272.061-.628-.188-1.087-1.917-3.535-2.282-6.641-1.03-8.745.853-1.431 2.408-2.251 4.269-2.251 1.845 0 3.391.808 4.24 2.218 1.251 2.079.896 5.195-1 8.774-.245.463-.304.821-.179 1.094.305.668 1.644 1.038 3.667 1.499 1 .23 1.64.59 2.049 1.043z" /></svg>
                    {/* eng  */}
                    <select name="lang" id="lang" className='hidden md:block'>
                        <option value="eng">Eng</option>
                        <option value="hin">Hin</option>
                        <option value="tam">Tam</option>
                    </select>
                </div>
            </div>
            <div className='hidden md:pb-6 md:flex justify-center gap-10 uppercase font-medium'>
                <span className='hover'>Shop</span>
                <span className='hover'>Skills</span>
                <span className='hover'>Stories</span>
                <span className='hover'>About</span>
                <span className='hover'>Contact us</span>
            </div>
        </header>
    )
}

export default Header
