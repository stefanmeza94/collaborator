import {
    faClock,
    faIdCard,
    faUsers,
    faProjectDiagram,
    faChartLine,
    faStreetView,
} from '@fortawesome/free-solid-svg-icons';

const sidebarData = [
    {
        id: 1,
        icon: faStreetView,
        label: 'overview',
        role: 'all',
    },
    {
        id: 2,
        icon: faIdCard,
        label: 'profile',
        role: 'user',
    },
    {
        id: 3,
        icon: faClock,
        label: 'timesheet',
        role: 'user',
    },
    {
        id: 4,
        icon: faUsers,
        label: 'people',
        role: 'admin',
    },
    {
        id: 5,
        icon: faProjectDiagram,
        label: 'projects',
        role: 'admin',
    },
    {
        id: 6,
        icon: faChartLine,
        label: 'stats',
        role: 'admin',
    },
];

export default sidebarData;
