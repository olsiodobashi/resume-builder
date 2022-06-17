import { ClassicOneComponent } from "./classic-one/classic-one.component";
import { ClassicThreeComponent } from "./classic-three/classic-three.component";
import { ClassicTwoComponent } from "./classic-two/classic-two.component";

export const TEMPLATE_LIST = [
    {
        id: 'classic-one',
        component: ClassicOneComponent,
        name: 'Classic One',
        format: 'classic',
        thumbnail: '/assets/resumes/classic-one.png'
    },
    {
        id: 'classic-two',
        component: ClassicTwoComponent,
        name: 'Classic Two',
        format: 'classic',
        thumbnail: '/assets/resumes/classic-two.png'
    },
    { // TODO Rename to "Modern One"
        id: 'classic-three',
        component: ClassicThreeComponent,
        name: 'Classic Three',
        format: 'classic',
        thumbnail: '/assets/resumes/modern-1.png'
    }
];
