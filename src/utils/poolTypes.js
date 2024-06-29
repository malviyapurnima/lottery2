export function setPoolTypes(type) {
    if (type == null || type == undefined || type == '') {
        return null;
    }

    switch(type) {
        case 'running_pool':
            return 'Running Pool';

        case 'upcoming_pool':
            return 'Upcoming Pool';

        case 'completed_pool':
            return 'Completed Pool';

        default:
            return null;
    }
};