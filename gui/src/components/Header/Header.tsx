import { IoFilterOutline } from 'react-icons/io5';
import { IconButton } from '../IconButton/IconButton';
import './Header.scss';

export const Header = () => {
  const onButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log('Callback');
  };

  return (
    <header>
      <div>Дневник с расписанием</div>
      <IconButton
        icon={<IoFilterOutline size={24} />}
        onClick={(e) => onButtonClick(e)}
      />
    </header>
  );
};
