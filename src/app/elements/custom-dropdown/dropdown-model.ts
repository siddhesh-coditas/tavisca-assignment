export class CustomOptionModel {
  public label: string;
  public value: string;
  public callback? = () => {
    console.log('null');
  };
}

export enum DropdownSides {
  TOP,
  BOTTOM,
  LEFT,
  RIGHT,
  TOP_RIGHT,
  TOP_LEFT,
  BOTTOM_LEFT,
  BOTTOM_RIGHT,
}

export function getDropdownSideClass(side: DropdownSides) {
  switch (side) {
    case DropdownSides.TOP: return 'top';
    case DropdownSides.BOTTOM: return 'botom';
    case DropdownSides.LEFT: return 'left';
    case DropdownSides.RIGHT: return 'right';
    case DropdownSides.TOP_LEFT: return 'top left';
    case DropdownSides.TOP_RIGHT: return 'top right';
    case DropdownSides.BOTTOM_LEFT: return 'bottom left';
    case DropdownSides.BOTTOM_RIGHT: return 'bottom right';
    default: return 'top';
  }
}
