import  React  from  'react' 
import { cn } from '../../helpers/cn' 



interface ButtonProps {
    value: string;
    onClick: () => void;
    disabled?: boolean;
    className?: string;
};

const  ButtonStyle: React.FC<ButtonProps> = ( ButtonProps ) => {
  return ( 
    <button className={cn(`"px-8 py-3 bg-primary-fixed w-37 text-surface-low rounded-[5px] cursor-pointer h-fit", ${ButtonProps.className}`)} onClick={ButtonProps.onClick} disabled={ButtonProps.disabled}> 
      {ButtonProps.value}
    </button> 
  ) 
} 

export  default  ButtonStyle