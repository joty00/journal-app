export default {

    name: 'daybook',
    component: () => import('@/modules/daybook/layauts/DayBookLayaut.vue'),
    children: [
        {
            path: '',
            name: 'no-entry',
            component: () => import('@/modules/daybook/views/NoEntrySelected.vue')
        },
        {
            path: ':id',
            name: 'entry',
            component: () => import('@/modules/daybook/views/EntryViews.vue'),
            props: (route) => {
                return {
                    id: route.params.id
                }
            }
        }
    ]
}