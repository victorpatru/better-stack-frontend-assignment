import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-[#fafafa] min-h-screen mx-auto font-inter">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-sm md:max-w-3xl mx-auto">
        <header className="pt-10 ">
          <div className="flex space-x-2 items-center justify-between">
            <div className="flex items-center space-x-2">
              <img src="header-logo.png" alt="Company Logo" width={150} />
              <h2 className="border-l-2 pl-2">Status</h2>
            </div>
            <div className="px-4 py-3 bg-[#5F59F7] rounded-lg ml-2">
              <span className="text-white text-sm">E-mail helpdesk</span>
            </div>
          </div>
        </header>

        <main className="flex justify-center items-center text-center mt-20">
          <div>
            <div>
              <svg
                width="100"
                height="100"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto"
              >
                <g filter="url(#filter0_d_2_7188)">
                  <circle
                    cx="49.7532"
                    cy="40.7532"
                    r="26.7532"
                    fill="#21B062"
                  />
                </g>
                <path
                  d="M60.0087 35.4026L46.5206 48.8907L40.3896 42.7597"
                  stroke="white"
                  stroke-width="4.01299"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <defs>
                  <filter
                    id="filter0_d_2_7188"
                    x="0.259741"
                    y="0.623377"
                    width="98.987"
                    height="98.987"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="9.36364" />
                    <feGaussianBlur stdDeviation="11.3701" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.129412 0 0 0 0 0.690196 0 0 0 0 0.384314 0 0 0 0.1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_2_7188"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_2_7188"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
              <h1 className="text-[#222B35] text-xl font-semibold">
                All services are online
              </h1>
              <h3 className="text-[#424761] opacity-50">
                As of June 1st, 1:46 PM
              </h3>
            </div>
          </div>
        </main>

        <section className="max-w-sm md:max-w-3xl mx-auto bg-white rounded-lg md:rounded-xl shadow-lg md:shadow-xl mt-20">
          <div className="flex items-center justify-between px-5 py-5 bg-[#FAFAFC] rounded-lg">
            <h2 className="text-lg font-semibold text-[#424761]">
              Current status by service
            </h2>
            <div className="hidden md:flex">
              <svg
                width="176"
                height="20"
                viewBox="0 0 176 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="8" cy="10" r="8" fill="#DFE0E1" />
                <path
                  d="M10.606 8.18176L6.93937 11.8484L5.27271 10.1818"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M45.8349 3.75C46.7972 2.08333 49.2028 2.08333 50.1651 3.75L55.3612 12.75C56.3235 14.4167 55.1207 16.5 53.1962 16.5H42.8038C40.8793 16.5 39.6765 14.4167 40.6388 12.75L45.8349 3.75Z"
                  fill="#DFE0E1"
                />
                <path
                  d="M48.097 9.95241L48.097 7.01902"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M48.0972 13.619L48.0971 13.8285"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <circle cx="88" cy="10" r="8" fill="#DFE0E1" />
                <path
                  d="M90.5927 10.2927L85.4073 10.2927"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M129.49 3.17C129.11 1.61 126.89 1.61 126.51 3.17C126.453 3.40442 126.342 3.62213 126.185 3.80541C126.028 3.9887 125.831 4.13238 125.608 4.22477C125.385 4.31716 125.144 4.35564 124.903 4.33709C124.663 4.31854 124.43 4.24347 124.224 4.118C122.852 3.282 121.282 4.852 122.118 6.224C122.658 7.11 122.179 8.266 121.171 8.511C119.61 8.89 119.61 11.111 121.171 11.489C121.405 11.5458 121.623 11.6572 121.807 11.8141C121.99 11.971 122.133 12.1689 122.226 12.3918C122.318 12.6147 122.356 12.8563 122.338 13.0968C122.319 13.3373 122.244 13.5701 122.118 13.776C121.282 15.148 122.852 16.718 124.224 15.882C124.43 15.7563 124.663 15.6811 124.903 15.6623C125.144 15.6436 125.385 15.682 125.608 15.7743C125.831 15.8666 126.029 16.0102 126.186 16.1935C126.343 16.3768 126.454 16.5945 126.511 16.829C126.89 18.39 129.111 18.39 129.489 16.829C129.546 16.5946 129.657 16.377 129.814 16.1939C129.971 16.0107 130.169 15.8672 130.392 15.7749C130.615 15.6826 130.856 15.6442 131.097 15.6628C131.337 15.6815 131.57 15.7565 131.776 15.882C133.148 16.718 134.718 15.148 133.882 13.776C133.757 13.57 133.681 13.3373 133.663 13.0969C133.644 12.8564 133.683 12.6149 133.775 12.3921C133.867 12.1692 134.011 11.9713 134.194 11.8144C134.377 11.6575 134.595 11.546 134.829 11.489C136.39 11.11 136.39 8.889 134.829 8.511C134.595 8.45419 134.377 8.34281 134.193 8.18593C134.01 8.02904 133.867 7.83109 133.774 7.60818C133.682 7.38527 133.644 7.14372 133.662 6.90318C133.681 6.66265 133.756 6.42994 133.882 6.224C134.718 4.852 133.148 3.282 131.776 4.118C131.57 4.24368 131.337 4.31895 131.097 4.33767C130.856 4.35639 130.615 4.31804 130.392 4.22574C130.169 4.13344 129.971 3.9898 129.814 3.80651C129.657 3.62323 129.546 3.40548 129.489 3.171L129.49 3.17ZM128 13C128.796 13 129.559 12.6839 130.121 12.1213C130.684 11.5587 131 10.7956 131 10C131 9.20435 130.684 8.44129 130.121 7.87868C129.559 7.31607 128.796 7 128 7C127.204 7 126.441 7.31607 125.879 7.87868C125.316 8.44129 125 9.20435 125 10C125 10.7956 125.316 11.5587 125.879 12.1213C126.441 12.6839 127.204 13 128 13Z"
                  fill="#DFE0E1"
                />
                <circle cx="168" cy="10" r="8" fill="#DFE0E1" />
                <g clip-path="url(#clip0_2_12986)">
                  <circle cx="168" cy="10" r="4" fill="#FCFCFC" />
                </g>
                <defs>
                  <clipPath id="clip0_2_12986">
                    <rect
                      width="8"
                      height="8"
                      fill="white"
                      transform="translate(164 6)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className="flex justify-between items-center px-5 py-5">
            <div className="flex items-center space-x-2">
              <svg
                width="14"
                height="15"
                viewBox="0 0 14 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="7" cy="7.5" r="7" fill="#21B062" />
                <g clip-path="url(#clip0_2_11890)">
                  <path
                    d="M9.28032 5.90906L6.07198 9.11739L4.61365 7.65906"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2_11890">
                    <rect
                      width="7"
                      height="7"
                      fill="white"
                      transform="translate(3.5 4)"
                    />
                  </clipPath>
                </defs>
              </svg>

              <h4 className="text-[#424761] text-base">API</h4>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 13C10.7614 13 13 10.7614 13 8C13 5.23858 10.7614 3 8 3C5.23858 3 3 5.23858 3 8C3 10.7614 5.23858 13 8 13Z"
                  stroke="#637381"
                  stroke-opacity="0.5"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8 10.6667V8"
                  stroke="#637381"
                  stroke-opacity="0.5"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8 5.33337V5.50004"
                  stroke="#637381"
                  stroke-opacity="0.5"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <h4 className="text-[#424761]">100.000% uptime</h4>
          </div>
          <div>
            <img src="bars-mobile.png" aria-hidden className="p-5 md:hidden" />
            <img
              src="bars-desktop.png"
              aria-hidden
              className="hidden md:block p-5"
            />
          </div>
          {/* Dashboard */}
          <div className="flex justify-between items-center px-5 py-5 border-t-2">
            <div className="flex items-center space-x-2">
              <img src="warning-icon.png" aria-hidden width={14} />
              <h4 className="text-[#424761] text-base font-semibold">
                Dashboard
              </h4>
              <img src="info.png" aria-hidden width={20} />
            </div>
            <h4 className="text-[#424761]">99.987% uptime</h4>
          </div>
          <div>
            <img
              src="bars-warning-mobile.png"
              aria-hidden
              className="p-5 md:hidden"
            />
            <img
              src="bars-warning-desktop.png"
              aria-hidden
              className="hidden md:block p-5"
            />
          </div>

          {/* Landing Page */}
          <div className="flex justify-between items-center px-5 py-5 border-t-2">
            <div className="flex items-center space-x-2">
              <img src="warning-icon.png" aria-hidden width={14} />
              <h4 className="text-[#424761] text-base font-semibold">
                Landing Page
              </h4>
              <img src="info.png" aria-hidden width={20} />
            </div>
            <h4 className="text-[#424761]">99.706% uptime</h4>
          </div>
          <div>
            <img
              src="bars-error-mobile.png"
              aria-hidden
              className="p-5 md:hidden"
            />
            <img
              src="bars-error-desktop.png"
              aria-hidden
              className="hidden md:block p-5"
            />
          </div>
        </section>

        <footer className="flex justify-between items-center mt-7 text-[#424761]">
          <h4 className="text-sm">@2020 wallmine</h4>
          <div className="flex items-center space-x-3">
            <span className="text-sm">Powered by</span>
            <img src="better-time-logo.png" alt="Company logo" width={100} />
          </div>
        </footer>
      </div>
    </div>
  );
}
