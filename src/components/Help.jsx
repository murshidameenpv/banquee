const Help = () => {
  return (
      <div className="flex md:flex-row flex-col items-center justify-center w-full px-5 py-5">
        <div className="w-1/2 ml-20">
          <div className="flex flex-col items-start gap-4">
            <h1 className="font-sans text-4xl" id="support">Need Help?</h1>
            <div className="flex gap-3">
              <div className="flex items-center justify-center bg-[#E8F2EE] rounded-full w-6 h-6">
                {" "}
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 28 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24.5 19.2211V23.3465C24.5001 23.6418 24.3882 23.9263 24.1869 24.1423C23.9855 24.3584 23.7096 24.4901 23.415 24.5108C22.9052 24.5458 22.4887 24.5645 22.1667 24.5645C11.8568 24.5645 3.5 16.2076 3.5 5.89779C3.5 5.57579 3.5175 5.15929 3.55367 4.64945C3.57434 4.3548 3.70601 4.07897 3.9221 3.8776C4.1382 3.67623 4.42263 3.56432 4.718 3.56445H8.84333C8.98805 3.56431 9.12765 3.61796 9.23502 3.71498C9.34239 3.812 9.40986 3.94547 9.42433 4.08945C9.45117 4.35779 9.47567 4.57129 9.499 4.73345C9.73086 6.35153 10.206 7.92526 10.9083 9.40129C11.0192 9.63462 10.9468 9.91345 10.7368 10.0628L8.21917 11.8618C9.75853 15.4486 12.617 18.3071 16.2038 19.8465L18.0005 17.3335C18.0739 17.2308 18.1811 17.1571 18.3032 17.1254C18.4254 17.0936 18.5549 17.1057 18.669 17.1596C20.1449 17.8606 21.7182 18.3346 23.3357 18.5655C23.4978 18.5888 23.7113 18.6145 23.9773 18.6401C24.1211 18.6549 24.2543 18.7225 24.3511 18.8298C24.4479 18.9371 24.5013 19.0766 24.5012 19.2211H24.5Z"
                    fill="#5BB5A2"
                  />
                </svg>
              </div>
              <div className="flex flex-col text-sm gap-2">
                <p>+49 3932 303 4494</p>
                <p>Support Hotline</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex items-center justify-center bg-[#E8F2EE] rounded-full w-6 h-6">
                {" "}
                <svg
                  width="16"
                  height="17"
                  viewBox="0 0 28 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.7833 3.56453C18.6269 4.33445 18.6269 5.12795 18.7833 5.89787H5.26281L14.0711 13.6702L19.9616 8.39687C20.4586 9.0117 21.0793 9.52387 21.7851 9.89604L14.084 16.7922L4.66665 8.4832V22.2312H23.3333V10.4479C24.1032 10.6043 24.8967 10.6043 25.6666 10.4479V23.3979C25.6666 23.7073 25.5437 24.004 25.3249 24.2228C25.1061 24.4416 24.8094 24.5645 24.5 24.5645H3.49998C3.19056 24.5645 2.89381 24.4416 2.67502 24.2228C2.45623 24.004 2.33331 23.7073 2.33331 23.3979V4.7312C2.33331 4.42178 2.45623 4.12504 2.67502 3.90624C2.89381 3.68745 3.19056 3.56453 3.49998 3.56453H18.7833ZM24.5 8.2312C24.0404 8.2312 23.5852 8.14067 23.1606 7.96478C22.7359 7.78889 22.3501 7.53108 22.0251 7.20608C21.7001 6.88107 21.4423 6.49523 21.2664 6.07059C21.0905 5.64595 21 5.19083 21 4.7312C21 4.27157 21.0905 3.81645 21.2664 3.39181C21.4423 2.96717 21.7001 2.58133 22.0251 2.25633C22.3501 1.93132 22.7359 1.67351 23.1606 1.49762C23.5852 1.32173 24.0404 1.2312 24.5 1.2312C25.4282 1.2312 26.3185 1.59995 26.9749 2.25633C27.6312 2.9127 28 3.80294 28 4.7312C28 5.65946 27.6312 6.5497 26.9749 7.20608C26.3185 7.86245 25.4282 8.2312 24.5 8.2312Z"
                    fill="#5BB5A2"
                  />
                </svg>
              </div>
              <div className="flex flex-col text-sm gap-3">
                <p>help@banquee.com</p>
                <p>Support Email</p>
              </div>
            </div>
            <button className="text-primary px-3 py-2 flex items-center text-xs justify-center gap-2">
              Support
              <svg
                width="13"
                height="14"
                viewBox="0 0 18 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.2284 7.00795L7.79189 1.6874L9.225 0.284857L17.1081 7.99985L9.225 15.7148L7.79189 14.3123L13.2284 8.99175H0.891893L0.891893 7.00795H13.2284Z"
                  fill="#5BB5A2"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="w-1/2">
          <div className="collapse collapse-plus rounded-none border-b-2">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title text-sm font-medium">
              How do i open a bank account?
            </div>
            <div className="collapse-content">
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                et deserunt cupiditate nam, adipisci aliquid, recusandae non
                accusantium quasi quidem eveniet facilis iste maiores optio
                voluptate omnis officiis necessitatibus quisquam?
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus rounded-none border-b-2">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-sm font-medium">
              How to change my account limits?
            </div>
            <div className="collapse-content">
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut,
                velit? Tempore assumenda nihil esse perferendis est quae, eaque
                magnam sunt impedit corporis? Eveniet, ducimus similique. Hic
                nemo suscipit numquam ex.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus rounded-none border-b-2">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-sm font-medium">
              How does bankoo premium works?
            </div>
            <div className="collapse-content">
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                magnam sapiente, a atque laboriosam iure tenetur eligendi, modi
                reiciendis dolorem error incidunt, eaque nesciunt odit illum.
                Ut, ullam voluptas. Minus.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus rounded-none border-b-2">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-sm font-medium">
              Can i have 2 accounts?
            </div>
            <div className="collapse-content">
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                magnam sapiente, a atque laboriosam iure tenetur eligendi, modi
                reiciendis dolorem error incidunt, eaque nesciunt odit illum.
                Ut, ullam voluptas. Minus.
              </p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Help;
