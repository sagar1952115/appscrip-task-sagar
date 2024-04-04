import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-black text-white p-3 lg:p-12     lg:px-10">
      <div className="max-w-[1700px] flex flex-col lg:flex-row text-white m-auto lg:py-5 border-b  border-white">
        <div className="lg:gap-10 gap-5 border-b  lg:border-none py-5 border-white  lg:w-3/5 flex flex-col">
          <div className="flex flex-col gap-2">
            <div className="uppercase font-semibold text-xl">
              Be the first to know
            </div>
            <div className="hidden lg:block ">
              Sign up for updates from metta muse.
            </div>
            <div className=" lg:hidden text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. this is simply dummy text.
            </div>
          </div>
          <div className="gap-4 flex lg:w-3/4">
            <input
              placeholder="Enter your e-mail"
              className="p-3 w-full outline-none "
              type="text"
            />
            <button className="text-slate-600 font-semibold border px-4 lg:px-8 w-max p-3 outline-none rounded border-1 border-slate-1">
              SUBSCRIBE
            </button>
          </div>
        </div>
        <div className="lg:w-2/5 w-full flex flex-col lg:gap-6">
          <div className="flex flex-col gap-2 border-b lg:border-none border-white py-5">
            <div className="uppercase font-semibold text-xl">Contact </div>
            <div className="flex lg:flex-col items-center text-sm lg:items-start gap-2">
              <div className="text-sm">+44 221 133 5360</div>
              <div className="lg:hidden">
                <svg
                  width="6"
                  height="6"
                  viewBox="0 0 6 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 0L4.48492 1.51508L6 3L4.48492 4.48492L3 6L1.51508 4.48492L0 3L1.51508 1.51508L3 0Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div>customercare@mettamuse.com</div>
            </div>
          </div>
          <div className="flex flex-col gap-2 py-5 border-b lg:border-none border-white">
            <div className="uppercase font-semibold text-xl">Currency</div>

            <div className="flex items-center gap-1">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_10691_289)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 0H45.6005V1.84617H0V0ZM0 3.69234H45.6005V5.53852H0V3.69234ZM0 7.38469H45.6005V9.23086H0V7.38469ZM0 11.077H45.6005V12.9232H0V11.077ZM0 14.7694H45.6005V16.6155H0V14.7694ZM0 18.4617H45.6005V20.3079H0V18.4617ZM0 22.1541H45.6005V24.0002H0V22.1541Z"
                    fill="#BD3D44"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 1.8457H45.6005V3.69187H0V1.8457ZM0 5.53805H45.6005V7.38422H0V5.53805ZM0 9.23039H45.6005V11.0766H0V9.23039ZM0 12.9227H45.6005V14.7689H0V12.9227ZM0 16.6151H45.6005V18.4613H0V16.6151ZM0 20.3074H45.6005V22.1536H0V20.3074Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 0H18.2402V12.9232H0V0Z"
                    fill="#192F5D"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.51319 0.553711L1.69778 1.0706H2.21472L1.79008 1.38448L1.95625 1.88295L1.51319 1.56907L1.10702 1.88295L1.27319 1.38448L0.830078 1.0706H1.384L1.51319 0.553711ZM4.55936 0.553711L4.72553 1.0706H5.26089L4.81783 1.38448L5.00242 1.88295L4.55936 1.56907L4.1163 1.88295L4.30089 1.38448L3.85783 1.0706H4.39319L4.55936 0.553711ZM7.60553 0.553711L7.7717 1.0706H8.30706L7.864 1.38448L8.04864 1.88295L7.60553 1.56907L7.16247 1.88295L7.34706 1.38448L6.904 1.0706H7.43941L7.60553 0.553711ZM10.6333 0.553711L10.8179 1.0706H11.3348L10.9102 1.38448L11.0763 1.88295L10.6333 1.56907L10.2086 1.88295L10.3748 1.38448L9.9317 1.0706H10.4856L10.6333 0.553711ZM13.6795 0.553711L13.8456 1.0706H14.381L13.9379 1.38448L14.1225 1.88295L13.661 1.56907L13.2363 1.88295L13.4025 1.38448L12.9595 1.0706H13.4948L13.6795 0.553711ZM16.7256 0.553711L16.8918 1.0706H17.4272L16.9841 1.38448L17.1687 1.88295L16.7256 1.56907L16.2826 1.88295L16.4672 1.38448L16.0241 1.0706H16.5595L16.7256 0.553711ZM3.04548 1.84601L3.21166 2.36295H3.74706L3.30395 2.67677L3.48859 3.17524L3.04548 2.86141L2.60242 3.17524L2.78702 2.67677L2.34395 2.36295H2.87936L3.04548 1.84601ZM6.07323 1.84601L6.25783 2.36295H6.77477L6.35012 2.67677L6.5163 3.17524L6.07323 2.86141L5.64859 3.17524L5.81477 2.67677L5.37166 2.36295H5.92553L6.07323 1.84601ZM9.11941 1.84601L9.28558 2.36295H9.82094L9.37787 2.67677L9.56247 3.17524L9.11941 2.86141L8.6763 3.17524L8.86094 2.67677L8.41787 2.36295H8.95323L9.11941 1.84601ZM12.1656 1.84601L12.3318 2.36295H12.8671L12.424 2.67677L12.6087 3.17524L12.1656 2.86141L11.7225 3.17524L11.9071 2.67677L11.464 2.36295H11.9995L12.1656 1.84601ZM15.1933 1.84601L15.3779 2.36295H15.8764L15.4518 2.67677L15.6179 3.17524L15.1749 2.86141L14.7502 3.17524L14.9164 2.67677L14.4733 2.36295H15.0272L15.1933 1.84601ZM1.53161 3.13835L1.67931 3.65524H2.23319L1.79008 3.96912L1.95625 4.46759L1.51319 4.15371L1.10702 4.46759L1.27319 3.96912L0.830078 3.65524H1.384L1.53161 3.13835ZM4.55936 3.13835L4.72553 3.65524H5.26089L4.8363 3.96912L5.00242 4.46759L4.55936 4.15371L4.13472 4.46759L4.30089 3.96912L3.85783 3.65524H4.39319L4.55936 3.13835ZM7.60553 3.13835L7.7717 3.65524H8.30706L7.864 3.96912L8.04864 4.46759L7.60553 4.15371L7.16247 4.46759L7.34706 3.96912L6.904 3.65524H7.43941L7.60553 3.13835ZM10.6333 3.13835L10.8179 3.65524H11.3348L10.9102 3.96912L11.0763 4.46759L10.6333 4.15371L10.2086 4.46759L10.3748 3.96912L9.9317 3.65524H10.4856L10.6333 3.13835ZM13.6795 3.13835L13.8456 3.65524H14.381L13.9564 3.96912L14.1225 4.46759L13.6795 4.15371L13.2548 4.46759L13.421 3.96912L12.9779 3.65524H13.5133L13.6795 3.13835ZM16.7256 3.13835L16.8918 3.65524H17.4272L16.9841 3.96912L17.1687 4.46759L16.7256 4.15371L16.2826 4.46759L16.4672 3.96912L16.0241 3.65524H16.5595L16.7256 3.13835ZM3.04548 4.4306L3.21166 4.94754H3.74706L3.30395 5.26137L3.48859 5.75984L3.04548 5.44601L2.60242 5.75984L2.78702 5.26137L2.34395 4.94754H2.87936L3.04548 4.4306ZM6.07323 4.4306L6.25783 4.94754H6.77477L6.35012 5.26137L6.5163 5.75984L6.07323 5.44601L5.64859 5.75984L5.81477 5.26137L5.37166 4.94754H5.92553L6.07323 4.4306ZM9.11941 4.4306L9.28558 4.94754H9.82094L9.39634 5.26137L9.56247 5.75984L9.11941 5.44601L8.69477 5.75984L8.86094 5.26137L8.41787 4.94754H8.95323L9.11941 4.4306ZM12.1656 4.4306L12.3318 4.94754H12.8671L12.424 5.26137L12.6087 5.75988L12.1656 5.44605L11.7225 5.75988L11.9071 5.26141L11.464 4.94759H11.9995L12.1656 4.4306ZM15.1933 4.4306L15.3779 4.94754H15.8764L15.4518 5.26137L15.6179 5.75984L15.1749 5.44601L14.7502 5.75984L14.9164 5.26137L14.4733 4.94754H15.0272L15.1933 4.4306ZM1.53161 5.72295L1.67931 6.23984H2.23319L1.79008 6.55371L1.95625 7.05218L1.51319 6.73831L1.10702 7.05218L1.27319 6.55371L0.830078 6.23984H1.384L1.53161 5.72295ZM4.55936 5.72295L4.72553 6.23984H5.26089L4.8363 6.55371L5.00242 7.05218L4.55936 6.73831L4.13472 7.05218L4.30089 6.55371L3.85783 6.23984H4.39319L4.55936 5.72295ZM7.60553 5.72295L7.7717 6.23984H8.30706L7.864 6.55371L8.04864 7.05218L7.60553 6.73831L7.16247 7.05218L7.34706 6.55371L6.904 6.23984H7.43941L7.60553 5.72295ZM10.6333 5.72295L10.8179 6.23984H11.3348L10.9102 6.55371L11.0763 7.05218L10.6333 6.73831L10.2086 7.05218L10.3748 6.55371L9.9317 6.23984H10.4856L10.6333 5.72295ZM13.6795 5.72295L13.8456 6.23984H14.381L13.9564 6.55371L14.1225 7.05218L13.6795 6.73831L13.2548 7.05218L13.421 6.55371L12.9779 6.23984H13.5133L13.6795 5.72295ZM16.7256 5.72295L16.8918 6.23984H17.4272L16.9841 6.55371L17.1687 7.05218L16.7256 6.73831L16.2826 7.05218L16.4672 6.55371L16.0241 6.23984H16.5595L16.7256 5.72295ZM3.04548 7.01524L3.21166 7.53218H3.74706L3.30395 7.84601L3.48859 8.34448L3.04548 8.03065L2.60242 8.34448L2.78702 7.84601L2.34395 7.53218H2.87936L3.04548 7.01524ZM6.07323 7.01524L6.25783 7.53218H6.77477L6.35012 7.84601L6.5163 8.34448L6.07323 8.03065L5.64859 8.34448L5.81477 7.84601L5.37166 7.53218H5.92553L6.07323 7.01524ZM9.11941 7.01524L9.28558 7.53218H9.82094L9.39634 7.84601L9.56247 8.34448L9.11941 8.03065L8.69477 8.34448L8.86094 7.84601L8.41787 7.53218H8.95323L9.11941 7.01524ZM12.1656 7.01524L12.3318 7.53218H12.8671L12.424 7.84601L12.6087 8.34452L12.1656 8.0307L11.7225 8.34452L11.9071 7.84606L11.464 7.53223H11.9995L12.1656 7.01524ZM15.1933 7.01524L15.3779 7.53218H15.8764L15.4518 7.84601L15.6179 8.34448L15.1749 8.03065L14.7502 8.34448L14.9164 7.84601L14.4733 7.53218H15.0272L15.1933 7.01524ZM1.53161 8.30759L1.67931 8.82448H2.23319L1.79008 9.13835L1.95625 9.63682L1.51319 9.32295L1.10702 9.63682L1.27319 9.13835L0.830078 8.82448H1.384L1.53161 8.30759ZM4.55936 8.30759L4.72553 8.82448H5.26089L4.8363 9.13835L5.00242 9.63682L4.55936 9.32295L4.13472 9.63682L4.30089 9.13835L3.85783 8.82448H4.39319L4.55936 8.30759ZM7.60553 8.30759L7.7717 8.82448H8.30706L7.864 9.13835L8.04864 9.63682L7.60553 9.32295L7.16247 9.63682L7.34706 9.13835L6.904 8.82448H7.43941L7.60553 8.30759ZM10.6333 8.30759L10.8179 8.82448H11.3348L10.9102 9.13835L11.0763 9.63682L10.6333 9.32295L10.2086 9.63682L10.3748 9.13835L9.9317 8.82448H10.4856L10.6333 8.30759ZM13.6795 8.30759L13.8456 8.82448H14.381L13.9564 9.13835L14.1225 9.63682L13.6795 9.32295L13.2548 9.63682L13.421 9.13835L12.9779 8.82448H13.5133L13.6795 8.30759ZM16.7256 8.30759L16.8918 8.82448H17.4272L16.9841 9.13835L17.1687 9.63682L16.7256 9.32295L16.2826 9.63682L16.4672 9.13835L16.0241 8.82448H16.5595L16.7256 8.30759ZM3.04548 9.59993L3.21166 10.1169H3.74706L3.30395 10.4307L3.48859 10.9292L3.04548 10.6153L2.60242 10.9292L2.78702 10.4307L2.34395 10.1169H2.87936L3.04548 9.59993ZM6.07323 9.59993L6.25783 10.1169H6.77477L6.35012 10.4307L6.5163 10.9292L6.07323 10.6153L5.64859 10.9292L5.81477 10.4307L5.37166 10.1169H5.92553L6.07323 9.59993ZM9.11941 9.59993L9.28558 10.1169H9.82094L9.39634 10.4307L9.56247 10.9292L9.11941 10.6153L8.69477 10.9292L8.86094 10.4307L8.41787 10.1169H8.95323L9.11941 9.59993ZM12.1656 9.59993L12.3318 10.1169H12.8671L12.424 10.4307L12.6087 10.9292L12.1656 10.6154L11.7225 10.9292L11.9071 10.4307L11.464 10.1169H11.9995L12.1656 9.59993ZM15.1933 9.59993L15.3779 10.1169H15.8764L15.4518 10.4307L15.6179 10.9292L15.1749 10.6153L14.7502 10.9292L14.9164 10.4307L14.4733 10.1169H15.0272L15.1933 9.59993ZM1.53161 10.8923L1.67931 11.4092H2.23319L1.79008 11.723L1.95625 12.2215L1.51319 11.9076L1.10702 12.2215L1.27319 11.723L0.830078 11.4092H1.384L1.53161 10.8923ZM4.55936 10.8923L4.72553 11.4092H5.26089L4.8363 11.723L5.00242 12.2215L4.55936 11.9076L4.13472 12.2215L4.30089 11.723L3.85783 11.4092H4.39319L4.55936 10.8923ZM7.60553 10.8923L7.7717 11.4092H8.30706L7.864 11.723L8.04864 12.2215L7.60553 11.9076L7.16247 12.2215L7.34706 11.723L6.904 11.4092H7.43941L7.60553 10.8923ZM10.6333 10.8923L10.8179 11.4092H11.3348L10.9102 11.723L11.0763 12.2215L10.6333 11.9076L10.2086 12.2215L10.3748 11.723L9.9317 11.4092H10.4856L10.6333 10.8923ZM13.6795 10.8923L13.8456 11.4092H14.381L13.9564 11.723L14.1225 12.2215L13.6795 11.9076L13.2548 12.2215L13.421 11.723L12.9779 11.4092H13.5133L13.6795 10.8923ZM16.7256 10.8923L16.8918 11.4092H17.4272L16.9841 11.723L17.1687 12.2215L16.7256 11.9076L16.2826 12.2215L16.4672 11.723L16.0241 11.4092H16.5595L16.7256 10.8923Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_10691_289">
                    <rect width="24" height="24" rx="12" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <svg
                width="6"
                height="6"
                viewBox="0 0 6 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 0L4.48492 1.51508L6 3L4.48492 4.48492L3 6L1.51508 4.48492L0 3L1.51508 1.51508L3 0Z"
                  fill="white"
                />
              </svg>
              <div>USD</div>
            </div>
            <div className="hidden lg:flex text-sm tracking-tighter text-[12px]">
              Transactions will be completed in Euros and a currency reference
              is available on hover.
            </div>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------------ */}
      <div className="lg:py-6 flex flex-col lg:flex-row">
        <div className="w-full flex flex-col lg:flex-row lg:w-3/5 lg:pr-40 justify-between">
          <div className="py-5 border-b border-white gap-4  flex flex-col lg:border-none">
            <div className="flex justify-between items-center">
              <div className="font-semibold text-xl">mettā muse</div>
              <Image
                alt="Down arrow"
                width={15}
                height={15}
                className="invert lg:hidden"
                src="/img/icons/arrow.svg"
              />
            </div>
            <div className="h-0 hidden lg:flex lg:h-max overflow-hidden gap-2  flex-col">
              <div>About Us</div>
              <div>Stories</div>
              <div>Artisans</div>
              <div>Boutiques</div>
              <div>Contact Us</div>
              <div>EU Compliances Docs</div>
            </div>
          </div>
          <div className="py-5 border-b   gap-4 flex flex-col border-white lg:border-none">
            {" "}
            <div className="flex justify-between items-center">
              <div className="font-semibold text-xl">QUICK LINKS</div>
              <Image
                alt="Down arrow"
                width={15}
                height={15}
                className="invert lg:hidden"
                src="/img/icons/arrow.svg"
              />
            </div>
            <div className="h-0 hidden lg:flex lg:h-max gap-2  flex-col overflow-hidden">
              <div>Orders & Shipping</div>
              <div>Join/Login as a Seller</div>
              <div>Payment & Pricing</div>
              <div>Return & Refunds</div>
              <div>FAQs</div>
              <div>Privacy Policy</div>
              <div>Terms & Conditions</div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-2/5 gap-5">
          <div className="py-5 border-b border-white lg:border-none text-xl flex flex-col gap-4 font-semibold uppercase">
            <div className="flex justify-between items-center">
              <div className="font-semibold text-xl">Follow Us</div>
              <Image
                alt="White down arrow"
                width={15}
                height={15}
                className="invert lg:hidden"
                src="/img/icons/arrow.svg"
              />
            </div>
            <div className="lg:flex gap-3 lg:h-max hidden  h-0 overflow-hidden">
              <svg
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="1"
                  y="1"
                  width="32"
                  height="32"
                  rx="16"
                  fill="black"
                  stroke="white"
                  strokeWidth="1.2"
                />
                <g clipPath="url(#clip0_10691_242)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.7017 9.048C12.8503 9.08686 12.2686 9.22171 11.7589 9.42057C11.2331 9.624 10.7874 9.89829 10.3417 10.3429C9.89829 10.7874 9.624 11.2343 9.42057 11.76C9.22171 12.2686 9.08686 12.8503 9.048 13.7017C9.00914 14.5543 9 14.8274 9 17C9 19.1726 9.00914 19.4457 9.048 20.2983C9.08686 21.1497 9.22171 21.7314 9.42057 22.2411C9.624 22.7669 9.89829 23.2126 10.3429 23.6583C10.7874 24.1017 11.2343 24.376 11.76 24.5806C12.2686 24.7783 12.8503 24.912 13.7017 24.952C14.5554 24.9909 14.8274 25 17 25C19.1726 25 19.4457 24.9909 20.2983 24.952C21.1497 24.9131 21.7314 24.7783 22.2411 24.5806C22.7669 24.3749 23.2126 24.1017 23.6583 23.6571C24.1017 23.2126 24.376 22.7657 24.5806 22.24C24.7783 21.7314 24.912 21.1497 24.952 20.2983C24.9909 19.4446 25 19.1726 25 17C25 14.8274 24.9909 14.5543 24.952 13.7017C24.9131 12.8503 24.7783 12.2686 24.5806 11.7589C24.3795 11.2249 24.0644 10.7413 23.6571 10.3417C23.2126 9.89829 22.7657 9.624 22.24 9.42057C21.7314 9.22171 21.1497 9.08686 20.2983 9.048C19.4457 9.00914 19.1726 9 17 9C14.8274 9 14.5543 9.00914 13.7017 9.048ZM12.8914 17C12.8914 18.0897 13.3243 19.1347 14.0948 19.9052C14.8653 20.6757 15.9103 21.1086 17 21.1086C18.0897 21.1086 19.1347 20.6757 19.9052 19.9052C20.6757 19.1347 21.1086 18.0897 21.1086 17C21.1086 15.9103 20.6757 14.8653 19.9052 14.0948C19.1347 13.3243 18.0897 12.8914 17 12.8914C15.9103 12.8914 14.8653 13.3243 14.0948 14.0948C13.3243 14.8653 12.8914 15.9103 12.8914 17ZM17 19.6663C16.2929 19.6663 15.6147 19.3854 15.1147 18.8853C14.6146 18.3853 14.3337 17.7071 14.3337 17C14.3337 16.2929 14.6146 15.6147 15.1147 15.1147C15.6147 14.6146 16.2929 14.3337 17 14.3337C17.7071 14.3337 18.3853 14.6146 18.8853 15.1147C19.3854 15.6147 19.6663 16.2929 19.6663 17C19.6663 17.7071 19.3854 18.3853 18.8853 18.8853C18.3853 19.3854 17.7071 19.6663 17 19.6663ZM22.6 12.44C22.6 12.5661 22.5752 12.6909 22.5269 12.8074C22.4787 12.9238 22.408 13.0297 22.3188 13.1188C22.2297 13.208 22.1238 13.2787 22.0074 13.3269C21.8909 13.3752 21.7661 13.4 21.64 13.4C21.5139 13.4 21.3891 13.3752 21.2726 13.3269C21.1562 13.2787 21.0503 13.208 20.9612 13.1188C20.872 13.0297 20.8013 12.9238 20.7531 12.8074C20.7048 12.6909 20.68 12.5661 20.68 12.44C20.68 12.1854 20.7811 11.9412 20.9612 11.7612C21.1412 11.5811 21.3854 11.48 21.64 11.48C21.8946 11.48 22.1388 11.5811 22.3188 11.7612C22.4989 11.9412 22.6 12.1854 22.6 12.44Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_10691_242">
                    <rect
                      width="32"
                      height="32"
                      fill="white"
                      transform="translate(1 1)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <svg
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.999756"
                  y="1"
                  width="32"
                  height="32"
                  rx="16"
                  stroke="white"
                  strokeWidth="1.2"
                />
                <path
                  d="M24 8C24.5304 8 25.0391 8.21071 25.4142 8.58579C25.7893 8.96086 26 9.46957 26 10V24C26 24.5304 25.7893 25.0391 25.4142 25.4142C25.0391 25.7893 24.5304 26 24 26H10C9.46957 26 8.96086 25.7893 8.58579 25.4142C8.21071 25.0391 8 24.5304 8 24V10C8 9.46957 8.21071 8.96086 8.58579 8.58579C8.96086 8.21071 9.46957 8 10 8H24ZM23.5 23.5V18.2C23.5 17.3354 23.1565 16.5062 22.5452 15.8948C21.9338 15.2835 21.1046 14.94 20.24 14.94C19.39 14.94 18.4 15.46 17.92 16.24V15.13H15.13V23.5H17.92V18.57C17.92 17.8 18.54 17.17 19.31 17.17C19.6813 17.17 20.0374 17.3175 20.2999 17.5801C20.5625 17.8426 20.71 18.1987 20.71 18.57V23.5H23.5ZM11.88 13.56C12.3256 13.56 12.7529 13.383 13.0679 13.0679C13.383 12.7529 13.56 12.3256 13.56 11.88C13.56 10.95 12.81 10.19 11.88 10.19C11.4318 10.19 11.0019 10.3681 10.685 10.685C10.3681 11.0019 10.19 11.4318 10.19 11.88C10.19 12.81 10.95 13.56 11.88 13.56ZM13.27 23.5V15.13H10.5V23.5H13.27Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
          <div className="py-5 flex flex-col gap-5 font-semibold text-xl">
            <div>mettā muse ACCEPTS</div>
            <div className="flex gap-1">
              <div className="bg-white w-max flex items-center p-1 px-3 rounded-md">
                <Image
                  src="/img/logo/gpay.svg"
                  alt="Google pay logo"
                  width={40}
                  height={40}
                />
              </div>
              <div className="bg-white w-max flex items-center p-1 px-3 rounded-md">
                <Image
                  src="/img/logo/mastercard.svg"
                  alt="Mastercard logo"
                  width={40}
                  height={40}
                />
              </div>
              <div className="bg-white w-max p-1 flex items-center px-3 rounded-md">
                <Image
                  src="/img/logo/paypal.svg"
                  alt="Paypal logo"
                  width={20}
                  height={20}
                />
              </div>
              <div className=" w-max flex items-center rounded-md">
                <Image
                  src="/img/logo/amex.svg"
                  alt="Amex logo"
                  width={50}
                  height={40}
                />
              </div>
              <div className="bg-white w-max flex items-center p-1 px-3 rounded-md">
                <Image
                  src="/img/logo/apay.svg"
                  alt="Apple pay logo"
                  width={40}
                  height={40}
                />
              </div>
              <div className=" w-max flex items-center rounded-md">
                <Image
                  src="/img/logo/opay.svg"
                  alt="Opay logo"
                  width={50}
                  height={40}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center text-sm lg:-mb-10">
        Copyright © 2023 mettamuse. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;