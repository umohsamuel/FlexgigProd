
const Note = () => {
  return (
    <>
      {" "}
      <div className="w-screen max-w-[300px] border-2 border-[#CACFDC] rounded-lg p-4 flex flex-col bg-[#FAFBFFB2] font-medium text-[#292B30] h-[320px]">
        <h3 className="text-[#05297D] font-medium text-lg">Note</h3>
        <div>
          <p>This will be used to make payment for your work</p>
          <p className="py-4">
            You’ll make payment while posting your job. This is reversible if
            you are not satisfied with the freelancer’s work.
          </p>
          <p>
            Check out our{" "}
            <span className="text-[#FF7A60] underline">
              payment terms and conditions{" "}
            </span>{" "}
            to know better
          </p>
        </div>
      </div>
    </>
  );
};

export default Note;
