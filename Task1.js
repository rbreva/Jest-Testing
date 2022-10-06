function stringLength(string) {
  if (string.length < 10 && string.length > 0) {
    return string.length;
  } else {
    return 'error';
  }
}

module.exports = stringLength;