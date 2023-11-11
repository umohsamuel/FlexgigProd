import imgref from './imgref';

type BackButtonProps = {
  HandleClick?: () => void;
};

function BackButton({ HandleClick }: BackButtonProps) {
  return (
    <button onClick={HandleClick}>
      <img
        src={imgref.chevron}
        className="absolute top-2 md:top-0  left-8 h-[20px] md:h-[30px]"
      />
    </button>
  );
}

export default BackButton