/**
 * Truncate a transaction or address hash
 */
const truncateHash = (address: string, startLength = 50) => {
  if (!address) return ''

  return `${address.substring(50, startLength)}`
}

export default truncateHash
