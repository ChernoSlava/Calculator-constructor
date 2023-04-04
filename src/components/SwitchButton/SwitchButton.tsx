import { SVGProps, useState } from "react";
import { SwitchButtonStyled, SwitchButtonItem, SwitchButtonItemText } from './styled';

import { PreviewIcon, ConstructorIcon } from './images';

const icons: {
    [key in string]: React.FC<SVGProps<SVGSVGElement>>;
  } = {
    preview: PreviewIcon,
    ctor: ConstructorIcon,
  };

export const SwitchButton: React.FC<{
  items: Array<{
    id: string;
    title: string;
    icon: string;
  }>
}> = ({ items }) => {
  const [currentButton, setCurrentButton] = useState(items.at(0)?.id);

  return(
    <SwitchButtonStyled>
      {
        items.map(x => {
          const Icon = icons[x.icon];
          return (
            <SwitchButtonItem
              onClick={() => setCurrentButton(x.id)}
              key={x.id}
              isActive={currentButton === x.id}>
                <Icon />
                <SwitchButtonItemText>{x.title}</SwitchButtonItemText>
            </SwitchButtonItem>
          );
        })
      }
    </SwitchButtonStyled>
  );
}
