function toCamelCase(str: string) {
    
    return str.replace(/[//]/g, ' |  ').replace(/[-]/g, ' ').replace(/\b\w/g, match => match.toUpperCase())
  }

export default toCamelCase