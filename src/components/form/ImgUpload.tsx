const ImgUpload = () => {
    return ( <div className="flex justify-center items-center pt-[2.9375rem] pb-[2.875rem] rounded-lg border border-BorderColor bg-bgColor">
    <div className="flex flex-col justify-center items-center">
      
      <svg
        width={37}
        height={36}
        viewBox="0 0 37 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24.4993 24.267C27.4939 23.9697 29.8327 21.4432 29.8327 18.3704C29.8327 14.8065 26.5596 12.0033 23.059 12.5046C23.0533 12.5054 23.0477 12.5025 23.0451 12.4974C21.7062 9.83036 18.9462 8 15.7586 8C11.5123 8 8.02471 11.2481 7.64478 15.3953C7.64415 15.4022 7.6383 15.4075 7.63138 15.4075C5.2021 15.4054 3.16602 17.4141 3.16602 19.8519C3.16602 22.3064 5.15586 24.2963 7.61046 24.2963H8.49935"
          stroke="#05297D"
          strokeWidth={2}
          strokeLinecap="round"
        />
        <path
          d="M13.166 22.0003L16.0279 19.1384C16.2883 18.878 16.7104 18.878 16.9707 19.1384L19.8326 22.0003"
          stroke="#05297D"
          strokeWidth={2}
          strokeLinecap="round"
        />
        <path
          d="M16.498 20L16.498 28"
          stroke="#05297D"
          strokeWidth={2}
          strokeLinecap="round"
        />
                </svg>
                <div className="text-[#b2b4b4] font-['Poppins'] text-sm leading-[normal]">
        <span className="text-SecondaryBase underline">Select a file</span> or Drag and Drop
      </div>
    </div>
  </div>
);
}
 
export default ImgUpload;