export const authenticationsRoutes = [{
    path: PATHS.USERS,
    element: <UserPage />,
    layout: AdminLayout,
    roles: [ROLES.ADMIN],
    permissions: [PERMISSIONS.USER_VIEW],
    menu: true,
}];