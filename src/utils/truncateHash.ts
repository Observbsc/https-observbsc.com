/**
 * Truncate a transaction or address hash
 */
 const truncateHash = (address: string, startLength = 50, endLength = 0) => {
  if (!address) return ''

  return `${address.substring(0, startLength)}${address.substring(address.length - endLength)}`
}

export default truncateHash
