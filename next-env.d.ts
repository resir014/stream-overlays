/// <reference types="next" />
/// <reference types="next/types/global" />

// CSS Modules
declare module '*.css' {
  interface ClassNames {
    [className: string]: string
  }
  const classNames: ClassNames
  export default classNames
}

// CSS Modules (.scss)
declare module '*.scss' {
  interface ClassNames {
    [className: string]: string
  }
  const classNames: ClassNames
  export default classNames
}
