import * as crypto from 'crypto';

function generateRandomString(length: number): string {
  const bytes = crypto.randomBytes(Math.ceil(length * 3 / 4));
  return bytes.toString('base64').slice(0, length);
}
export default generateRandomString;