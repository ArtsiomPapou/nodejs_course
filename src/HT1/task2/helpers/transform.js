export default function(chunk, encoding, callback) {
  const obj = JSON.parse(chunk.toString());
  delete obj['Amount'];
  const keyValArr = Object.entries(obj);
  const result = Object.fromEntries(keyValArr.reduce((acc, item) => {
    const [key, val] = item;
    acc.push([key.toLowerCase(), val]);
    return acc;
  }, []));
  callback(null, JSON.stringify(result)+'\r\n');
}