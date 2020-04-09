// TODO why are these function
function makeProjectsArray() {
  return [
    {
      id: 1,
      date_created: '2029-01-22T16:28:32.615Z',
      project_name: 'Learn django',
      client_id: 'abc',
      user_id: 1,
    },
    {
      id: 2,
      date_created: '2100-05-22T16:28:32.615Z',
      project_name: 'Build SMTP API',
      client_id: 'xyz',
      user_id: 1,
    },
    {
      id: 3,
      date_created: '1919-12-22T16:28:32.615Z',
      project_name: 'Migrate time tracker typescript',
      client_id: null,
      user_id: 2,
    },
  ];
}

function makeMaliciousProject() {
  const maliciousProject = {
    id: 911,
    client_id: 'How-to',
    date_created: new Date().toISOString(),
    project_name: 'Naughty naughty very naughty <script>alert("xss");</script>',
    user_id: `Bad image <img src="https://url.to.file.which/does-not.exist" onerror="alert(document.cookie);">. But not <strong>all</strong> bad.`
  }
  const expectedProject = {
    ...maliciousProject,
    project_name: 'Naughty naughty very naughty &lt;script&gt;alert(\"xss\");&lt;/script&gt;',
    user_id: `Bad image <img src="https://url.to.file.which/does-not.exist">. But not <strong>all</strong> bad.`
  }
  return {
    maliciousProject,
    expectedProject,
  }
}

module.exports = {
  makeProjectsArray,
  makeMaliciousProject,
}
