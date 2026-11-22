const config = require('./config.json');
console.log(`CampusNotes Version Engine v${config.version}`);

function listNotes() {
  return ['Lecture 1', 'Lab 2: VCS Workflow'];
}

module.exports = { listNotes };
