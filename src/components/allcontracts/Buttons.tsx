import { FC } from 'react';

type ButtonProps = {
  text: string;
};

const Button: FC<ButtonProps> = ({ text }) => {
  return (
    <section className="flex justify-evenly md:justify-between lg:justify-between">
      <button className="rounded-full bg-[#042268] py-1 px-2 lg:px-2 font-medium text-white text-center text-sm"
      style={{ whiteSpace: 'nowrap' }}>
        {text}
      </button>
    </section>
  );
};

export default Button;
