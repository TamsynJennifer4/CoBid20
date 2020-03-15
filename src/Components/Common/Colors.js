const colors = {
  // greyscale (light to dark)
  white: 'rgba(255, 255, 255, 1)',
  offWhite: 'rgba(248, 246, 244, 1)',
  lightGrey: 'rgba(216, 216, 216, 1)',
  midGrey: 'rgba(158, 154, 150, 1)',
  darkGrey: 'rgba(67, 64, 61, 1)',
  black: 'rgba(16, 8, 4, 1)',

  // Cobid20 Colors
  pink: 'rgba(255, 48, 118, 1)',
  orange: 'rgba(251, 98, 74, 1)',
  red: 'rgba(251, 226, 23, 1)',
  blue: 'rgba(132, 177, 205, 1)',
  green: 'rgba(132, 177, 205, 1)',

  colorWithAlpha(name = 'pink', opacity = 1) {
    if (!colors[name]) {
      name = 'pink';
    }
    return colors[name].split(', 1)').join(`, ${opacity})`);
  },
};

export { colors }; 