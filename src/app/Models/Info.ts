export class Info {
    
    constructor(private title: string = 'Default Title', private content: string = 'Default Content') {
        this.title = title;
        this.content = content;
    }

    getTitle() {
        return this.title
    }

    getContent() {
        return this.content
    }

    setTitle(title: string) {
        this.title = title
    }

    setContent(content: string) {
        this.content = content;
    }
}