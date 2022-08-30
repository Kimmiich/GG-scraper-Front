export interface MenuProps {
  active?: boolean;
  setNavActive?: any;
  activeIdx?: number;
  setActiveIdx?: any;
}

export interface MenuItemProps {
  text: string;
  href: string;
  icon?: any;
  setActiveIdx?: any;
  active?: any;
}
