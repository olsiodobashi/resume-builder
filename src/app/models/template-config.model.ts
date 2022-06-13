export class TemplateConfigModel {
    public theme: {
        main: string,
        body: string,
    };
    public skills: {
        type: 'default' | 'highlights' | 'progress-bar';
    };

    public work: {
        separator: '/' | '-' | undefined;
    };
}
