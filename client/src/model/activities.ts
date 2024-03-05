import activities from '@/data/activities.json';

export interface Activity {
    "title": string;
    "date": string;
    "duration_minutes": number;
    "location": string;
    "activity_type": string;
    "distance_miles": number;
}

export function getActivity(): Activity[] {
    return activities.items;
}