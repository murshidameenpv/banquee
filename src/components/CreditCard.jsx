/* eslint-disable react/prop-types */

    const CreditCard = ({
    backgroundColor,
    name,
    cardNumber,
    expiryDate,
    cardBrand,
    marginBottom,
    }) => {
        console.log(marginBottom);
        return (
          <div
            className={`flex flex-col text-white p-4 rounded-lg font-inter ${backgroundColor} w-60 h-44`}
            
          >
            <div className="flex justify-between">
              <p className="text-xs font-semibold">{cardBrand}</p>
              {/* SVG for card brand */}
              <svg
                width="20"
                height="28"
                viewBox="0 0 25 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.800025 11.864C1.20002 12.364 1.50002 12.964 1.70002 13.564C1.90002 14.164 2.00002 14.864 2.00002 15.564C2.00002 16.264 1.90002 16.964 1.70002 17.564C1.50002 18.164 1.20002 18.764 0.800025 19.264C0.300025 19.964 0.400024 20.964 1.10002 21.464C1.80002 21.964 2.80002 21.864 3.30002 21.164C3.90002 20.364 4.30002 19.564 4.70002 18.564C5.10002 17.564 5.20002 16.564 5.20002 15.564C5.20002 14.564 5.00002 13.564 4.70002 12.564C4.40002 11.664 3.90002 10.764 3.30002 9.96397C2.80002 9.26397 1.80002 9.16397 1.10002 9.66397C0.400024 10.164 0.300025 11.164 0.800025 11.864Z"
                  fill="#FAFAFA"
                />
                <path
                  d="M6.30002 8.96396C7.50002 10.864 8.20002 13.164 8.20002 15.564C8.20002 17.964 7.50002 20.264 6.30002 22.164C5.80002 22.864 6.10002 23.864 6.80002 24.364C7.60002 24.864 8.50002 24.564 9.00002 23.864C10.5 21.464 11.4 18.664 11.4 15.564C11.4 12.564 10.5 9.66396 9.00002 7.26396C8.50002 6.56396 7.50002 6.26396 6.80002 6.76396C6.10002 7.26396 5.80002 8.16396 6.30002 8.96396Z"
                  fill="#FAFAFA"
                />
                <path
                  d="M12.1 5.96396C13.8 8.76396 14.7 12.064 14.7 15.564C14.7 19.064 13.7 22.364 12.1 25.164C11.7 25.964 11.9 26.864 12.7 27.364C13.5 27.764 14.4 27.564 14.9 26.764C16.9 23.464 18 19.664 18 15.564C18 11.464 16.9 7.66397 14.9 4.36397C14.5 3.56397 13.5 3.36396 12.7 3.76396C11.9 4.26396 11.7 5.16396 12.1 5.96396Z"
                  fill="#FAFAFA"
                />
                <path
                  d="M17.9 2.96396C20 6.66397 21.3 10.964 21.3 15.564C21.3 20.164 20.1 24.464 17.9 28.164C17.5 28.964 17.7 29.864 18.5 30.364C19.3 30.764 20.2 30.564 20.7 29.764C23.1 25.564 24.5 20.764 24.5 15.564C24.5 10.364 23.1 5.56396 20.7 1.36396C20.3 0.563965 19.3 0.363965 18.5 0.763965C17.7 1.16396 17.5 2.16396 17.9 2.96396Z"
                  fill="#FAFAFA"
                />
              </svg>
            </div>
            <p className="mt-4 text-lg font-bold font-courier whitespace-nowrap">
              {cardNumber}
            </p>
            <div className="flex mt-4 gap-3 items-center justify-between">
              <div className="flex flex-col">
                <span className="text-xs">Card Holder</span>
                <span className="text-xs font-bold">{name}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs">Expiry Date</span>
                <span className="text-xs font-bold">{expiryDate}</span>
              </div>
              {/* SVG for expiry date */}
              <svg
                width="50"
                height="38"
                viewBox="0 0 76 51"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_b_621_348)">
                  <ellipse
                    cx="26.806"
                    cy="25.1908"
                    rx="18.6567"
                    ry="18.6567"
                    fill="#FAFAFA"
                    fillOpacity="0.3"
                  />
                </g>
                <g filter="url(#filter1_b_621_348)">
                  <path
                    d="M68.597 25.1908C68.597 35.4946 60.2441 43.8475 49.9403 43.8475C39.6365 43.8475 31.2836 35.4946 31.2836 25.1908C31.2836 14.887 39.6365 6.53406 49.9403 6.53406C60.2441 6.53406 68.597 14.887 68.597 25.1908Z"
                    fill="#FAFAFA"
                    fillOpacity="0.7"
                  />
                </g>
                <g filter="url(#filter2_b_621_348)">
                  <path
                    d="M38.3733 10.5518C34.0547 13.9688 31.2838 19.2562 31.2838 25.1908C31.2838 31.1254 34.0547 36.4128 38.3733 39.8299C42.6919 36.4128 45.4629 31.1254 45.4629 25.1908C45.4629 19.2562 42.6919 13.9688 38.3733 10.5518Z"
                    fill="#FAFAFA"
                    fillOpacity="0.6"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_b_621_348"
                    x="-41.8507"
                    y="-43.4659"
                    width="137.313"
                    height="137.313"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="25" />
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur_621_348"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur_621_348"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter1_b_621_348"
                    x="-18.7164"
                    y="-43.4659"
                    width="137.313"
                    height="137.313"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="25" />
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur_621_348"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur_621_348"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter2_b_621_348"
                    x="-18.7162"
                    y="-39.4482"
                    width="114.179"
                    height="129.278"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="25" />
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur_621_348"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur_621_348"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        );
};

export default CreditCard;
      

