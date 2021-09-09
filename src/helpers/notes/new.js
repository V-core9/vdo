const newPost = require('../post_handle/new');

const newNote = ( title = null , description = null , ref_url = "#", shortDescription = null , content = null ) => {
  return newPost({title: title, description: description, ref_url: ref_url, shortDescription: shortDescription, content: content});
};

module.exports = newNote;
