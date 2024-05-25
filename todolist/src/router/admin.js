const admin = [
    {
        path: '/admin',
        component: () => import('../layouts/Admin.vue'),
        children:[
            {
                path:"users",
                name:"admin-users",
                component:()=>import('../pages/admin/user/index.vue')
            }
        ]
    }
]
export default admin