function parseAndDisplayName(fullName) {
  const spacePos = fullName.indexOf(' ');
  const firstName = fullName.substring(0, spacePos);
  const lastName = fullName.substring(spacePos + 1);

  console.log(`Full Name: ${fullName}`);
  console.log(`First name: ${firstName}`);
  console.log(`Last Name: ${lastName}`);
}

const carlos = 'Carlos Guardado';
const nathan = 'Nathan Cole';

parseAndDisplayName('Ben Wilhelm');
console.log('--');
parseAndDisplayName(carlos);
console.log('--');
parseAndDisplayName(nathan);
