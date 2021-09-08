
import state from './state.js';

import * as actions from './actions.js';
import * as getters from './getters.js';
import * as mutations from './mutations';

const journalModule = {
    namespaced: true,
    actions,
    getters,
    mutations,
    state,
}


export default journalModule; 