export class ResumeModel {
    public name: string;
    public summary: string;
    public jobTitle: string;
    public birthday: Date;
    public phoneNumber: string;
    public location: string;
    public email: string;
    public profilePic: string;

    public education: EducationEntry[];
    public work: WorkExperience[];
    public skills: Skills[];
    public certifications: Certifications[];
    public socialLinks: SocialLink[];
    public hobbies: Hobby[];
}

export class EducationEntry {
    institutionName: string;
    duration: {
        from: number;
        to: number;
    };
    degree: 'Bachelor' | 'Masters';
}

export class WorkExperience {
    company: {
        name: string;
        address?: string;
        phoneNumber?: string;
        reference?: string;
    };
    position: string;
    duration: {
        from: number;
        to: 'current' | number;
    };
    description: string;
}

export class Skills {
    name: string;
    value: number;
}

export class Certifications {
    name: string;
    acquired: number;
}

export class Hobby {
    title: string;
    description: string;
}

export class SocialLink {
    title: string;
    url: string;
}
