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
    <button className={cn("bg-primary-fixed px-8 py-3 text-surface-low rounded-[5px] cursor-pointer h-fit w-auto", `${ButtonProps.className}`)} onClick={ButtonProps.onClick} disabled={ButtonProps.disabled}> 
      {ButtonProps.value}
    </button> 
  ) 
} 

export  default  ButtonStyle