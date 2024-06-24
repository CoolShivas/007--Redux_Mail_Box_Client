// const cleanEmail = data.email.replace(/[@.]/g, "");
// console.log(cleanEmail);

export function formatEmail(email) {
  return email.replace(/[@.]/g, "");
}
