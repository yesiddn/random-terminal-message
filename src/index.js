const messages = [
  'This is where it all begins...',
  'Commit committed',
  'Version control is awful',
  'COMMIT ALL THE FILES!',
  'The same thing we do every night, Pinky - try to take over the world!',
  'Lock S-foils in attack position',
  'This commit is a lie',
  "I'll explain when you're older!",
  'Here be Dragons',
  'Reinventing the wheel. Again.',
  'This is not the commit message you are looking for',
  'Batman! (this commit has no parents)',
  'Merge conflict resolution complete',
  'Code review comments addressed',
  'Refactoring for better performance',
  'Testing... Testing... 123',
  'Added missing semicolon',
  'Code is now 100% bug-free',
  'Refactored code for readability',
  'Documentation updated',
  'Fixing typos in comments',
  'Feature XYZ implemented',
  'Squashed some bugs',
  'Code cleanup in progress',
  'Optimizing database queries',
  'Adding new unit tests',
  'Ready for deployment',
];

const funnyCommit = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  console.log(`\x1b[34m${message}\x1b[89m`);
};

module.exports = {
  funnyCommit,
};
