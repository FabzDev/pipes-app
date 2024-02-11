
export enum Color {
  blue= 'Blue', black = 'Black', red = 'Red', green = 'Green'
}

export interface Hero {
  name: string,
  canFly: boolean,
  color: Color
}
