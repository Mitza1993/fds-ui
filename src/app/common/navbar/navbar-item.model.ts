export interface NavbarItem {
  id: number,
  name: string,
  selected: boolean,
  subItems?: Array<any>,
  icon?: string
}
