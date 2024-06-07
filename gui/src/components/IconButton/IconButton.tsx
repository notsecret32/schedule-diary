import './IconButton.scss';

interface IIconButtonProps {
  icon: JSX.Element;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const IconButton = ({ icon, onClick }: IIconButtonProps) => {
  return <button onClick={(e) => onClick(e)}>{icon}</button>;
};
