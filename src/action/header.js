// Action to open the Menu in the mobile version
export const SHOW_SIDEBAR = 'SHOW_SIDEBAR';

export function showSidebar() {
  return {
    type: SHOW_SIDEBAR,
  };
}

export const HIDE_SIDEBAR = 'HIDE_SIDEBAR';

export function hideSidebar() {
  return {
    type: HIDE_SIDEBAR,
  };
}
