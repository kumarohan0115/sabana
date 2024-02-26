let permissionList = [];

const loadPermissionListFromLocalStorage = () => {
  const storedPermissionList = localStorage.getItem("permissionList");
  return storedPermissionList ? JSON.parse(storedPermissionList) : [];
};

export const hasPermission = (val: string) => {

  permissionList = loadPermissionListFromLocalStorage();
  const currentPermissionList = permissionList;
  if (!permissionList.length || JSON.stringify(permissionList) !== JSON.stringify(currentPermissionList)) {
    permissionList = [ ...currentPermissionList];
  }

  return !!permissionList.includes(val);
};
