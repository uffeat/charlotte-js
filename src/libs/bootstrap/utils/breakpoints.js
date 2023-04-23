breakpoints = {
  // Less than `sm` (i.e., "xs") has index 0
  'sm': 576,  // index 1
  'md': 768,  // index 2
  'lg': 992,  // index 3
  'xl': 1200,  // index 4
  'xxl': 1400,  // index 5
}



/** Returns index for current breakpoint band. */
function get_index(width) {
  if (!width) {
    width = document.documentElement.clientWidth;
  }
  for (let i = Object.values(breakpoints).length - 1; i >= 0; i--) {
    const value = Object.values(breakpoints)[i];
    if (width >= value) {
      return Object.keys(breakpoints).length - i;
    }
  }
  return 0;
}