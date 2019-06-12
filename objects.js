var playlist = {
  artistbob: "Bob Song",
  artistjoe: "Joe Song",
  artistsam: "Sam Song"
};

function updatePlaylist(playlist, name, title) {
  playlist[name] = title ;
  return playlist ;
}
function removeFromPlaylist(list, name) {
  delete list.name;
  return list;
}