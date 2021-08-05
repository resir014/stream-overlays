export default function sleep(ms = 0) {
  return new Promise(r => setTimeout(r, ms));
}
