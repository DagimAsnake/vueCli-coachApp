import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'

export default {
    namespaced: true,
    state() {
        return {
            coaches: [
                {
                    id: 'c1',
                    firstName: 'Dagim',
                    lastName: 'Asnake',
                    areas: ['frontend', 'backend', 'mobile'],
                    description:
                        "I'm Dagim and I've worked as a fullstack developer for years. Let me help you become a developer as well!",
                    hourlyRate: 30
                },
                {
                    id: 'c2',
                    firstName: 'Abel',
                    lastName: 'Yonas',
                    areas: ['frontend', 'mobile'],
                    description:
                        'I am Abel and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
                    hourlyRate: 30
                }
            ]
        }
    },
    mutations,
    actions,
    getters
}